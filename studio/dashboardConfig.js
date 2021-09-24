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
                  buildHookId: '614df0b6245d1afdad3f93a2',
                  title: 'Sanity Studio',
                  name: 'website-v-2-studio',
                  apiId: '95e03db6-f959-477d-bf59-e630f5f5298f'
                },
                {
                  buildHookId: '614df0b614819a0d1458e81c',
                  title: 'Portfolio Website',
                  name: 'website-v-2',
                  apiId: '8ef1c5e8-2cde-4b4c-95fb-6bd296871a56'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Andykbt/website-v2',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://website-v-2.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
