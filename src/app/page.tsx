import Button from "@/components/Button";
import Header from "@/components/Header";
import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <Header />

      <main className="lg:pt-16 max-sm:pt-0 flex flex-col gap-4 p-4 sm:px-10">
        <section className="max-sm:flex max-sm:flex-col gap-4 sm:grid sm:grid-cols-12">
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
        </section>
        <section className="flex max-sm:flex-wrap justify-center flex-row items-center gap-4 max-sm:gap-1">
          <div className="text-gray-400 text-xl font-bold">SEQUOIA</div>
          <div className="text-gray-400 text-xl font-bold">SEQUOIA</div>
          <div className="text-gray-400 text-xl font-bold">SEQUOIA</div>
          <div className="text-gray-400 text-xl font-bold">SEQUOIA</div>
          <div className="text-gray-400 text-xl font-bold">SEQUOIA</div>
        </section>
        <section className="rounded-lg bg-white p-4 sm:px-10 gap-4 max-sm:flex max-sm:flex-col sm:grid sm:grid-cols-12">
          <div className="col-span-9 flex flex-col">
            <strong className="text-xl sm:text-2xl font-bold text-black">
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
            className="rounded-sm h-full w-full sm:col-span-3 max-sm:hidden"
            src={
              "https://res.cloudinary.com/dlavqnrlx/image/upload/v1751608443/qyprzyp7u2df29zns209.png"
            }
          />
          <div className="flex flex-col col-span-4 bg-[#0D0D0D] rounded-2xl gap-2 cursor-pointer w-full sm:hover:scale-105 duration-200 p-4 items-center">
            <Image
              alt="hero 1"
              width={0}
              height={0}
              className="rounded-2xl h-full w-full"
              src={
                "https://res.cloudinary.com/dlavqnrlx/image/upload/v1751608443/qyprzyp7u2df29zns209.png"
              }
            />
            <strong className="text-xl font-bold text-white text-center">Hire Developers</strong>
            <p className="text-sm text-gray-50 text-center">
              Skilled software engineers, coders, and architects with extensive
              knowledge in a wide array of technologies and industry sectors.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
