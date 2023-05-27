export default {
  title: "Product",
  name: "product",
  type: "document",
  fieldsets: [
    {
      name: "sizes",
      title: "Sizes",
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "name",
      },
    },
    {
      title: "SubTitle",
      name: "subtitle",
      type: "string",
    },

    {
      title: "Price",
      description: "Price in NOK",
      name: "price",
      type: "number",
    },
    {
      title: "Image",
      name: "image",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
        },
      ],
      options: {
        layout: "grid",
        multiple: true,
      },
    },
    {
      title: "Description",
      name: "description",
      type: "text",
    },
    {
      title: "Brand",
      name: "brand",
      type: "string",
    },
    {
      title: "Categories",
      name: "categories",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "category" },
        },
      ],
    },
    {
      title: "Color",
      name: "color",
      type: "string",
      options: {
        list: [
          { title: "Red", value: "red" },
          { title: "Green", value: "green" },
          { title: "Blue", value: "blue" },
          { title: "Black", value: "black" },
          { title: "White", value: "white" },
          { title: "Mixed", value: "mixed" },
        ],
      },
    },
    {
      title: "Sizes",
      name: "sizes",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "EU 37", value: "EU 37" },
          { title: "EU 38", value: "EU 38" },
          { title: "EU 39", value: "EU 39" },
          { title: "EU 40", value: "EU 40" },
          { title: "EU 41", value: "EU 41" },
          { title: "EU 42", value: "EU 42" },
          { title: "Small", value: "S" },
          { title: "Medium", value: "M" },
          { title: "Large", value: "L" },
        ],
      },
      fieldset: "sizes",
    },

    {
      title: "Stock",
      name: "stock",
      type: "number",
    },
    {
      title: "Preview",
      name: "preview",
      type: "image",
    },
  ],
  preview: {
    select: {
      name: "name",
      image: "image",
      price: "price",
    },
    prepare(selection) {
      const { name, image, price } = selection;
      return {
        title: name,
        subtitle: `${price.toFixed(2)} kr`,
        media: image[0],
      };
    },
  },
};
