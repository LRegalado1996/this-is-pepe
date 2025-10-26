/**
 * Job history data containing detailed work experience information.
 */
import Link from "next/link";
import { JobStructure } from "./types";

const laOfertaIrresistible: JobStructure = {
  company: {
    name: "La Oferta Irresistible",
    url: "https://loi.com.uy/",
  },
  startDates: new Date("2024-04-01"),
  endDates: new Date("2025-05-13"),
  experiences: (
    <div className="flex flex-col gap-4">
      <p>
        La Oferta Irresistible is a Uruguayan e-commerce company. I worked as the company&apos;s
        main front-end developer, where I led the technological change of its web platform. The
        foundation of the site was built with PHP, with some sections developed in React and
        integrated using Webpack. As part of the technological evolution, we began using TypeScript
        more frequently and initiated a gradual migration to Next.js, which significantly improved
        the project&apos;s structure and scalability.
      </p>
      <p>
        We focused on achieving a user-friendly design consistent with the site&apos;s visual
        identity, while optimizing performance and SEO with each iteration.
      </p>
      <div>
        <p className="mb-2">
          Below, I&apos;ll tell you about two notable projects I was involved in.
        </p>
        <ul className="ml-4 flex flex-col gap-2">
          <li>
            <b className="font-semibold">1. Landing Page Creation System</b>: This involved the
            development of an internal system for creating landing pages, designed to enable
            non-technical users to generate pages autonomously. This system was key to optimizing
            resources: it considerably reduced the hours the development team spent creating landing
            pages for promotions, product launches, and discount campaigns.
          </li>

          <li>
            <Link
              href="https://loi.com.uy/loiplay"
              target="_blank"
              className="font-semibold hover:underline"
            >
              2. LOiPlay
            </Link>{" "}
            is a public web platform. LOiPlay was a technical and creative challenge: we developed a
            browsing experience inspired by TikTok or YouTube Shorts, showcasing products through
            short, dynamic videos. The primary objective was to achieve fast video playback, with
            audio support across all browsers and devices. In addition to the ability to add your
            product to your cart, we added features such as the ability to mark products as
            favorites, like, and share videos, with a focus on user engagement and conversion.
          </li>
        </ul>
      </div>
    </div>
  ),
  skils: [
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "Sass",
    "Styled-components",
    "php",
    "NPM",
    "Github",
    "Jira",
  ],
};

const medable: JobStructure = {
  company: {
    name: "Medable, Inc",
    url: "https://www.medable.com/",
  },
  startDates: new Date("2021-06-01"),
  endDates: new Date("2023-11-10"),
  experiences: (
    <div className="flex flex-col gap-4">
      <p>
        Medable is a technology company focused on the healthcare sector in the United States. I
        joined the team during the pandemic, a period of strong growth for the company. From the
        beginning, I worked remotely, always aligned with Medable&apos;s mission: to accelerate the
        completion of clinical trials. We worked with Node, React, and MongoDB.
      </p>
      <p>
        During this time, I developed a remarkable ability to adapt to different challenges. I was
        part of the Customer Success team, where we worked on multiple short-term initiatives with
        rapid delivery, focusing on customers&apos; immediate needs.
      </p>
      <div>
        <p className="mb-2">My experience at Medable can be divided into three stages:</p>
        <ul className="flex flex-col gap-2 ml-4">
          <li>
            <h3 className="font-semibold mb-1">1. Transition from Onetree</h3>
            <p>
              In this first stage, we continued the work started at Onetree, improving the Reporting
              Framework and developing new features within the website itself. Thanks to these
              improvements, we were able to reduce the operating costs of the studies, as patients
              could access their reports directly from the web, without needing to download a
              specific iPhone application or deploy a unique app for each study. The entire
              experience was unified within the reporting system website, which simplified
              implementation and improved accessibility.
            </p>
          </li>
          <li>
            <h3 className="font-semibold mb-1">2. Role as Lead Backend Developer</h3>
            <p>
              In the second stage, I became a Lead Backend Developer, leading a team of
              approximately five people distributed around the world. My role involved assisting my
              colleagues in resolving technical obstacles, estimating and assigning tasks, and
              actively participating in planning, feasibility, and technical follow-up meetings.
              Additionally, when it was my turn to program, I primarily worked on troubleshooting
              legacy systems that lacked the latest updates and integrating third-party APIs.
            </p>
          </li>
          <li>
            <h3 className="font-semibold mb-1">3. Adaptation and role as Frontend Developer</h3>
            <p>
              In the final stage, which coincided with a period of restructuring and staff reduction
              at Medable, I transitioned into a new role as a Frontend Developer. We worked with
              React and adopted a microfrontend-like architecture. This phase provided us with the
              opportunity to explore our creativity and develop customized solutions for our
              clients. We developed and improved a survey creation system, focusing on ease of use
              and reducing the need for technical knowledge to create them. To meet specific
              requirements, we also worked with image manipulation and SVG files, creating rich,
              interactive visual experiences directly from the browser.
            </p>
          </li>
        </ul>
      </div>
    </div>
  ),
  skils: [
    "React",
    "Node",
    "MongoDB",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "Jest",
    "Yarn",
    "GitLab",
    "Jira",
    "Confluence",
    "Scrum",
  ],
};

const onetree: JobStructure = {
  company: {
    name: "Onetree",
    url: "https://www.onetree.com/",
  },
  startDates: new Date("2018-11-01"),
  endDates: new Date("2021-06-01"),
  experiences: (
    <div className="flex flex-col gap-4">
      <p>
        Onetree is a software company based in Uruguay. I worked there as a full-stack developer,
        using technologies such as React, Node.js, and MongoDB.
      </p>
      <p>
        From the beginning, I joined the Medable team through the staff augmentation model. It was a
        large and diverse team with well-defined roles and responsibilities. We organized our work
        using Scrum, and our primary task was to adapt Medable&apos;s core product to meet the
        specific needs of each client.
      </p>
      <p>
        I excelled in the project to create the <b className="font-semibold">Reporting Framework</b>
        , Medable&apos;s first custom reporting system. This system would allow users to view an
        online preview of the report and download a CSV file with all the data. The biggest
        challenge was working within the constraints of the existing architecture: we couldn&apos;t
        modify the core database collections, as they are used by other critical applications in the
        system (such as patient data, studies, groups, etc.). To solve this problem, we designed a
        system that extracted and processed information using Node.js scripts, allowing us to
        generate reports dynamically without affecting the operation of the rest of the platform.
      </p>
    </div>
  ),
  skils: [
    "React",
    "Node",
    "MongoDB",
    "JavaScript",
    "HTML",
    "CSS",
    "GitLab",
    "Jira",
    "npm",
    "Scrum",
  ],
};
const guataco: JobStructure = {
  company: {
    name: "Guataco - Influlocal",
    url: "https://guataco.com/",
  },
  startDates: new Date("2018-06-01"),
  endDates: new Date("2018-11-01"),
  experiences: (
    <div className="flex flex-col gap-4">
      <p>
        Guataco was an early-stage startup just starting to establish itself in Uruguay. It was my
        first full-time experience as a developer.
      </p>
      <p>
        The platform (Influlocal) was a kind of social network where users could recommend and
        review businesses in their assigned area. It was initially built in PHP; I didn&apos;t make
        significant changes to that foundation, but I did have to delve into the existing code to
        understand the previous work.
      </p>
      <p>
        My involvement was divided into two stages: first, we developed a functional prototype in
        HTML, CSS, and JavaScript to present to potential investors. Then, we began developing the
        entire platform using Angular and Sass, which allowed me to gain experience with more modern
        technologies and more structured development processes.
      </p>
    </div>
  ),
  skils: ["Angular", "JavaScript", "SASS", "CSS", "HTML", "php"],
};

const zureo: JobStructure = {
  company: {
    name: "Zureo Software",
    url: "https://web.zureo.com/",
  },
  startDates: new Date("2016-07-01"),
  endDates: new Date("2017-12-01"),
  experiences: (
    <div className="flex flex-col gap-4">
      <p>
        Zureo is an Uruguayan company dedicated to the development of ERP software and electronic
        invoicing solutions. It was my first formal experience in the IT sector.
      </p>
      <p>
        My primary role involved installing invoicing systems (software and database), providing
        first-level technical support to resolve issues before escalating them to the development
        team, and offering internal support, including tasks such as PC assembly, software
        installation, and infrastructure maintenance.
      </p>
      <p>
        Additionally, it was at Zureo that I took my first steps in web development. The company
        offered a customizable e-commerce platform, and I was responsible for adapting the design of
        each online store to each client&apos;s visual identity, working with HTML, CSS, and
        JavaScript.
      </p>
      <p>
        I combined this work with my support duties, which allowed me to develop versatility from
        the beginning of my career.
      </p>
    </div>
  ),
  skils: ["JavasScript", "JQuery", "CSS", "LESS", "HTML"],
};

export const jobsData: JobStructure[] = [laOfertaIrresistible, medable, onetree, guataco, zureo];
