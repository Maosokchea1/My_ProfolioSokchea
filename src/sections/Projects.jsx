import React from 'react';
import TechIcon from '../components/TechIcon';
import dashboardImg from '../assets/icons/image.png';
import saleMovieImg from '../assets/Coming Soon/Sale_Moviec.png';
import websiteSchoolImg from '../assets/Already/School.png';
import SaleShopImg from '../assets/Already/Sale_Shop.png';

const Projects = ({ t, isDarkMode }) => {
  const defaultProjects = [
    {
      title: 'Coffice Phnom Penh',
      description:
        'A modern web platform for finding and exploring cafe and workspace options in Phnom Penh with telegram-bot integration.',
      imageUrl:
        'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&auto=format&fit=crop&q=60',
      tags: [
        { name: 'HTML', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
        { name: 'CSS', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
        { name: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
        { name: 'Telegram Bot', url: 'https://t.me/OfficeSensokPhnomPenhbot' },
      ],
      github: 'https://github.com/sokcheamoa/coffice-phnom-penh',
      live: 'https://coffice-phnom-penh.vercel.app/',
    },
    {
      title: 'E-Commerce Website',
      description:
        'A modern e-commerce platform built with React and Tailwind CSS, powered by FastAPI (Python) backend, featuring ABA Payway QR code checkout and instant Telegram Bot order notifications.',
      imageUrl: saleMovieImg,
      isComingSoon: true,
      tags: [
        { name: 'React', url: 'https://react.dev' },
        { name: 'Tailwind CSS', url: 'https://tailwindcss.com' },
        { name: 'FastAPI', url: 'https://fastapi.tiangolo.com/' },
        { name: 'Python', url: 'https://www.python.org' },
        { name: 'Telegram Bot', url: 'https://core.telegram.org/bots' },
      ],
      github: 'https://github.com/sokcheamoa/ecommerce-fastapi',
      live: '#',
    },
    {
      title: 'Dashboard Inventory',
      description:
        'A responsive inventory dashboard system powered by Laravel backend, featuring real-time data tracking and secure database operations.',
      imageUrl: dashboardImg,
      tags: [
        { name: 'Laravel', url: 'https://laravel.com' },
        { name: 'PHP', url: 'https://www.php.net' },
        { name: 'MySQL', url: 'https://www.mysql.com' },
        { name: 'Tailwind CSS', url: 'https://tailwindcss.com' },
      ],
      github: 'https://github.com/sokcheamoa/portfolio-dashboard',
      live: 'https://larave-inventory-2.onrender.com',
    },
    {
      title: 'Website School',
      description:
        'A comprehensive school management and educational platform built with React and Tailwind CSS, powered by a robust FastAPI backend.',
      notice:
        'Website school នេះកំពុងស្ថិតក្នុងការអភិវឌ្ឍន៍ (In Development) លើផ្នែក Backend & Full-stack។',
      imageUrl: websiteSchoolImg,
      tags: [
        { name: 'React', url: 'https://react.dev' },
        { name: 'Tailwind CSS', url: 'https://tailwindcss.com' },
        { name: 'FastAPI', url: 'https://fastapi.tiangolo.com/' },
        { name: 'Python', url: 'https://www.python.org' },
      ],
      github: 'https://github.com/sokcheamoa/website-school',
      live: 'https://websit-school-frontend-user.vercel.app/',
    },
    {
      title: 'Sale Shop',
      description:
        'A modern e-commerce shop platform built with React and Tailwind CSS on the frontend, powered by a robust Laravel REST API backend with MySQL database.',
      notice:
        'Sale Shop នេះកំពុងស្ថិតក្នុងការអភិវឌ្ឍន៍ (In Development) លើផ្នែក Backend API ជាមួយ Laravel។',
      imageUrl: SaleShopImg,
      tags: [
        { name: 'React', url: 'https://react.dev' },
        { name: 'Tailwind CSS', url: 'https://tailwindcss.com' },
        { name: 'Laravel', url: 'https://laravel.com' },
        { name: 'PHP', url: 'https://www.php.net' },
        { name: 'MySQL', url: 'https://www.mysql.com' },
      ],
      github: 'https://github.com/sokcheamoa/sale-shop',
      live: 'https://sale-shop-swart.vercel.app/',
    },
  ];

  const projectsList = t?.projects?.list || defaultProjects;

  return (
    <section
      id="projects"
      className={`py-20 border-t transition-colors duration-200 ${
        isDarkMode ? 'border-zinc-800/80 bg-[#0c0c0e] text-white' : 'border-zinc-100 bg-white text-zinc-900'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
            {t?.projects?.badge || 'Featured Work'}
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            {t?.projects?.title || 'Selected Projects'}
          </h2>
          <p className={`mt-2 text-sm sm:text-base ${isDarkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>
            {t?.projects?.subtitle || 'A selection of projects built with focus on clean code, performance, and user experience.'}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsList.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col justify-between rounded-xl overflow-hidden border transition-all duration-200 hover:border-primary/60 hover:shadow-lg hover:shadow-primary/5 ${
                isDarkMode
                  ? 'bg-zinc-900/50 border-zinc-800'
                  : 'bg-white border-zinc-200 shadow-xs'
              }`}
            >
              <div>
                {/* Image */}
                <div className="relative w-full h-48 overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-transform duration-300 hover:scale-102 ${
                      project.isComingSoon ? 'object-contain p-4 opacity-50' : ''
                    }`}
                    loading="lazy"
                  />

                  {project.isComingSoon && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-zinc-800 text-white border border-zinc-700">
                        In Progress
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold tracking-tight mb-2 text-zinc-900 dark:text-zinc-100 hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className={`text-xs sm:text-sm leading-relaxed mb-4 ${
                    isDarkMode ? 'text-zinc-400' : 'text-zinc-600'
                  }`}>
                    {project.description}
                  </p>

                  {/* Notice Box */}
                  {project.notice && (
                    <div className={`p-2.5 rounded-lg text-xs leading-relaxed mb-4 border ${
                      isDarkMode
                        ? 'bg-zinc-800/40 border-zinc-700/60 text-zinc-300'
                        : 'bg-zinc-50 border-zinc-200 text-zinc-700'
                    }`}>
                      <span className="font-semibold block text-[11px] mb-0.5 text-primary">Status:</span>
                      {project.notice}
                    </div>
                  )}

                  {/* Tags with Pure SVG TechIcon & Official Docs Links & Primary on Click */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags?.map((tag, tagIndex) => {
                      const tagName = typeof tag === 'string' ? tag : tag.name;
                      const tagUrl = typeof tag === 'object' && tag.url ? tag.url : '#';

                      return (
                        <a
                          key={tagIndex}
                          href={tagUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          title={`View ${tagName} official website`}
                          className={`inline-flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-1 rounded-lg border cursor-pointer select-none transform hover:-translate-y-0.5 active:scale-95 active:border-primary active:bg-primary/10 active:text-primary active:ring-1 active:ring-primary/40 transition-all duration-150 ${
                            isDarkMode
                              ? 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:border-primary hover:text-primary'
                              : 'bg-zinc-50 border-zinc-200 text-zinc-700 hover:border-primary hover:text-primary'
                          }`}
                        >
                          <TechIcon name={tagName} className="w-3.5 h-3.5 flex-shrink-0" />
                          <span>{tagName}</span>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Action Buttons with Spring Click Animation & Primary Feedback */}
              <div className={`px-5 py-3 border-t flex items-center justify-between text-xs font-medium ${
                isDarkMode ? 'border-zinc-800 bg-zinc-900/30' : 'border-zinc-100 bg-zinc-50/50'
              }`}>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-zinc-600 dark:text-zinc-400 hover:text-primary active:text-primary active:scale-95 cursor-pointer transform transition-all duration-150"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                  </svg>
                  <span>Source Code</span>
                </a>

                {!project.isComingSoon && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-primary hover:underline active:opacity-75 active:scale-95 cursor-pointer transform transition-all duration-150"
                  >
                    <span>Live Demo</span>
                    <span>↗</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;