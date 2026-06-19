import projects from "@/data/projects/projects.json";


export async function getProjectBySlug(slug: string) {
  return projects.find(
    (project) => project.slug === slug
  );
}

export async function getProjects() {
  return projects;
}

export async function getProjectsByStatus(status : string) {
  return projects.filter(
    (project) => project.status.toLowerCase() === status.toLowerCase()
  );
}