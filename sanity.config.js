import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from"./sanity/schemas";
require('dotenv').config();


const config= defineConfig({
    projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset:process.env.NEXT_PUBLIC_SANITY_PROJECT_DATASET,
    title:"portfolio",
    apiVersion:"2023-11-09",
    basePath:"/admin",
    plugins:[deskTool()],
    schema:{types:schemas}
})

export default config;