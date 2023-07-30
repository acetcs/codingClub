// .vitepress/config.js
export default {
  // site-level options
  title: 'Coding Club',
  description: 'Just playing around.',
  ignoreDeadLinks: true,
  themeConfig: {

    search: {
      provider: 'local'
    },
    nav: nav(),
    sidebar: {
      '/guide': sidebarGuide(),
      'college': sidebarcollege()
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/acetcs/codingclub' }
    ],

    footer: {
      message: 'Released under the ACET License.',
      copyright: 'Copyright © 2023-present Saif Rahman'
    }
  }
}
function nav() {
  return [
    { text: 'Guide', link: '/guide/introduction.md', activeMatch: '/guide' },
    { text: 'College', link: '/college/introduction.md', activeMatch: '/college' },
    { text: 'Contributors', link: '/contributor/index.md', activeMatch: '/contributor'}
  ]
}
function sidebarGuide() {
  return [
    {
      text: 'Getting Started',
      collapsed: false,
      items: [
        { text: 'Introduction', link: 'guide/introduction.md' },

      ]
    },
    {
      text: '3 Month Coding Challenge',
      collapsed: false,
      items: [
        { text: 'Introduction', link: 'guide/intro.md' },
        { text: 'Data Structures and Algorithm', link: 'guide/DSA.md' },
        { text: 'Frontend Development', link: 'guide/frontend.md' },
        { text: 'Backend Development', link: 'guide/backend.md' },

      ]
    },
    {
      text: 'Data Structure and Algorithm',
      collapsed: false,
      items: [
        { text: 'How to learn?', link: 'guide/learn.md' },
        { text: 'Data Structure', link: 'guide/ds.md' },
        { text: 'Algorithm', link: 'guide/algo.md' },

      ]
    },
    {
      text: 'Web Development',
      collapsed: false,
      items: [
        { text: 'How to learn?', link: 'guide/learnwd.md' },
        { text: 'Front-end', link: 'guide/frontend.md' },
        { text: 'Back-end', link: 'guide/backend.md' },
      ]
    },
    {
      text: 'Community',
      collapsed: false,
      items: [
        { text: 'What about it?', link: 'guide/aboutcom.md' },
        { text: 'How to contribute?', link: 'guide/contribute.md' },
        { text: 'Community Guidelines', link: 'guide/guidelines.md' },

      ]
    },
  ]
}
function sidebarcollege() {
  return [
    {
      text: 'Curriculum',
      items: [
        { text: 'Computer Science and technology', link: 'college/cse.md' },
        { text: 'AI & DS', link: 'college/aids.md' },
        { text: 'Electronics and telecommunication', link: 'college/etx.md' },
      ]
    },
    {
      text: 'Placement Preparation',
      collapsed: false,
      items: [
        { text: 'Description', link: 'guide/descrip.md' },
        { text: 'Aptitude round', link: 'guide/apti.md' },
        { text: 'Technical round', link: 'guide/tech.md' },
        { text: 'HR round', link: 'guide/hr.md' },

      ]
    },
  ]
}