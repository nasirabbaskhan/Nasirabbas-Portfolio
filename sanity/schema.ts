import { type SchemaTypeDefinition } from "sanity";
import hero from "./Schemas/hero";
import about from "./Schemas/about";
import Skills from "@/components/Views/Skills";
import education from "./Schemas/education";
import skills from "./Schemas/skils";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [hero, about, education, skills],
};
