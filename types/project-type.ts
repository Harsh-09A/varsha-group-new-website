export interface Project {
  id: number;
  title: string;
  slug: string;
//   status: "completed" | "ongoing" | "upcoming";
//   category: "residential" | "commercial" | "mixed-use";
  status:  string;
  category:  string;
  featured_image: string;
  gallery: string[];
  location: string;
  excerpt: string;
  description: string;
  rera_id: string;
  starting_price: string;
  contact_number: string;
  site_address: string;
}