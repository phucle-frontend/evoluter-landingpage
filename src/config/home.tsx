import { colors } from "@/asset/color";
import { E_COLOR_HIRING_CARD } from "@/components/CardHiringTalent";

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

export const data_card_hiring = [
  {
    color: E_COLOR_HIRING_CARD.BLACK,
    title: "Hire Developers",
    image:
      "https://res.cloudinary.com/dlavqnrlx/image/upload/v1751608443/qyprzyp7u2df29zns209.png",
    subTitle:
      "Skilled software engineers, coders, and architects with extensive knowledge in a wide array of technologies and industry sectors.",
  },
  {
    color: E_COLOR_HIRING_CARD.ORANGE,
    title: "Hire Designers",
    image:
      "https://res.cloudinary.com/dlavqnrlx/image/upload/v1751608443/qyprzyp7u2df29zns209.png",
    subTitle:
      " Highly skilled UI, UX designers, illustrators, animators, and other creative professionals at the forefront of design.",
  },
  {
    color: E_COLOR_HIRING_CARD.GREEN,
    title: "Hire Product Experts",
    image:
      "https://res.cloudinary.com/dlavqnrlx/image/upload/v1751608443/qyprzyp7u2df29zns209.png",
    subTitle:
      "Top-tier product managers and owners who have handled the full lifecycle of products at some of the world’s biggest tech companies.",
  },
];

export const data_card_why = [
  {
    title: "Speed",
    color: "#ABFFC3",
    metric: (
      <p className="flex items-center">
        1-<span className="text-xl">3</span>&nbsp;days
      </p>
    ),
    description: (
      <p className="text-sm">
        to fill <span className="font-bold">most roles</span>, sometimes we can
        start the same day.
      </p>
    ),
  },
  {
    title: "Timed Saved",
    color: "#FCFCFC",
    metric: (
      <p className="flex items-center">
        <span className="text-xl">5</span>0+ hours
      </p>
    ),
    description: (
      <p className="text-sm">
        of your teams time saved{" "}
        <span className="font-bold">per candidate</span> on interviewing
      </p>
    ),
  },
  {
    title: "Retention ",
    color: "#FFB77A",
    metric: (
      <p className="flex items-center">
        <span className="text-xl">3</span>0%
      </p>
    ),
    description: (
      <p className="text-sm">
        is the average <span className="font-bold">cost savings</span> our
        clients experienced.
      </p>
    ),
  },
];

export const data_card_hiring_steps = [
  {
    badgeTitle: "Step 1",
    badgeColor: "#FFB77A",
    title: "Talk to one of our industry Experts",
    description:
      "An expert on our team will work with you to understand your goals, product, technical needs, team dynamics and budget.",
  },
  {
    badgeTitle: "Step 2",
    badgeColor: "#ABFFC3",
    title: "Work with hand-selected talent",
    description:
      "Within days, we'll introduce you to the right talent for your project. Average time to match is under 24 hours.",
  },
  {
    badgeTitle: "Step 3",
    badgeColor: "#FFB77A",
    title: "The right fit, guaranteed",
    description:
      "Work with your new team members on a risk-free trial basis, ensuring you hire the right people for the job.",
  },
  {
    badgeTitle: "Step 4",
    badgeColor: "#ABFFC3",
    title: "Easy to manage, start to finish",
    description:
      "Leverage our remarkable platform for seamless management of payments, reporting, work tracking, communication, and more — ensuring your project's success.",
  },
];

export const data_card_prices = [
  {
    color: "#ABFFC3",
    title: "Starting Out",
    description: "What superheroes does your startup need?",
    price: (
      <p className="flex text-lg items-center font-semibold">
        <span className="text-xl">$</span>
        <span className="text-md">0</span>
        <span className="text-xl">-$</span>
        <span className="text-md">20</span>
        <span className="text-xl">K</span>
      </p>
    ),
    options: [
      {
        label: "Developers + Engineers",
        name: "developers_n_engineers",
        value: "developers_n_engineers",
        checked: true,
        onChange: () => {},
      },
      {
        label: "Designers",
        name: "designers",
        value: "designers",
        checked: false,
        onChange: () => {},
      },
      {
        label: "Product / Project Experts",
        name: "product_or_project_experts",
        value: "product_or_project_experts",
        checked: false,
        onChange: () => {},
      },
      {
        label: "Consultancy",
        name: "consultancy",
        value: "consultancy",
        checked: false,
        onChange: () => {},
      },
    ],
  },
  {
    color: "#0D0D0D",
    title: "Booming Business",
    description: "What type of legends does your booming business need?",
    price: (
      <p className="flex text-lg items-center font-semibold">
        <span className="text-xl">$</span>
        <span className="text-md">20</span>
        <span className="text-xl">-$</span>
        <span className="text-md">100</span>
        <span className="text-xl">K</span>
      </p>
    ),
    options: [
      {
        label: "Developers + Engineers",
        name: "developers_n_engineers",
        value: "developers_n_engineers",
        checked: true,
        onChange: () => {},
      },
      {
        label: "Designers",
        name: "designers",
        value: "designers",
        checked: false,
        onChange: () => {},
      },
      {
        label: "Product / Project Experts",
        name: "product_or_project_experts",
        value: "product_or_project_experts",
        checked: false,
        onChange: () => {},
      },
      {
        label: "Consultancy",
        name: "consultancy",
        value: "consultancy",
        checked: false,
        onChange: () => {},
      },
    ],
  },
  {
    color: "#FFB77A",
    title: "Unicorn Incoming",
    description: "Is that a unicorn?! What MVPs does your team need?",
    price: (
      <p className="flex text-lg items-center font-semibold">
        <span className="text-xl">$</span>
        <span className="text-md">100</span>
        <span className="text-xl">K+</span>
      </p>
    ),
    options: [
      {
        label: "Developers + Engineers",
        name: "developers_n_engineers",
        value: "developers_n_engineers",
        checked: true,
        onChange: () => {},
      },
      {
        label: "Designers",
        name: "designers",
        value: "designers",
        checked: false,
        onChange: () => {},
      },
      {
        label: "Product / Project Experts",
        name: "product_or_project_experts",
        value: "product_or_project_experts",
        checked: false,
        onChange: () => {},
      },
      {
        label: "Consultancy",
        name: "consultancy",
        value: "consultancy",
        checked: false,
        onChange: () => {},
      },
    ],
  },
];

export const data_card_why2 = [
  {
    color: colors.MACARONI_AND_CHEESE,
    title: "Cost - we're cheaper!",
    description:
      "Unlock cost savings with us — our competitive pricing empowers companies to reduce operating expenses, while enabling startups to extend their runway. Experience top-quality tech development without breaking the bank, ensuring value-driven results for your business.",
  },
  {
    color: colors.MINT_GREEN,
    title: "Quality & Speed - no one does it better.",
    description:
      "  Unparalleled quality and speed — the best in the business! With extensive experience serving top tech companies, we deliver exceptional results swiftly. Trust us for unmatched precision and efficiency.",
  },
];

export const data_reviews = [
  {
    author: "Peter Graves",
    position: "Ceo of",
    companyName: "YC Combinator Launch",
    review:
      "Evoluter helps entrepreneurs tap into a much more cost-effective solution to hire elite, pre-vetted teams and individuals. The ability to scale a full-size team at a fraction of the cost is amazing, not to mention their experience in shipping world-class products.",
  },
  {
    author: "Michael Lee",
    position: "Head of Product",
    companyName: "Disney",
    review:
      "Outsourcing product builds from our discovery team to Evoluter has helped us to go to market with speed and quality. The fully managed teams they integrate into our company are absolutely crucial to our success, ability to iterate, and continuously launch new features and ideas.",
  },
];

export const data_FAQs = [
  {
    title: "Are there any upfront recruiting or contractual costs",
    expandText:
      "Absolutely not! We meet with you first to ensure that Evoluter is the right fit for you. And once you engage with us and our amazing team members, we do not charge you any recruitment fees or contractual costs. You just pay for work delivered.",
  },
  {
    title: "Can I cancel Evoluter at anytime?",
    expandText:
      "Absolutely not! We meet with you first to ensure that Evoluter is the right fit for you. And once you engage with us and our amazing team members, we do not charge you any recruitment fees or contractual costs. You just pay for work delivered.",
  },
  {
    title: "What happen if I'm not satisfied with an Evoluter expert?",
    expandText:
      "Absolutely not! We meet with you first to ensure that Evoluter is the right fit for you. And once you engage with us and our amazing team members, we do not charge you any recruitment fees or contractual costs. You just pay for work delivered.",
  },
  {
    title:
      "Are English skills ever an issue when working with Evoluter expert?",
    expandText:
      "Absolutely not! We meet with you first to ensure that Evoluter is the right fit for you. And once you engage with us and our amazing team members, we do not charge you any recruitment fees or contractual costs. You just pay for work delivered.",
  },
  {
    title:
      "Who owns the legal rights to the work created by an Evoluter expert?",
    expandText:
      "Absolutely not! We meet with you first to ensure that Evoluter is the right fit for you. And once you engage with us and our amazing team members, we do not charge you any recruitment fees or contractual costs. You just pay for work delivered.",
  },
];

export enum E_FOOTER_TYPE {
  SERVICES = "Services",
  COMPANY = "Company",
  RESOURCES = "Resources",
  HIRE_EXPERTS = "Hire Experts",
}

export interface FOOTER_SECTION {
  type: E_FOOTER_TYPE;
  links: { title: string; href: string }[];
}

export const data_footer: FOOTER_SECTION[] = [
  {
    type: E_FOOTER_TYPE.SERVICES,
    links: [
      {
        title: "Services overview",
        href: "#",
      },
      {
        title: "Managed teams",
        href: "#",
      },
      {
        title: "Application Development",
        href: "#",
      },
      {
        title: "Cloud Services",
        href: "#",
      },
      {
        title: "AI Services",
        href: "#",
      },
    ],
  },
  {
    type: E_FOOTER_TYPE.COMPANY,
    links: [
      {
        title: "Services overview",
        href: "#",
      },
      {
        title: "Managed teams",
        href: "#",
      },
      {
        title: "Application Development",
        href: "#",
      },
      {
        title: "Cloud Services",
        href: "#",
      },
      {
        title: "AI Services",
        href: "#",
      },
    ],
  },
  {
    type: E_FOOTER_TYPE.RESOURCES,
    links: [
      {
        title: "Services overview",
        href: "#",
      },
      {
        title: "Managed teams",
        href: "#",
      },
      {
        title: "Application Development",
        href: "#",
      },
      {
        title: "Cloud Services",
        href: "#",
      },
      {
        title: "AI Services",
        href: "#",
      },
    ],
  },
  {
    type: E_FOOTER_TYPE.HIRE_EXPERTS,
    links: [{ href: "#", title: "Why" }],
  },
];
