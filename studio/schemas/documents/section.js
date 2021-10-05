export default {  
    name: 'section',
    type: 'document',
    title: 'Sections',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Section Name'
      },
      {
        name: 'publishedAt',
        title: 'Published at',
        description: 'You can use this field to schedule projects where you show them',
        type: 'datetime'
      },
      {
        name: 'content',
        title: 'Content',
        type: 'simplePortableText',
        description: 'What content do you want to have in this section?'
      },
      {
        name: 'collection',
        description: 'Add a collection to your section',
        title: 'Collection',
        type: 'array',
        of: [{type: 'logo'}],
      },
    ] 
  }
  