import type { Experience } from '../types';

export const experience: Experience[] = [
  {
    company: 'Tatami App',
    role: {
      en: 'Software Development Engineer',
      'pt-BR': 'Engenheiro de Desenvolvimento de Software',
    },
    start: '2023-12-01',
    current: true,
    employment: {
      en: 'Self-employed / Contractor',
      'pt-BR': 'Autônomo / Contrato',
    },
    location: {
      en: 'Porto Alegre, Rio Grande do Sul, Brazil · Remote',
      'pt-BR': 'Porto Alegre, Rio Grande do Sul, Brasil · Remoto',
    },
    context: {
      en: 'Full-cycle work on a product for managing martial arts academies and dojos.',
      'pt-BR': 'Atuação full-cycle em um produto para gestão de academias de artes marciais e dojos.',
    },
    description: {
      en: 'Work across product development, frontend, backend, APIs, application logic, quality and testing. The product and technical work have evolved over time.',
      'pt-BR': 'Atuação em desenvolvimento de produto, frontend, backend, APIs, lógica de aplicação, qualidade e testes. O produto e o trabalho técnico evoluíram ao longo do tempo.',
    },
    responsibilities: {
      en: ['Frontend and backend development', 'API and application logic work', 'Cypress, integration and manual testing'],
      'pt-BR': ['Desenvolvimento frontend e backend', 'Trabalho em APIs e lógica de aplicação', 'Testes com Cypress, integração e validação manual'],
    },
    technologies: ['Angular', 'TypeScript', 'Laravel', 'PHP', 'Cypress'],
  },
  {
    company: 'WEX',
    role: {
      en: 'Software Engineer',
      'pt-BR': 'Software Engineer',
    },
    start: '2023-01-01',
    end: '2024-01-31',
    employment: {
      en: 'Full-time',
      'pt-BR': 'Tempo integral',
    },
    location: {
      en: 'Portland, Oregon, United States · Remote',
      'pt-BR': 'Portland, Oregon, Estados Unidos · Remoto',
    },
    context: {
      en: 'Quality Engineering and automation within the Bulk-Krak team.',
      'pt-BR': 'Quality Engineering e automação no time Bulk-Krak.',
    },
    description: {
      en: 'Focused on web interface and web service test automation, QA process documentation and data-backed validation of application improvements.',
      'pt-BR': 'Foco em automação de testes para interfaces web e web services, documentação de processos de QA e validação de melhorias com apoio em dados.',
    },
    responsibilities: {
      en: ['Robot Framework with Python and Selenium with Java', 'QA process documentation in Confluence', 'Oracle and PostgreSQL queries', 'Collaboration on unit tests and Agile ceremonies', 'Web service automation with SoapUI'],
      'pt-BR': ['Robot Framework com Python e Selenium com Java', 'Documentação de processos de QA no Confluence', 'Consultas em Oracle e PostgreSQL', 'Colaboração em testes unitários e cerimônias ágeis', 'Automação de web services com SoapUI'],
    },
    technologies: ['Robot Framework', 'Python', 'Selenium', 'Java', 'Oracle', 'PostgreSQL', 'SoapUI'],
  },
  {
    company: 'Qintess',
    role: {
      en: 'Software QA Engineer',
      'pt-BR': 'Software QA Engineer',
    },
    start: '2022-09-01',
    end: '2023-02-28',
    employment: {
      en: 'Full-time',
      'pt-BR': 'Tempo integral',
    },
    context: {
      en: "Quality Engineering work for DELL's Treasury department.",
      'pt-BR': 'Atuação em Quality Engineering para a área de Treasury da DELL.',
    },
    description: {
      en: 'Supported CI/CD processes and QA releases while contributing to automated testing, process documentation and validation through data.',
      'pt-BR': 'Apoio a processos de CI/CD e releases de QA, com contribuições em testes automatizados, documentação de processos e validação por dados.',
    },
    responsibilities: {
      en: ['Azure-based CI/CD management and QA deployments', 'Selenium with Java and REST API validation', 'Confluence documentation', 'Oracle and MongoDB validation', 'GitLab pipelines integrated with Azure'],
      'pt-BR': ['Gestão de CI/CD no Azure e deployments de QA', 'Selenium com Java e validação de APIs REST', 'Documentação no Confluence', 'Validação em Oracle e MongoDB', 'Pipelines GitLab integradas ao Azure'],
    },
    technologies: ['Azure', 'Selenium', 'Java', 'Oracle', 'MongoDB', 'GitLab', 'REST APIs'],
  },
  {
    company: '+A Educação',
    role: {
      en: 'Mid-Level Test Analyst',
      'pt-BR': 'Analista de Testes Pleno',
    },
    start: '2022-01-01',
    end: '2022-10-31',
    context: {
      en: 'Quality Assurance ownership for the ArtMed 360 team.',
      'pt-BR': 'Responsabilidade de Quality Assurance no time ArtMed 360.',
    },
    description: {
      en: 'Planned and analyzed tests, improved quality processes and investigated bugs and root causes across API and end-to-end scenarios.',
      'pt-BR': 'Planejamento e análise de testes, melhoria de processos de qualidade e investigação de bugs e causas raiz em cenários de API e ponta a ponta.',
    },
    responsibilities: {
      en: ['Test planning and case analysis', 'API automation with Postman', 'E2E and integration testing with Cypress and Selenium', 'BDD, bug analysis and root-cause analysis', 'Agile, Azure DevOps and Kanban'],
      'pt-BR': ['Planejamento de testes e análise de cenários', 'Automação de API com Postman', 'Testes E2E e de integração com Cypress e Selenium', 'BDD, análise de bugs e investigação de causa raiz', 'Agile, Azure DevOps e Kanban'],
    },
    technologies: ['Postman', 'Cypress', 'Selenium', 'JavaScript', 'Azure DevOps', 'REST APIs'],
  },
  {
    company: 'DBServer',
    role: {
      en: 'Full-Stack Developer',
      'pt-BR': 'Desenvolvedor Full-Stack',
    },
    start: '2021-07-01',
    end: '2022-02-28',
    location: {
      en: 'Porto Alegre, Brazil',
      'pt-BR': 'Porto Alegre, Brasil',
    },
    context: {
      en: "Worked across different fronts, including automation QA for Renner's e-commerce context and a roughly six-month internal Bootcamp Project related to Sicredi.",
      'pt-BR': 'Atuação em diferentes frentes, incluindo automação de QA no contexto de e-commerce da Renner e um Bootcamp Project interno de aproximadamente seis meses relacionado ao Sicredi.',
    },
    description: {
      en: 'Combined frontend and backend development, testing, documentation and delivery practices across distinct project contexts.',
      'pt-BR': 'Combinação de desenvolvimento frontend e backend, testes, documentação e práticas de entrega em contextos distintos de projeto.',
    },
    responsibilities: {
      en: ['Renner context: Appium, Selenium, manual testing and MongoDB', 'Bootcamp Project: Spring Boot backend and React frontend', 'SOLID, unit, integration, black-box and white-box testing', 'REST APIs, relational databases, Wiki documentation and CI/CD pipelines'],
      'pt-BR': ['Contexto Renner: Appium, Selenium, testes manuais e MongoDB', 'Bootcamp Project: backend em Spring Boot e frontend em React', 'SOLID, testes unitários, de integração, caixa-preta e caixa-branca', 'APIs REST, bancos relacionais, documentação em Wiki e pipelines CI/CD'],
    },
    technologies: ['Spring Boot', 'React', 'Cypress', 'Rest Assured', 'Selenide', 'Appium', 'Selenium', 'MongoDB'],
  },
  {
    company: 'SoftDesign',
    role: {
      en: 'Test Analyst · Internship',
      'pt-BR': 'Estágio em Análise de Testes',
    },
    start: '2020-07-01',
    end: '2021-03-31',
    location: {
      en: 'Porto Alegre, Brazil',
      'pt-BR': 'Porto Alegre, Brasil',
    },
    context: {
      en: 'One of my first professional experiences in software, including Automation QA training and a closed-scope project for FRIGELAR.',
      'pt-BR': 'Uma das primeiras experiências profissionais em software, incluindo treinamento em Automation QA e um projeto de escopo fechado para a FRIGELAR.',
    },
    description: {
      en: 'Worked as the only QA for approximately three sprints in a project while developing a foundation in test design, manual testing and API testing.',
      'pt-BR': 'Atuação como único QA por aproximadamente três sprints em um projeto, desenvolvendo base em desenho de testes, testes manuais e testes de API.',
    },
    responsibilities: {
      en: ['BDD and test case creation', 'Manual and API testing with Postman', 'Jenkins and test environment maintenance'],
      'pt-BR': ['BDD e criação de casos de teste', 'Testes manuais e de API com Postman', 'Jenkins e manutenção de ambientes de teste'],
    },
    technologies: ['BDD', 'Jenkins', 'Postman'],
  },
];
