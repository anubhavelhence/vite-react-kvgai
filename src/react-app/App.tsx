import { Routes, Route } from 'react-router-dom';
import LandingPage19 from '@/pages/landing-page-19';
import AboutPage05 from '@/pages/about-page-05';
import FAQPage05 from '@/pages/faq-page-05';
import ContactPage03 from '@/pages/contact-page-03';
import PrivacyPolicyPage from '@/pages/privacy-policy';
import TermsConditionsPage from '@/pages/terms-conditions';
import AccountDeletionPolicyPage from '@/pages/account-deletion-policy';
import PrivacyPolicy1Page from '@/pages/privacy-policy-1';
import TermsConditions1Page from '@/pages/terms-conditions-1';
import AccountDeletionPolicy1Page from '@/pages/account-deletion-policy-1';
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
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-conditions" element={<TermsConditionsPage />} />
        <Route path="/account-deletion-policy" element={<AccountDeletionPolicyPage />} />
        <Route path="/privacy-policy-1" element={<PrivacyPolicy1Page />} />
        <Route path="/terms-conditions-1" element={<TermsConditions1Page />} />
        <Route path="/account-deletion-policy-1" element={<AccountDeletionPolicy1Page />} />
      </Routes>
    </>
  );
}

export default App;
