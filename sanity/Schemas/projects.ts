import { defineField, defineType } from "sanity";

const projects = defineType({
  name: "projects",
  title: "Projects",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Project Name",
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Image",
    }),
  ],
});
export default projects;
