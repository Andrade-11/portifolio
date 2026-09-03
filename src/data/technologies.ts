import type { LocalizedString } from '../types';

export const technologies: { label: LocalizedString; items: string[] }[] = [
  { label: { en: 'Frontend', 'pt-BR': 'Frontend' }, items: ['React', 'Angular', 'TypeScript', 'JavaScript', 'Tailwind CSS'] },
  { label: { en: 'Backend', 'pt-BR': 'Backend' }, items: ['Java', 'Spring Boot', 'PHP', 'Laravel', 'REST APIs'] },
  { label: { en: 'Databases', 'pt-BR': 'Bancos de dados' }, items: ['PostgreSQL', 'MySQL', 'Oracle', 'MongoDB'] },
  { label: { en: 'Quality Engineering', 'pt-BR': 'Quality Engineering' }, items: ['Cypress', 'Selenium', 'Robot Framework', 'Rest Assured', 'Postman', 'SoapUI', 'Appium'] },
  { label: { en: 'DevOps / Infrastructure', 'pt-BR': 'DevOps / Infraestrutura' }, items: ['Docker', 'Git', 'GitLab', 'CI/CD', 'Azure', 'Jenkins', 'AWS'] },
  { label: { en: 'AI / Data', 'pt-BR': 'IA / Dados' }, items: ['RAG', 'embeddings', 'pgvector', 'LLM integrations'] },
];
