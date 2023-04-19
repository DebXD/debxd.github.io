import Header from "@/comps/header";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import Link from "next/link";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { JetBrains_Mono, Teko, Mr_Dafoe, Fira_Code } from "next/font/google";
import Image from "next/image";
import satoru from "../../public/satoru.jpeg";
import { useState } from "react";

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], weight: "400" });
const teko = Teko({ subsets: ["latin"], weight: "400" });
const arizonia = Mr_Dafoe({ subsets: ["latin"], weight: "400" });
const firaCode = Fira_Code({ subsets: ["latin"], weight: "400" });

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Header />
      <main className="px-10 bg-white dark:bg-black">
        <section className="min-h-screen">
          <nav className="py-10 mb-10 flex justify-between">
            <h1
              className={`text-4xl ${arizonia.className} text-violet-600 cursor-pointer`}
            >
              <Link href={"/"}>Debxd</Link>
            </h1>
            <ul className="flex items-center">
              <li>
                {darkMode ? (
                  <MdLightMode
                    className="h-7 w-7 cursor-pointer text-xl text-gray-700 dark:text-gray-300"
                    onClick={() => {
                      setDarkMode(!darkMode);
                    }}
                  />
                ) : (
                  <MdDarkMode
                    className="h-7 w-7 cursor-pointer text-xl text-gray-700 dark:text-gray-300"
                    onClick={() => {
                      setDarkMode(!darkMode);
                    }}
                  />
                )}
              </li>
              <li>
                <Link
                  href={"/"}
                  className="bg-gradient-to-r  from-cyan-500 to-teal-500 py-2 px-4 text-white rounded-md ml-8"
                >
                  Projects
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex justify-center">
            <div className="h-40 w-40 flex justify-center items-center">
              <Image
                src={satoru}
                alt="image"
                className="rounded-full shadow-inner block hover:shadow-3xl "
              />
            </div>
          </div>
          <div className="text-center px-10">
            <h2
              className={`text-5xl py-2 text-teal-600 font-medium ${teko.className} `}
            >
              Debiprasad Das
            </h2>
            <h3
              className={`text-2xl py-2 text-gray-900 dark:text-gray-200 ${jetbrainsMono.className}`}
            >
              Web Developer, FOSS & Linux Enthuasiast
            </h3>
            <p className=" py-5 leading-8 text-gray-800 dark:text-gray-300 text-lg">
              Freeelancer providing services for clients to use like react and
              etc. Follow me to get updates.
            </p>
          </div>
          <div className="text-4xl flex justify-center text-gray-600 dark:text-gray-400 gap-16 py-3">
            <Link href={"https://github.com/debxd/"}>
              <AiFillGithub />
            </Link>
            <Link href={"https://www.linkedin.com/in/debiprasad-das-xd/"}>
              <AiFillLinkedin />
            </Link>
            <Link href={"https://t.me/debnationxd/"}>
              <FaTelegramPlane />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}