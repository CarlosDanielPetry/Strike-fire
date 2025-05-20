export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
  image: string;
  shortDescription: string;
  description: string;
  registration: {
    open: boolean;
    deadline: string;
    fee?: number;
    link?: string;
  };
  contact: {
    name: string;
    email: string;
    phone: string;
  };
}

export const eventsData: Event[] = [
  {
    id: "summer-competition-2025",
    title: "Competição de Verão 2025",
    date: "17-18 de Julho, 2025",
    time: "8:00 - 18:00",
    location: "Estande Principal",
    category: "Competição",
    image: "https://images.pexels.com/photos/8108097/pexels-photo-8108097.jpeg",
    shortDescription: "Competição anual de dois dias com eventos de pistola, rifle e espingarda com prêmios para os melhores colocados.",
    description: "Junte-se a nós para nossa Competição de Verão anual, um evento de dois dias com múltiplas disciplinas e divisões para atiradores de todos os níveis. O primeiro dia é focado em estágios de pistola e PCC, enquanto o segundo dia apresenta desafios de rifle e espingarda. Os eventos incluem tiro rápido, desafios de precisão e cenários táticos. Prêmios em dinheiro e doações de patrocinadores serão concedidos aos melhores colocados em cada divisão.",
    registration: {
      open: true,
      deadline: "10 de Julho, 2025",
      fee: 75,
      link: "/events/summer-competition-2025/register"
    },
    contact: {
      name: "James Martinez",
      email: "competitions@strikefire.com",
      phone: "(555) 123-4567"
    }
  },
  {
    id: "safety-certification-workshop",
    title: "Workshop de Certificação de Segurança",
    date: "22 de Junho, 2025",
    time: "9:00 - 15:00",
    location: "Centro de Treinamento",
    category: "Workshop",
    image: "https://images.pexels.com/photos/4033325/pexels-photo-4033325.jpeg",
    shortDescription: "Workshop abrangente de certificação de segurança obrigatório para novos membros do clube e recomendado para todos os atiradores.",
    description: "Este workshop fornece treinamento essencial de segurança e certificação necessária para novos membros do clube e altamente recomendado para todos os entusiastas de armas de fogo. O currículo abrange práticas seguras de manuseio, etiqueta de estande, procedimentos de emergência, conhecimento geral de armas de fogo e responsabilidades legais. Os participantes receberão instrução em sala de aula e prática prática com procedimentos de limpeza e manuseio seguro.",
    registration: {
      open: true,
      deadline: "18 de Junho, 2025",
      fee: 45,
      link: "/events/safety-certification-workshop/register"
    },
    contact: {
      name: "Sophia Chen",
      email: "safety@strikefire.com",
      phone: "(555) 123-4570"
    }
  },
  {
    id: "guest-instructor-seminar",
    title: "Treinamento Tático Avançado com John Blake",
    date: "12 de Julho, 2025",
    time: "9:00 - 17:00",
    location: "Estande Tático",
    category: "Evento Especial",
    image: "https://images.pexels.com/photos/5699526/pexels-photo-5699526.jpeg",
    shortDescription: "Oportunidade rara de treinar com o instrutor tático nacionalmente reconhecido John Blake em técnicas defensivas avançadas.",
    description: "Temos o orgulho de receber o renomado instrutor tático John Blake para este seminário exclusivo de um dia. John compartilhará técnicas avançadas desenvolvidas durante sua carreira de 20 anos em operações especiais e consultoria de segurança privada. Este curso de alta intensidade cobrirá manipulações avançadas de pistola, movimento tático, uso de cobertura, avaliação de ameaças e tomada de decisão sob estresse. Limitado a 12 participantes para garantir instrução personalizada.",
    registration: {
      open: true,
      deadline: "5 de Julho, 2025",
      fee: 299,
      link: "/events/guest-instructor-seminar/register"
    },
    contact: {
      name: "Robert Wilson",
      email: "training@strikefire.com",
      phone: "(555) 123-4569"
    }
  }
];