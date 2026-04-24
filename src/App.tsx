import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from '@/layouts/Layout';
import Home from '@/pages/Home';
import Specialties from '@/pages/Specialties';
import Hospitals from '@/pages/Hospitals';
import Contact from '@/pages/Contact';
import SuccessStories from '@/pages/SuccessStories';

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="specialties" element={<Specialties />} />
            <Route path="hospitals" element={<Hospitals />} />
            <Route path="success-stories" element={<SuccessStories />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
