import { createClient, groq } from "next-sanity";

export async function getProjects() {
  const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_PROJECT_DATASET,
    apiVersion: "2023-11-09",
  });

  try {
    const data = await client.fetch(
      groq`*[_type == "project"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            description,
            hashtags,
            order
        }`
    );

    return data || []; // Ensure data is an array, or return an empty array if it's falsy
  } catch (error) {
    console.error("Error fetching projects:", error);
    return []; // Return an empty array in case of an error
  }
}

export async function getSkills() {
  const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_PROJECT_DATASET,
    apiVersion: "2023-11-09",
  });
  try {
    const data = await client.fetch(
      groq`*[_type == "skills"]{
            order,
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
        }`
    );

    return data || []; // Ensure data is an array, or return an empty array if it's falsy
  } catch (error) {
    console.error("Error fetching projects:", error);
    return []; // Return an empty array in case of an error
  }
}

export async function getAbout() {
  const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_PROJECT_DATASET,
    apiVersion: "2023-11-09",
  });
  try {
    const data = await client.fetch(
      groq`*[_type == "aboutPage"]{
            _id,
            _createdAt,
            "image": image.asset->url,
            about,
            resume
        }`
    );
    
    return data || []; // Ensure data is an array, or return an empty array if it's falsy
  } catch (error) {
    console.error("Error fetching projects:", error);
    return []; // Return an empty array in case of an error
  }
}

export async function getSubtitle() {
  const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_PROJECT_DATASET,
    apiVersion: "2023-11-09",
  });
  try {
    const data = await client.fetch(
      groq`*[_type == "subtitlePage"]{
            _id,
            _createdAt,
            list
        }[0]`
    );

    return data?.list || []; // Ensure data is an object, and return the list property or an empty array
  } catch (error) {
    console.error("Error fetching subtitle:", error);
    return []; // Return an empty array in case of an error
  }
}


export async function getSocials() {
  const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_PROJECT_DATASET,
    apiVersion: "2023-11-09",
  });
  try {
    const data = await client.fetch(
      groq`*[_type == "socialsPage"]{
            _id,
            _createdAt,
            Instagram,
            Twitter,
            LinkedIn,
            GitHub,
            Facebook,
            Email
        }`
    );
    return data || []; // Ensure data is an array, or return an empty array if it's falsy
  } catch (error) {
    console.error("Error fetching projects:", error);
    return []; // Return an empty array in case of an error
  }
}