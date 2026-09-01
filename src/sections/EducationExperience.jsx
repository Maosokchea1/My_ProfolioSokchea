import React from 'react';

const EducationExperience = ({ t, isDarkMode, lang }) => {
  // កំណត់ពុម្ពអក្សរតាមភាសា
  const currentFontClass =
    lang === 'ភាសាខ្មែរ' || lang === 'Khmer'
      ? 'font-khmer'
      : lang === 'සිංහල' || lang === 'Sinhala'
      ? 'font-sinhala'
      : 'font-sans';

  // ទិន្នន័យបទពិសោធន៍ការងារ
  const experienceList = [
    {
      period: "2025 - Present",
      role: "Frontend Developer",
      company: "Company Name / Freelance",
      description: "Developing responsive web applications using React, Tailwind CSS, and modern JavaScript frameworks.",
      imageUrl: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?w=200&auto=format&fit=crop&q=60"
    },
    {
      period: "2024 - 2025",
      role: "Junior Web Developer",
      company: "Agency / Internship",
      description: "Collaborated with design teams to convert UI/UX wireframes into interactive and functional user interfaces.",
      imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=200&auto=format&fit=crop&q=60"
    }
  ];

  // ទិន្នន័យការសិក្សា
  const educationList = [
    {
      period: "2024 - 2028",
      degree: "Bachelor of Computer Science",
      institution: "Build bright University",
      description: "Focused on software engineering, web development, algorithms, and database management systems.",
      imageUrl: "https://bbu-webiste-space.sgp1.cdn.digitaloceanspaces.com/campus/pp/logo/20250816071156_bd0691f6fd091331c1bd902546ed881652946d43cc827c9d0c408c4b96cd8ffe.webp"
    },
    {
      period: "2025 - 2026",
      degree: "Team Group build School Full Stack Web Development Certification",
      institution: "Coding Bootcamp / Institute",
      description: "Completed intensive hands-on training on modern web technologies including React, Node.js, and databases.",
      imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=200&auto=format&fit=crop&q=60"
    }
  ];

  return (
    <section
      id="education-experience"
      className={`py-24 transition-colors duration-200 ${currentFontClass} ${
        isDarkMode ? 'bg-black text-white' : 'bg-white text-black'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
            {t?.eduExp?.title || "Education & Experience"}
          </h2>
          <p
            className={`text-sm sm:text-base max-w-2xl mx-auto ${
              isDarkMode ? 'text-zinc-400' : 'text-zinc-600'
            }`}
          >
            {t?.eduExp?.subtitle || "My academic background and professional journey."}
          </p>
        </div>

        {/* Grid Layout: Experience & Education */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Experience Column */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold flex items-center gap-3 text-zinc-900 dark:text-zinc-100">
              <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {t?.eduExp?.experienceTitle || "Experience"}
            </h3>

            <div className="space-y-6">
              {experienceList.map((item, index) => (
                <div
                  key={index}
                  className={`relative p-5 rounded-2xl border transition-colors duration-200 ${
                    isDarkMode
                      ? 'border-zinc-800 bg-zinc-900/50 hover:border-primary/50'
                      : 'border-zinc-200 bg-zinc-50/80 hover:border-primary/30'
                  }`}
                >
                  <div className="flex items-start gap-5">
                    {/* Large Image / Logo */}
                    <div className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-zinc-200 dark:border-zinc-700 shadow-md bg-white dark:bg-zinc-800">
                      <img
                        src={item.imageUrl}
                        alt={item.company}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <span
                        className={`inline-block text-xs font-bold px-3 py-1 rounded-full tracking-wide ${
                          isDarkMode ? 'bg-zinc-800 text-primary' : 'bg-primary/10 text-primary'
                        }`}
                      >
                        {item.period}
                      </span>
                      <h4 className="text-lg font-bold mt-2 text-zinc-950 dark:text-zinc-50">
                        {item.role}
                      </h4>
                      <p className={`text-sm font-semibold ${isDarkMode ? 'text-zinc-300' : 'text-zinc-700'}`}>
                        {item.company}
                      </p>
                      <p className={`text-xs mt-1.5 leading-relaxed ${isDarkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Optional Timeline Dot (can be removed or kept as decorative) */}
                  <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary border-2 border-white dark:border-black shadow-md hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold flex items-center gap-3 text-zinc-900 dark:text-zinc-100">
              <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
              {t?.eduExp?.educationTitle || "Education"}
            </h3>

            <div className="space-y-6">
              {educationList.map((item, index) => (
                <div
                  key={index}
                  className={`relative p-5 rounded-2xl border transition-colors duration-200 ${
                    isDarkMode
                      ? 'border-zinc-800 bg-zinc-900/50 hover:border-primary/50'
                      : 'border-zinc-200 bg-zinc-50/80 hover:border-primary/30'
                  }`}
                >
                  <div className="flex items-start gap-5">
                    {/* Large Image / Logo */}
                    <div className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-zinc-200 dark:border-zinc-700 shadow-md bg-white dark:bg-zinc-800">
                      <img
                        src={item.imageUrl}
                        alt={item.institution}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <span
                        className={`inline-block text-xs font-bold px-3 py-1 rounded-full tracking-wide ${
                          isDarkMode ? 'bg-zinc-800 text-primary' : 'bg-primary/10 text-primary'
                        }`}
                      >
                        {item.period}
                      </span>
                      <h4 className="text-lg font-bold mt-2 text-zinc-950 dark:text-zinc-50">
                        {item.degree}
                      </h4>
                      <p className={`text-sm font-semibold ${isDarkMode ? 'text-zinc-300' : 'text-zinc-700'}`}>
                        {item.institution}
                      </p>
                      <p className={`text-xs mt-1.5 leading-relaxed ${isDarkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Optional Timeline Dot */}
                  <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary border-2 border-white dark:border-black shadow-md hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EducationExperience;