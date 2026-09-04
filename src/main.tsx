import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Link, NavLink, Route, Routes, useLocation, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, ChevronDown, ChevronLeft, Globe, Menu, Moon, Sun, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { academic } from './data/academic';
import { currentFocus } from './data/current';
import { experience } from './data/experience';
import { profile } from './data/profile';
import { projects } from './data/projects';
import { technologies } from './data/technologies';
import type { Experience as ExperienceType, Locale, LocalizedString, Project } from './types';
import './styles.css';

type Theme = 'light' | 'dark' | 'system';

const fallbackLocale: Locale = 'en';
const productionUrl = 'https://andrade-11.github.io/portifolio/';
const socialImageUrl = `${productionUrl}social-preview.png`;
const socialImageAlt = 'Gabriel Andrade — Software Engineering Portfolio';

function getProductionPageUrl() {
  const pathname = window.location.pathname.replace(/^\/portifolio(?=\/|$)/, '').replace(/\/$/, '');
  return `${productionUrl.replace(/\/$/, '')}${pathname || '/'}`;
}

const copy = {
  en: {
    nav: { projects: 'Projects', experience: 'Experience', health: 'Health + Tech', about: 'About', contact: 'Contact' },
    aria: {
      close: 'Close',
      github: 'Open GitHub profile',
      linkedin: 'Open LinkedIn profile',
      menu: 'Toggle navigation menu',
      primaryNavigation: 'Primary navigation',
      projectNavigation: 'Project navigation',
      socialLinks: 'Social links',
      theme: 'Cycle light, dark and system theme',
      language: 'Change language',
      openImage: 'Open project image preview',
      previousProject: 'Previous project',
      nextProject: 'Next project',
      previousImage: 'Previous image',
      nextImage: 'Next image',
    },
    seo: {
      homeTitle: 'Gabriel Andrade — Software Engineering Portfolio',
      homeDescription: 'Software Engineer focused on full-stack development, legacy modernization, web and mobile applications, backend architecture, cloud infrastructure and AI.',
      projectsTitle: 'Projects - Gabriel Andrade',
      experienceTitle: 'Experience - Gabriel Andrade',
      healthTitle: 'Health + Tech - Gabriel Andrade',
      aboutTitle: 'About - Gabriel Andrade',
      contactTitle: 'Contact - Gabriel Andrade',
      notFoundTitle: 'Page not found - Gabriel Andrade',
    },
    hero: {
      eyebrow: 'Software · Healthcare · Product',
      line1: 'Gabriel Andrade',
      line2: 'Full-Stack Developer',
      text: 'I build real software products with a quality engineering foundation, full-stack range and growing work in health technology.',
      primary: 'View projects',
      secondary: 'View experience',
      photoFallback: 'Photo coming soon',
    },
    home: {
      selected: 'Selected work',
      selectedTitle: 'Projects that show the engineering.',
      allProjects: 'View all projects',
      focus: 'Current focus',
      focusTitle: 'What is on the desk now.',
      career: 'Experience',
      careerTitle: 'From quality to end-to-end product construction.',
      fullExperience: 'View full experience',
      health: 'Health + technology',
      healthVisual: 'HEALTH\n× TECH',
      healthTitle: 'Healthcare work supports the engineering story.',
      healthCopy: 'Academic and product initiatives in health add domain complexity without changing the core identity: software engineering.',
      exploreHealth: 'Explore health work',
      approach: 'Engineering approach',
      approachTitle: 'Principles that show up in the work.',
      tech: 'Technologies',
      techTitle: 'Tools I have worked with.',
      leadership: 'Leadership + community',
      leadershipTitle: 'Broader context, not a different headline.',
      leadershipCopy: 'Leadership and communication experience add range to the profile while keeping software engineering at the center.',
      moreAbout: 'More about me',
      contactEyebrow: 'Start a conversation',
      contactTitle: 'Have a problem worth solving?',
      contactCta: 'Get in touch',
    },
    principles: ['Quality is part of engineering.', 'Understand the domain before the interface.', 'Testing belongs inside delivery.', 'Simple architecture ages better.'],
    pages: {
      projects: 'A focused selection of product, engineering and health technology work. Real screenshots will be added in the next stage.',
      experience: 'A professional path from quality engineering and automation into software engineering, full-stack development and full-cycle product work.',
      health: 'Academic projects, digital health initiatives and technology applied to healthcare contexts.',
      about: 'My foundation in quality shaped how I build software: with attention to reliability, testability, integration and delivery.',
      contactIntro: 'Choose the channel that works best for you. I would be glad to hear about your project, idea or opportunity.',
      email: 'Email',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      aboutIntro: 'I started in software through Quality Engineering, grew into automation, and expanded into software engineering across frontend, backend, integrations and product delivery.',
      aboutExperience: 'From automation and quality to full-stack development, my path gave me a broad view of the software cycle - from validation and integration to product construction and evolution.',
      notFound: 'The page you are looking for does not exist.',
    },
    labels: {
      role: 'Role',
      period: 'Period',
      status: 'Status',
      stack: 'Stack',
      overview: 'Overview',
      context: 'Context',
      solution: 'Solution',
      engineering: 'Engineering',
      screenshots: 'Screenshots',
      screenshotSoon: 'Real screenshot coming in the next stage',
      preview: 'project preview',
      current: 'Current',
      present: 'Present',
      unavailable: 'To be documented',
      backProjects: 'Back to projects',
      nextProject: 'Next project',
      previousProject: 'Previous project',
      page404: 'Page not found',
      goHome: 'Go home',
      institution: 'Institution',
      myParticipation: 'My participation',
      relatedWork: 'Related work',
      technologies: 'Technologies',
      viewMore: 'View more',
      showLess: 'Show less',
    },
  },
  'pt-BR': {
    nav: { projects: 'Projetos', experience: 'Experiência', health: 'Saúde + Tech', about: 'Sobre', contact: 'Contato' },
    aria: {
      close: 'Fechar',
      github: 'Abrir perfil no GitHub',
      linkedin: 'Abrir perfil no LinkedIn',
      menu: 'Abrir ou fechar menu de navegação',
      primaryNavigation: 'Navegação principal',
      projectNavigation: 'Navegação entre projetos',
      socialLinks: 'Links sociais',
      theme: 'Alternar entre tema claro, escuro e sistema',
      language: 'Alterar idioma',
      openImage: 'Abrir prévia de imagem do projeto',
      previousProject: 'Projeto anterior',
      nextProject: 'Próximo projeto',
      previousImage: 'Imagem anterior',
      nextImage: 'Próxima imagem',
    },
    seo: {
      homeTitle: 'Gabriel Andrade - Engenheiro de Software',
      homeDescription: 'Engenheiro de software com base em Quality Engineering, desenvolvimento full-stack, atuação full-cycle em produto e tecnologia em saúde.',
      projectsTitle: 'Projetos - Gabriel Andrade',
      experienceTitle: 'Experiência - Gabriel Andrade',
      healthTitle: 'Saúde + Tech - Gabriel Andrade',
      aboutTitle: 'Sobre - Gabriel Andrade',
      contactTitle: 'Contato - Gabriel Andrade',
      notFoundTitle: 'Página não encontrada - Gabriel Andrade',
    },
    hero: {
      eyebrow: 'Software · Saúde · Produto',
      line1: 'Gabriel Andrade',
      line2: 'Desenvolvedor Full-Stack',
      text: 'Construo produtos de software reais com base forte em qualidade, atuação full-stack e experiência crescente em tecnologia aplicada à saúde.',
      primary: 'Ver projetos',
      secondary: 'Ver experiência',
      photoFallback: 'Foto em breve',
    },
    home: {
      selected: 'Projetos selecionados',
      selectedTitle: 'Projetos que mostram a engenharia.',
      allProjects: 'Ver todos os projetos',
      focus: 'Foco atual',
      focusTitle: 'O que está na mesa agora.',
      career: 'Experiência',
      careerTitle: 'Da qualidade à construção de produtos de ponta a ponta.',
      fullExperience: 'Ver experiência completa',
      health: 'Saúde + tecnologia',
      healthVisual: 'SAÚDE\n× TECH',
      healthTitle: 'A atuação em saúde fortalece a narrativa técnica.',
      healthCopy: 'Iniciativas acadêmicas e de produto em saúde adicionam complexidade de domínio sem mudar o centro do perfil: engenharia de software.',
      exploreHealth: 'Explorar saúde',
      approach: 'Abordagem de engenharia',
      approachTitle: 'Princípios que aparecem no trabalho.',
      tech: 'Tecnologias',
      techTitle: 'Ferramentas com que trabalhei.',
      leadership: 'Liderança + comunidade',
      leadershipTitle: 'Contexto mais amplo, não outro foco principal.',
      leadershipCopy: 'Experiências de liderança e comunicação ampliam o perfil mantendo engenharia de software no centro.',
      moreAbout: 'Mais sobre mim',
      contactEyebrow: 'Começar uma conversa',
      contactTitle: 'Tem um problema que vale resolver?',
      contactCta: 'Entrar em contato',
    },
    principles: ['Qualidade faz parte da engenharia.', 'Entenda o domínio antes da interface.', 'Testes pertencem à entrega.', 'Arquitetura simples envelhece melhor.'],
    pages: {
      projects: 'Uma seleção objetiva de trabalhos em produto, engenharia e tecnologia em saúde. Screenshots reais serão adicionados na próxima etapa.',
      experience: 'Da automação e qualidade ao desenvolvimento full-stack, minha trajetória me deu uma visão ampla do ciclo de software - da validação e integração à construção e evolução de produtos.',
      health: 'Projetos acadêmicos, iniciativas de saúde digital e tecnologia aplicada a contextos de cuidado em saúde.',
      about: 'Construo software com qualidade desde o início.',
      contactIntro: 'Escolha o canal que preferir. Vou gostar de conhecer seu projeto, sua ideia ou sua oportunidade.',
      email: 'Email',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      aboutIntro: 'Minha trajetória começou em Engenharia de Qualidade e automação de testes, uma experiência que influencia até hoje a forma como desenvolvo software. Ao longo dos anos, ampliei minha atuação para frontend, backend, integrações e desenvolvimento de produtos de ponta a ponta.',
      aboutExperience: 'Da automação e qualidade ao desenvolvimento full-stack, minha trajetória me deu uma visão ampla do ciclo de software - da validação e integração à construção e evolução de produtos.',
      notFound: 'A página que você está procurando não existe.',
    },
    labels: {
      role: 'Função',
      period: 'Período',
      status: 'Status',
      stack: 'Stack',
      overview: 'Visão geral',
      context: 'Contexto',
      solution: 'Solução',
      engineering: 'Engenharia',
      screenshots: 'Capturas de tela',
      screenshotSoon: 'Captura de tela real entra na próxima etapa',
      preview: 'prévia do projeto',
      current: 'Atual',
      present: 'atualmente',
      unavailable: 'A documentar',
      backProjects: 'Voltar para projetos',
      nextProject: 'Próximo projeto',
      previousProject: 'Projeto anterior',
      page404: 'Página não encontrada',
      goHome: 'Voltar para a home',
      institution: 'Instituição',
      myParticipation: 'Minha atuação',
      relatedWork: 'Atuação relacionada',
      technologies: 'Tecnologias',
      viewMore: 'Ver mais',
      showLess: 'Mostrar menos',
    },
  },
} as const;

const LocaleContext = createContext<{ locale: Locale; setLocale: (locale: Locale) => void }>({
  locale: fallbackLocale,
  setLocale: () => undefined,
});

function useLocale() {
  return useContext(LocaleContext);
}

function useCopy() {
  return copy[useLocale().locale];
}

function text(value: LocalizedString | undefined, locale: Locale) {
  return value?.[locale] ?? value?.[fallbackLocale] ?? '';
}

function detectLocale(): Locale {
  const saved = localStorage.getItem('portfolio-locale');
  if (saved === 'en' || saved === 'pt-BR') return saved;
  const languages = navigator.languages?.length ? navigator.languages : [navigator.language];
  return languages.some((language) => language.toLowerCase() === 'pt-br') ? 'pt-BR' : fallbackLocale;
}

function useTheme() {
  const initial = (localStorage.getItem('theme') as Theme | null) ?? 'system';
  const [theme, setTheme] = useState<Theme>(['light', 'dark', 'system'].includes(initial) ? initial : 'system');
  const [systemDark, setSystemDark] = useState(() => window.matchMedia('(prefers-color-scheme: dark)').matches);

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = () => setSystemDark(media.matches);
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return { theme, setTheme, resolvedDark: theme === 'dark' || (theme === 'system' && systemDark) };
}

function useSeo(title: string, description: string) {
  useEffect(() => {
    document.title = title;
    setMeta('description', description);
    setMeta('og:title', title, 'property');
    setMeta('og:description', description, 'property');
    setMeta('og:type', 'website', 'property');
    setMeta('og:url', getProductionPageUrl(), 'property');
    setMeta('og:image', socialImageUrl, 'property');
    setMeta('og:image:width', '1200', 'property');
    setMeta('og:image:height', '630', 'property');
    setMeta('og:image:alt', socialImageAlt, 'property');
    setMeta('og:site_name', 'Gabriel Andrade', 'property');
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
    setMeta('twitter:image', socialImageUrl);
    setMeta('twitter:image:alt', socialImageAlt);
    setCanonical(getProductionPageUrl());
  }, [description, title]);
}

function setMeta(name: string, content: string, attribute: 'name' | 'property' = 'name') {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${name}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }
  element.content = content;
}

function setCanonical(href: string) {
  let element = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!element) {
    element = document.createElement('link');
    element.rel = 'canonical';
    document.head.appendChild(element);
  }
  element.href = href;
}

function formatPeriod(item: ExperienceType, locale: Locale) {
  const format = new Intl.DateTimeFormat(locale, { month: 'short', year: 'numeric' });
  const capitalizeDate = (date: string) => date.charAt(0).toUpperCase() + date.slice(1);
  const start = capitalizeDate(format.format(new Date(item.start)));
  const end = item.current ? copy[locale].labels.present : item.end ? capitalizeDate(format.format(new Date(item.end))) : copy[locale].labels.unavailable;
  return `${start} - ${end}`;
}

function LanguageMenu() {
  const { locale, setLocale } = useLocale();
  const [open, setOpen] = useState(false);
  const c = useCopy();
  const options: { locale: Locale; label: string; compact: string }[] = [
    { locale: 'en', label: locale === 'pt-BR' ? 'Inglês' : 'English', compact: 'EN' },
    { locale: 'pt-BR', label: locale === 'pt-BR' ? 'Português (Brasil)' : 'Brazilian Portuguese', compact: 'PT-BR' },
  ];

  return (
    <div className="language-menu">
      <button className="language-trigger" aria-label={c.aria.language} aria-haspopup="menu" aria-expanded={open} onClick={() => setOpen((value) => !value)}>
        <Globe size={16} aria-hidden="true" />
        <span>{locale === 'pt-BR' ? 'PT-BR' : 'EN'}</span>
      </button>
      {open && (
        <div className="language-popover" role="menu">
          {options.map((option) => (
            <button
              className={locale === option.locale ? 'selected' : ''}
              key={option.locale}
              onClick={() => {
                setLocale(option.locale);
                setOpen(false);
              }}
              role="menuitemradio"
              aria-checked={locale === option.locale}
            >
              <span>{option.label}</span>
              <small>{option.compact}</small>
              {locale === option.locale && <Check size={14} aria-hidden="true" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme, resolvedDark } = useTheme();
  const location = useLocation();
  const c = useCopy();

  useEffect(() => setOpen(false), [location]);

  const cycleTheme = () => setTheme(theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light');

  return (
    <header className="nav">
      <Link className="brand" to="/" aria-label="Gabriel Andrade">
        GA
      </Link>
      <button className="menu-btn" aria-label={c.aria.menu} onClick={() => setOpen((value) => !value)}>
        {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>
      <nav className={open ? 'nav-links open' : 'nav-links'} aria-label={c.aria.primaryNavigation}>
        <NavLink to="/projects">{c.nav.projects}</NavLink>
        <NavLink to="/experience">{c.nav.experience}</NavLink>
        <NavLink to="/health-tech">{c.nav.health}</NavLink>
        <NavLink to="/about">{c.nav.about}</NavLink>
        <Link to="/contact">{c.nav.contact}</Link>
      </nav>
      <div className="header-tools">
        <button className="theme" aria-label={c.aria.theme} title={theme} onClick={cycleTheme}>
          {resolvedDark ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
        </button>
        <LanguageMenu />
      </div>
    </header>
  );
}

function Shell({ children }: { children: React.ReactNode }) {
  const { locale } = useLocale();
  const location = useLocation();

  return (
    <>
      <Header />
      <main>{children}</main>
      {location.pathname !== '/contact' && (
        <footer>
          <div className="footer-mark">GA</div>
          <p>{text(profile.description, locale)}</p>
          <nav className="footer-links" aria-label={copy[locale].aria.socialLinks}>
            <a href={profile.links.github} target="_blank" rel="noreferrer" aria-label={copy[locale].aria.github}>GitHub</a>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label={copy[locale].aria.linkedin}>LinkedIn</a>
          </nav>
          <p className="muted">© {new Date().getFullYear()} Gabriel Andrade</p>
        </footer>
      )}
    </>
  );
}

function SectionTitle({ eyebrow, title, link }: { eyebrow: string; title: string; link?: [string, string] }) {
  return (
    <div className="section-head">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {link && (
        <Link className="text-link" to={link[0]}>
          {link[1]} <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
      )}
    </div>
  );
}

function ProjectVisual({ project, index, priority = false }: { project: Project; index: number; priority?: boolean }) {
  const { locale } = useLocale();
  const c = useCopy();
  const screenshot = project.screenshots?.[0];
  const [failed, setFailed] = useState(false);

  if (screenshot && !failed) {
    return (
      <figure className="project-image real-shot">
        <span className="visual-frame">
          <img src={screenshot.src} alt={text(screenshot.alt, locale)} loading={priority ? 'eager' : 'lazy'} onError={() => setFailed(true)} />
        </span>
        {screenshot.caption && <figcaption>{text(screenshot.caption, locale)}</figcaption>}
      </figure>
    );
  }

  return (
    <div className="project-image empty-shot" aria-label={c.labels.screenshotSoon}>
      <span>{String(index + 1).padStart(2, '0')}</span>
      <div>
        <strong>{project.name}</strong>
        <small>{c.labels.screenshotSoon}</small>
      </div>
    </div>
  );
}

function ProjectFeature({ project, index }: { project: Project; index: number }) {
  const { locale } = useLocale();
  const c = useCopy();
  const reverse = index % 2 === 1;

  return (
    <motion.article className={reverse ? 'project-feature reverse' : 'project-feature'} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }}>
      <ProjectVisual project={project} index={index} priority={index === 0} />
      <div className="project-copy">
        <p className="kicker">{text(project.category, locale)}</p>
        <h3>{project.name}</h3>
        <p>{text(project.summary, locale)}</p>
        <div className="inline-meta">
          {project.role && <span>{text(project.role, locale)}</span>}
          {project.status && <span>{text(project.status, locale)}</span>}
        </div>
        <Link className="text-link" to={`/projects/${project.slug}`}>
          {c.nav.projects} <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </motion.article>
  );
}

function HeroPhoto() {
  const { locale } = useLocale();
  const c = useCopy();
  const [failed, setFailed] = useState(false);

  return (
    <div className="hero-photo">
      {!failed ? (
        <img src={profile.photo.src} alt={text(profile.photo.alt, locale)} width="520" height="640" fetchPriority="high" onError={() => setFailed(true)} />
      ) : (
        <div className="photo-fallback">
          <span>GA</span>
          <small>{c.hero.photoFallback}</small>
        </div>
      )}
    </div>
  );
}

function Home() {
  const { locale } = useLocale();
  const c = useCopy();
  const [showEmail, setShowEmail] = useState(false);
  useSeo(c.seo.homeTitle, c.seo.homeDescription);
  const featured = projects.filter((project) => project.featured);

  return (
    <>
      <section className="hero wrap">
        <div className="hero-copy">
          <p className="eyebrow">{c.hero.eyebrow}</p>
          <h1>
            {c.hero.line1}
            <br />
            <em>{c.hero.line2}</em>
          </h1>
          <p className="lede">{c.hero.text}</p>
          <div className="hero-actions">
            <Link className="button primary" to="/projects">{c.hero.primary} <ArrowUpRight size={17} aria-hidden="true" /></Link>
            <Link className="button secondary" to="/experience">{c.hero.secondary}</Link>
          </div>
        </div>
        <aside className="hero-side" aria-label={text(profile.photo.alt, locale)}>
          <HeroPhoto />
          <p>{text(profile.location, locale)}</p>
        </aside>
      </section>

      <section className="wrap section selected-section">
        <SectionTitle eyebrow={`01 / ${c.home.selected}`} title={c.home.selectedTitle} link={['/projects', c.home.allProjects]} />
        <div className="project-list">{featured.map((project, index) => <ProjectFeature key={project.id} project={project} index={index} />)}</div>
      </section>

      <section className="band">
        <div className="wrap focus">
          <SectionTitle eyebrow={`02 / ${c.home.focus}`} title={c.home.focusTitle} />
          <div className="focus-grid">
            {currentFocus.map((item) => (
              <article key={text(item.label, locale)}>
                <p className="kicker">{text(item.label, locale)}</p>
                {item.items[locale].map((entry) => <p key={entry}>{entry}</p>)}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="wrap section split">
        <div>
          <SectionTitle eyebrow={`03 / ${c.home.career}`} title={c.home.careerTitle} />
          <Link className="text-link" to="/experience">{c.home.fullExperience} <ArrowUpRight size={16} aria-hidden="true" /></Link>
        </div>
        <div className="timeline-preview">
          {experience.slice(0, 4).map((item) => (
            <div className="timeline-row" key={item.company}>
              <span>{formatPeriod(item, locale)}</span>
              <div>
                <h3>{item.company}</h3>
                <p>{text(item.role, locale)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="wrap section health">
        <div className="health-visual" aria-hidden="true"><span>{c.home.healthVisual.split('\n').map((line) => <React.Fragment key={line}>{line}<br /></React.Fragment>)}</span></div>
        <div>
          <p className="eyebrow">04 / {c.home.health}</p>
          <h2>{c.home.healthTitle}</h2>
          <p className="body-copy">{c.home.healthCopy}</p>
          <Link className="text-link" to="/health-tech">{c.home.exploreHealth} <ArrowUpRight size={16} aria-hidden="true" /></Link>
        </div>
      </section>

      <section className="band">
        <div className="wrap approach">
          <SectionTitle eyebrow={`05 / ${c.home.approach}`} title={c.home.approachTitle} />
          <div className="principles">
            {c.principles.map((principle, index) => <div key={principle}><span>0{index + 1}</span><p>{principle}</p></div>)}
          </div>
        </div>
      </section>

      <section className="wrap section">
        <SectionTitle eyebrow={`06 / ${c.home.tech}`} title={c.home.techTitle} />
        <div className="tech-grid">
          {technologies.map((group) => (
            <div key={text(group.label, locale)}>
              <p className="kicker">{text(group.label, locale)}</p>
              <div className="tags">{group.items.map((item) => <span key={item}>{item}</span>)}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="contact">
        <div className="wrap">
          <p className="eyebrow">{c.home.contactEyebrow}</p>
          <h2>{c.home.contactTitle}</h2>
          <div className="contact-actions">
            <button className="button primary" type="button" onClick={() => setShowEmail(true)}>
              {c.home.contactCta} <ArrowUpRight size={17} aria-hidden="true" />
            </button>
            {showEmail && <a className="contact-email" href={profile.links.email}>andrade.prog.11@gmail.com</a>}
          </div>
        </div>
      </section>
    </>
  );
}

function Intro({ eyebrow, title, copyText }: { eyebrow: string; title: string; copyText: string }) {
  return (
    <section className="page-intro wrap">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="lede">{copyText}</p>
    </section>
  );
}

function ProjectsPage() {
  const c = useCopy();
  useSeo(c.seo.projectsTitle, c.pages.projects);
  return (
    <>
      <Intro eyebrow={c.home.selected} title={c.home.selectedTitle} copyText={c.pages.projects} />
      <section className="wrap section selected-section">
        <div className="project-list">{projects.filter((project) => project.featured).map((project, index) => <ProjectFeature key={project.id} project={project} index={index} />)}</div>
      </section>
    </>
  );
}

function Gallery({ project }: { project: Project }) {
  const { locale } = useLocale();
  const c = useCopy();
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const screenshots = project.screenshots ?? [];
  const screenshot = screenshots[activeIndex];
  const hasScreenshots = screenshots.length > 0;
  const canNavigate = screenshots.length > 1;
  const previous = useCallback(() => setActiveIndex((index) => (index === 0 ? screenshots.length - 1 : index - 1)), [screenshots.length]);
  const next = useCallback(() => setActiveIndex((index) => (index === screenshots.length - 1 ? 0 : index + 1)), [screenshots.length]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
      if (event.key === 'ArrowLeft' && canNavigate) previous();
      if (event.key === 'ArrowRight' && canNavigate) next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [canNavigate, next, open, previous]);

  return (
    <>
      {hasScreenshots ? (
        <div className="project-gallery" aria-label={c.labels.screenshots}>
          {screenshots.map((item, index) => (
            <button
              className={index === 0 ? 'gallery-shot primary-shot' : 'gallery-shot'}
              key={item.src}
              type="button"
              onClick={() => {
                setActiveIndex(index);
                setOpen(true);
              }}
              aria-label={`${c.aria.openImage}: ${text(item.alt, locale)}`}
            >
              <span className="gallery-frame">
                <img src={item.src} alt={text(item.alt, locale)} loading={index === 0 ? 'eager' : 'lazy'} />
              </span>
              {item.caption && <span className="gallery-caption">{text(item.caption, locale)}</span>}
            </button>
          ))}
        </div>
      ) : (
        <button className="gallery-placeholder" type="button" onClick={() => setOpen(true)} aria-label={c.aria.openImage}>
          <span>{c.labels.screenshotSoon}</span>
          <small>{project.name} / {c.labels.preview}</small>
        </button>
      )}
      <AnimatePresence>
        {open && (
          <motion.div className="lightbox" role="dialog" aria-modal="true" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)}>
            <button aria-label={c.aria.close} onClick={() => setOpen(false)}><X aria-hidden="true" /></button>
            {canNavigate && <button className="lightbox-prev" aria-label={c.aria.previousImage} onClick={(event) => { event.stopPropagation(); previous(); }}><ArrowLeft aria-hidden="true" /></button>}
            <div className="lightbox-card" onClick={(event) => event.stopPropagation()}>
              {screenshot ? <img src={screenshot.src} alt={text(screenshot.alt, locale)} /> : <span>{c.labels.screenshotSoon}</span>}
              {screenshot?.caption && <p>{text(screenshot.caption, locale)}</p>}
            </div>
            {canNavigate && <button className="lightbox-next" aria-label={c.aria.nextImage} onClick={(event) => { event.stopPropagation(); next(); }}><ArrowRight aria-hidden="true" /></button>}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function ProjectDetail() {
  const { slug } = useParams();
  const { locale } = useLocale();
  const c = useCopy();
  const normalizedSlug = slug === 'simic' ? 'simi' : slug;
  const project = projects.find((item) => item.slug === normalizedSlug);
  const featured = projects.filter((item) => item.featured);
  const index = project ? featured.findIndex((item) => item.id === project.id) : -1;
  const previous = index > 0 ? featured[index - 1] : undefined;
  const next = index >= 0 && index < featured.length - 1 ? featured[index + 1] : undefined;

  useSeo(project ? `${project.name} - Gabriel Andrade` : c.seo.notFoundTitle, project ? text(project.summary, locale) : c.pages.notFound);

  if (!project) return <NotFound />;

  const sections = [
    [c.labels.overview, project.description ?? project.summary],
    [c.labels.context, project.problem],
    [c.labels.solution, project.solution],
  ] as const;

  return (
    <>
      <section className="project-hero wrap">
        <Link className="back" to="/projects"><ChevronLeft size={16} aria-hidden="true" /> {c.labels.backProjects}</Link>
        <p className="eyebrow">{text(project.category, locale)}</p>
        <h1>{project.name}</h1>
        <p className="lede">{text(project.tagline, locale)}</p>
        <div className="project-facts">
          <span><small>{c.labels.role}</small>{project.role ? text(project.role, locale) : c.labels.unavailable}</span>
          <span><small>{c.labels.period}</small>{project.year ?? c.labels.unavailable}</span>
          <span><small>{c.labels.status}</small>{project.status ? text(project.status, locale) : c.labels.unavailable}</span>
          <span><small>{c.labels.stack}</small>{project.technologies.length ? project.technologies.join(', ') : c.labels.unavailable}</span>
        </div>
      </section>
      <section className="wrap case">
        <Gallery project={project} />
        {sections.map(([title, value]) => value && (
          <section className="case-section" key={title}>
            <p className="eyebrow">{title}</p>
            <p className="case-text">{text(value, locale)}</p>
          </section>
        ))}
        {project.engineering && (
          <section className="case-section">
            <p className="eyebrow">{c.labels.engineering}</p>
            <ul className="case-list">{project.engineering[locale].map((item) => <li key={item}>{item}</li>)}</ul>
          </section>
        )}
        <nav className="project-next" aria-label={c.aria.projectNavigation}>
          {previous && <Link to={`/projects/${previous.slug}`}><ArrowLeft size={16} aria-hidden="true" /> {c.labels.previousProject}<span>{previous.name}</span></Link>}
          {next && <Link to={`/projects/${next.slug}`}>{c.labels.nextProject}<span>{next.name}</span> <ArrowRight size={16} aria-hidden="true" /></Link>}
        </nav>
      </section>
    </>
  );
}

function ExperiencePage() {
  const { locale } = useLocale();
  const c = useCopy();
  useSeo(c.seo.experienceTitle, c.pages.experience);

  return (
    <>
      <Intro eyebrow={c.home.career} title={c.home.careerTitle} copyText={c.pages.experience} />
      <section className="wrap section experience-list">
        {experience.map((item, index) => (
          <article className="experience-item" key={item.company}>
            <span className="exp-index">{String(index + 1).padStart(2, '0')}</span>
            <div>
              <p className="kicker">{formatPeriod(item, locale)}</p>
              <h2>{item.company}</h2>
              <p>{text(item.role, locale)}</p>
              {item.context && <p className="experience-context">{text(item.context, locale)}</p>}
              {item.description && <p className="experience-description">{text(item.description, locale)}</p>}
              {item.responsibilities && <ul className="experience-bullets">{item.responsibilities[locale].map((entry) => <li key={entry}>{entry}</li>)}</ul>}
              {item.technologies && <div className="experience-tags">{item.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>}
            </div>
            {item.current && <span className="current-dot">{c.labels.current}</span>}
          </article>
        ))}
      </section>
    </>
  );
}

function AcademicMedia({ media }: { media: NonNullable<(typeof academic)[number]['media']> }) {
  const { locale } = useLocale();

  return (
    <div className="academic-media">
      {media.map((item) => (
        <figure key={item.src}>
          <img src={item.src} alt={text(item.alt, locale)} loading="lazy" />
          {item.caption && <figcaption>{text(item.caption, locale)}</figcaption>}
        </figure>
      ))}
    </div>
  );
}

function AcademicCard({ item, index, expanded, onToggle }: { item: (typeof academic)[number]; index: number; expanded: boolean; onToggle: () => void }) {
  const { locale } = useLocale();
  const c = useCopy();
  const panelId = `academic-panel-${item.id}`;

  return (
    <motion.article className={expanded ? 'academic-card expanded' : 'academic-card'} layout>
      <button className="academic-card-head" type="button" aria-expanded={expanded} aria-controls={panelId} onClick={onToggle}>
        <span className="academic-number">{String(index + 1).padStart(2, '0')}</span>
        <span className="academic-title">
          <small>{text(item.category, locale)}</small>
          <strong>{text(item.title, locale)}</strong>
          <em>{text(item.context, locale)}</em>
        </span>
        <span className="academic-toggle">
          {expanded ? c.labels.showLess : c.labels.viewMore}
          <ChevronDown aria-hidden="true" />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            animate={{ opacity: 1, height: 'auto' }}
            className="academic-card-body"
            exit={{ opacity: 0, height: 0 }}
            id={panelId}
            initial={{ opacity: 0, height: 0 }}
          >
            <div className="academic-body-grid">
              <div>
                <p>{text(item.description, locale)}</p>
                {item.institution && (
                  <div className="academic-detail">
                    <span>{c.labels.institution}</span>
                    <p>{text(item.institution, locale)}</p>
                  </div>
                )}
                {item.participation && (
                  <div className="academic-detail">
                    <span>{c.labels.myParticipation}</span>
                    <p>{text(item.participation, locale)}</p>
                  </div>
                )}
              </div>
              <div>
                {item.technologies && (
                  <div className="tags">{item.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
                )}
                {item.related && (
                  <div className="related-work">
                    <span>{c.labels.relatedWork}</span>
                    <h3>{text(item.related.title, locale)}</h3>
                    {item.related.subtitle && <p className="related-subtitle">{text(item.related.subtitle, locale)}</p>}
                    {item.related.description && <p>{text(item.related.description, locale)}</p>}
                    {item.related.technologies && <div className="tags">{item.related.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>}
                  </div>
                )}
              </div>
            </div>
            {item.media && <AcademicMedia media={item.media} />}
            {item.related?.media && <AcademicMedia media={item.related.media} />}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

function HealthPage() {
  const c = useCopy();
  const [expandedId, setExpandedId] = useState<string | null>(academic[0]?.id ?? null);
  useSeo(c.seo.healthTitle, c.pages.health);

  return (
    <>
      <Intro eyebrow={c.home.health} title={c.home.healthTitle} copyText={c.pages.health} />
      <section className="wrap section academic-grid">
        {academic.map((item, index) => <AcademicCard expanded={expandedId === item.id} index={index} item={item} key={item.id} onToggle={() => setExpandedId((id) => (id === item.id ? null : item.id))} />)}
      </section>
    </>
  );
}

function AboutPage() {
  const { locale } = useLocale();
  const c = useCopy();
  useSeo(c.seo.aboutTitle, c.pages.about);
  const pathLine = locale === 'pt-BR'
    ? 'Quality Engineering → Automação & CI/CD → Engenharia de Software → Full-Stack & Full-Cycle'
    : 'Quality Engineering → Automation & CI/CD → Software Engineering → Full-Stack & Full-Cycle';

  return (
    <>
      <Intro eyebrow={c.nav.about} title={c.pages.about} copyText={c.pages.aboutIntro} />
      <section className="wrap section about-grid">
        <div>
          <p className="eyebrow">{c.home.career}</p>
          <div className="path">
            <span>{pathLine}</span>
          </div>
        </div>
        <div>
          <p className="body-copy">{c.pages.aboutExperience}</p>
          <Link className="text-link" to="/experience">{c.home.fullExperience} <ArrowUpRight size={16} aria-hidden="true" /></Link>
        </div>
      </section>
    </>
  );
}

function ContactPage() {
  const c = useCopy();
  useSeo(c.seo.contactTitle, c.pages.contactIntro);

  return (
    <>
      <section className="page-intro wrap contact-intro">
        <h1>{c.nav.contact}</h1>
        <p className="lede">{c.pages.contactIntro}</p>
      </section>
      <section className="wrap contact-page-links" aria-label={c.nav.contact}>
        <a className="contact-page-link" href={profile.links.email}>
          <span className="kicker">{c.pages.email}</span>
          <strong>andrade.prog.11@gmail.com</strong>
          <ArrowUpRight size={20} aria-hidden="true" />
        </a>
        <a className="contact-page-link" href={profile.links.github} target="_blank" rel="noreferrer">
          <span className="kicker">{c.pages.github}</span>
          <strong>Andrade-11</strong>
          <ArrowUpRight size={20} aria-hidden="true" />
        </a>
        <a className="contact-page-link" href={profile.links.linkedin} target="_blank" rel="noreferrer">
          <span className="kicker">{c.pages.linkedin}</span>
          <strong>Gabriel Andrade</strong>
          <ArrowUpRight size={20} aria-hidden="true" />
        </a>
      </section>
    </>
  );
}

function NotFound() {
  const c = useCopy();
  useSeo(c.seo.notFoundTitle, c.pages.notFound);
  return (
    <section className="page-intro wrap not-found">
      <p className="eyebrow">404</p>
      <h1>{c.labels.page404}</h1>
      <p className="lede">{c.pages.notFound}</p>
      <Link className="button primary" to="/">{c.labels.goHome}</Link>
    </section>
  );
}

function App() {
  const [locale, setLocale] = useState<Locale>(detectLocale);

  useEffect(() => {
    document.documentElement.lang = locale;
    localStorage.setItem('portfolio-locale', locale);
  }, [locale]);

  const value = useMemo(() => ({ locale, setLocale }), [locale]);

  return (
    <LocaleContext.Provider value={value}>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Shell>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/health-tech" element={<HealthPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Shell>
      </BrowserRouter>
    </LocaleContext.Provider>
  );
}

createRoot(document.getElementById('root')!).render(<App />);
