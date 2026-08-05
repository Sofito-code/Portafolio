import type { HeroData, ProfileData, ProjectData } from "../types";

import fotoSofia from "../assets/images/FotoSofia.jpg";

import mathyx from "../assets/images/proyects/pics/mathyx.png";
import iconmathyx from "../assets/images/proyects/icons/mathyx.png";
import lacosecha from "../assets/images/proyects/pics/lacosecha.png";
import iconlacosecha from "../assets/images/proyects/icons/lacosecha.png";
import axipet from "../assets/images/proyects/pics/axipet.png";
import iconaxipet from "../assets/images/proyects/icons/axipet.png";
import caminoalacalidad from "../assets/images/proyects/pics/caminoalacalidad.png";
import iconcaminoalacalidad from "../assets/images/proyects/icons/caminoalacalidad.png";
import energysaving from "../assets/images/proyects/pics/energysaving.png";
import iconenergysaving from "../assets/images/proyects/icons/energysaving.png";

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
    email: "mailto:sofiavanegascordoba@gmail.com",
  },
  photoPath: fotoSofia,
};

export const projectsData: ProjectData[] = [
  {
    id: "math-yx",
    name: "Math/yx",
    year: "2026",
    genre: "Educativo",
    platform: "Android y Navegador Android",
    gifPath: mathyx,
    iconPath: iconmathyx,
    description:
      "Math/yx es un videojuego educativo móvil desarrollado en solitario en Unity, diseñado para que estudiantes de octavo grado superen el rechazo hacia las fracciones mediante gamificación, con una ruta interactiva inspirada en el Cerro Quitasol (Bello).",
    categories: ["Codificación", "Artista Técnica", "UX/UI", "Narrativa"],
    responsibilities: [
      "Integré los gráficos en una interfaz móvil horizontal táctil, diseñando el flujo visual de la ruta del Cerro Quitasol.",
      "Diseñé la UI con gamificación y refuerzo positivo (pistas y reintentos) para mejorar la retención sin penalizar el error.",
      "Optimicé el build para Android (LODs, lightmaps, compresión ASTC) con fallback offline en JSON.",
    ],
    playLink: "https://sofia-vc.itch.io/mathyx",
    repoLink: "#",
  },
  {
    id: "la-cosecha",
    name: "La Cosecha",
    year: "2025",
    genre: "Simulación",
    platform: "Android",
    gifPath: lacosecha,
    iconPath: iconlacosecha,
    description:
      "La Cosecha es un juego diseñado y programado pensando en la accesibilidad del adulto mayor de 60+ años, con un tablero interactivo de parcelas simétricas para el trabajo de memoria espacial y orientación, funcionando como herramienta de apoyo en pruebas médicas de Alzheimer.",
    categories: ["Codificación", "Artista Técnica", "UX/UI"],
    responsibilities: [
      "Diseñé y programé un tablero interactivo de parcelas simétricas para una interacción limpia y directa con elementos 2D y 3D.",
      "Di vida a las mecánicas de memoria espacial y orientación mediante retroalimentación visual clara (animaciones al seleccionar cultivos).",
      "Adapté la accesibilidad de la interfaz al adulto mayor, apoyando su uso como herramienta de soporte en pruebas médicas de Alzheimer.",
    ],
    playLink: "#",
    repoLink: "#",
  },
  /*/{
    id: "deep-diving",
    name: "Deep Diving",
    year: "2026",
    genre: "Survival",
    platform: "Navegador PC",
    gifPath: mathyx,
    iconPath: iconmathyx,
    description: "[Descripción general del juego — completar más tarde]",
    categories: [
      "Codificación",
      "Artista Técnica",
      "UX/UI",
      "Arte",
      "Narrativa",
    ],
    responsibilities: [
      "[Responsabilidad 1 — completar más tarde]",
      "[Responsabilidad 2 — completar más tarde]",
      "[Responsabilidad 3 — completar más tarde]",
    ],
    playLink: "https://nairbio.itch.io/deepdiving",
    repoLink: "https://github.com/9401Daniel/GAMEJAM-2_Deeper-Deeper",
  },
  {
    id: "fatal-mixture",
    name: "Fatal Mixture",
    year: "2026",
    genre: "[Género]",
    platform: "[Plataforma]",
    gifPath: mathyx,
    iconPath: iconmathyx,
    description: "[Descripción general del juego — completar más tarde]",
    categories: [
      "Codificación",
      "Artista Técnica",
      "UX/UI",
      "Arte",
      "Narrativa",
    ],
    responsibilities: [
      "[Responsabilidad 1 — completar más tarde]",
      "[Responsabilidad 2 — completar más tarde]",
      "[Responsabilidad 3 — completar más tarde]",
    ],
    playLink: "https://sofia-vc.itch.io/fatal-mixture",
    repoLink: "https://github.com/thisisvalen/GameJam-You-Shouldnt-Mix-Those.git",
  },*/
  {
    id: "axipet",
    name: "AxiPet",
    year: "2025",
    genre: "Mascota Virtual",
    platform: "Web",
    gifPath: axipet,
    iconPath: iconaxipet,
    description:
      "AxiPet es una mascota virtual tipo Tamagotchi de un ajolote en Pixel Art, desarrollada para la Virtual Pet GameJam, con una interfaz móvil colorida y atractiva pensada para todo público desde los 5 años.",
    categories: ["Codificación", "Artista Técnica", "Diseño de juego"],
    responsibilities: [
      "Programé la lógica interactiva del sistema de cuidados (alimentación, felicidad y edad) a partir de las tiras de animación en Pixel Art.",
      "Desarrollé los menús en pantalla de una interfaz móvil colorida y atractiva para todo público.",
      "Adapté el estilo retro (Pixel Art) a una experiencia de arte digital interactivo contemporánea.",
    ],
    playLink: "https://gamemostron.itch.io/axipet",
    repoLink: "https://github.com/felipearredondo08/AxiPetJam.git",
  },
  {
    id: "camino-a-la-calidad",
    name: "Camino a la Calidad",
    year: "2022",
    genre: "Educativo",
    platform: "Windows",
    gifPath: caminoalacalidad,
    iconPath: iconcaminoalacalidad,
    description:
      "Camino a la Calidad es una simulación interactiva con un enfoque de UI limpio y funcional, diseñada para guiar a profesores universitarios a través de los procesos de autoevaluación y acreditación de programas de educación superior en Colombia.",
    categories: ["Codificación", "Artista Técnica", "UX/UI", "Arte"],
    responsibilities: [
      "Diseñé la experiencia de usuario (UX) mediante escenas que integran preguntas de opción múltiple con simulación interactiva.",
      "Construí un flujo visual dinámico para guiar al usuario por los procesos de autoevaluación y acreditación.",
      "Apliqué ingeniería de software y diseño interactivo para gamificar un proceso institucional complejo.",
    ],
    playLink: "#",
    repoLink: "#",
  },
  {
    id: "energy-saving",
    name: "Energy Saving",
    year: "2019",
    genre: "Lógica",
    platform: "Windows",
    gifPath: energysaving,
    iconPath: iconenergysaving,
    description:
      "Energy Saving es un puzzle de lógica que traduce un algoritmo matemático en una interfaz minimalista: una matriz interactiva de bombillos donde cada clic altera el estado de las casillas vecinas, generando conciencia sobre el ahorro energético.",
    categories: ["Codificación", "Artista Técnica", "UX/UI", "Arte"],
    responsibilities: [
      "Programé y diseñé la matriz interactiva de bombillos y su lógica de alteración de casillas vecinas.",
      "Diseñé una paleta de colores contrastante y minimalista para una interfaz gráfica intuitiva.",
      "Implementé el sistema de instrucciones, intentos y tiempo en pantalla como herramienta de ejercicio lógico.",
    ],
    playLink: "#",
    repoLink: "#",
  },
];

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
      category: "Producción",
      items: [
        "Diseño de Juegos (Generalista)",
        "Diseño narrativo",
        "Gamificación",
        "Marco de trabajo Scrum",
        "Documentación de diseño",
      ],
    },
    {
      category: "Habilidades de poder",
      items: [
        "Liderazgo",
        "Trabajo en equipo",
        "Comunicación assertiva",
        "Detalle de atención",
        "Gestión de proyectos",
      ],
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
      category: "Control de Versiones",
      items: ["Gitflow", "GitHub", "GitLab", "CodeCommit"],
    },
    {
      category: "Producción",
      items: ["Trello", "Jira"],
    },
    {
      category: "Comunicación",
      items: ["Slack", "Discord", "Microsoft Teams"],
    },
    {
      category: "Productividad",
      items: ["GitHub Copilot", "DeepSeek", "Zed IDE"],
    },
  ],
};
