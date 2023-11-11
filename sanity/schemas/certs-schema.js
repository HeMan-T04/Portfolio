const certs = {
    name: "certs",
    title: "Certifications",
    type: "document",
    fields: [
      {
        name:"order",
        title:"Order",
        type:"number",
      },
      {
        name: "name",
        title: "Name",
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
        name: "url",
        title: "Certificate URL",
        type: "url",
      },
      {
        name: "description",
        title: "Description",
        type: "array",
        of: [{ type: "block" }],
      }
    ],
  };
  
  
  export default certs;