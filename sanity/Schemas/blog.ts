import { defineField, defineType } from "sanity";

const blog = defineType({
  name: "blog",
  title: "Blog",
  type: "document",
  fields: [
    defineField({
      name: "commentator",
      type: "string",
      title: "Commentator",
    }),
    defineField({
      name: "comment",
      type: "number",
      title: "Comment",
    }),
    defineField({
      name: "topic",
      type: "string",
      title: "Topic",
    }),
    defineField({
      name: "day",
      type: "string",
      title: "Day",
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Image",
    }),
  ],
});
export default blog;
