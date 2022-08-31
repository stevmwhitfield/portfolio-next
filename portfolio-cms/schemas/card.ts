export default {
  name: "card",
  title: "Card",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Project Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [
        {
          title: "Block",
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: [],
        },
      ],
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "github",
      title: "GitHub Repository",
      type: "string",
    },
    {
      name: "live",
      title: "Live URL",
      type: "string",
    },
  ],
};
