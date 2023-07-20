import { useEffect, useState } from "react";
import { LogoTransparent, BgOne, FlowOne } from "../assets/images";

export default () => {
  const [state, setState] = useState(false);

  // Replace javascript:void(0) paths with your paths
  const navigation = [
    { title: "Features", path: "javascript:void(0)" },
    { title: "Integrations", path: "javascript:void(0)" },
    { title: "Customers", path: "javascript:void(0)" },
    { title: "Pricing", path: "javascript:void(0)" },
  ];

  useEffect(() => {
    document.onclick = (e) => {
      const target = e.target;
      if (!target.closest(".menu-btn")) setState(false);
    };
  }, []);

  return (
    <section
      className="bg-cover bg-right-bottom bg-fixed "
      style={{
        backgroundImage: `url(${BgOne})`,
        backgroundColor: "rgb(0 0 0 / 60%)",
        backgroundBlendMode: "multiply",
      }}>
      <div className="max-w-screen-xl mx-auto px-4 py-28 h-screen justify-between text-white overflow-hidden md:px-8 ">
        <div className="space-y-5 max-w-xl">
          <a
            href="javascript:void(0)"
            className="inline-flex gap-x-1 md:gap-x-6 items-center rounded-full p-1 pr-6 border text-sm font-medium duration-150 hover:bg-gray-500">
            <span className="inline-block rounded-full px-3 py-1 bg-indigo-600 text-white">
              Try now
            </span>
            <p className="flex items-center">
              Create Your Astrology Birth Chart
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5">
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clipRule="evenodd"
                />
              </svg>
            </p>
          </a>
          <h1 className="text-4xl text-white font-extrabold sm:text-5xl">
            Welcome to Astro-charts.com
          </h1>
          <p>
            Create your free, personalized, and highly customizable birth chart
            (natal chart) by filling in the form below. Using our tools you can
            hide/show planets and asteroids, choose a house system, customize
            orbs, show declinations, sidereal charts and more...
          </p>
          <div className="flex items-center gap-x-3 sm:text-sm">
            <a
              href="javascript:void(0)"
              className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex">
              Get started
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5">
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="javascript:void(0)"
              className="flex items-center justify-center gap-x-1 py-2 px-4 text-gray-700 hover:text-gray-900 font-medium duration-150 md:inline-flex">
              Contact sales
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5">
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
