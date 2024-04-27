import { Image } from "sanity";

export interface HeroType {
  introduction: string;
  phoneNumber: string;
}

export interface AboutType {
  introduction: string;
  phoneNumber: string;
  image: Image;
}
export interface EducationType {
  year: string;
  title: string;
  description: string;
}
export interface SkillsType {
  skill: string;
  level: string;
}
export interface ProjectsType {
  name: string;
  image: Image;
}
export interface TestimonialType {
  commentator: string;
  comment: string;
  role: string;
  image: Image;
}
export interface BlogType {
  commentator: string;
  comment: number;
  topic: string;
  day: string;
  image: Image;
}
