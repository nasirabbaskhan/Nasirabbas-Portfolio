import { defineField, defineType } from "sanity";

const skills = defineType({
  name: "skills",
  title: "Skills",
  type: "document",
  fields: [
    defineField({
      name: "skill",
      title: "Skill",
      type: "string",
    }),
    defineField({
      name: "level",
      title: "Level",
      type: "string",
    }),
  ],
});
export default skills;
