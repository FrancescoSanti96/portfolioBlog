import React from "react";

type Experience = {
  title: string;
  position: string;
  company: string;
  period: string;
  description: any;
};

const experiences: Experience[] = [
  {
    title: "Software Developer",
    position: "Software Developer",
    company: "Claranet",
    period: "03/2023 – Present",
    description: (
      <>
        <p>Consultant in software development, specializing in front-end. Currently involved in various projects:</p>
        <ul className="list-disc ml-5">
          <li>
            Developing a new management platform for healthcare professionals and patients using:
            <ul className="list-disc ml-5">
              <li>React with TypeScript (Zod, React Query, Hook Form)</li>
            </ul>
          </li>
          <li>
            Development and maintenance of banking sector web apps using:
            <ul className="list-disc ml-5">
              <li>AngularJS and Angular 2+</li>
            </ul>
          </li>
          <li>
            Creation of reports using:
            <ul className="list-disc ml-5">
              <li>JavaScript frameworks and Highcharts for data visualization</li>
            </ul>
          </li>
        </ul>
        <p>Following Agile methodology for high-quality and rapid deliveries.</p>
      </>
    ),
  },
  {
    title: "Junior Software Developer",
    position: "Junior Software Developer",
    company: "Flowing (A Claranet Company)",
    period: "09/2022 – 03/2023",
    description: <p>Contributed to various projects as a junior software developer.</p>,
  },
  {
    title: "Junior Frontend Developer",
    position: "Junior Frontend Developer",
    company: "DMA SRL",
    period: "04/2022 – 07/2022",
    description: (
      <>
        <p>Internship during ITS curriculum. Responsibilities included:</p>
        <ul className="list-disc ml-5">
          <li>
            Developed a Web App using React and Redux for managing user points, with input via QR code scanning or manual code entry, and prize redemption.
          </li>
          <li>Implemented modules in HubSpot.</li>
          <li>Developed e-commerce platforms using Hugo.</li>
        </ul>
        <p>Tech stack: React with TypeScript and Redux Toolkit, vanilla JavaScript, Hugo, CSS/Bootstrap/Tailwind.</p>
      </>
    ),
  },
  {
    title: "Junior Software Developer",
    position: "Junior Software Developer",
    company: "Inception SRL",
    period: "05/2021 – 08/2021",
    description: (
      <>
        <p>Internship during ITS curriculum. Developed a Web App for managing digitized sites using BIM surveying and semantic approach.</p>
        <p>Tech stack: Angular with Bootstrap (Frontend), .NET 5 (Backend), Semantic Web (Database).</p>
      </>
    ),
  },
  {
    title: "IT Specialist",
    position: "IT Specialist",
    company: "Tosti SRL",
    period: "2016 – 2020",
    description: (
      <>
        <p>Initially started as an intern and later transitioned into a full-time role:</p>
        <ul className="list-disc ml-5">
          <li>Installation, maintenance, and safeguarding of company IT systems.</li>
          <li>Internal technical support for hardware and software issues.</li>
          <li>Network management and configuration.</li>
          <li>Automation of tasks through scripting (e.g., Bash).</li>
          <li>Creation of corporate procedures and documentation.</li>
        </ul>
      </>
    ),
  },
];

const CurrentTimelineExp = () => {
  return (
    <section className="py-10">
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter text-center md:text-left">
      Job Experience
      </h1>
      <div className="relative border-l border-gray-200 dark:border-gray-700">
        {experiences.map((exp, index) => (
          <div key={index} className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-1.5 border border-white dark:border-gray-900"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {exp.period}
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {exp.position} - {exp.company}
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

export default CurrentTimelineExp;
