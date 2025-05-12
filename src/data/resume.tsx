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
        "As a Facilitator at ALWA, Emprendizaje Social, I have informed and guided over 100 young people in joining the Generación Talento program by Fundació Princesa de Girona between September and December 2024. Additionally, I co-ordinated the Virtual Campus of the Generación Propósito 2024 edition by Fundació Princesa de Girona from May to September 2024. My role required effective time management, social entrepreneurship, and other key skills. \n In my position as Educoach in 2024 and again in 2025, I mentored 10 groups of teenagers as part of The Challenge by Fundación La Caixa in Barcelona. This impactful program, held in May, resulted in many groups being awarded a trip to the United States. The role demanded strong project management, time management, and mentoring abilities.",
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
      title: "Asset Ranking",
      href: "https://github.com/Zrive/zrive-ds-4q24-asset-ranking",
      dates: "Dec 2024 - Jan 2025",
      active: true,
      description:
        "Built a classification model in order to create a portfolio of assets (SP500) with the objective of surpassing the index performance.",
      technologies: [
        "Python",
        "Machine Learning",
        "Scikit-learn",
        "LightGBM",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Zrive/zrive-ds-4q24-asset-ranking",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/stockmarket.jpg",
      video: "",
    },
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
      image: "/airquality.jpg",
      video: "",
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
      image: "/public_transport.jpg",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Mercadona Hackathon",
      dates: "April 2025",
      location: "Valencia, Spain",
      description:
        "Hackathon organized by Mercadona. The objective was to improve customer experience with AI. We built an extension of Mercadona's app that could help the user to identify any recipe they scan and directly obtain the ingredients of Mercadona and the steps to follow. The project was developed in Python and Angular. We were awarded the 1st place in the event.",
      image:
        "https://yt3.googleusercontent.com/ZrOQvWBGq2XrPuAzhwJp-UNjAEsHlfCBPN-8QCzsY9zjPrXRWW0IS4D6wK6KiP1SIGU6_2wqnw=s900-c-k-c0x00ffffff-no-rj",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://www.linkedin.com/posts/mercadona_mercadonait-belimitless-activity-7318205733160820736-QQgx?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADtkPp4BOFUG3FTwA9191YvBD1SapcYcN8A",
        },
      ],
    },
    {
      title: "Cajamar University Hack",
      dates: "September-October 2024",
      location: "Remote",
      description:
        "Data Science Hackathon organized by Cajamar. The hackathon focused on predicting the concentration of a certain product in a mixture. ",
      image:
        "https://www.cajamardatalab.com/datathon-cajamar-universityhack/assets/images/logo-uh.png",
      links: [
        {
          title: "Post",
          icon: <Icons.linkedin className="h-4 w-4" />,
          href: "https://www.linkedin.com/posts/etsinfupv_universityhack-activity-7220016014841831424-NoCE?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADtkPp4BOFUG3FTwA9191YvBD1SapcYcN8A",
        },
      ],
    },
    {
      title: "Regional Ada Byron Programming Challenge",
      dates: "March 2024",
      location: "Valencia, Spain",
      description:
        "Ada Byron is a national programming challenge that consists of a series of algorithmic problems that can be solved in a limited time frame. I participated in the regional challenge, which was held in Valencia. Our team, Python Pals finished in 10th place.",
      image:
        "https://escuelapolitecnica.uah.es/export/sites/politecnica/es/.galleries/imagenes-noticias/AdaByron.jpg_1751553635.jpg",
      links: [
        {
          title: "Post",
          icon: <Icons.linkedin className="h-4 w-4" />,
          href: "https://www.linkedin.com/posts/cp-upv_muy-buenos-resultados-en-esta-edici%C3%B3n-del-ugcPost-7167661798274412544-vmx2?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADtkPp4BOFUG3FTwA9191YvBD1SapcYcN8A",
        },
      ],
    },
    {
      title: "CP-UPV Saint Valentine's Programming Challenge",
      dates: "February 2024",
      location: "Valencia, Spain",
      description:
        "Participated in the CP-UPV Saint Valentine's Programming Challenge, a competitive programming event organized by Competitive-Programming UPV. The event focused on solving algorithmic problems in a limited time frame. My was awarded the 2nd place in the event.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8Zlmiv4jkx1BfnhCiqnD4gh4Nly6fTJAp7A&s",
      links: [
        {
          title: "Post",
          icon: <Icons.linkedin className="h-4 w-4" />,
          href: "https://www.linkedin.com/posts/jilaiqian_valentines-day-was-an-absolute-blast-activity-7165335051251900416-iVxQ?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADtkPp4BOFUG3FTwA9191YvBD1SapcYcN8A",
        },
      ],
    },
    {
      title: "Gennera 5U 4th Edition",
      dates: "September 2023",
      location: "Valencia, Spain",
      description:
        "Gennera 5U is a hackathon for university students in Valencia. The hackathon focused on solving real-world problems that some of the partner companies had. We worked on a project that aimed to enhance the productivity of building a road between two points. We designed a system that could reduce the time of the heating process of the asphalt. Our team was awarded the 1st place.",
      image:
        "https://espaitec.uji.es/wp-content/uploads/2017/07/Captura-de-pantalla-2017-07-28-a-las-11.19.53.png",
      links: [
        {
          title: "Post",
          icon: <Icons.linkedin className="h-4 w-4" />,
          href: "hhttps://www.linkedin.com/posts/ideas-upv_ideasupv-ugcPost-7113527135079718914-u4z8?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADtkPp4BOFUG3FTwA9191YvBD1SapcYcN8A",
        },
      ],
    },
    {
      title: "Ideas UPV Challenge XIII Edition",
      dates: "Jule 2023",
      location: "Valencia, Spain",
      description:
        "Participated in the Ideas UPV Challenge XIII Edition, a hackathon organized by the Universitat Politècnica de Valencia. The event focused on developing innovative solutions to real-world problems. We worked on a project that aimed to ease every burocratic process in the university with the use of LLMs. Our team was awarded the 3nd place in the event, and we received a prize of 500 euros.",
      image:
        "https://www.upv.es/entidades/ideas/wp-content/uploads/2020/03/logo-IDEASUPV-vertical_1-e1585751170318.png",
      links: [
        {
          title: "Post",
          icon: <Icons.linkedin className="h-4 w-4" />,
          href: "https://www.linkedin.com/posts/ideas-upv_entrega-premios-challenge-ideas-upv-una-nueva-share-7087031061137829888-5uxM?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADtkPp4BOFUG3FTwA9191YvBD1SapcYcN8A",
        },
      ],
    },
    {
      title: "Advent of Code",
      dates: "Every December",
      location: "Remote",
      description:
        "Competitive programming event that takes place every December. It consists of a series of programming puzzles that can be solved in any programming language.",
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAh1BMVEUKDiUAACRKTzJZXDMAACPU1E3//1UJDSX29lPc3U0AACYGCyXj407q60///1gbHioACCQABCTw8VApKytwdDcrLisAACEyNiwcISn//1lvcjc+QC1fYjTIyko2Oy5najS4ukawsUV+fjoTFyjCw0hOUjCBhDuTlj9CRi7P0UqHiTujpEKpqkPpujvYAAABAUlEQVR4AYyQBZbDMAxEre1EdkiBMnOD979eGUNv54HhC0f9X0Qd7K/XTmExdAvTsAy1Q9s4bhskz7jt0JcgVBUhesKY+49rCP1KGAxHcPX1YngMpVwaBYPoQcPJlK2ZA0RXOCcCLZYsKzwy1XrJU7NZK9zgYhuLWLu9+6wLzDdGJN4a3vgscjgC7tecmJxs4avET4aoWhEBR8Ns1kDU4BJ2LFNJRqpB0d5IshNOqcGeUSY2YSMe6g4iFzOkSPlSQFVEY8MzKIUjc69CXViyufuJRDz6LYzk1Usjk/JnYprze0qaxLKgb7jgHO8qa9nhJ3VC+uPlpDJR+GWZDtVllAIAMI8OXQ0/hTAAAAAASUVORK5CYII=",
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
