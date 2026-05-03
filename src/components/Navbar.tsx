import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { waURL, WaIcon } from './WaButton';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { name: 'Specialities', path: '/specialties' },
    { name: 'Hospitals',    path: '/hospitals' },
    { name: 'Stories',      path: '/success-stories' },
    { name: 'Contact',      path: '/contact' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-[#fdf9f4]/95 backdrop-blur-md shadow-sm border-b border-[#e8e2da]'
        : 'bg-[#fdf9f4] border-b border-[#ede9e3]'
    }`}>
      <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-10">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 shrink-0 group">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
               style={{background:'#1e5538'}}>
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4"/>
            </svg>
          </div>
          <div className="leading-none">
            <div className="font-serif text-[17px] tracking-tight" style={{color:'#0f2a1e'}}>
              Lukman<span style={{color:'#286847'}}>Global</span>
            </div>
            <div className="text-[9px] font-medium uppercase tracking-[0.18em]" style={{color:'#787168'}}>
              Medical Excellence
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map(l => (
            <NavLink key={l.name} to={l.path}
              className={({isActive}) =>
                `text-[13px] font-medium px-4 py-2 rounded-lg transition-all ${
                  isActive
                    ? 'text-[#1e5538] bg-[#edfaf3]'
                    : 'text-[#44403a] hover:text-[#1e5538] hover:bg-[#f5faf7]'
                }`
              }>{l.name}</NavLink>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-3">
          <a href={waURL('Hi, I need expert medical guidance.')} target="_blank" rel="noopener noreferrer"
             className="flex items-center gap-2 text-[13px] font-semibold text-white px-4 py-2.5 rounded-full transition-all hover:brightness-110"
             style={{background:'#25d366',boxShadow:'0 2px 10px rgba(37,211,102,.3)'}}>
            <WaIcon size="sm"/> WhatsApp
          </a>
          <Link to="/contact"
            className="text-[13px] font-semibold text-white px-5 py-2.5 rounded-full transition-all hover:brightness-110"
            style={{background:'#1e5538',boxShadow:'0 2px 12px rgba(30,85,56,.25)'}}>
            Free Consultation
          </Link>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)}
          className="md:hidden p-2.5 rounded-xl border transition-all"
          style={{borderColor:'#d8d2cb',color:'#44403a'}}
          aria-label="Menu">
          {open ? <X className="h-5 w-5"/> : <Menu className="h-5 w-5"/>}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div initial={{opacity:0,y:-8}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-8}}
            className="absolute left-0 right-0 top-[68px] border-b shadow-xl bg-[#fdf9f4] p-4 md:hidden z-50"
            style={{borderColor:'#e8e2da'}}>
            <div className="flex flex-col gap-1 mb-4">
              <NavLink to="/" onClick={()=>setOpen(false)}
                className={({isActive})=>
                  `px-4 py-3 rounded-xl text-[15px] font-medium transition-all ${isActive?'bg-[#edfaf3] text-[#1e5538]':'text-[#44403a] hover:bg-[#f5faf7]'}`}>
                Home
              </NavLink>
              {links.map(l => (
                <NavLink key={l.name} to={l.path} onClick={()=>setOpen(false)}
                  className={({isActive})=>
                    `px-4 py-3 rounded-xl text-[15px] font-medium transition-all ${isActive?'bg-[#edfaf3] text-[#1e5538]':'text-[#44403a] hover:bg-[#f5faf7]'}`}>
                  {l.name}
                </NavLink>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-3 pt-3 border-t" style={{borderColor:'#e8e2da'}}>
              <a href={waURL()} target="_blank" rel="noopener noreferrer"
                 className="flex items-center justify-center gap-2 py-3 rounded-2xl text-sm font-semibold text-white"
                 style={{background:'#25d366'}}>
                <WaIcon/> WhatsApp
              </a>
              <Link to="/contact" onClick={()=>setOpen(false)}
                className="flex items-center justify-center py-3 rounded-2xl text-sm font-semibold text-white"
                style={{background:'#1e5538'}}>
                Free Quote
              </Link>
            </div>
            <div className="flex items-center justify-center gap-2 mt-3 text-[12px]" style={{color:'#787168'}}>
              <Phone className="h-3 w-3"/>&nbsp;
              <a href="tel:+919876543210" style={{color:'#286847'}} className="font-semibold">+91-98765-43210</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
