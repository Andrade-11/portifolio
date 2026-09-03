import type { LocalizedString } from '../types';
import { assetPath } from '../utils/assets';

export const profile = {
  name: 'Gabriel Andrade',
  title: {
    en: 'Software Engineer & Full-Stack Developer',
    'pt-BR': 'Engenheiro de Software & Desenvolvedor Full-Stack',
  } satisfies LocalizedString,
  location: {
    en: 'Porto Alegre, Brazil',
    'pt-BR': 'Porto Alegre, Brasil',
  } satisfies LocalizedString,
  description: {
    en: 'Software Engineer building digital products at the intersection of health and technology.',
    'pt-BR': 'Engenheiro de Software construindo produtos digitais na interseção entre saúde e tecnologia.',
  } satisfies LocalizedString,
  photo: {
    src: assetPath('/profile/gabriel_andrade.png'),
    alt: {
      en: 'Portrait of Gabriel Andrade',
      'pt-BR': 'Retrato de Gabriel Andrade',
    } satisfies LocalizedString,
  },
  links: {
    github: 'https://github.com/Andrade-11',
    linkedin: 'https://www.linkedin.com/in/gabrielandrade11/',
    email: 'mailto:andrade.prog.11@gmail.com',
  },
};
