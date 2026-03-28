import { profile } from "@/content/profile";
import { news } from "@/content/news";
import { phdScholars, mtechStudents, labInfo } from "@/content/people";
import {
  journalPublications,
  conferencePublications,
} from "@/content/publications";
import { honors } from "@/content/honors";
import { lab } from "@/content/lab";

export function getProfile() {
  return profile;
}

export function getNews() {
  return news;
}

export function getPeople() {
  return { phdScholars, mtechStudents, labInfo };
}

export function getPublications() {
  return { journalPublications, conferencePublications };
}

export function getHonors() {
  return honors;
}

export function getLab() {
  return lab;
}
