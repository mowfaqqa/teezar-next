export default {
  name: 'categories',
  title: 'Categories',
  type: 'document',
  fields: [
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
      name: "products",
      title: "Products",
      type:"array",
      of: [{type:"reference", to:{type:'products'}}]
    }
  ]
}