import { Link, NavLink } from 'react-router-dom';
import { Menu, Phone, X, Globe, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Specialties', path: '/specialties' },
    { name: 'Hospitals', path: '/hospitals' },
    { name: 'Success Stories', path: '/success-stories' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-10">
        <div className="flex items-center gap-10">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 4v16m8-8H4"/></svg>
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-800">LUKMAN<span className="text-blue-600">GLOBAL</span></span>
          </Link>

          <div className="hidden md:flex md:items-center md:gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-blue-600 ${
                    isActive ? 'text-blue-600 font-semibold' : 'text-slate-500'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 lg:flex">
            <Phone className="h-4 w-4 text-blue-600" />
            <span>+91-1234567890</span>
          </div>
          <Button asChild className="hidden sm:inline-flex bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full px-6 py-2.5 shadow-sm shadow-blue-200 transition-all">
            <Link to="/contact">Get Free Quote</Link>
          </Button>
          <button
            className="rounded-md p-2 text-slate-600 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute left-0 right-0 top-16 border-b bg-white p-4 md:hidden"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between text-base font-medium transition-colors hover:text-blue-600 ${
                      isActive ? 'text-blue-600' : 'text-slate-600'
                    }`
                  }
                >
                  {link.name}
                  <ChevronRight className="h-4 w-4" />
                </NavLink>
              ))}
              <div className="pt-4 border-t">
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                  <Link to="/contact">Get Free Quote</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
