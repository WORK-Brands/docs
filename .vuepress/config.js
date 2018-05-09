module.exports = {
  title: 'WORK Docs',
  description: 'Everything you need to know',
  base: '/docs/',
  configureWebpack: {
   resolve: {
     alias: {
       '@imgs': '/img/'
     }
   }
 },

 themeConfig: {
   markdown: {
    amchor: { permalink: true, permalinkBefore: true, permalinkSymbol: '#' }
    },
    toc: { includeLevel: [2, 3] },
    nav: [
       { text: 'Home', link: '/' },
       { text: 'How To\'s', link: '/how/' },
       { text: 'Websites\/Accounts', link: '/accounts/' },
       { text: 'Assets\/Templates', link: '/assets/' },
       { text: 'FAQ\'s', link: '/faqs/' },
       {
        text: 'WORK Brands',
        items: [
          { text: 'WORK & Friends', link: 'https://www.work-friends.com' },
          { text: 'WORK Coffee', link: 'https://www.drinkworkcoffee.com' },
          { text: 'WORK Supply Co.', link: 'https://www.worksupply.co' },
          { text: 'WORK Beer', link: 'https://www.workbeer.com' },
          { text: 'WORK HQ', link: 'http://www.work-hq.com/' },
        ]
      },
     ]
 }
}
