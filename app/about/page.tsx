import Image from "next/image";
import Link from "next/link";
import NavBar from "@/app/ui/nav-bar";

export default function Page() {
  return (
    <div style={{ background: "white " }}>
      <NavBar />
      <main className="flex min-h-screen flex-col p-6">
        <div
          className="flex flex-col justify-center items-center bg-cover bg-center text-black p-10 text-center w-full h-screen"
          style={{
            backgroundImage: "url(/sales.jpg)",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div>
            <h1 className="text-4xl font-bold">About Us</h1>
            <br />
          </div>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            scelerisque justo id mauris aliquam, eu tristique magna tincidunt.
          </p>
        </div>

        <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52"></div>
        <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
          <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
            <div />
            <p
              className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}
            >
              <strong>Vision.</strong> Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Donec scelerisque justo id mauris aliquam, eu
              tristique magna tincidunt.
            </p>
            <Link
              href="/login"
              className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
            >
              <span>Log in</span>
            </Link>
          </div>
          <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
            {/* Add Hero Images Here */}
            <Image
              src="/sales.jpg"
              width={1000}
              height={760}
              className="hidden md:block"
              alt="Screenshots of the dashboard projects showing desktop version"
            />
            <Image
              src="/sales.jpg"
              width={560}
              height={620}
              className="block md:hidden"
              alt="Screenshots of the dashboard projects showing mobile version"
            />
          </div>
        </div>
        <div>
          <h1 className="text-white">The goal of this company is to</h1>
        </div>

        <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52"></div>
        <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
          <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
            {/* Add Hero Images Here */}
            <Image
              src="/sales.jpg"
              width={1000}
              height={760}
              className="hidden md:block"
              alt="Screenshots of the dashboard projects showing desktop version"
            />
            <Image
              src="/sales.jpg"
              width={560}
              height={620}
              className="block md:hidden"
              alt="Screenshots of the dashboard projects showing mobile version"
            />
          </div>
          <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
            <div />
            <p
              className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}
            >
              <strong>About Us.</strong> Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Donec scelerisque justo id mauris aliquam, eu
              tristique magna tincidunt.
            </p>
            <Link
              href="/login"
              className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
            >
              <span>Log in</span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
