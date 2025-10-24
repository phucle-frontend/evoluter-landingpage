export const data_required_skills_badges = [
  "iOS Swift",
  "Android",
  "Java",
  ".NET",
  "SQL",
  "Azure",
  "AWS",
  "React.js",
];
export const data_required_roles_badges = [
  "Full-stack Developer",
  "Back-end Developer",
  "App Developer",
  "Front-end Developer",
];

export interface I_DATA_REQUIRED_SECTION {
  title: string;
  badges: string[];
}

export const data_required_sections: I_DATA_REQUIRED_SECTION[] = [
  { title: "Required Skills", badges: data_required_skills_badges },
  { title: "Required roles", badges: data_required_roles_badges },
];

export const date_featured_sections = [
  {
    title: "Dynamic profiles of deeply vetted experts",
    badgeTitle: "Platform",
    description:
      "Experience a software-centric approach to solve any tech or roduct challenge. Utilize Evoluter’s cutting-edge platform to efficiently recruit, onboard, and effectively manage your outsourced team or remote expert.",
  },
  {
    title: "Co-piloted by Evoluter AI suite",
    badgeTitle: "Platform",
    description:
      "Your new tech team co-pilots your product with our suite of AI tools and applications to provide increased productivity, reduce expenses, and solve complex business problems. <br /><br /> Our proprietary AI matching engine helps to carefully select professionals from our vast talent pool, specifically tailored to meet your unique resource requirements.",
  },
  {
    title: "Your new team located together in our office or fully remote",
    badgeTitle: "Clients",
    description:
      "Embrace flexibility with your new tech team. Choose between our collaborative office environment or fully remote setup. Whether it's a larger dedicated team working together in our office to foster innovation or harnessing the talent of remote professionals, we deliver tailored solutions to drive your success.",
  },
  {
    title: "Fixed cost contracts or pay by the hour",
    badgeTitle: "Clients",
    description:
      "We offer flexible options to suit your project needs. Choose between fixed cost contracts for precise budgeting and project scope, or pay by the hour for greater flexibility and scalability. Whatever payment structure you prefer, we have the solution.",
  },
];
