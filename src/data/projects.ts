import type { Project } from '../types';
import { assetPath } from '../utils/assets';

export const projects: Project[] = [
  {
    id: 'tatamiapp',
    slug: 'tatamiapp',
    name: 'TatamiApp',
    tagline: {
      en: 'Platform modernization for martial arts academy management.',
      'pt-BR': 'Modernização de plataforma para gestão de academias de artes marciais.',
    },
    summary: {
      en: 'Modernization of a production platform for martial arts academies, evolving a legacy Angular and Laravel system into a newer React, Vite, Spring Boot and PostgreSQL architecture, with a mobile app built in Expo.',
      'pt-BR': 'Modernização de uma plataforma em produção para academias de artes marciais, evoluindo um sistema legado em Angular e Laravel para uma nova arquitetura com React, Vite, Spring Boot e PostgreSQL, além de uma aplicação mobile em Expo.',
    },
    category: {
      en: 'Product engineering',
      'pt-BR': 'Engenharia de produto',
    },
    organization: 'Tatami App',
    role: {
      en: 'Software Development Engineer',
      'pt-BR': 'Engenheiro de Desenvolvimento de Software',
    },
    year: '2024',
    status: {
      en: 'Current',
      'pt-BR': 'Atual',
    },
    problem: {
      en: 'Tatami App was already in production when I joined the project. The legacy application supported academy management workflows, but its Angular frontend, Laravel backend and PostgreSQL data layer needed continuous maintenance and evolution.',
      'pt-BR': 'O Tatami App já estava em produção quando entrei no projeto. A aplicação legada apoiava fluxos de gestão de academias, mas seu frontend em Angular, backend em Laravel e banco PostgreSQL exigiam manutenção e evolução contínuas.',
    },
    solution: {
      en: 'I later led a complete refactoring of the platform, rebuilding the architecture and interface with React and Vite on the frontend, Spring Boot on the backend and PostgreSQL for persistence. I also developed the Tatami App mobile application with Expo, expanding the platform ecosystem to mobile devices.',
      'pt-BR': 'Posteriormente, fui responsável pela refatoração completa da plataforma, reconstruindo sua arquitetura e interface com React e Vite no frontend, Spring Boot no backend e PostgreSQL para persistência de dados. Também desenvolvi a aplicação mobile do Tatami App com Expo, ampliando o ecossistema da plataforma para dispositivos móveis.',
    },
    engineering: {
      en: [
        'Maintenance and evolution of the production legacy application.',
        'Frontend modernization from Angular to React with Vite.',
        'Backend refactoring from Laravel/PHP toward Spring Boot with Java.',
        'PostgreSQL remained part of the data persistence layer across the platform evolution.',
        'Mobile application development with Expo.',
      ],
      'pt-BR': [
        'Manutenção e evolução da aplicação legada em produção.',
        'Modernização do frontend de Angular para React com Vite.',
        'Refatoração do backend de Laravel/PHP para Spring Boot com Java.',
        'PostgreSQL permaneceu como parte da camada de persistência ao longo da evolução da plataforma.',
        'Desenvolvimento da aplicação mobile com Expo.',
      ],
    },
    screenshots: [
      {
        src: assetPath('/project/legado_tatami.png'),
        alt: {
          en: 'Legacy Tatami App screen showing academy setup and Stripe payment configuration.',
          'pt-BR': 'Tela legada do Tatami App exibindo configuração da academia e recebimento via Stripe.',
        },
        caption: {
          en: 'Legacy platform — academy setup flow.',
          'pt-BR': 'Plataforma legada — fluxo de configuração da academia.',
        },
      },
    ],
    technologies: ['Angular', 'Laravel', 'PHP', 'React', 'Vite', 'Spring Boot', 'Java', 'PostgreSQL', 'Expo', 'Cypress'],
    featured: true,
  },
  {
    id: 'petlab',
    slug: 'petlab',
    name: 'PETLab',
    tagline: {
      en: 'Complete modernization of a legacy veterinary diagnostics system.',
      'pt-BR': 'Modernização completa de um sistema legado para diagnóstico veterinário.',
    },
    summary: {
      en: 'Complete rebuild of a legacy laboratory platform, reconstructing frontend, backend and data architecture while preserving and evolving critical veterinary diagnostics workflows.',
      'pt-BR': 'Refatoração completa de uma plataforma laboratorial legada, reconstruindo frontend, backend e arquitetura de dados enquanto preserva e evolui fluxos críticos de diagnóstico veterinário.',
    },
    category: {
      en: 'Health technology',
      'pt-BR': 'Tecnologia em saúde',
    },
    role: {
      en: 'Full-stack development',
      'pt-BR': 'Desenvolvimento Full Stack',
    },
    year: '2026 - Present',
    status: {
      en: 'In development',
      'pt-BR': 'Em desenvolvimento',
    },
    description: {
      en: 'PETLab is a complete modernization project for a legacy system used in the operation of a veterinary laboratory. The work rebuilds the application with modern technologies, reviews its architecture and turns old flows into a more consistent, scalable and maintainable experience without losing the business rules accumulated over years of use.',
      'pt-BR': 'O PETLab é um projeto de modernização completa de um sistema legado utilizado na operação de um laboratório veterinário. O trabalho envolve reconstruir a aplicação com tecnologias modernas, revisar sua arquitetura e transformar fluxos antigos em uma experiência mais consistente, escalável e sustentável, sem perder as regras de negócio acumuladas ao longo da utilização do sistema.',
    },
    problem: {
      en: 'The legacy system concentrates essential laboratory routines, including requests, exams, results, attachments, reports, clients and operational monitoring. As the lab needs grew, the existing architecture and interface started limiting product evolution.',
      'pt-BR': 'O sistema legado concentra processos essenciais da rotina laboratorial, incluindo requisições, exames, resultados, anexos, laudos, clientes e acompanhamento da operação. Com o crescimento das necessidades do laboratório, a arquitetura e a interface existentes passaram a limitar a evolução do produto.',
    },
    solution: {
      en: 'The platform is being rebuilt with React, Vite and Tailwind CSS on the frontend, Spring Boot on the backend and PostgreSQL for persistence. The new version reorganizes the main application flows, improves user experience and creates a stronger technical base for maintenance and expansion.',
      'pt-BR': 'A plataforma está sendo completamente reconstruída utilizando React com Vite e Tailwind CSS no frontend, Spring Boot no backend e PostgreSQL para persistência de dados. A nova versão reorganiza os principais fluxos da aplicação, melhora a experiência dos usuários e estabelece uma base técnica mais preparada para manutenção e expansão.',
    },
    engineering: {
      en: [
        'Reconstruction of the interface and flows from the legacy system.',
        'Modeling and evolution of business rules accumulated in the existing product.',
        'API development with Spring Boot and data modeling with PostgreSQL.',
        'Frontend development with React, Vite and Tailwind CSS.',
        'Progressive migration from a legacy application to a modern, maintainable architecture.',
      ],
      'pt-BR': [
        'Reconstrução da interface e dos fluxos do sistema legado.',
        'Modelagem e evolução das regras de negócio acumuladas no produto existente.',
        'Desenvolvimento de APIs com Spring Boot e modelagem de dados com PostgreSQL.',
        'Desenvolvimento do frontend com React, Vite e Tailwind CSS.',
        'Migração progressiva de uma aplicação legada para uma arquitetura moderna e sustentável.',
      ],
    },
    screenshots: [
      {
        src: assetPath('/project/legado_petlab.png'),
        alt: {
          en: 'Original PETLab legacy system home screen before modernization.',
          'pt-BR': 'Tela inicial do sistema legado original do PETLab antes da modernização.',
        },
        caption: {
          en: 'Legacy system - home screen.',
          'pt-BR': 'Sistema legado — tela inicial.',
        },
      },
      {
        src: assetPath('/project/petlab.jpeg'),
        alt: {
          en: 'PETLab dashboard with registered requests, pending reports, completed flow and cost indicators.',
          'pt-BR': 'Dashboard do PETLab com requisições cadastradas, laudos pendentes, fluxo finalizado e indicadores de custo.',
        },
        caption: {
          en: 'New platform - operational dashboard.',
          'pt-BR': 'Nova plataforma — dashboard operacional.',
        },
      },
    ],
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Spring Boot', 'PostgreSQL'],
    featured: true,
  },
  {
    id: 'simi',
    slug: 'simi',
    name: 'SIMI / PET Saúde',
    tagline: {
      en: 'A vaccine stock management platform for public health workflows.',
      'pt-BR': 'Plataforma de gestão de estoque de vacinas para fluxos de saúde pública.',
    },
    summary: {
      en: 'SIMI is a digital application prototype for managing vaccine stock, integrating cold-chain routines, reports, dashboards and automatic stock calculations.',
      'pt-BR': 'O SIMI é um protótipo de aplicação digital para gerenciamento de estoque de vacinas, integrando rotinas da Rede de Frio, relatórios, dashboards e cálculo automático de estoque.',
    },
    category: {
      en: 'Digital health',
      'pt-BR': 'Saúde digital',
    },
    organization: 'PET Saúde',
    role: {
      en: 'Software development',
      'pt-BR': 'Desenvolvimento de software',
    },
    year: 'Jul 2025 - Jul 2027',
    status: {
      en: 'In development and being pivoted for internal use at IAPI and Beira-Rio immunization centers',
      'pt-BR': 'Em desenvolvimento e pivotagem para uso interno nos centros de imunização IAPI e Beira-Rio',
    },
    description: {
      en: 'A functional web platform developed with modules for report data extraction, dashboards and automatic stock calculation for immunobiologicals.',
      'pt-BR': 'Plataforma web funcional desenvolvida com módulos de extração de dados de relatórios, dashboards e cálculo automático de estoque de imunobiológicos.',
    },
    problem: {
      en: 'Immunization centers need better visibility over vaccine stock, critical inventory, doses applied and avoidable losses across cold-chain operations.',
      'pt-BR': 'Núcleos de imunizações precisam de melhor visibilidade sobre estoque de vacinas, itens críticos, doses aplicadas e perdas evitáveis nas operações da Rede de Frio.',
    },
    solution: {
      en: 'The prototype supports stock management through vaccine dashboards, inventory movement screens, detailed reports and automatic calculations designed to qualify the work of immunization centers in Porto Alegre.',
      'pt-BR': 'O protótipo apoia a gestão de estoque por meio de dashboards de vacinas, telas de movimentação de inventário, relatórios detalhados e cálculos automáticos voltados a qualificar o trabalho dos Núcleos de Imunizações de Porto Alegre.',
    },
    engineering: {
      en: [
        'Dashboard views consolidate immunization indicators, stock levels and loss causes.',
        'Inventory screens expose critical stock by health unit, vaccine and period.',
        'Report modules organize extracted data into detailed stock tables.',
      ],
      'pt-BR': [
        'Dashboards consolidam indicadores de imunização, níveis de estoque e causas de perda.',
        'Telas de inventário exibem estoque crítico por unidade de saúde, vacina e período.',
        'Módulos de relatório organizam os dados extraídos em tabelas detalhadas de estoque.',
      ],
    },
    screenshots: [
      {
        src: assetPath('/project/pet.png'),
        alt: {
          en: 'SIMI dashboard showing critical vaccine stock by health unit.',
          'pt-BR': 'Dashboard do SIMI exibindo estoque crítico de vacinas por unidade de saúde.',
        },
        caption: {
          en: 'Critical vaccine stock dashboard.',
          'pt-BR': 'Dashboard de estoque crítico de vacinas.',
        },
      },
      {
        src: assetPath('/project/pet_saude.png'),
        alt: {
          en: 'SIMI immunization indicators dashboard with vaccine loss and stock charts.',
          'pt-BR': 'Dashboard de indicadores de imunização do SIMI com gráficos de perdas e estoque.',
        },
        caption: {
          en: 'Immunization indicators and stock overview.',
          'pt-BR': 'Indicadores de imunização e panorama de estoque.',
        },
      },
      {
        src: assetPath('/project/relatorio_pet.png'),
        alt: {
          en: 'SIMI detailed vaccine stock report table.',
          'pt-BR': 'Tabela de relatório detalhado de estoque de vacinas do SIMI.',
        },
        caption: {
          en: 'Detailed stock report.',
          'pt-BR': 'Relatório detalhado de estoque.',
        },
      },
    ],
    technologies: ['Spring Boot', 'Java', 'React', 'Vite', 'Tailwind CSS', 'PostgreSQL'],
    featured: true,
  },
  {
    id: 'collaborative-project',
    slug: 'collaborative-project',
    name: 'Collaborative project',
    tagline: {
      en: 'A real project developed with my brother.',
      'pt-BR': 'Projeto real desenvolvido com meu irmão.',
    },
    summary: {
      en: 'Project details are not yet available for a public case study.',
      'pt-BR': 'Os detalhes do projeto ainda não estão disponíveis para um case público.',
    },
    category: {
      en: 'Product development',
      'pt-BR': 'Desenvolvimento de produto',
    },
    status: {
      en: 'Private',
      'pt-BR': 'Privado',
    },
    technologies: [],
    featured: false,
  },
];
