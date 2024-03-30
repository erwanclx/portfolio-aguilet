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
              // "Des métriques en temps réel mis en place pour une réactivité optimale.",
              "Une surveillance proactive et détaillée de votre infrastructure informatique, pour une réactivité optimale et une disponibilité maximale.",
          },
          {
            title: "Des sauvegardes externalisées",
            picto: "/icons/prestations/backup.svg",
            description:
              // "Dans de multiples destinations respectueuses du RGPD.",
              "Même dans les situations les plus critiques, vos données sont protégées et récupérables dans de multiples destinations respectueuses du RGPD.",
          },
          {
            title: "Une assistance selon vos besoins",
            picto: "/icons/prestations/support.svg",
            // description: "Pour une tranquillité d'esprit totale.",
            description:
              "Pour une tranquillité d'esprit totale, je vous propose un support réactif et personnalisé, adapté à vos besoins et à votre budget.",
          },
          {
            title: "Un support réactif",
            picto: "/icons/prestations/bolt.svg",
            description:
              "Pour que votre activité ne soit jamais impactée, un support réactif est mis en place pour répondre à vos besoins en temps réel.",
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
              "Cloud, on-premise, hybride, je vous offre des solutions informatiques taillées sur mesure, conçues pour répondre précisément à vos besoins et à ceux de votre entreprise.",
          },
          {
            title: "Des solutions sécurisées",
            picto: "/icons/prestations/security.svg",
            description:
              "Pour protéger vos données et garantir la confidentialité de vos échanges, je vous propose des solutions de sécurité adaptées à votre activité tout en vous permettant une adapatabilité et une évolutivité optimale.",
          },
          {
            title: "Des outils collaboratifs",
            picto: "/icons/prestations/collaboration.svg",
            description:
              "Pour faciliter le travail en équipe et l'échange de données, des outils collaboratifs sont mis en place pour une communication optimale et une productivité accrue.",
          },
          {
            title: "Des solutions évolutives",
            picto: "/icons/prestations/support.svg",
            description:
              "En constante évolution, votre infrastructure informatique est conçue pour s'adapter à vos besoins et à ceux de votre entreprise. Scalabilité, performance et sécurité sont les maîtres mots.",
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
              // "Pour répondre à vos problématiques les plus spécifiques.",
              "Pour répondre à vos problématiques les plus spécifiques, je vous propose des solutions sur mesure, adaptées à vos besoins et à ceux de votre entreprise.",
          },
          {
            title: "Des solutions évolutives",
            picto: "/icons/prestations/evolution.svg",
            // description: "Pour accompagner la croissance de votre activité.",
            description:
              "Pour accompagner la croissance de votre activité, vos solutions sont conçues pour être évolutives et rapidement déployables.",
          },
          {
            title: "Un accompagnement personnalisé",
            picto: "/icons/prestations/support.svg",
            description:
              "Une simple idée ? Je vous offre ma réflexion et mon expertise pour la concrétiser, en vous accompagnant dans le processus de recherche et de développement de votre solution.",
          },
          {
            title: "De l'optimisation et du SEO",
            picto: "/icons/prestations/seo.svg",
            description:
              "Rapidité, performance, référencement, je vous propose des solutions optimisées,",
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
