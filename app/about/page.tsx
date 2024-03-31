import Image from "next/image";
import StaticPageNavbar from "@/components/static-page-navbar";
import StaticPageFooter from "@/components/static-page-footer";
import { AboutCard } from "./about-card";

export default function Page() {
  return (
    <div style={{ background: "white " }}>
      <StaticPageNavbar />

      <div style={{ background: "white " }}>
        <main className="flex min-h-screen flex-col p-6">
          <div className="flex flex-col justify-center items-center bg-cover bg-center text-black p-10 text-center w-full h-screen">
            <Image
              src="/Ai-Site-Logo.webp"
              width={600}
              height={600}
              className="hidden md:block"
              alt="Sales image"
            />
            <Image
              src="/Ai-Site-Logo.webp"
              width={560}
              height={620}
              className="block md:hidden"
              alt="Sales image"
            />
          </div>

          <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
            <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-100 px-6 py-10 md:w-2/5 md:px-20">
              <div />
              <p
                className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}
              >
                <strong>Vision.</strong> Get in touch with us today to learn
                more about how our AI Sales Assistant Software can transform
                your sales process and propel your business forward. Let&apos;s
                embark on this exciting journey together!
              </p>
            </div>
            <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
              {/* Add Hero Images Here */}
              <Image
                src="/sales-2.webp"
                width={1000}
                height={760}
                className="hidden md:block"
                alt="Sales image"
              />
              <Image
                src="/sales-2.webp"
                width={560}
                height={620}
                className="block md:hidden"
                alt="Sales image"
              />
            </div>
          </div>
          <div>
            <h1 className="text-white">The goal of this company is to</h1>
          </div>

          <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
              <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                  Our Goals are to:
                </h2>
                {/* <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
            Explore the whole collection of open-source web components and
            elements built with the utility classes from Tailwind
          </p> */}
              </div>
              <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
                {/* Replace the details below with your team members */}
                <AboutCard
                  name="Itinerary Maker"
                  role="Workflow"
                  description="Generate a daily visit itinerary to streamline their workflow."
                  imageUrl="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                />
                <AboutCard
                  name="Admin"
                  role="Automation"
                  description="Increase their overall efficiency by automating tasks and
            providing actionable insights."
                  imageUrl="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                />
                <AboutCard
                  name="Progress Tracker"
                  role="Tracking"
                  description="Monitor client visits to track progress and identify potential
            opportunities."
                  imageUrl="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                />
                <AboutCard
                  name="Account"
                  role="Marketing & Sale"
                  description="Access a database of potential customers to strategically target
            sales effors and drive growth."
                  imageUrl="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png"
                />
              </div>
            </div>
          </section>

          <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
            <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
              <Image
                src="/sales.webp"
                width={1000}
                height={760}
                className="hidden md:block"
                alt="Sales image"
              />
              <Image
                src="/sales.webp"
                width={560}
                height={620}
                className="block md:hidden"
                alt="Sales image"
              />
            </div>
            <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-100 px-6 py-10 md:w-2/5 md:px-20">
              <div />
              <p
                className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}
              >
                <strong>Mission.</strong> Our software not only boosts company
                sales but also makes the sales process significantly easier for
                salespeople, empowering them with intelligent tools to drive
                revenue growth effortlessly.
              </p>
            </div>
          </div>

          <section className="bg-white dark:bg-gray-900 p-20">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
              <div className="mx-auto max-w-screen-sm text-center">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white">
                  Try Nidec AI Sales Assistant.
                </h2>
                <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
                  Boost profits, increase efficiency, and keep track of your
                  sales process now.
                </p>
                <a
                  href="/dashboard"
                  className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                >
                  Get Started
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>

      <StaticPageFooter />
    </div>
  );
}
