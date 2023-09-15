import Image from "next/image";
import Link from "next/link";
import AuthForm from "./components/AuthForm";
import Hero from "./components/Hero";
import { HiAcademicCap } from "react-icons/hi";
import Layout from "./layouts/LayoutWithNavbar";

const Auth = () => {
  const heroImg = {
    height: "80vh",
  };
  return (
    <>
      <Layout>
        <Hero />
        <section id="about" className="bg-gray-100 w-full">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-1 gap-5 lg:gap-14">
            <div className="flex flex-col justify-center">
              <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl ">
                About <br /> Digital Mentor System
              </h1>
              <div>
                <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl">
                  The Digital Mentor System is an innovative concept rooted in
                  the core principles of mentorship. Mentorship, a time-honored
                  tradition, involves a seasoned and experienced individual
                  guiding a less-experienced person to achieve their goals. In
                  the digital context, this concept has been revamped to
                  transcend geographical boundaries, making mentorship
                  accessible to anyone, anywhere. At its heart, the Digital
                  Mentor System embodies the democratization of knowledge. It
                  opens doors for individuals who may not have had access to
                  traditional mentorship opportunities due to geographical
                  constraints or limited resources. Whether you're a student
                  seeking career advice, an entrepreneur looking to scale your
                  business, or someone on a personal development journey, the
                  Digital Mentor System can connect you with the right mentor.
                </p>
              </div>
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                <Link
                  href="/auth"
                  className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white -lg bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:ring-sky-300 dark:focus:ring-sky-900 rounded-lg"
                >
                  Get started
                  <svg
                    className="w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    {/* <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    /> */}
                  </svg>
                </Link>
                <a
                  href="#contact"
                  className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 -lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 rounded-lg "
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="bg-white w-full">
          <div className="grid  border border-gray-200  shadow-sm dark:border-gray-700  md:grid-cols-2">
            <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 -t-lg md:-t-none md:-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
              <figcaption className="flex items-center justify-center space-x-3">
                <div className="space-y-0.5 font-medium dark:text-white text-left">
                  <div>Names</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Uwase Raissa
                  </div>
                </div>
              </figcaption>
            </figure>
            <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 -tr-lg dark:bg-gray-800 dark:border-gray-700">
              <figcaption className="flex items-center justify-center space-x-3">
                <div className="space-y-0.5 font-medium dark:text-white text-left">
                  <div>Email</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    uwaseraissa@gmail.com
                  </div>
                </div>
              </figcaption>
            </figure>
            <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 -bl-lg md:border-b-0 md:border-r dark:bg-gray-800 dark:border-gray-700">
              <figcaption className="flex items-center justify-center space-x-3">
                <div className="space-y-0.5 font-medium dark:text-white text-left">
                  <div>Phone</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    078888888888
                  </div>
                </div>
              </figcaption>
            </figure>
            <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 -b-lg md:-br-lg dark:bg-gray-800 dark:border-gray-700">
              <figcaption className="flex items-center justify-center space-x-3">
                <div className="space-y-0.5 font-medium dark:text-white text-left">
                  <div>Location</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Kigali,Rwanda
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Auth;
