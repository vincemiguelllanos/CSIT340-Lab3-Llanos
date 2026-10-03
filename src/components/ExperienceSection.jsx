import React from 'react';
import SectionHeading from './SectionHeading';
import TimelineItem from './TimelineItem';

const experiences = [
  {
    period: '2024 – Present',
    role: 'BS Information Technology',
    organization: 'Cebu Institute of Technology – University',
    details: 'A dedicated IT student continuously learning and growing every day through web development, databases, and systems analysis.',
  },
  {
    period: '2022 – 2024',
    role: 'Student Council Member',
    organization: 'Automotive',
    details: 'On the job training for 320 hours in a well known car shop in Carcar City.',
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Experience" subtitle="Where I have learned and worked." />
      <ol className="mt-8 space-y-8 border-l border-stone-200">
        {experiences.map((exp) => (
          <TimelineItem
            key={exp.role}
            period={exp.period}
            title={exp.role}
            place={exp.organization}
            description={exp.details}
          />
        ))}
      </ol>
    </section>
  );
}