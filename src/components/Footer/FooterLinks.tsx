import React from 'react';
import { Link } from 'react-router-dom';

export function FooterLinks() {
  const links = [
    { label: 'About', href: '/about' },
    { label: 'Our Team', href: '/team' },
    { label: 'Blogs', href: '/blog' },
    { label: 'Gallery', href: '/' },
    { label: 'FAQ', href: '/' },
  ];

  return (
    <ul className="space-y-2">
      {links.map((link) => (
        <li key={link.href}>
          <Link to={link.href} className="text-gray-400 hover:text-white transition-colors">
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}