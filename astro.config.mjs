// @ts-check
import { defineConfig } from 'astro/config';
import mermaid from 'astro-mermaid';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.getductwork.io',
  base: '/docs',
  trailingSlash: 'always',
  integrations: [
    mermaid({
      theme: 'default',
      autoTheme: true,
    }),
    starlight({
      title: 'Ductwork',
      favicon: '/favicon.ico',
      logo: {
        src: './src/assets/logo.png',
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/ductwork/ductwork'
        }
      ],
      sidebar: [
        {
          label: 'Getting Started',
          items: [{ autogenerate: { directory: 'getting-started' } }],
        },
        {
          label: 'Advanced',
          items: [{ autogenerate: { directory: 'advanced' } }],
        },
        {
          label: 'Architecture',
          items: [{ autogenerate: { directory: 'architecture' } }],
        },
        {
          label: 'Pro Tier',
          items: [{ autogenerate: { directory: 'pro' } }],
        },
        {
          label: 'Management',
          items: [{ autogenerate: { directory: 'management' } }],
        },
      ],
      customCss: [
        './src/styles/custom.css',
      ],
    }),
  ],
});
