import React from "react";

type StudyExperience = {
  title: string;
  institution: string;
  period: string;
  description: any;
};

const studyExperiences: StudyExperience[] = [
  {
    title: "Bachelor's Degree in Information Systems Technology",
    institution: "University of Bologna",
    period: "2022 – Present",
    description: (
      <>
        <p>Currently completing my university degree in Information Systems Technology at the University of Bologna, with only 5 exams remaining. </p>
        <p>Field of study: STEM</p>
      </>
    ),
  },
  {
    title: "Higher Technician for Software Development in Web and Cloud",
    institution: "ITS Turing - FITSTIC Foundation",
    period: "2020 – 2022",
    description: (
      <>
        <p>Completed an advanced technical course with a final grade of 100/100 with honors. Key areas of study included:</p>
        <ul className="list-disc ml-5">
          <li>Fundamentals: Programming logic, OOP, HTML and CSS, JavaScript.</li>
          <li>Frontend: TypeScript, React, Flutter (mobile).</li>
          <li>Backend: Python and Web services (Flask), C# (.NET 5), PHP (Laravel).</li>
          <li>Database Systems: RDBMS and NoSQL databases.</li>
          <li>Cybersecurity.</li>
          <li>Agile Development Methodology.</li>
          <li>Cloud Development / Networks and Systems.</li>
          <li>Applied Data Analysis.</li>
          <li>Soft Skills: Teamwork, client relations.</li>
        </ul>
        <p>Address: via Canonico Lugaresi 202, Cesena (FC)</p>
      </>
    ),
  },
];

const StudyTimelineExp = () => {
  return (
    <section className="py-10">
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter text-center md:text-left">
        Study Experience
      </h1>
      <div className="relative border-l border-gray-200 dark:border-gray-700">
        {studyExperiences.map((exp, index) => (
          <div key={index} className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-green-500 rounded-full -left-1.5 border border-white dark:border-gray-900"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {exp.period}
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {exp.title} - {exp.institution}
            </h3>
            <div className="text-base font-normal text-gray-500 dark:text-gray-400">
              {exp.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StudyTimelineExp;
