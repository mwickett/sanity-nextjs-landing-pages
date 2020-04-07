export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5e8d10e89e20c5f5e09fba0d',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-kx2kdu3s',
                  apiId: '533e477a-9df5-4307-81cc-0da515ea70e2'
                },
                {
                  buildHookId: '5e8d10e8fb63c1023d37da7e',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-k6q5diiv',
                  apiId: 'c1716c4d-e969-4cb5-900b-cd93e159d7c1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mwickett/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-k6q5diiv.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
