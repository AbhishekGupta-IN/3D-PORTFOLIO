import {
    mobile,
    backend,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    eightfold,
    everwell,
    samsung,
    parinati,
    portfolio,
    minionTranslate,
    emojiInterpreter,
    threejs,
    python,
    vue,
    solr,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Vue JS",
      icon: vue,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    // {
    //   name: "Node JS",
    //   icon: nodejs,
    // },
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Git",
      icon: git,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Solr",
      icon: solr,
    },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "Software Engineer",
      company_name: "Eightfold AI",
      icon: eightfold,
      iconBg: "#383E56",
      date: "Jun 2021 - Present",
      points: [
        "Contributing to the JIE project at Eightfold AI, which is serving as a pivotal integration point for TA (Talent Acquisition) and TM (Talent Management) products.",
        "Played a key role in developing the UI, building multiple pages and workflows. Responsible for end-to-end feature development, bridging front-end and back-end efforts.",
        "JIE started as a hub of calibration storage/library serving as a golden dataset for TA use cases like hiring and job postings.",
        "Also powering many TM downstream use cases such as skill assessments, career navigation, up-skilling and succession planning for employees",
        "Implemented key features to streamline library management, including comparison, auto-initialization, and trend-based dashboards for improvement suggestions",
        "Vital in every company sale, serving as a prerequisite for multiple downstream use-cases.",
        "Single-handedly led the complete revamp and UI refresh of the project.",
      ],
    },
    {
      title: "Full Stack Developer, Intern",
      company_name: "Everwell Health Soulutions Pvt Ltd",
      icon: everwell,
      iconBg: "#E6DEDD",
      date: "Aug 2020 - Dec 2020",
      points: [
        "Resolved multiple bugs and build defects as part of the on-call team in the first month",
        "Automated sprint status monitoring for developers based on Gitlab and developed a system for generating reports automatically",
        "Fully managed the website from coding to deployment",
        "Technologies used - VueJS, Ruby, and Selenium.",
      ],
    },
    {
      title: "Software Developer, Intern",
      company_name: "Samsung R&D Institute India",
      icon: samsung,
      iconBg: "white",
      date: "May 2020 - Jun 2020",
      points: [
        "Developed a Deep Learning model for denoising low SNR audio signals, suitable for real-time calls",
        "Technologies used - TensorFlow 2.0, Keras, and Librosa.",
      ],
    },
    {
      title: "Data Analyst, Intern",
      company_name: "Parinati Solutions Private Limited",
      icon: parinati,
      iconBg: "#383E56",
      date: "May 2019 - Jul 2019",
      points: [
        "Explored and implemented diverse trading strategies for Binance coin",
        "Conducted profit and loss analysis to validate trading outcomes",
        "Utilized key indicators such as Bollinger Bands, Stochastic Indicator, and Aroon Oscillator",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "3-D Portfolio",
      description:
        "Built this portfolio using React and ThreeJS. Took reference from JSMastery's tutorial, using some react libraries like framer-motion, react-tilt, react-vertical-timeline-component",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "threejs",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/AbhishekGupta-IN/3D-PORTFOLIO",
      project_link: "https://abhishekgupta-in.netlify.app/",
    },
    {
      name: "Minion Translate",
      description:
        "Are you a fan of minions? Did you know that the gibberish they say is an actual language. Use the translator to convert your text from English to Minion speak or Banana language.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "api",
          color: "pink-text-gradient",
        },
      ],
      image: minionTranslate,
      source_code_link: "https://github.com/AbhishekGupta-IN/minion-translate",
      project_link: "https://abhishekgupta-in-minion-translate.netlify.app/",
    },
    {
      name: "Emoji Interpreter",
      description:
        "Use this web app to interpret the emoji, you don't know the meaning of. This site consist of around 850 emojis. You can get the meaning by typing or selecting the emojis from the list.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: emojiInterpreter,
      source_code_link: "https://github.com/AbhishekGupta-IN/emoji-interpreter",
      project_link: "https://abhishekgupta-in-emoji-interpreter.netlify.app/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };