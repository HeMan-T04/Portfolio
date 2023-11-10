import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from"./sanity/schemas";
require('dotenv').config();
const singletonActions = new Set(["publish", "discardChanges", "restore"])
const singletonTypes = new Set(["settings"])

const config= defineConfig({
    projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset:process.env.NEXT_PUBLIC_SANITY_PROJECT_DATASET,
    title:"portfolio",
    apiVersion:"2023-11-09",
    basePath:"/admin",
    plugins:[deskTool({
        structure: (S) =>
          S.list()
            .title("Base")
            .items([
  
              // Our singleton type has a list item with a custom child
              S.listItem()
              
                .title("About")
                .child(
                  // Instead of rendering a list of documents, we render a single
                  // document, specifying the `documentId` manually to ensure
                  // that we're editing the single instance of the document
                  S.document()
                    .schemaType("aboutPage")
                    .documentId("aboutPage")
                ),
                S.divider(),
              // Regular document types
              ...S.documentTypeListItems().filter(item=> !['aboutPage'].includes(item.getId())),
            ]),
      })],
    schema:{types:schemas}
})

export default config;