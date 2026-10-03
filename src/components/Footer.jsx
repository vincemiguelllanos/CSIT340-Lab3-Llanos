import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-stone-200">
      <div className="max-w-4xl mx-auto px-6 py-8 text-sm text-stone-500">
        © {new Date().getFullYear()} Vince Miguel Llanos. Built with React and Tailwind CSS.
      </div>
    </footer>
  );
}