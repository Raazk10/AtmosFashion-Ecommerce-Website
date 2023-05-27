export default {
  title: "Contact",
  name: "contact",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 100, // Set a maximum length for the slug
      },
    },
    {
      title: "Content",
      name: "content",
      type: "text",
    },
    {
      title: "Contact Information",
      name: "contactInfo",
      type: "object",
      fields: [
        {
          title: "Name",
          name: "name",
          type: "string",
        },
        {
          title: "Email",
          name: "email",
          type: "email",
        },
        {
          title: "Phone",
          name: "phone",
          type: "string",
        },
        {
          title: "Address",
          name: "address",
          type: "string",
        },
      ],
    },
  ],
};
