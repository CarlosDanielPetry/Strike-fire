export interface Course {
  id: string;
  title: string;
  level: string;
  price: number;
  duration: string;
  image: string;
  shortDescription: string;
  description: string;
  prerequisites: string[];
  included: string[];
  schedule: {
    upcoming: {
      date: string;
      time: string;
      availability: string;
    }[];
  };
  instructor: {
    name: string;
    bio: string;
  };
}

export const coursesData: Course[] = [
  {
    id: "beginner-pistol",
    title: "Curso de Pistola para Iniciantes",
    level: "Iniciante",
    price: 199,
    duration: "8 horas (1 dia)",
    image: "https://images.pexels.com/photos/936238/pexels-photo-936238.jpeg",
    shortDescription: "Introdução perfeita à segurança de armas de fogo e pontaria básica para atiradores iniciantes.",
    description: "Este curso abrangente de um dia é projetado especificamente para indivíduos com pouca ou nenhuma experiência com armas de fogo. Você aprenderá protocolos essenciais de segurança, técnicas adequadas de manuseio, princípios fundamentais de tiro e ganhará experiência prática em um ambiente controlado sob supervisão especializada. Ao final do dia, você terá a confiança e o conhecimento necessários para manusear uma pistola com segurança.",
    prerequisites: [
      "Nenhuma experiência prévia necessária",
      "Deve ter pelo menos 21 anos",
      "Documento de identificação válido necessário"
    ],
    included: [
      "Todo o equipamento de segurança necessário (proteção ocular e auricular)",
      "Arma de fogo e munição para uso em aula",
      "Materiais do curso e apostilas",
      "Certificado de conclusão"
    ],
    schedule: {
      upcoming: [
        {
          date: "15 de Junho, 2025",
          time: "9:00 - 17:00",
          availability: "Disponível"
        },
        {
          date: "6 de Julho, 2025",
          time: "9:00 - 17:00",
          availability: "Disponível"
        },
        {
          date: "27 de Julho, 2025",
          time: "9:00 - 17:00",
          availability: "Vagas limitadas"
        }
      ]
    },
    instructor: {
      name: "Roberto Wilson",
      bio: "Ex-instrutor militar com mais de 25 anos de experiência treinando iniciantes e profissionais."
    }
  },
  {
    id: "defensive-shooting",
    title: "Táticas de Tiro Defensivo",
    level: "Intermediário",
    price: 299,
    duration: "16 horas (2 dias)",
    image: "https://images.pexels.com/photos/7887880/pexels-photo-7887880.jpeg",
    shortDescription: "Aprenda habilidades práticas de tiro defensivo e tomada de decisão tática em vários cenários.",
    description: "Este curso intermediário de dois dias concentra-se no desenvolvimento de habilidades de tiro defensivo em cenários realistas. Os alunos aprenderão movimento tático, tiro a partir de várias posições, uso de cobertura e ocultação, avaliação de ameaças e tomada de decisão sob estresse. O curso combina instrução em sala de aula com extenso tempo no estande e treinamento baseado em cenários.",
    prerequisites: [
      "Conclusão do Curso de Pistola para Iniciantes ou experiência equivalente",
      "Deve ter pelo menos 21 anos",
      "Própria arma de fogo e coldre (aluguel disponível)"
    ],
    included: [
      "Equipamento de segurança",
      "Alvos e auxílios de treinamento",
      "200 munições",
      "Almoço nos dois dias",
      "Certificado de conclusão"
    ],
    schedule: {
      upcoming: [
        {
          date: "22-23 de Junho, 2025",
          time: "8:30 - 16:30",
          availability: "Disponível"
        },
        {
          date: "20-21 de Julho, 2025",
          time: "8:30 - 16:30",
          availability: "Vagas limitadas"
        }
      ]
    },
    instructor: {
      name: "James Martinez",
      bio: "Ex-instrutor tático de forças policiais com vasta experiência em instrução de tiro defensivo."
    }
  },
  {
    id: "competition-prep",
    title: "Preparação para Competição",
    level: "Avançado",
    price: 349,
    duration: "16 horas (2 dias)",
    image: "https://images.pexels.com/photos/8108097/pexels-photo-8108097.jpeg",
    shortDescription: "Curso avançado para atiradores que desejam aprimorar suas habilidades para esportes de tiro competitivo.",
    description: "Este curso avançado prepara os atiradores para o exigente mundo do tiro esportivo competitivo. Aprenda técnicas especializadas para melhorar a precisão, velocidade e consistência sob condições de competição. O currículo abrange otimização de equipamentos, estratégia de competição, preparação mental e exercícios avançados projetados para reduzir segundos do seu tempo mantendo a precisão.",
    prerequisites: [
      "Proficiência de tiro de nível intermediário",
      "Compreensão da mecânica e segurança de armas de fogo",
      "Própria arma de fogo adequada para competição",
      "Experiência prévia em competições recomendada"
    ],
    included: [
      "Uso e análise de timer profissional",
      "Análise em vídeo da técnica de tiro",
      "Alvos e estágios estilo competição",
      "300 munições de grau match",
      "Guia de preparação para competição"
    ],
    schedule: {
      upcoming: [
        {
          date: "13-14 de Julho, 2025",
          time: "8:00 - 17:00",
          availability: "Disponível"
        },
        {
          date: "10-11 de Agosto, 2025",
          time: "8:00 - 17:00",
          availability: "Disponível"
        }
      ]
    },
    instructor: {
      name: "Sarah Williams",
      bio: "Campeã nacional com 15 anos de experiência em múltiplas disciplinas de tiro."
    }
  }
];