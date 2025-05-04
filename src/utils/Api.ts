import { Project } from "@/assets/Projects";

const staticProjects: Project[] = [
  {
    title: "Social Meet",
    description:
      "Social networking apps. FrontEnd written in Flutter. BackEnd written in golang",
    source: "https://github.com/mythofmidas/Dating-SocialMeet-Flutter",
    language: "Flutter",
    platform: "github",
    createdAt: "2023-01-09T06:48:34Z",
    updatedAt: "2024-10-22T13:37:18Z",
    interactions: { stars: 1, forks: 1 },
  },
  {
    title: "Basket",
    description: "Acme Widget Co - Sales System Proof of Concept",
    source: "https://github.com/mythofmidas/basket-php",
    language: "Laravel",
    platform: "github",
    createdAt: "2024-06-12T17:35:52Z",
    updatedAt: "2024-06-16T16:59:17Z",
    interactions: { stars: 0, forks: 1 },
  },
  {
    title: "Sanity",
    description: "Modern Full Stack ECommerce Application with Stripe & Sanity",
    source: "https://github.com/mythofmidas/eCommerce-Sanity-NextJS",
    language: "React",
    platform: "github",
    createdAt: "2022-09-13T23:33:37Z",
    updatedAt: "2022-11-12T13:10:11Z",
    interactions: { stars: 19, forks: 2 },
  },
  {
    title: "Online News",
    description:
      "An online news site that includes the latest news, news categories and breaking news with an advanced admin panel.",
    source: "https://github.com/mythofmidas/onlineNews-PHP",
    language: "Laravel",
    platform: "github",
    createdAt: "2024-02-19T01:23:10Z",
    updatedAt: "2024-03-06T00:34:49Z",
    interactions: { stars: 3, forks: 0 },
  },
  {
    title: "Health Care",
    description:
      "This project is based on a Healthcare service in this project and the technology is used here is react js.",
    source: "https://github.com/mythofmidas/HealthCare-React",
    language: "JavaScript",
    platform: "github",
    createdAt: "2022-01-25T00:45:01Z",
    updatedAt: "2022-04-29T10:16:55Z",
    interactions: { stars: 3, forks: 0 },
  },
  {
    title: "My Shop",
    description:
      "MyShop is an Ecommerce web application built with Next.js and MongoDB.",
    source: "https://github.com/mythofmidas/E-Commerce-NextJS",
    language: "NextJS",
    platform: "github",
    createdAt: "2023-04-12T08:56:34Z",
    updatedAt: "2023-05-17T19:06:30Z",
    interactions: { stars: 3, forks: 0 },
  },
  {
    title: "Flutter Fashion",
    description: "Flutter Fashion Week App UI and Project Structure.",
    source: "https://github.com/mythofmidas/eShop-Fashion-Flutter",
    language: "Flutter",
    platform: "github",
    createdAt: "2021-11-16T13:17:50Z",
    updatedAt: "2021-12-07T19:09:03Z",
    interactions: { stars: 2, forks: 0 },
  },
  {
    title: "Basic Routing",
    description: "This is a basic next app using routing and fetching data.",
    source: "https://github.com/mythofmidas/Basic-Next.JS-Routing-FetchingData",
    language: "TypeScript",
    platform: "github",
    createdAt: "2024-07-03T16:27:46Z",
    updatedAt: "2024-08-01T10:38:01Z",
    interactions: { stars: 1, forks: 0 },
  },
  {
    title: "Student Management",
    description:
      "It allows students to see their records by entering the standard and the roll.no.",
    source: "https://github.com/mythofmidas/StudentManagement-PHP",
    language: "PHP",
    platform: "github",
    createdAt: "2019-10-12T00:58:24Z",
    updatedAt: "2019-11-27T12:26:25Z",
    interactions: { stars: 43, forks: 2 },
  },
];

export default async function getProjects(): Promise<Project[] | undefined> {
  // Return the static array directly
  return staticProjects;
}
