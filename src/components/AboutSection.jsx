import React from 'react';
import SectionHeading from './SectionHeading';
import Fact from './Fact';

const aboutDetails = [
  { label: 'Course', value: 'BS Information Technology' },
  { label: 'Year level', value: 'Third year' },
  { label: 'School', value: 'CIT-U' },
  { label: 'Based in', value: 'Sibonga, Cebu' },
];

export default function AboutSection() {
  return (
    <section id="about" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="About" subtitle="A little about who I am." />
      <p className="mt-6 max-w-2xl leading-relaxed text-stone-700">
        I grew up in Sibonga, Cebu. I picked IT because I wanted to build things people actually use.
        So far my favorite part is the moment something finally runs.
      </p>
      <dl className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
        {aboutDetails.map((item) => (
          <Fact key={item.label} label={item.label} value={item.value} />
        ))}
      </dl>
    </section>
  );
}