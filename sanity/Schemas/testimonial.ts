import { defineField, defineType } from "sanity";

const testimonial = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({
      name: "commentator",
      type: "string",
      title: "Commentator",
    }),
    defineField({
      name: "role",
      type: "string",
      title: "Role",
    }),
    defineField({
      name: "comment",
      type: "string",
      title: "Comment",
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Image",
    }),
  ],
});

export default testimonial;
