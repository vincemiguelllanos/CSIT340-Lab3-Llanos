import React from 'react';
import SectionHeading from './SectionHeading';
import ContactLink from './ContactLink';

const contactLinks = [
  { label: 'Email', href: 'mailto:vincemiguel2005@gmail.com', text: 'vincemiguel2005@gmail.com' },
  { label: 'GitHub', href: 'https://github.com/vincemiguelllanos', text: 'github.com/vincemiguelllanos' },
  { label: 'Facebook', href: 'https://www.facebook.com/share/1E5sayuExM/?mibextid=wwXIfr', text: 'facebook.com/vincemiguel' },
];

export default function ContactSection() {
  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Contact" subtitle="Say hi." />
      <ul className="mt-8 space-y-3">
        {contactLinks.map((item) => (
          <ContactLink key={item.label} label={item.label} href={item.href} text={item.text} />
        ))}
      </ul>
    </section>
  );
}