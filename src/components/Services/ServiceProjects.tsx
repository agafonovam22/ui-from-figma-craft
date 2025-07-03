import React from 'react';

interface Project {
  id: number;
  title: string;
  subtitle: string;
  buttonText: string;
  image: string;
  isSpecial?: boolean;
}

interface ServiceProjectsProps {
  projects: Project[];
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 group hover:shadow-md transition-shadow">
    <div className="aspect-[4/3] overflow-hidden relative">
      <img 
        src={project.image} 
        alt={project.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-4">
        <h3 className="text-white font-bold text-lg mb-1">{project.title}</h3>
        <p className="text-white/90 text-sm mb-3">{project.subtitle}</p>
        
        {project.isSpecial ? (
          <button className="bg-white text-gray-900 px-4 py-2 rounded font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2 w-fit">
            {project.buttonText}
          </button>
        ) : (
          <button className="bg-brand-red text-white px-4 py-2 rounded font-semibold hover:bg-brand-red-hover transition-colors w-fit">
            {project.buttonText}
          </button>
        )}
      </div>
    </div>
  </div>
);

const ServiceProjects: React.FC<ServiceProjectsProps> = ({ projects }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Наши проекты</h2>
      
      <div className="mb-8">
        {/* First row - 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {projects.slice(0, 3).map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        {/* Second row - 2 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {projects.slice(3, 5).map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        {/* Third row - 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {projects.slice(5, 8).map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        {/* Fourth row - 2 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.slice(8, 10).map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      {/* Show More Button */}
      <div className="flex justify-center">
        <button className="px-6 py-3 border border-brand-red text-brand-red rounded-lg font-semibold hover:bg-brand-red hover:text-white transition-colors">
          Показать еще
        </button>
      </div>
    </div>
  );
};

export default ServiceProjects;