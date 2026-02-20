/**
 * Site Configuration
 * 
 * Centralized configuration for the entire site, loaded from environment variables.
 * This approach keeps sensitive data and site-specific values out of the codebase
 * while providing type-safe access throughout the application.
 * 
 * Setup:
 * 1. Copy .env.example to .env
 * 2. Customize values for your site
 * 3. Import and use siteConfig throughout the application
 * 
 * Configuration Sections:
 * - Site metadata (URL, language, title, description)
 * - Author information (name, title, bio, email, location)
 * - Social links (GitHub, LinkedIn, Twitter, Mastodon, Bluesky)
 * - Navigation structure
 * 
 * @module config
 */

/**
 * Helper function to get environment variable with fallback
 * 
 * Safely retrieves environment variables with a default fallback value.
 * Uses nullish coalescing to handle undefined values.
 * 
 * @param key - Environment variable key (e.g., 'SITE_URL')
 * @param fallback - Default value if environment variable is not set
 * @returns Environment variable value or fallback
 */
const getEnv = (key: string, fallback: string = ''): string => {
  return import.meta.env[key] ?? fallback;
};

/**
 * Site configuration object
 * 
 * Centralized configuration loaded from environment variables with sensible defaults.
 * All values are loaded at build time and are type-safe throughout the application.
 * 
 * @constant
 */
export const siteConfig = {
  /**
   * Site URL (required for sitemap, canonical URLs, OG tags)
   * 
   * Should be the full production URL without trailing slash.
   * Example: 'https://example.com'
   */
  url: getEnv('SITE_URL', 'https://example.com'),
  
  /**
   * Site language (ISO 639-1 code)
   * 
   * Two-letter language code for HTML lang attribute and SEO.
   * Examples: 'en', 'id', 'es', 'fr'
   */
  language: getEnv('SITE_LANGUAGE', 'en'),
  
  /**
   * Site title
   * 
   * Used as fallback when page-specific title is not provided.
   */
  title: getEnv('SITE_TITLE', 'Professional Portfolio'),
  
  /**
   * Site description
   * 
   * Default meta description for SEO and social sharing.
   */
  description: getEnv('SITE_DESCRIPTION', 'E"Estudiante de DAW con un perfil proactivo y gran capacidad de autogestión. Actualmente compagino mi formación técnica con la actividad laboral, lo que me ha permitido desarrollar habilidades clave como la resolución de problemas, el trabajo en equipo y una excelente gestión del tiempo. Busco aplicar mis conocimientos en desarrollo web en un entorno profesional desafiante.'),
  
  /**
   * Author information
   * 
   * Personal details used throughout the site for attribution,
   * contact information, and structured data.
   */
  author: {
    /** Full name */
    name: getEnv('SITE_AUTHOR_NAME', 'Saul Cabanes'),
    
    /** Professional title or role */
    title: getEnv('SITE_AUTHOR_TITLE', 'Estudiante de Desarrollo de Aplicaciones WEB'),
    
    /** Short biography or professional summary */
    bio: getEnv('SITE_AUTHOR_BIO', 'Soy un desarrollador en formación especializado en DAW que no le teme al trabajo duro. Mi día a día se divide entre el código y mis responsabilidades laborales, lo que me da una perspectiva muy práctica y responsable. Me enfoco en aprender tecnologías modernas mientras mantengo un ritmo de trabajo constante y eficiente.'),
    
    /** Contact email address */
    email: getEnv('SITE_AUTHOR_EMAIL', 'saul.c.vila@gmail.com'),
    
    /** Location (optional, empty string to hide) */
    location: getEnv('SITE_AUTHOR_LOCATION', ''),
  },
  
  /**
   * Social media links
   * 
   * Set to empty string to hide a specific platform.
   * Only configured (non-empty) links will be displayed.
   */
  social: {
    /** GitHub profile URL */
    github: getEnv('SOCIAL_GITHUB', 'https://github.com/SaulCabanes'),
    
    /** LinkedIn profile URL */
    linkedin: getEnv('SOCIAL_LINKEDIN', ''),
    
    /** Twitter/X profile URL */
    twitter: getEnv('SOCIAL_TWITTER', ''),
    
    /** Mastodon profile URL */
    mastodon: getEnv('SOCIAL_MASTODON', ''),
    
    /** Bluesky profile URL */
    bluesky: getEnv('SOCIAL_BLUESKY', ''),
  },
  
  /**
   * Navigation links
   * 
   * Main site navigation structure. Order determines display order in the nav bar.
   * Add or remove items to customize navigation.
   */
  nav: [
    { label: 'Projects', href: '/projects' },
    { label: 'Decisions', href: '/decisions' },
    { label: 'Journey', href: '/journey' },
    { label: 'Writing', href: '/writing' },
    { label: 'Speaking', href: '/speaking' },
    { label: 'Uses', href: '/uses' },
    { label: 'Contact', href: '/contact' },
  ],
} as const;

/**
 * Type export for the entire site configuration
 * 
 * Use this type when you need to reference the full config structure.
 */
export type SiteConfig = typeof siteConfig;

/**
 * Type export for social links object
 * 
 * Use this type when working specifically with social media links.
 */
export type SocialLinks = typeof siteConfig.social;

/**
 * Type export for a single navigation item
 * 
 * Use this type when working with individual nav items.
 */
export type NavItem = typeof siteConfig.nav[number];
