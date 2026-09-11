import React from 'react';
// 👈 Import រូបភាពចូលមកទីនេះ
import aboutImage from '../assets/images/imageabout.png';

const About = ({ t, isDarkMode, lang }) => {
  // កំណត់ពុម្ពអក្សរតាមភាសា
  const currentFontClass =
    lang === 'ភាសាខ្មែរ' || lang === 'Khmer'
      ? 'font-khmer'
      : lang === 'සිංහල' || lang === 'Sinhala'
      ? 'font-sinhala'
      : 'font-sans';

  const isKhmer = lang === 'ភាសាខ្មែរ' || lang === 'Khmer';

  // អត្ថបទពិពណ៌នាដែលទាក់ទាញ និងបង្ហាញពីសមត្ថភាពពិតប្រាកដ
  const aboutHeading = isKhmer ? "តើខ្ញុំជានរណា?" : (t.about?.heading || "Who am I?");
  const aboutDescription = isKhmer
    ? "ខ្ញុំគឺជា Developer ដែលមានចំណង់ចំណូលចិត្តខ្លាំងក្នុងការបង្កើត Web Applications ស្អាតៗ និងមានល្បឿនលឿន។ មិនត្រឹមតែជំនាញផ្នែក Frontend នោះទេ ខ្ញុំក៏មានសមត្ថភាពអាចសរសេរ Backend API និងភ្ជាប់ទិន្នន័យបានយ៉ាងស្ទាត់ជំនាញផងដែរ ដើម្បីធានាថាប្រព័ន្ធទាំងមូលដំណើរការបានល្អរលូន និងមានសុវត្ថិភាព។"
    : (t.about?.description || "I am a passionate developer dedicated to building clean, user-friendly, and efficient web applications. With strong expertise in both Frontend and Backend API development, I love turning complex problems into simple, elegant, and scalable digital solutions.");

  return (
    <section
      id="about"
      className={`py-24 transition-colors duration-200 ${currentFontClass} ${
        isDarkMode ? 'bg-black text-white' : 'bg-white text-black'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
            {t.about?.title || (isKhmer ? "អំពីខ្ញុំ" : "About Me")}
          </h2>
          <p
            className={`text-sm sm:text-base max-w-2xl mx-auto ${
              isDarkMode ? 'text-zinc-400' : 'text-zinc-600'
            }`}
          >
            {t.about?.subtitle || (isKhmer ? "ស្វែងយល់បន្ថែមអំពីប្រវត្តិរូប ជំនាញ និងបទពិសោធន៍របស់ខ្ញុំ។" : "Get to know more about my background, technical skills, and experience.")}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side: Image */}
          <div className="relative">
            <div
              className={`w-full h-80 sm:h-96 rounded-2xl border flex items-center justify-center overflow-hidden transition-colors hover:border-primary shadow-xl ${
                isDarkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-zinc-100 border-zinc-300'
              }`}
            >
              <img
                src={aboutImage}
                alt="About Me"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Side: Description */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              {aboutHeading}
            </h3>
            <p
              className={`text-base leading-relaxed ${
                isDarkMode ? 'text-zinc-400' : 'text-zinc-600'
              }`}
            >
              {aboutDescription}
            </p>

            {/* Extra Info / Stats with Primary Accent */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div
                className={`p-4 rounded-xl border transition-colors hover:border-primary ${
                  isDarkMode ? 'border-zinc-800 bg-zinc-900/50' : 'border-zinc-200 bg-zinc-50'
                }`}
              >
                <h4 className="text-2xl font-bold mb-1 text-primary">1+</h4>
                <p className={`text-xs ${isDarkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  {isKhmer ? "ឆ្នាំបទពិសោធន៍" : (t.about?.experience || "Years of Experience")}
                </p>
              </div>
              <div
                className={`p-4 rounded-xl border transition-colors hover:border-primary ${
                  isDarkMode ? 'border-zinc-800 bg-zinc-900/50' : 'border-zinc-200 bg-zinc-50'
                }`}
              >
                <h4 className="text-2xl font-bold mb-1 text-primary">2 projects Done and  3 projects​​ ​​Under development keep going </h4>
                <p className={`text-xs ${isDarkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  {isKhmer ? "គម្រោងបានបញ្ចប់" : (t.about?.projects || "Completed Projects")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;