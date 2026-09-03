import type { AcademicItem } from '../types';
import { assetPath } from '../utils/assets';

export const academic: AcademicItem[] = [
  {
    id: 'pet-saude',
    title: { en: 'PET-Saúde', 'pt-BR': 'PET-Saúde' },
    category: { en: 'Health & Technology', 'pt-BR': 'Saúde & Tecnologia' },
    context: { en: 'GAT 4 — Vacina Conectada', 'pt-BR': 'GAT 4 — Vacina Conectada' },
    description: {
      en: 'A federal initiative connecting education, work and healthcare, with my participation focused on technology applied to health and software development.',
      'pt-BR': 'Iniciativa do Governo Federal voltada à integração entre educação, trabalho e saúde, com minha atuação focada em tecnologia aplicada à saúde e desenvolvimento de software.',
    },
    participation: {
      en: 'I am part of GAT 4 — Vacina Conectada. Within this context, I work on SIMI, the Information and Movement System for Immunobiologicals.',
      'pt-BR': 'Faço parte do GAT 4 — Vacina Conectada. Dentro desse contexto, atuo no desenvolvimento do SIMI, o Sistema de Informação e de Movimentação de Imunobiológicos.',
    },
    related: {
      title: { en: 'SIMI', 'pt-BR': 'SIMI' },
      subtitle: {
        en: 'Information and Movement System for Immunobiologicals',
        'pt-BR': 'Sistema de Informação e de Movimentação de Imunobiológicos',
      },
      description: {
        en: 'A software initiative inside PET-Saúde connected to vaccine stock management, immunobiological movement and cold-chain workflows.',
        'pt-BR': 'Iniciativa de software dentro do PET-Saúde conectada à gestão de estoque de vacinas, movimentação de imunobiológicos e fluxos da Rede de Frio.',
      },
      technologies: ['Spring Boot', 'Java', 'React', 'Vite', 'Tailwind CSS', 'PostgreSQL'],
      media: [
        {
          src: assetPath('/project/pet.png'),
          alt: {
            en: 'SIMI screen showing critical vaccine stock by health unit.',
            'pt-BR': 'Tela do SIMI exibindo estoque crítico de vacinas por unidade de saúde.',
          },
          caption: {
            en: 'Critical vaccine stock view.',
            'pt-BR': 'Visão de estoque crítico de vacinas.',
          },
        },
        {
          src: assetPath('/project/pet_saude.png'),
          alt: {
            en: 'SIMI screen with immunization indicators and stock charts.',
            'pt-BR': 'Tela do SIMI com indicadores de imunização e gráficos de estoque.',
          },
          caption: {
            en: 'Immunization indicators and stock overview.',
            'pt-BR': 'Indicadores de imunização e panorama de estoque.',
          },
        },
      ],
    },
  },
  {
    id: 'petlab',
    title: { en: 'PETLab', 'pt-BR': 'PETLab' },
    category: { en: 'Software / Veterinary Health', 'pt-BR': 'Software / Saúde Veterinária' },
    context: { en: 'Legacy system refactoring', 'pt-BR': 'Refatoração de sistema legado' },
    description: {
      en: 'Software development project for veterinary laboratory workflows, including requests, exams, results, reports and attachments.',
      'pt-BR': 'Projeto de desenvolvimento de software relacionado aos fluxos de um laboratório veterinário, incluindo requisições, exames, resultados, laudos e anexos.',
    },
    participation: {
      en: 'My work involves a complete refactoring of a legacy system, modernizing its implementation and rebuilding critical workflows over a more sustainable technical base.',
      'pt-BR': 'Minha atuação envolve a refatoração completa de um sistema legado, modernizando sua implementação e reconstruindo fluxos críticos sobre uma base técnica mais sustentável.',
    },
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Spring Boot', 'PostgreSQL'],
    media: [
      {
        src: assetPath('/project/legado_petlab.png'),
        alt: {
          en: 'Original PETLab legacy system home screen before modernization.',
          'pt-BR': 'Tela inicial do sistema legado original do PETLab antes da modernização.',
        },
        caption: {
          en: 'Legacy system — home screen.',
          'pt-BR': 'Sistema legado — tela inicial.',
        },
      },
      {
        src: assetPath('/project/petlab.jpeg'),
        alt: {
          en: 'PETLab rebuilt dashboard with operational indicators.',
          'pt-BR': 'Dashboard reconstruído do PETLab com indicadores operacionais.',
        },
        caption: {
          en: 'Refactor — current platform.',
          'pt-BR': 'Refatoração — plataforma atual.',
        },
      },
    ],
  },
  {
    id: 'lifat',
    title: { en: 'LIFAT — Liga de Farmacoterapia', 'pt-BR': 'LIFAT — Liga de Farmacoterapia' },
    category: { en: 'Academic Work', 'pt-BR': 'Atuação Acadêmica' },
    context: { en: 'Marketing and Communication', 'pt-BR': 'Marketing e Comunicação' },
    institution: {
      en: 'Universidade Federal de Ciências da Saúde de Porto Alegre — UFCSPA',
      'pt-BR': 'Universidade Federal de Ciências da Saúde de Porto Alegre — UFCSPA',
    },
    description: {
      en: 'Academic participation in LIFAT, connected to UFCSPA, with work in the Marketing and Communication group.',
      'pt-BR': 'Participação acadêmica na LIFAT, vinculada à UFCSPA, com atuação no grupo de Marketing e Comunicação.',
    },
    participation: {
      en: 'Content and social media post production for Liga de Farmacoterapia, along with coverage and promotion of academic events organized by the league.',
      'pt-BR': 'Produção de conteúdos e posts para as redes sociais da Liga de Farmacoterapia, além da cobertura e divulgação de eventos acadêmicos promovidos pela liga.',
    },
  },
  {
    id: 'urgencia-emergencia',
    title: { en: 'Urgência e Emergência', 'pt-BR': 'Urgência e Emergência' },
    category: { en: 'University Extension', 'pt-BR': 'Extensão Universitária' },
    context: { en: 'Extension project at UFCSPA', 'pt-BR': 'Projeto de Extensão na UFCSPA' },
    institution: {
      en: 'Universidade Federal de Ciências da Saúde de Porto Alegre — UFCSPA',
      'pt-BR': 'Universidade Federal de Ciências da Saúde de Porto Alegre — UFCSPA',
    },
    description: {
      en: 'University extension project related to Urgency and Emergency, connected to my Nursing education at UFCSPA.',
      'pt-BR': 'Projeto de extensão universitária relacionado à área de Urgência e Emergência, dentro do contexto da minha formação em Enfermagem na UFCSPA.',
    },
    participation: {
      en: 'Training for schools and healthcare services in Porto Alegre territories through educational actions on first aid and initial response in urgency and emergency situations, covering procedures and practices such as cardiopulmonary resuscitation (CPR), management of foreign-body airway obstruction, and related topics.',
      'pt-BR': 'Capacitação de escolas e serviços de saúde em territórios de Porto Alegre por meio de ações educativas sobre primeiros socorros e atendimento inicial em situações de urgência e emergência, abordando diferentes procedimentos e condutas, como reanimação cardiopulmonar (RCP) e manejo da obstrução de vias aéreas por corpo estranho (OVACE), entre outros.',
    },
  },
  {
    id: 'centro-academico',
    title: { en: 'Centro Acadêmico Florence Nightingale', 'pt-BR': 'Centro Acadêmico Florence Nightingale' },
    category: { en: 'Academic Leadership', 'pt-BR': 'Liderança Acadêmica' },
    context: { en: 'President', 'pt-BR': 'Presidente' },
    institution: {
      en: 'Universidade Federal de Ciências da Saúde de Porto Alegre — UFCSPA',
      'pt-BR': 'Universidade Federal de Ciências da Saúde de Porto Alegre — UFCSPA',
    },
    description: {
      en: 'Academic center for the Nursing course, where I act as President in a student representation and institutional participation context.',
      'pt-BR': 'Centro Acadêmico do Curso de Enfermagem, onde atuo como Presidente em um contexto de representação estudantil e participação institucional.',
    },
    participation: {
      en: 'As President of Centro Acadêmico Florence Nightingale, I coordinate the work of different areas of the organization, including Secretariat, Treasury, Marketing and Communication, Events and Products. I lead the main institutional agendas, administrative organization, financial follow-up, priority definition and coordination between directors. I also work directly on internal restructuring processes, such as reviewing the Academic Center statute, as well as planning and executing academic initiatives and events. One of these initiatives is the organization of the Nursing Course Academic Journey, conducted under my administration. This experience involves leadership, team management, decision-making, financial organization, strategic planning and student representation within the UFCSPA academic community.',
      'pt-BR': 'Como Presidente do Centro Acadêmico Florence Nightingale, coordeno a atuação dos diferentes setores da entidade, incluindo Secretaria, Tesouraria, Marketing e Comunicação, Eventos e Produtos. Sou responsável pela condução das principais pautas institucionais, organização administrativa, acompanhamento financeiro, definição de prioridades e articulação entre as diretorias. Também atuo diretamente em processos de reestruturação interna, como a revisão do estatuto do Centro Acadêmico, além do planejamento e execução de iniciativas acadêmicas e eventos. Entre essas ações, está a organização da Jornada Acadêmica do Curso de Enfermagem, conduzida sob minha gestão. A experiência envolve liderança, gestão de equipe, tomada de decisão, organização financeira, planejamento estratégico e representação estudantil junto à comunidade acadêmica da UFCSPA.',
    },
  },
];
