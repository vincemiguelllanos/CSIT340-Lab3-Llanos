import React from 'react';
import NavLink from './NavLink';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-10 border-b border-stone-200 bg-white">
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-semibold">
          Vince Miguel Llanos
        </a>
        <div className="flex gap-6 text-sm text-stone-600">
          {navLinks.map((link) => (
            <NavLink key={link.label} href={link.href} label={link.label} />
          ))}
        </div>
      </div>
    </nav>
  );
}