const aboutPage = {
  name: "aboutPage",
  title: "About Page",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
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
      name: "about",
      title: "About",
      type: "array",
      of: [{ type: "block" }],
    },
    {
        name:"resume",
        title:"Resume",
        type:"url"
    }
  ],
};
export default aboutPage;
