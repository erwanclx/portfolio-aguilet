export const services_links = [
  {
    name: "Infogérance",
    link: "/prestations/infogerance",
    image: "/systeme.jpg",
    subImages: [
      "/systeme.jpg",
      "/systeme.jpg",
      "/systeme.jpg",
      "/systeme.jpg",
      "/systeme.jpg",
    ],
    shortDescription:
      "Libérez-vous des tracas techniques et concentrez-vous sur l'essentiel de votre activité. Optez pour ma solution d'infogérance complète, garantissant une tranquillité d'esprit totale tout en maximisant la performance et la sécurité de votre infrastructure informatique.",
    texts: {
      first: {
        cards: [
          {
            title: "Une supervision complète",
            picto: "/icons/prestations/monitoring.svg",
            description:
              "Des métriques en temps réel mis en place pour une réactivité optimale.",
          },
          {
            title: "Des sauvegardes externalisées",
            picto: "/icons/prestations/backup.svg",
            description:
              "Dans de multiples destinations respectueuses du RGPD.",
          },
          {
            title: "Une assistance illimitée",
            picto: "/icons/prestations/support.svg",
            description: "Pour une tranquillité d'esprit totale.",
          },
          {
            title: "Un support réactif",
            picto: "/icons/prestations/bolt.svg",
            description: "Pour que votre activité ne soit jamais impactée.",
          },
        ],
      },
      second: {
        title: "Un accompagnement personnalisé",
        content:
          "La communication étant le point clé de toute bonne collaboration, des COTECHS et COPILS réguliers sont mis en place afin de vous tenir informé de l'état de votre infrastructure et des actions menées, tout en échangeant sur les évolutions à venir.",
      },
    },
  },
  {
    name: "Création et audit de votre infrastructure",
    link: "/prestations/creation-et-audit-de-votre-infrastructure",
    image: "/systeme.jpg",
    subImages: [
      "/systeme.jpg",
      "/systeme.jpg",
      "/systeme.jpg",
      "/systeme.jpg",
      "/systeme.jpg",
    ],
  },
  {
    name: "Développement sur mesure",
    link: "/prestations/developpement-sur-mesure",
    image: "/systeme.jpg",
    subImages: [
      "/systeme.jpg",
      "/systeme.jpg",
      "/systeme.jpg",
      "/systeme.jpg",
      "/systeme.jpg",
    ],
  },
];

export interface ServiceType {
  service: {
    name: string;
    image: string;
    subImages: string[];
    shortDescription: string;
    texts: {
      first: {
        cards: {
          title: string;
          picto: string;
          description: string;
        }[];
      };
      second: {
        title: string;
        content: string;
      };
    };
  };
}
