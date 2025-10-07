import { Routes, Route } from 'react-router-dom';
import LandingPage19 from '@/pages/landing-page-19';
import AboutPage05 from '@/pages/about-page-05';
import FAQPage05 from '@/pages/faq-page-05';
import ContactPage03 from '@/pages/contact-page-03';
import { ScrollToTop } from '@/components/ScrollToTop';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage19 />} />
        <Route path="/about" element={<AboutPage05 />} />
        <Route path="/faq" element={<FAQPage05 />} />
        <Route path="/contact" element={<ContactPage03 />} />
      </Routes>
    </>
  );
}

export default App;
