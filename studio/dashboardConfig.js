export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d19ca8f2138a117af763703',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-2tkm3knk',
                  apiId: 'd57d6de4-fe49-4e7c-bc37-0b401b6fe8c7'
                },
                {
                  buildHookId: '5d19ca8f89dd0f6046335370',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-cw74stmk',
                  apiId: '7e036e0f-f8d2-47f7-b2b9-70be9b2ea7a2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/anders72/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-cw74stmk.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
