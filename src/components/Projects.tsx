const projects = [
  {
    title: 'PriceWatch',
    description: 'A web application that tracks product prices from different e-commerce websites and alerts users if price drops to the targeted price.',
    link: 'https://github.com/kbrakesh26?tab=repositories',
  },
  {
    title: 'TARANG',
    description: 'A disaster resilient Progresive Web App (PWA)- built to enable emergency communication without the internet during critical situations like floods, earthquakes or power outages.',
    link: 'https://github
    description: 'A disaster resilient Progresive Web App (PWA)- built to enable emergency communication without the internet during critical situations like floods, earthquakes or power outages.',
    link: 'https://github.com/CodeBytes0101/Tarang',
  },
  {
    title: 'Skill Journal',
    description: 'A mini web app develoed using frontend technologies, where user can log and view the skills they are learning, track progress, search filters, update and delete skills.',
    link: 'https://github.com/kbrakesh26/Skill-Journal',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center underline underline-offset-8 decoration-blue-500">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow border border-blue-100 scale-100 hover:scale-105 duration-200 p-6 flex flex-col justify-between">
              <h3 className="text-xl font-bold mb-2 text-blue-800 underline underline-offset-4 decoration-blue-400">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <a href={project.link} className="inline-block mt-auto px-4 py-2 bg-blue-500 text-white rounded-md font-semibold shadow hover:bg-blue-600 transition-colors" target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
