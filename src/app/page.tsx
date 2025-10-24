"use client";
import Button from "@/components/Button";
import CardHiringTalent, {
  COLOR_HIRING_CARD,
  E_COLOR_HIRING_CARD,
} from "@/components/CardHiringTalent";
import Header from "@/components/Header";
import { ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";
import FeatureSection from "@/components/FeatureSection";
import CardWhy from "@/components/CardWhy";
import CardHiringStep from "@/components/CardHiringStep";
import Switch from "@/components/Switch";
import CardPrice from "@/components/CardPrice";
import { data_required_sections, date_featured_sections } from "@/config/home";
import RequiredSection from "@/components/RequiredSection";
import Input from "@/components/Input";
import PhoneInput from "@/components/PhoneInput";
import Section from "@/components/Section";

const data_card_hiring = [
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

const data_card_why = [
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

const data_card_hiring_steps = [
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

const data_card_prices = [
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

export default function Home() {
  return (
    <div className="min-h-screen max-w-screen-lg text-white mx-auto">
      <Header />
      <main className="lg:pt-16 max-md:pt-0 flex flex-col max-md:gap-6 md:gap-12 p-4 sm:px-10">
        <Section className="max-sm:flex max-sm:flex-col  sm:grid sm:grid-cols-12">
          <div className="flex flex-col sm:pt-6 pt-0 sm:col-span-7 gap-4 ">
            <strong className="text-2xl">
              Hire Expert Software Developers Supported by AI
            </strong>
            <p className="text-[#F2F2F2] text-xl font-thin">
              At Evoluter, we offer the world's leading companies and startups
              access to top-tier software developers or fully managed teams,
              including designers and product managers.
            </p>
            <Button
              title="Get started"
              className="gap-2 sm:max-w-36 sm:py-2 max-sm:w-full bg-white flex justify-center text-black font-semibold"
              icon={<ArrowRight className="w-4 h-4" />}
            />
          </div>
          <Image
            alt="hero 1"
            src="https://res.cloudinary.com/dlavqnrlx/image/upload/v1752983480/ujf8tlbtobqlwzvznjet.jpg"
            width={0}
            height={0}
            className="rounded-sm h-full w-full sm:col-span-5"
          />
          <p className="col-span-12 mt-4 text-center text-sm">
            Trusted by leading brands and startups backed and advised by the
            industries best
          </p>
        </Section>
        <Section className="flex max-md:flex-wrap justify-center flex-row items-center  max-sm:gap-1">
          <div className="text-gray-400 text-xl font-bold">SEQUOIA</div>
          <div className="text-gray-400 text-xl font-bold">SEQUOIA</div>
          <div className="text-gray-400 text-xl font-bold">SEQUOIA</div>
          <div className="text-gray-400 text-xl font-bold">SEQUOIA</div>
          <div className="text-gray-400 text-xl font-bold">SEQUOIA</div>
        </Section>
        <Section className="card  max-md:flex bg-white max-md:flex-col md:grid md:grid-cols-12">
          <div className="col-span-9 flex flex-col">
            <strong className="text-xl md:text-2xl font-bold text-black">
              Better quality, better pricing. Scale with Evoluter
            </strong>
            <p className="text-sm text-gray-800">
              Sick of fighting with Silicon Valley giants to hire top-quality
              teams? Are you an exceptional company or startup looking to save
              money or increase your runway? Say goodbye to budget constraints
              or trying to find reliable talent and embrace a new era of value.
              Hire skilled developers, innovative designers, proficient
              product/project managers, and expert consultants at up to half the
              expected cost. Unleash your business's potential and see why 100+
              companies trust Evoluter to build their products and projects.
            </p>
          </div>
          <Image
            alt="hero 1"
            width={0}
            height={0}
            className="rounded-sm h-full w-full md:col-span-3 max-md:hidden"
            src={
              "https://res.cloudinary.com/dlavqnrlx/image/upload/v1751608443/qyprzyp7u2df29zns209.png"
            }
          />
          {data_card_hiring.map((item, i) => (
            <CardHiringTalent
              key={i}
              color={item.color}
              title={item.title}
              subTitle={item.subTitle}
              image={item.image}
            />
          ))}
          <div className="col-span-12 border border-black rounded-lg flex max-sm:flex-col items-center justify-between gap-4 p-4 px-6">
            <div className="flex flex-col flex-3">
              <strong className="font-bold text-lg text-black">
                Or you can hire entire team
              </strong>
              <p className="text-sm text-gray-500 flex-1">
                With our managed teams, you unlock the potential to access
                dedicated full-time development resources, meticulously tailored
                to meet your specific business needs, governance standards, and
                technical requirements.
              </p>
            </div>
            <Button className="bg-black max-sm:w-full justify-center text-white py-2">
              Hire entire team
            </Button>
          </div>
        </Section>
        <FeatureSection
        isImageRight
          description={date_featured_sections[0].description}
          title={date_featured_sections[0].title}
          badgeTitle={date_featured_sections[0].badgeTitle}
        />
        <FeatureSection
          description={date_featured_sections[1].description}
          title={date_featured_sections[1].title}
          badgeTitle={date_featured_sections[1].badgeTitle}
        />
        <Section className="flex p-0! flex-col sm:grid sm:grid-cols-12">
          <strong className="max-sm:text-xl sm:text-2xl col-span-12 font-bold text-white text-center">
            Why are companies and founders using Evoluter?
          </strong>
          {data_card_why.map((item, i) => (
            <CardWhy
              key={i}
              color={item.color}
              title={item.title}
              metric={item.metric}
              description={item.description}
            />
          ))}
        </Section>
        <Section className="p-0! items-center w-full">
          <h5 className="font-bold text-2xl text-white">Hiring made easy</h5>
          {data_card_hiring_steps.map((item, i) => (
            <CardHiringStep
              key={i}
              badgeColor={item.badgeColor}
              title={item.title}
              description={item.description}
              badgeTitle={item.badgeTitle}
            />
          ))}
        </Section>
        <Section className="card flex md:grid md:grid-cols-3 bg-white text-gray-900">
          <h5 className="h5 text-center col-span-3">
            Or hire an entire team! Created by us, just for you
          </h5>
          <div className="flex justify-center items-center gap-2 col-span-3">
            <strong className="text-lg font-thin">Monthly</strong>
            <Switch />
            <strong className="text-lg font-thin text-gray-400">
              Annually
            </strong>
          </div>

          {data_card_prices.map((item, i) => (
            <CardPrice
              color={item.color as "#ABFFC3" | "#0D0D0D" | "#FFB77A"}
              description={item.description}
              options={item.options}
              price={item.price}
              title={item.title}
              key={i}
            />
          ))}
          <strong className="text-sm font-semibold text-center col-span-3">
            Or let us know your budget and the size of team required and we can
            help make it work!
          </strong>
        </Section>
        <Section className="card border bg-transparent sm:grid sm:grid-cols-12 border-gray-200">
          <h5 className="h5 text-center col-span-12">
            Let us know what you need!
          </h5>
          <div className="fc gap-4 sm:col-span-6">
            {data_required_sections.map((item) => (
              <RequiredSection key={item.title} data={item} />
            ))}
          </div>
          <div className="fc gap-4 sm:col-span-6">
            <Input label="Name" placeholder="Enter your name" />
            <Input label="Email" placeholder="Enter your email" />
            <PhoneInput
              label="Phone number"
              placeholder="+380 (00) 000 - 00 - 00"
            />
            <Button
              className="bg-white  text-black py-2 flex justify-center font-semibold"
              title="Get started"
              icon={<ChevronRight />}
            />
          </div>
        </Section>
        <FeatureSection
          description={date_featured_sections[2].description}
          title={date_featured_sections[2].title}
          isImageRight
          badgeTitle={date_featured_sections[2].badgeTitle}
        />
        <FeatureSection
          description={date_featured_sections[3].description}
          title={date_featured_sections[3].title}
          badgeTitle={date_featured_sections[3].badgeTitle}
        />
      </main>
    </div>
  );
}
