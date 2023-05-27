export default {
  title: "Settings",
  name: "settings",
  type: "document",
  fields: [
    {
      title: "Mainpage",
      name: "mainpage",
      type: "object",
      fields: [
        {
          title: "HeroImage",
          name: "heroImages",
          type: "array",
          of: [{ type: "image" }],
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
