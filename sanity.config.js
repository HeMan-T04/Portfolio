import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";
require("dotenv").config();
const singletonActions = new Set(["publish", "discardChanges", "restore"]);
const singletonTypes = new Set(["settings"]);

const config = defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_PROJECT_DATASET,
  title: "portfolio",
  apiVersion: "2023-11-09",
  basePath: "/admin",
  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title("Base")
          .items([
            // Our singleton type has a list item with a custom child
            S.listItem()

              .title("About")
              .child(
                // 
                S.document().schemaType("aboutPage").documentId("aboutPage")
              ),
            S.listItem()
              .title("Subtitle")
              .child(
                S.document().schemaType("subtitlePage").documentId("subtitlePage")
              ),
            S.listItem()
              .title("Socials")
              .child(S.document().schemaType("socialsPage").documentId("socialsPage")),
            S.divider(),
            // Regular document types
            ...S.documentTypeListItems().filter(
              (item) => !["aboutPage","subtitlePage","socialsPage"].includes(item.getId())
            ),
          ]),
    }),
  ],
  schema: { types: schemas },
});

export default config;
