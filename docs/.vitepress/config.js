// .vitepress/config.js
export default {
  // site-level options
  title: 'Coding Club',
  description: 'The ACET coding club',
  ignoreDeadLinks: true,
  themeConfig: {

    search: {
      provider: 'local'
    },
    nav: nav(),
    sidebar: {
      '/guide': sidebarGuide(),
      'college': sidebarcollege(),
      '/members': sidermembers(),
      '/contests': sidebarcontest()
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/acetcs/codingclub' }
    ],

    footer: {
      message: 'Released under the ACET License.',
      copyright: 'Copyright © 2023-present Coding Club'
    }
  }
}
function nav() {
  return [
    { text: 'Guide', link: '/guide/introduction.md', activeMatch: '/guide' },
    { text: 'Contests', link: '/contests/index.md', activeMatch: '/contests'},
    { text: 'College', link: '/college/introduction.md', activeMatch: '/college' },
    { text: 'Members', link: '/members/index.md', activeMatch: '/members'}
  ]
}
function sidebarGuide() {
  return [
    {text: 'Announcements 📢', link: 'guide/announce.md' },
    {
      text: 'Getting Started',
      collapsed: false,
      items: [
        { text: 'Introduction', link: 'guide/introduction.md' }

      ]
    },
    {
      text: '3 Month Coding Challenge',
      collapsed: false,
      items: [
        { text: 'Introduction', link: 'guide/intro.md' },
        { text: 'First month', link: 'guide/1month.md' },
        { text: 'Second month', link: 'guide/2month.md' },
        { text: 'Third month', link: 'guide/3month.md' },

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
      text: 'Object Oriented Concepts',
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
        { text: 'Front-end', link: 'guide/front-end.md' },
        { text: 'Back-end', link: 'guide/back-end.md' },
      ]
    },
    {
      text: 'Community',
      collapsed: false,
      items: [
        { text: 'What about it?', link: 'guide/aboutcom.md' },
        { text: 'How to contribute?', link: 'guide/contribute.md' },
        { text: 'Community Guidelines', link: 'guide/guidelines.md' },
        {text: "Be a member", link:'https://acetcs.github.io/forms/'}
      ]
    },
  ]
}
function sidebarcollege() {
  return [
    {
      text: 'Curriculum',
      items: [
        { text: 'CSE', link: 'college/cse.md' },
        { text: 'AI & DS', link: 'college/aids.md' },
        { text: 'ETC', link: 'college/etx.md' },
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
function sidermembers(){
  return[
    {
      text: "Members",
      collapsed: false,
      items: [
        {text: "Show-case", link:'/members/index.md'},
        {text: "Individual Projects", link:'members/project.md'},
        {text: "Be a member", link:'https://acetcs.github.io/forms/'},
        {text: "Join the whatsapp group", link:'members/group.md'}
      ]
    }
  ]
} 
function sidebarcontest(){
  return[
    {
      text: "Contests",
      collapsed: false,
      items:[
        {text: "About contests", link:'/contests/index.md'},
        {text: "Live contests", link:'/contests/live.md'},
        {text: "Previous contest", link:'contests/pre.md'}
      ]
    }
  ]
}