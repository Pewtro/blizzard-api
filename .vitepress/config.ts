import { defineConfig } from 'vitepress';

export default defineConfig({
  description: 'Helpers for the Blizzard Battle.net API',
  srcDir: 'docs',
  themeConfig: {
    nav: [
      { link: '/getting-started', text: 'Guide' },
      { link: '/api/', text: 'API Reference' },
    ],
    search: {
      provider: 'local',
    },
    sidebar: {
      '/': [
        {
          items: [
            { link: '/getting-started', text: 'Getting started' },
            { link: '/authentication', text: 'Authentication' },
            { link: '/client', text: 'Client' },
            { link: '/games', text: 'Games' },
            { link: '/troubleshooting', text: 'Troubleshooting' },
          ],
          text: 'Guide',
        },
      ],
      '/api/': [
        {
          items: [
            { link: '/api/', text: 'Overview' },
            { link: '/api/@blizzard-api/core/', text: '@blizzard-api/core' },
            { link: '/api/@blizzard-api/client/', text: '@blizzard-api/client' },
            { link: '/api/@blizzard-api/wow/', text: '@blizzard-api/wow' },
            { link: '/api/@blizzard-api/classic-wow/', text: '@blizzard-api/classic-wow' },
            { link: '/api/@blizzard-api/wow-forever/', text: '@blizzard-api/wow-forever' },
            { link: '/api/@blizzard-api/d3/', text: '@blizzard-api/d3' },
            { link: '/api/@blizzard-api/hs/', text: '@blizzard-api/hs' },
            { link: '/api/@blizzard-api/sc2/', text: '@blizzard-api/sc2' },
          ],
          text: 'API Reference',
        },
      ],
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/Pewtro/blizzard-api' }],
  },
  title: 'blizzard-api',
});
