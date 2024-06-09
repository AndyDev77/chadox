export const headerData = {
  logo: "/img/header/logo.gif",
};

export const navData = [
  {
    label: "Accueil",
    route: "/",
  },
  {
    label: "A propos",
    route: "#about",
  },
  {
    label: "Contact",
    route: "#contact",
  },
];

export const navDataConnect = [
  {
    label: "Accueil",
    route: "/",
  },
  {
    label: "Ajouter une vidéo",
    route: "/events/create",
  },
  // {
  //   label: "Projets",
  //   route: "/projects",
  // },
  {
    label: "Mon Profile",
    route: "/profile",
  },
];

export const headerLinks = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "Ajouter une vidéo",
    route: "/events/create",
  },
  {
    label: "Mon Profile",
    route: "/profile",
  },
];

export const socialData = [
  {
    href: "https://www.instagram.com/chadox_production?igsh=eGdrcTc5NHhwM3ph",
    icon: "/img/icons/instagram.svg",
    target: "_blank",
  },
  // { href: "/", icon: "/img/icons/linkedin.svg" },
];

export const heroData = {
  title: "Thomas Delangle",
  subtitle:
    "Une fusion artistique et technique captivante, où chaque projet raconte une histoire immersive avec des montages fluides et une attention aux détails.",
  btnText: "Télécharger mon CV",
};

export const aboutData = {
  title: "Mon histoire:",
  subtitle1:
    "Je suis passionné par l'art de donner vie aux images à travers la post-production vidéo. Mon parcours est marqué par une exploration constante des possibilités offertes par les logiciels Adobe Premiere Pro et After Effects.",
  subtitle2:
    "Mon objectif principal est d'élargir mes compétences et de perfectionner mon art à travers une opportunité de stage dans le domaine de la post-production. Chaque projet sur lequel j'ai travaillé jusqu'à présent a été une source d'apprentissage et de croissance, et je suis convaincu que le mentorat et l'expérience pratique offerts par un stage me permettront de continuer à évoluer en tant que professionnel.",
  btnText: "En savoir plus",
};

export const ProjectsData = {
  title: "Mes projets",
  btnText: "Voir les projets",
  play: "/img/icons/play.svg",
  images: [
    {
      src: "/img/gallery/audi.jpg",
      name: "Audi",
      category: "Première Pro",
      video:
        "https://player.vimeo.com/video/928310629?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    },
    {
      src: "/img/gallery/audi.jpg",
      name: "Coffre et Cartes",
      category: "After Effect",
      video:
        "https://player.vimeo.com/video/928383551?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    },
    {
      src: "/img/gallery/audi.jpg",
      name: "Main",
      category: "After Effect",
      video:
        "https://player.vimeo.com/video/928322999?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    },
    // {
    //   src: "/img/gallery/true.jpg",
    //   name: "True Detective",
    //   category: "After Effect",
    //   video:
    //     "https://player.vimeo.com/video/928324697?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    // },
    // {
    //   src: "/img/gallery/garage.jpg",
    //   name: "Pub garage",
    //   category: "Première Pro",
    //   video:
    //     "https://player.vimeo.com/video/928325720?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    // },
    // {
    //   src: "/img/gallery/amour.jpg",
    //   name: "VF amour pas simple",
    //   category: "Première Pro",
    //   video:
    //     "https://player.vimeo.com/video/928385356?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    // },
    // {
    //   src: "/img/gallery/montre.jpg",
    //   name: "Montre",
    //   category: "Première Pro",
    //   video:
    //     "https://player.vimeo.com/video/928382336?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    // },
    // {
    //   src: "/img/gallery/logoMoissy.png",
    //   name: "Moissy Strat-et-Jeux",
    //   category: "After Effect",
    //   video:
    //     "https://player.vimeo.com/video/928387869?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
    // },
  ],
};

export const interviewData = {
  title:
    "“Bienvenue dans ma quête incessante de créativité et d'innovation dans le domaine de la post-production vidéo.”",
  btnText: "Regarder maintenant",
};

export const contactData = {
  title: "Contactez-moi",
  info: [
    {
      title: "N'hésitez pas !",
      subtitle:
        "Si vous voulez discuter d'opportunités de stage, de collaboration ou tout autre projet créatif. Je suis impatient d'échanger avec vous !",
      address: {
        name: "28 route Mauny, Limoges-Fourches, 77550",
      },
      phone: {
        number: "06 95 32 57 14",
      },
      email: {
        address: "thom.delangle@gmail.com",
      },
    },
  ],
};

export const footerData = {
  about: {
    title: "Thomas Delangle",
    subtitle:
      "Dans un monde où chaque pixel compte, je suis passionné par l'art de transformer des visions en réalité",
    address: {
      name: "28 route Mauny, Limoges-Fourches, 77550",
    },
    phone: {
      number: "06 95 32 57 14",
    },
    email: {
      address: "thom.delangle@gmail.com",
    },
  },
  links: {
    title: "Site internet",
    items: [
      { href: "/", name: "Accueil" },
      { href: "#about", name: "A propos" },
      { href: "/", name: "Projets" },
      { href: "#contact", name: "Contact" },
    ],
  },
  program: {
    title: "Mes disponibilités",
    items: [{ name: "Lundi - Mardi: 10h-17h " }, { name: "Mercredi - Vendredi: 13h-18h " }],
  },
};

export const eventDefaultValues = {
  title: "",
  description: "",
  location: "",
  imageUrl: "",
  startDateTime: new Date(),
  endDateTime: new Date(),
  categoryId: "",
  price: "",
  isFree: false,
  url: "",
};
