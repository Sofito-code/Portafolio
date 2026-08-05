import type { HeroData, ProfileData, ProjectData } from "../types";

import heroPlaceholder from "../assets/images/FotoSofia.jpg";
import projectPlaceholder from "../assets/images/project-placeholder.svg";
import projectThumbPlaceholder from "../assets/images/project-thumb-placeholder.svg";

export const heroData: HeroData = {
  name: "Sofia Vanegas Cordoba",
  role: "Desarrolladora de Videojuegos",
  about:
    "Desarrolladora con background en software backend y frontend. Me especializo en el desarrollo de mecánicas. Disfruto profundamente tomar la iniciativa, guiar equipos y transformar ideas complejas en experiencias interactivas pulidas y divertidas. Para mí, el desarrollo es un aprendizaje constante, por eso me encanta compartir lo que sé con otros y rodearme de personas que me desafíen a mejorar cada día. Soy una desarrolladora con orientació al detalle, me gusta comprometerme, adaptarme a los requerimientos funcionales y no funcionales de cada proyecto y sé comunicarme de manera asertiva.",
  contact: {
    linkedin: "https://www.linkedin.com/in/sofia-vanegas-cordoba-unity-dev/",
    github: "https://github.com/Sofito-code",
    itch: "https://sofia-vc.itch.io/",
    cv: "https://drive.google.com/uc?export=download&id=1TOa5aOQVx66mw3-JLYVp5803WjZqvxkA",
  },
  photoPath: heroPlaceholder,
};

export const profileData: ProfileData = {
  experiences: [
    {
      company: "Freelance",
      location: "Medellín, Colombia",
      period: "Feb 2025 - Presente",
      role: "Desarrolladora Unity",
      achievements: [
        "Convertí una prueba neuropsicológica de laboratorio en un juego Android accesible para una investigación de maestría, usando Unity y un diseño Low Poly agrícola para el público adulto mayor.",
        "Implementé un sistema de recolección de datos confiable y cifrado, con almacenamiento local en formato JSON y sincronización con Firebase, asegurando la integridad de la información.",
        "Lideré todo el desarrollo técnico como única programadora, colaborando con un equipo interdisciplinario y entregando un producto funcional que cumplió los requisitos metodológicos del estudio.",
      ],
    },
    {
      company: "LaMusica.fm",
      location: "Medellín, COL",
      period: "Ene 2024 - Jun 2024",
      role: "Desarrolladora Web",
      achievements: [
        "Logré aplicaciones web escalables con costos y rendimiento optimizados al implementar una arquitectura serverless con Next.js y AWS Lambda.",
        "Amplié las capacidades de las aplicaciones con inteligencia artificial mediante la integración de la API de OpenAI, creando agentes personalizados que enriquecieron la experiencia del usuario.",
        "Gestioné bases de datos NoSQL con AWS DynamoDB y diseñé interfaces de usuario con Material UI.",
      ],
    },
    {
      company: "AxcelSoftware",
      location: "Medellín, COL",
      period: "May 2022 - Nov 2023",
      role: "Desarrolladora Backend",
      achievements: [
        "Logré la integración entre sistemas de dos operadoras de telecomunicaciones al usar el lenguaje Velocity (basado en Java) que conectó la API de infraestructura ETB con los servicios internos de Tigo, permitiendo la reserva de fibra óptica (GPON) de forma confiable.",
        "Aseguré la estabilidad de las integraciones y reduje el riesgo de fallos en producción mediante pruebas de API con Postman y SoapUI, y un monitoreo continuo de logs con Splunk para detectar y resolver incidencias previo al despliegue en producción.",
      ],
    },
  ],
  education: [
    {
      institution: "Generation Colombia",
      location: "Medellín, COL",
      period: "May 2026 - Presente",
      degree: "Junior Unity Developer",
    },
    {
      institution: "Universidad de Antioquia",
      location: "Medellín, COL",
      period: "Ago 2018 - Presente",
      degree: "Ingeniería de Sistemas",
    },
    {
      institution: "Academy by Polygon.us",
      location: "Medellín, COL",
      period: "Ago 2025 - Dic 2025",
      degree: "Desarrollo de videojuegos Nivel 2",
    },
    {
      institution: "Academy by Polygon.us",
      location: "Medellín, COL",
      period: "Oct 2024 - Jun 2025",
      degree: "Desarrollo de videojuegos Nivel 1",
    },
    {
      institution: "SENA",
      location: "Medellín, COL",
      period: "Ene 2016 - Nov 2017",
      degree: "Técnico en Diseño e Integración de Multimedia",
    },
  ],
  skills: [
    {
      category: "Diseño de juegos",
      items: [
        "Diseño de juegos generalista",
        "Diseño narrativo",
        "Gamificación",
      ],
    },
    {
      category: "Producción",
      items: ["Marco de trabajo Scrum"],
    },
    {
      category: "Languages",
      items: ["Español nativo e Inglés B1"],
    },
  ],
  tools: [
    {
      category: "Motores Gráficos",
      items: ["Unity Engine (Especialista)", "Unreal Engine 5 (Exploratorio)"],
    },
    {
      category: "Source Control",
      items: ["Git (Gitflow)", "GitHub", "GitLab"],
    },
    {
      category: "Producción",
      items: ["Trello", "Jira"],
    },
    {
      category: "Comunicación",
      items: ["Slack", "Discord", "Microsoft Teams"],
    },
  ],
  cvPath: "#",
};

export const projectsData: ProjectData[] = [
  {
    id: "math-yx",
    name: "Math/yx",
    year: "2026",
    genre: "[Género]",
    platform: "[Plataforma]",
    description: "[Descripción general del juego — completar más tarde]",
    categories: [
      "Codificación",
      "Artista Técnica",
      "UX/UI",
      "Arte",
      "Narrativa",
    ],
    responsibilities:
      "[Responsabilidades en el juego descrito como solución a problemas técnicos — completar más tarde]",
    gifPath: projectPlaceholder,
    thumbnailPath: projectThumbPlaceholder,
    playLink: "#",
    repoLink: "#",
  },
  {
    id: "la-cosecha",
    name: "La Cosecha",
    year: "2025",
    genre: "[Género]",
    platform: "[Plataforma]",
    description: "[Descripción general del juego — completar más tarde]",
    categories: [
      "Codificación",
      "Artista Técnica",
      "UX/UI",
      "Arte",
      "Narrativa",
    ],
    responsibilities:
      "[Responsabilidades en el juego descrito como solución a problemas técnicos — completar más tarde]",
    gifPath: projectPlaceholder,
    thumbnailPath: projectThumbPlaceholder,
    playLink: "#",
    repoLink: "#",
  },
  {
    id: "deep-diving",
    name: "DeepDiving",
    year: "2026",
    genre: "[Género]",
    platform: "[Plataforma]",
    description: "[Descripción general del juego — completar más tarde]",
    categories: [
      "Codificación",
      "Artista Técnica",
      "UX/UI",
      "Arte",
      "Narrativa",
    ],
    responsibilities:
      "[Responsabilidades en el juego descrito como solución a problemas técnicos — completar más tarde]",
    gifPath: projectPlaceholder,
    thumbnailPath: projectThumbPlaceholder,
    playLink: "#",
    repoLink: "#",
  },
  {
    id: "fatal-mixture",
    name: "Fatal Mixture",
    year: "2026",
    genre: "[Género]",
    platform: "[Plataforma]",
    description: "[Descripción general del juego — completar más tarde]",
    categories: [
      "Codificación",
      "Artista Técnica",
      "UX/UI",
      "Arte",
      "Narrativa",
    ],
    responsibilities:
      "[Responsabilidades en el juego descrito como solución a problemas técnicos — completar más tarde]",
    gifPath: projectPlaceholder,
    thumbnailPath: projectThumbPlaceholder,
    playLink: "#",
    repoLink: "#",
  },
  {
    id: "axipet",
    name: "AxiPet",
    year: "2025",
    genre: "[Género]",
    platform: "[Plataforma]",
    description: "[Descripción general del juego — completar más tarde]",
    categories: [
      "Codificación",
      "Artista Técnica",
      "UX/UI",
      "Arte",
      "Narrativa",
    ],
    responsibilities:
      "[Responsabilidades en el juego descrito como solución a problemas técnicos — completar más tarde]",
    gifPath: projectPlaceholder,
    thumbnailPath: projectThumbPlaceholder,
    playLink: "#",
    repoLink: "#",
  },
  {
    id: "camino-a-la-calidad",
    name: "Camino a la Calidad",
    year: "2022",
    genre: "[Género]",
    platform: "[Plataforma]",
    description: "[Descripción general del juego — completar más tarde]",
    categories: [
      "Codificación",
      "Artista Técnica",
      "UX/UI",
      "Arte",
      "Narrativa",
    ],
    responsibilities:
      "[Responsabilidades en el juego descrito como solución a problemas técnicos — completar más tarde]",
    gifPath: projectPlaceholder,
    thumbnailPath: projectPlaceholder,
    playLink: "#",
    repoLink: "#",
  },
  {
    id: "energy-saving",
    name: "Energy Saving",
    year: "2019",
    genre: "[Género]",
    platform: "[Plataforma]",
    description: "[Descripción general del juego — completar más tarde]",
    categories: [
      "Codificación",
      "Artista Técnica",
      "UX/UI",
      "Arte",
      "Narrativa",
    ],
    responsibilities:
      "[Responsabilidades en el juego descrito como solución a problemas técnicos — completar más tarde]",
    gifPath: projectPlaceholder,
    thumbnailPath: projectThumbPlaceholder,
    playLink: "#",
    repoLink: "#",
  },
];
