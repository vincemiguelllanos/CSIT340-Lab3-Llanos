import React from 'react';
import SectionHeading from './SectionHeading';
import SkillTag from './SkillTag';

const skillCategories = [
  {
    category: 'Languages',
    items: ['HTML', 'CSS', 'JavaScript', 'Java', 'C'],
  },
  {
    category: 'Frameworks',
    items: ['React', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    category: 'Tools',
    items: ['Git', 'VS Code', 'MySQL', 'Figma'],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Skills" subtitle="What I work with." />
      <div className="mt-8 grid gap-8 sm:grid-cols-3">
        {skillCategories.map((cat) => (
          <div key={cat.category}>
            <h3 className="text-sm font-medium text-stone-500">{cat.category}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {cat.items.map((skill) => (
                <SkillTag key={skill} name={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}