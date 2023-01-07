export interface IExperience {
  role: string
  company: string
  companyLogo: string
  technologies: ITechnologies[]
  period: string
  summaryPoints: string[]
}

export interface ITechnologies {
  name: string
  logoUrl: string
}

export interface ISkills extends ITechnologies {
  level: string
}

export const skills = [
  { level: "100%", name: "Nuxt.js", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg" },
  { level: "100%", name: "Vue.js", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
  { level: "85%", name: "Next.js", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { level: "80%", name: "Typescript", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { level: "100%", name: "PUG", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jasmine/jasmine-plain.svg" },
  { level: "90%", name: "SASS", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" },
  { level: "85%", name: "Figma", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { level: "100%", name: "Bulma", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bulma/bulma-plain.svg" },
  { level: "100%", name: "Bootstrap", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  { level: "78%", name: "Laravel", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg"},
  { level: "100%", name: "PostgreSQL", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"},
  { level: "90%", name: "Jira", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
  { level: "100%", name: "Trello", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg" },
  { level: "90%", name: "Bitbucket", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg" }
] as ISkills[]

export const workExperience = [
  {
    role: "Frontend Developer",
    company: "GPRCOM",
    companyLogo: "grpcom",
    period: "MAR 14 2022 - Present",
    technologies: [
      { name: "Next.js", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "Typescript", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "PUG", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jasmine/jasmine-plain.svg" },
      { name: "SASS", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" },
      { name: "Figma", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      { name: "AWS", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
      { name: "Jira", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
      { name: "Gitlab", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" }
    ],
    summaryPoints: [
      "Responsible for the UmDois Esportes website",
      "Website front-end migration to Next.js and architecture change",
      "SEO and CWV",
      "Webstories",
      "GA and GA4",
      "Acting on the front-end of other applications, such as Confraria 041 and Tribuna PR Elections Guide"
    ]
  },
  {
    role: "Web Developer",
    company: "Piolett",
    companyLogo: "piolett",
    period: "AUG 2021 - MAR 2022",
    technologies: [
      { name: "Nuxt.js", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg" },
      { name: "Bulma", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bulma/bulma-plain.svg" },
      { name: "PUG", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jasmine/jasmine-plain.svg" },
      { name: "SASS", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" },
      { name: "Bootstrap", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
      { name: "Laravel", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg"},
      { name: "PostgreSQL", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"},
      { name: "Jira", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
      { name: "Trello", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg" },
      { name: "Bitbucket", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg" }
    ],
    summaryPoints: [
      "Responsible for frontend of Piolett system",
      "Maintenance on frontend and backend (using Laravel)",
      "Maintenance on system landing page",
    ]
  },
  {
    role: "Web Developer and Help Desk",
    company: "DNX",
    companyLogo: "dnx",
    period: "JUN 2021 - AUG 2022",
    technologies: [
      { name: "Bootstrap", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
      { name: ".NET", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" },
      { name: "Visual Studio", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg" },
    ],
    summaryPoints: [
      "Front-End development (Bootstrap 4) and integration of the Projects team, acting as Support."
    ]
  },
  {
    role: "Front-End Developer and Support",
    company: "Sistema ACS",
    companyLogo: "sistemaacs",
    period: "DEC 2019 - MAY 2021",
    technologies: [
      { name: "Nuxt.js", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg" },
      { name: "Bulma", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bulma/bulma-plain.svg" },
      { name: "PUG", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jasmine/jasmine-plain.svg" },
      { name: "SASS", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" },
      { name: "Bootstrap", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
      { name: "Laravel", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg"},
      { name: "PostgreSQL", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"},
      { name: "Jira", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
      { name: "Trello", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg" },
      { name: "Bitbucket", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg" }
    ],
    summaryPoints: [
      "Responsible for new features on frontend",
      "PWA development using Nuxt.js",
      "Customer service",
      "System installation",
    ]
  },
  {
    role: "IT Intern",
    company: "Tecnored",
    companyLogo: "tecnored",
    period: "AUG-2019 - DEC 2019",
    technologies: [
      { name: "PHP", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
      { name: "Ubuntu Server", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg" },
    ],
    summaryPoints: [
      "Management on department's equipment",
      "Control of printers and computers",
      "Setup for new users and VPN",
      "Hardware maintenance"
    ]
  },
  {
    role: "Maintenance Apprentice",
    company: "Plastic Omnium",
    companyLogo: "plastic-omnium",
    period: "NOV-2017 - JUN 2019",
    technologies: [
      { name: "maintenance", logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg" },
    ],
    summaryPoints: [
      "Maintenance indicators management",
      "Visual management of parts scrap or rework",
      "Responsible for Service Orders"
    ]
  },

] as IExperience[]



//NUXT https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg