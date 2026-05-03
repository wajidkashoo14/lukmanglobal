import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FloatingWhatsApp, MobileBottomBar } from '@/components/WaButton';
import { motion, AnimatePresence } from 'motion/react';
import { useEffect } from 'react';

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col font-sans antialiased text-slate-900 bg-white overflow-x-hidden">
      <Navbar />
      {/*
        pb-[60px] on mobile leaves room above the sticky bottom bar.
        On notched phones an extra safe-area is handled in CSS.
      */}
      <main className="flex-grow pb-[60px] md:pb-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      {/* Desktop floating WhatsApp bubble */}
      <FloatingWhatsApp />
      {/* Mobile sticky bottom bar: "Need Assistance?" | WhatsApp Chat */}
      <MobileBottomBar />
    </div>
  );
}
