'use client';

import Image from 'next/image';
import Link from 'next/link';
import aravindLogo from '../assets/images/horizontal-logo.png';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState<string | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      setActiveLink(window.location.hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const navLinks = [
    { id: 1, link: 'Home', href: '#home' },
    { id: 2, link: 'Services', href: '#service' },
    { id: 3, link: 'Our Project', href: '#project' },
    { id: 4, link: 'About us', href: '#about' },
  ];

  return (
    <div className="pf_section !py-0">
      <div className="pf_container">
        <div className="pf_wrapper py-3 px-2 border border-white flex items-center justify-between">
          <div className="w-[140px] h-[80px]">
            <Link
              href="/"
              className="w-full h-full flex items-center justify-center overflow-hidden"
            >
              <Image
                className="w-full h-full object-contain object-center scale-[1.4]"
                src={aravindLogo}
                alt="aravind_logo"
                loading="eager"
                priority
              />
            </Link>
          </div>
          <div className="pf_nav_links_ctn flex items-center justify-between gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className={activeLink === link.href ? 'text-[#5454d4]' : ''}
                onClick={() => setActiveLink(link.href)}
              >
                {link.link}
              </Link>
            ))}
          </div>
          <div>
            <button
              type="button"
              className="border border-white rounded-md bg-none py-3 px-8"
            >
              Contact us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
