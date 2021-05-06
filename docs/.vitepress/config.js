module.exports = {
    lang: 'en-US',
    title: 'Formyle',
    description: 'Advanced Vue 3 form conception.',
  
    themeConfig: {
      repo: 'arnauddoub/formyle',
      docsDir: 'docs',
  
      editLinks: true,
      editLinkText: 'Edit this page on GitHub',
      lastUpdated: 'Last Updated',
  
      nav: [
        { text: 'Guide', link: '/', activeMatch: '^/$|^/components/' },
        {
          text: 'Release Notes',
          link: 'https://github.com/arnauddoub/formyle/releases'
        }
      ],
  
      sidebar: {
        '/guide/': getGuideSidebar(),
        '/': getGuideSidebar()
      }
    }
  }
  
  function getGuideSidebar() {
    return [
      {
        text: 'Introduction',
        children: [
          { text: 'What is Formyle?', link: '/' },
          { text: 'Installation', link: '/installation' },
          { text: 'Getting Started', link: '/getting-started' },
        ]
      },
      {
        text: 'Components',
        children: [
          { text: 'Email', link: '/components/email' },
          { text: 'Input', link: '/components/input' },
          { text: 'Select', link: '/components/select' },
          { text: 'Radio button', link: '/components/radio-button' },
        ]
      },
    ]
  }
  
  function getConfigSidebar() {
    return [
      {
        text: 'App Config',
        children: [{ text: 'Basics', link: '/config/basics' }]
      },
    ]
  }