import { defineField, defineType } from "sanity";

const about = defineType({
  name: "about",
  type: "document",
  title: "About",
  fields: [
    defineField({
      name: "image",
      title: "Image",
      type: "image",
    }),
    defineField({
      name: "introduction",
      title: "Introduction",
      type: "string",
    }),
    defineField({
      name: "phoneNumber",
      title: "Phone Number",
      type: "string",
    }),
  ],
});
export default about;
