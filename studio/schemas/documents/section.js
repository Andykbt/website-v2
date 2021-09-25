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
        name: 'content',
        title: 'Content',
        type: 'simplePortableText',
        description: 'What content do you want to have in this section?'
      },
    ] 
  }
  