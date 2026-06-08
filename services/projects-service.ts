import projects from "@/data/projects/projects.json";


export async function getProjectBySlug(slug: string) {
  return projects.find(
    (project) => project.slug === slug
  );
}

export async function getProjects() {
  return projects;
}