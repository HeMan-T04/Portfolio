const project = {
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Project Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
      },
    },
    {
      name: "image",
      title: "Project Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alternative Text",
          type: "string",
        },
      ],
    },
    {
      name: "url",
      title: "Project URL",
      type: "url",
    },
    {
      name: "description",
      title: "Project Description",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "hashtags",
      title: "Hashtags",
      type: "array",
      of: [{ type: "string" }],
    }
  ],
};


export default project;