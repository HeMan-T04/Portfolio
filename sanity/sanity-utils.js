import { createClient, groq } from "next-sanity";

export async function getProjects() {
  const client = createClient({
    projectId: "n30lx992",
    dataset: "production",
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
            hashtags
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
    projectId: "n30lx992",
    dataset: "production",
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
