module.exports = {
  title: 'えびのREADME',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico'}],
    ['meta',{ name:"keywords", content:"vuepress, netlify, えび"}],
    ['meta',{ name:"og:title", content:"えびのREADME"}],
    ['meta',{ name:"og:description", content:"えびくんの説明書をVuepressで制作、Netlifyで公開してみました。"}],
    ['meta',{ name:"og:type", content:"website"}],
    ['meta',{ name:"og:url", content:"og　url"}]
  ],
  locales: {
    '/': {
      lang: 'ja',
      title: 'えびのREADME',
      description: 'えびくんの説明書をVuepressで制作、Netlifyで公開してみました。',
    }
  },
 themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Output', link: '/output/' },
      { text: 'SNS', link: '/sns/' }
    ],
    sidebar: [
      {
        title: 'Home',
        children: [
          '/'
        ]
      },
      {
        title: 'SkillSet',
        children: [
          '/skillset/'
        ]
      },
      {
        title: '2019ToDo',
        children: [
          '/2019/'
        ]
      },
      {
        title: '2020ToDo',
        children: [
          '/2020/'
        ]
      },
      {
        title: 'SNS',
        children: [
          '/sns/'
        ]
      }
    ]
  }
}