import { Hono } from "hono";
import { cors } from "hono/cors";

const app = new Hono<{ Bindings: Env & { RAZORPAY_KEY_ID: string; RAZORPAY_KEY_SECRET: string } }>();

app.use("/api/*", cors());

app.get("/api/", (c) => c.json({ name: "Cloudflare" }));

// Create Razorpay order
app.post("/api/bootcamp/create-order", async (c) => {
	const body = await c.req.json<{
		name: string;
		email: string;
		phone: string;
		college?: string;
	}>();

	if (!body.name || !body.email || !body.phone) {
		return c.json({ error: "Name, email, and phone are required" }, 400);
	}

	const keyId = c.env.RAZORPAY_KEY_ID;
	const keySecret = c.env.RAZORPAY_KEY_SECRET;

	const auth = btoa(`${keyId}:${keySecret}`);

	const orderRes = await fetch("https://api.razorpay.com/v1/orders", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Basic ${auth}`,
		},
		body: JSON.stringify({
			amount: 2000, // ₹20 in paise
			currency: "INR",
			receipt: `bootcamp_${Date.now()}`,
			notes: {
				name: body.name,
				email: body.email,
				phone: body.phone,
				college: body.college || "",
				event: "Next-Gen AI Protocols Bootcamp - 13 Feb, Room 6109 NAB, BITS Pilani",
			},
		}),
	});

	if (!orderRes.ok) {
		const errText = await orderRes.text();
		console.error("Razorpay order creation failed:", errText);
		return c.json({ error: "Failed to create order. Please try again." }, 500);
	}

	const orderData = (await orderRes.json()) as { id: string; amount: number; currency: string };

	return c.json({
		orderId: orderData.id,
		amount: orderData.amount,
		currency: orderData.currency,
	});
});

// Verify Razorpay payment
app.post("/api/bootcamp/verify-payment", async (c) => {
	const body = await c.req.json<{
		razorpay_order_id: string;
		razorpay_payment_id: string;
		razorpay_signature: string;
		name: string;
		email: string;
		phone: string;
		college?: string;
	}>();

	if (!body.razorpay_order_id || !body.razorpay_payment_id || !body.razorpay_signature) {
		return c.json({ error: "Missing payment details" }, 400);
	}

	const keySecret = c.env.RAZORPAY_KEY_SECRET;

	// Verify signature using HMAC SHA256
	const message = `${body.razorpay_order_id}|${body.razorpay_payment_id}`;
	const encoder = new TextEncoder();
	const key = await crypto.subtle.importKey(
		"raw",
		encoder.encode(keySecret),
		{ name: "HMAC", hash: "SHA-256" },
		false,
		["sign"]
	);
	const signatureBuffer = await crypto.subtle.sign("HMAC", key, encoder.encode(message));
	const expectedSignature = Array.from(new Uint8Array(signatureBuffer))
		.map((b) => b.toString(16).padStart(2, "0"))
		.join("");

	if (expectedSignature !== body.razorpay_signature) {
		console.error("Payment signature verification failed");
		return c.json({ error: "Payment verification failed" }, 400);
	}

	// Payment verified successfully
	console.log("Payment verified:", {
		orderId: body.razorpay_order_id,
		paymentId: body.razorpay_payment_id,
		name: body.name,
		email: body.email,
		phone: body.phone,
		college: body.college,
	});

	return c.json({
		success: true,
		message: "Payment verified successfully",
		paymentId: body.razorpay_payment_id,
		orderId: body.razorpay_order_id,
	});
});

export default app;
