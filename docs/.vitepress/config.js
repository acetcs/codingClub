// .vitepress/config.js
export default {
    // site-level options
    title: 'Coding Club',
    description: 'Just playing around.',
  
    themeConfig: {
      // theme-level options
      search: {
        provider: 'local'
      },
      nav:[
        {text:'About',links:'/about'},
      ],
      sidebar: [
        {text:'Getting Started', links:'/' },
        {text:'Data Structures and Algorithm', links:'/about' },
      ]
    }
  }