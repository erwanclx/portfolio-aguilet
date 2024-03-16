export const services_links = [
  {
    name: "Infogérance",
    link: "/prestations/infogerance",
    image: "/banners/accompagnement.jpg",
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
    image: "/banners/audit.jpg",
    subImages: [
      "/systeme.jpg",
      "/systeme.jpg",
      "/systeme.jpg",
      "/systeme.jpg",
      "/systeme.jpg",
    ],
    shortDescription:
      "Bénéficiez d'une infrastructure informatique performante, fiable et sécurisée, adaptée à vos besoins et à votre budget. Je vous accompagne dans la création, la mise en place et l'audit de votre infrastructure informatique.",
    texts: {
      first: {
        cards: [
          {
            title: "Une infrastructure sur mesure",
            picto: "/icons/prestations/infrastructure.svg",
            description:
              "Conçue pour répondre à vos besoins et à votre budget.",
          },
          {
            title: "Des solutions sécurisées",
            picto: "/icons/prestations/security.svg",
            description:
              "Pour protéger vos données et garantir la confidentialité de vos échanges.",
          },
          {
            title: "Des outils collaboratifs",
            picto: "/icons/prestations/collaboration.svg",
            description:
              "Pour faciliter le travail en équipe et l'échange de données.",
          },
          {
            title: "Un accompagnement personnalisé",
            picto: "/icons/prestations/support.svg",
            description:
              "Pour vous aider à faire les bons choix et à anticiper les évolutions.",
          },
        ],
      },
      second: {
        title: "Un accompagnement personnalisé",
        content:
          "Je vous accompagne dans la création, la mise en place et l'audit de votre infrastructure informatique. Le budget et les besoins de votre entreprise sont pris en compte pour vous proposer une solution adaptée et évolutive, garantissant une performance et une sécurité optimales.",
      },
    },
  },
  {
    name: "Développement sur mesure",
    link: "/prestations/developpement-sur-mesure",
    image: "/banners/dev.jpg",
    subImages: [
      "/systeme.jpg",
      "/systeme.jpg",
      "/systeme.jpg",
      "/systeme.jpg",
      "/systeme.jpg",
    ],
    shortDescription:
      "Bénéficiez d'une solution sur mesure, pour votre site web, application, plugins, automatisation ou tout autre besoin.",
    texts: {
      first: {
        cards: [
          {
            title: "Un développement selon vos besoins",
            picto: "/icons/prestations/development.svg",
            description:
              "Pour répondre à vos problématiques les plus spécifiques.",
          },
          {
            title: "Des solutions évolutives",
            picto: "/icons/prestations/evolution.svg",
            description: "Pour accompagner la croissance de votre activité.",
          },
          {
            title: "Un accompagnement personnalisé",
            picto: "/icons/prestations/support.svg",
            description:
              "Pour vous aider à faire les bons choix et à anticiper les évolutions.",
          },
          {
            title: "De l'optimisation et du SEO",
            picto: "/icons/prestations/seo.svg",
            description:
              "Pour un référencement naturel et une utilisation optimal.",
          },
        ],
      },
      second: {
        title: "Un suivi personnalisé",
        content:
          "Avec une maintenance régulière ou simplement des prestations ponctuelles, je vous accompagne dans l'évolution de votre solution et les résolutions de bugs, pour qu'elle reste toujours adaptée à vos besoins et à ceux de vos utilisateurs.",
      },
    },
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
