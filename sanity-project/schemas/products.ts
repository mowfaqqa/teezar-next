export default {
  name: 'products',
  title: 'Products',
  type: 'document',
  fields: [
    {
      name: 'image' ,
      title: 'Image',
      type: 'image',
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options:{
        source: 'name',
        maxLength: 20,
      }
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'desc',
      title: 'Desc',
      type: 'string',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
    }
  ]
}