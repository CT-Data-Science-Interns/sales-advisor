import Image from "next/image";
import StaticPageNavbar from "@/components/static-page-navbar";
import StaticPageFooter from "@/components/static-page-footer";

export default function Page() {
  return (
    <div style={{ background: "white " }}>
      <StaticPageNavbar />

      <div style={{ background: "white " }}>
        <main className="flex min-h-screen flex-col p-6">
          <div
            className="flex flex-col justify-center items-center bg-cover bg-center text-black p-10 text-center w-full h-screen"
            style={{
              backgroundImage: "url('/Ai-Site-Logo.webp')",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          ></div>

          <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
            <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
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

          <div className="flex flex-col justify-center items-center bg-cover bg-center text-black p-0 text-center w-full h-screen">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-black md:text-5xl xl:text-6xl dark:text-white">
              Seamless Sales Process
            </h1>
            <p className="text-lg">
              With the transformative power of AI, our software simplifies sales
              tracking, making it effortlessly manageable and more insightful
              than ever before.
            </p>
          </div>

          <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
            <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
              {/* Add Hero Images Here */}
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
            <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
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
