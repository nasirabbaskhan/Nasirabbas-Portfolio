import { defineField, defineType } from "sanity";

const hero = defineType({
  name: "hero",
  title: "Hero",
  type: "document",
  fields: [
    defineField({
      name: "introduction",
      type: "string",
      title: "Introduction",
    }),
    defineField({
      name: "phoneNumber",
      type: "string",
      title: "Phone Number",
    }),
  ],
});
export default hero;
