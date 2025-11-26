import React from "react";

function Experience() {
  const experiences = [
    {
      company: "Freelance Developer",
      role: "Full Stack Web Developer",
      period: "2023 – Present",
      description:
        "Developing responsive websites and web applications using React, Laravel, and TailwindCSS. Focused on building elegant, user-friendly solutions for clients worldwide.",
    },
    {
      company: "TechStart Cambodia",
      role: "Frontend Developer",
      period: "2021 – 2023",
      description:
        "Worked on several enterprise-level projects using React, Redux, and REST APIs. Improved UI/UX performance by optimizing reusable components.",
    },
    {
      company: "Creative Studio",
      role: "Web Designer",
      period: "2020 – 2021",
      description:
        "Designed engaging user interfaces and interactive prototypes using Figma and Adobe XD. Collaborated closely with developers to translate designs into functional pages.",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-sky-800 dark:bg-gray-800">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl font-bold mb-8 text-cyan-500">Experience</h2>
        <div className="flex flex-col md:flex-row md:flex-wrap gap-8 justify-center">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 border dark:border-gray-700 shadow-lg rounded-xl p-6 md:w-[30%] text-left hover:shadow-xl hover:scale-105 transition-transform"
            >
              <h3 className="text-xl font-semibold text-cyan-500 mb-2">{exp.role}</h3>
              <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200">{exp.company}</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{exp.period}</p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
