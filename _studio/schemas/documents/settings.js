export default {
  title: "Settings",
  name: "settings",
  type: "document",
  fields: [
    {
      title: "Hero Image",
      name: "heroImage",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
        },
      ],
    },
    {
      title: "Social media links",
      name: "socialMediaLinks",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              title: "Name",
              name: "name",
              type: "string",
            },
            {
              title: "URL",
              name: "url",
              type: "url",
            },
          ],
        },
      ],
    },
  ],
  preview: {
    prepare: () => {
      return {
        title: "Settings",
      };
    },
  },
};
