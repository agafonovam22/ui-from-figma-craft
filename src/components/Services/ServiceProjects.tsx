import React from 'react';
import { ArrowRight } from 'lucide-react';

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
  <div className="relative rounded-lg overflow-hidden group cursor-pointer">
    <div className="h-[300px] relative">
      <img 
        src={project.image} 
        alt={project.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      {/* Content overlay */}
      <div className="absolute inset-0 p-6 text-white">
        <div className="absolute bottom-6 left-6 right-6 transition-transform duration-300 group-hover:-translate-y-12">
          <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: 'Benzin-Medium' }}>{project.title}</h3>
          <div className="inline-block bg-[#F53B49] px-4 py-2 rounded-full" style={{ fontFamily: 'Benzin-Medium', fontSize: '16px' }}>
            {project.subtitle}
          </div>
        </div>
        
        <div className="absolute bottom-6 left-6 right-6">
          <div className="flex justify-start">
            <button className="bg-white text-black px-6 py-2 rounded text-sm font-medium hover:bg-gray-100 transition-all flex items-center gap-2 opacity-0 group-hover:opacity-100">
              {project.buttonText}
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ServiceProjects: React.FC<ServiceProjectsProps> = ({ projects }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Наши проекты</h2>
      
      <div className="space-y-[10px] mb-8">
        {/* Первый ряд - 3 карточки */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[10px]">
          {projects.slice(0, 3).map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        {/* Второй ряд - 2 карточки */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px]">
          {projects.slice(3, 5).map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        {/* Третий ряд - 3 карточки */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[10px]">
          {projects.slice(5, 8).map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        {/* Четвертый ряд - 2 карточки */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px]">
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