import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Laiqian Ji",
  initials: "LQJ",
  url: "https://github.com/LaiqianDS",
  location: "Valencia, Spain",
  locationLink: "https://www.google.com/maps/place/valencia",
  description:
    "Data Science Enthusiast. I love building things and constantly learning. Trying to improve day to day.",
  summary:
    "Since 2022, I started learning about Data Science as I was passionate creating solutions combining my passion for maths and computers. Eventually, I pursued a [degree in data science and I enrolled in a Data Science bootcamp](/#education), which gave me the theoretical foundations of Data science. Meanwhile, I interned at a Digital Marketing small company, and worked for a company that assisted in social initiatives. Now I am seeking new challenges and opportunities to grow as a Data Scientist.",
  avatarUrl: "/me.png",
  skills: [
    "Python",
    "SQL",
    "R",
    "Tableau",
    "Power BI",
    "AWS",
    "Docker"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "ji.laiqian@gmail.com",
    tel: "+34 622699259",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/LaiqianDS",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/jilaiqian/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/jilaiqian",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@datawithlai",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Alwa",
      href: "https://alwa.es/",
      badges: [],
      location: "Barcelona, Spain",
      title: "Facilitator",
      logoUrl: "/alwa.png",
      start: "May 2024",
      end: "Present",
      description:
        "As a Facilitator at ALWA, Emprendizaje Social, I have informed and guided over 100 young people in joining the Generación Talento program by Fundació Princesa de Girona between September and December 2024. Additionally, I co-ordinated the Virtual Campus of the Generación Propósito 2024 edition by Fundació Princesa de Girona from May to September 2024. My role required effective time management, social entrepreneurship, and other key skills. \n In my position as Educoach, I mentored four groups of teenagers as part of The Challenge 2024 by Fundación La Caixa in Barcelona. This impactful program, held in May 2024, resulted in one group being awarded a trip to the United States. The role demanded strong project management, time management, and mentoring abilities.",
    },
    {
      company: "Smarktek",
      href: "https://www.smarktek.com/",
      badges: [],
      location: "Valencia, Spain",
      title: "SEO Analyst",
      logoUrl: "/smarktek.avif",
      start: "April 2023",
      end: "November 2023",
      description:
        "I have conducted keyword research and implementation, as well as website optimization and auditing to enhance performance. Additionally, I have developed content marketing strategies and prepared detailed reports and briefings. In terms of project work, I have managed small-scale initiatives for international clients across various industries, achieving over a 500% increase in their visibility. All of this has been accomplished using specialized tools such as Ubersuggest, Screaming Frog, Google Search Console, and Squarespace.",
    },
  ],
  education: [
    {
      school: "Universitat Politécnica de Valencia",
      href: "https://www.upv.es/",
      degree: "Bachelor's Degree of Data Science",
      logoUrl: "/upv.svg",
      start: "2022",
      end: "2026",
    },
    {
      school: "Zrive",
      href: "https://zriveapp.com/",
      degree: "Applied Data Science Programme",
      logoUrl: "/zrive.svg",
      start: "November 2024",
      end: "January 2025",
    },
  ],
  projects: [
    {
      title: "Air Quality Analysis",
      href: "https://github.com/LaiqianDS/Proyecto_CalidadDelAireUPV",
      dates: "January 2023 - May 2023",
      active: true,
      description:
        "Exploratory Data Analysis of the air quality in Spain. The data was obtained from the Open Data Portal of the Spain's Government. The project was developed in Python and Excel.",
      technologies: [
        "Python",
        "Excel",
        "Data Visualization",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/LaiqianDS/Proyecto_CalidadDelAireUPV",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/public/airquality.jpg",
      video:
        "",
    },
    {
      title: "Valencia Transport Analysis",
      href: "https://github.com/em4go/transport-analysis-proy-II",
      dates: "January 2024 - May 2024",
      active: true,
      description:
        "Analysis of the public transport in Valencia. The data was obtained from the Open Data Portal of the Valencia. Applied various ML models in order to obtain information about the transport in Valencia, mainly unsupervised learning. The project was developed in R.",
      technologies: [
        "R",
        "Unsupervised Learning",
        "PCA",
        "Clustering",
        "Data Visualization",
        "Shiny",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/em4go/transport-analysis-proy-II",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/public/public_transport.jpg",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Advent of Code",
      dates: "December",
      location: "Remote",
      description:
        "Competitive programming event that takes place every December. It consists of a series of programming puzzles that can be solved in any programming language.",
      image:
        "/public/aoc.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/LaiqianDS/AoC",
        },
      ],
    },
  ],
} as const;
