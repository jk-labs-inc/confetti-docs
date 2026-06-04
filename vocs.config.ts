import { defineConfig } from 'vocs'

export default defineConfig({
  title: 'Confetti Docs',
  description: 'The What, Where, How, and Why of everything Confetti',
  iconUrl: '/favicon.png',
  sidebar: [
    {
      text: 'Getting Started',
      link: '/',
    },
    {
      text: 'Frequently Asked Questions',
      link: '/faq',
    },
    {
      text: 'Calculating ROI',
      link: '/calculating-roi',
    },
    {
      text: 'Case Study',
      link: '/case-study',
    },
    {
      text: 'Our Team',
      link: '/our-team',
    },
    {
      text: 'Technical How-Tos',
      collapsed: false,
      items: [
       {
          text: 'Verifying Contracts',
          link: '/technical-how-tos/verifying-contracts',
        },
        {
          text: 'Confetti Onchain Data',
          link: '/technical-how-tos/confetti-onchain-data',
        },
        {
          text: 'Troubleshooting',
          link: '/technical-how-tos/troubleshooting',
        },
      ]
    },
  ],
})
