import { Routes, Route } from 'react-router-dom';
import LandingPage19 from '@/pages/landing-page-19';
import AboutPage05 from '@/pages/about-page-05';
import { ThemeToggle } from '@/components/theme-toggle';

function App() {
  return (
    <>
      <ThemeToggle />
      <Routes>
        <Route path="/" element={<LandingPage19 />} />
        <Route path="/about" element={<AboutPage05 />} />
      </Routes>
    </>
  );
}

export default App;
