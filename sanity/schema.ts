import { type SchemaTypeDefinition } from "sanity";
import hero from "./Schemas/hero";
import about from "./Schemas/about";
import education from "./Schemas/education";
import skills from "./Schemas/skils";
import projects from "./Schemas/projects";
import testimonial from "./Schemas/testimonial";
import blog from "./Schemas/blog";
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [hero, about, education, skills, projects, testimonial, blog],
};
