export default {
    name: 'logo',
    title: 'Logo',
    type: 'document',
    fields: [
        {
            title: 'SVG',
            name: 'svg',
            type: 'simplePortableText',
            description: 'Write your svg code here'     
        },
        {
            title: 'Caption',
            name: 'caption',
            type: 'string',
            options: {
                isHighlighted: true
            }
        },
        {
            title: 'Alternative text',
            name: 'alt',
            type: 'string',
            validation: Rule => Rule.error('You have to fill out the alternative text.').required(),
            description: 'Important for SEO and accessiblity.',
            options: {
                isHighlighted: true
            }
        },
        {
            title: 'Colour',
            name: 'colour',
            type: 'string',
            description: 'What colour do you want your logo to be'
        },
    ],
    preview: {
        select: {
            title: 'caption',
            media: ''
        }
    }
}
  