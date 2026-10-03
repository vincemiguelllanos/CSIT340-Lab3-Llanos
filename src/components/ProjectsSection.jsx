import React from 'react';
import SectionHeading from './SectionHeading';
import ProjectCard from './ProjectCard';

const projects = [
  {
    year: '2026',
    title: 'About Me in React',
    description: 'My first React project, rebuilt from a plain HTML page.',
    tech: 'React · Tailwind CSS',
    link: 'https://github.com/vincemiguelllanos',
  },
  {
    year: '2025',
    title: 'Git Box Office',
    description: 'A documentation in our Information Management 2.',
    tech: 'JavaScript',
    link: 'https://github.com/vincemiguelllanos/git-boxoffice-sync-llanos-vincemiguel.git',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Projects" subtitle="Things I have built." />
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            year={project.year}
            title={project.title}
            description={project.description}
            tech={project.tech}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
}