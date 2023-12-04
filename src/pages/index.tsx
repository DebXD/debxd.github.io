import Header from "@/comps/header";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import Link from "next/link";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import {
  JetBrains_Mono,
  Teko,
  Mr_Dafoe,
  Poppins,
  Caveat,
  Space_Mono,
  Ubuntu_Mono,
  Share_Tech_Mono,
} from "next/font/google";
import Image from "next/image";
import satoru from "../../public/satoru.jpeg";
import { useState } from "react";
import ReactTypingEffect from "react-typing-effect";
import { motion, MotionConfig, spring } from "framer-motion";

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], weight: "400" });
const teko = Teko({ subsets: ["latin"], weight: "400" });
const MrDafoe = Mr_Dafoe({ subsets: ["latin"], weight: "400" });
const poppins = Poppins({ subsets: ["latin"], weight: "400" });
const caveat = Caveat({ subsets: ["latin"], weight: "400" });

const spaceMono = Space_Mono({ subsets: ["latin"], weight: "400" });
const ibmMono = Share_Tech_Mono({ subsets: ["latin"], weight: "400" });

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Header />
      <main className="px-10 bg-neutral-300 dark:bg-neutral-800">
        <section className="min-h-screen">
          <nav className="py-10 mb-10 flex justify-between">
            <h1
              className={`text-4xl ${MrDafoe.className}  text-teal-500 cursor-pointer`}
            >
              <motion.button whileHover={{ rotate: "2.5deg" }}>
                <Link href={"/"}>debxd</Link>
              </motion.button>
            </h1>
            <ul className="flex items-center">
              {/* <motion.div */}
              {/*   layout */}
              {/*   transition={{ type: "spring", stiffness: 700, damping: 30 }} */}
              {/* > */}
              {/*   <li> */}
              {/*     {darkMode ? ( */}
              {/*       <MdLightMode */}
              {/*         className="h-7 w-7 cursor-pointer text-xl text-gray-700 dark:text-gray-300" */}
              {/*         onClick={() => { */}
              {/*           setDarkMode(!darkMode); */}
              {/*         }} */}
              {/*       /> */}
              {/*     ) : ( */}
              {/*       <MdDarkMode */}
              {/*         className="h-7 w-7 cursor-pointer text-xl text-gray-700 dark:text-gray-300" */}
              {/*         onClick={() => { */}
              {/*           setDarkMode(!darkMode); */}
              {/*         }} */}
              {/*       /> */}
              {/*     )} */}
              {/*   </li> */}
              {/* </motion.div> */}
              <div className="flex justify-start border-black">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" className="sr-only peer" />
                  {/* <div className="w-11 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300" /> */}
                  <motion.div
                    className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800
                    rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full
                    peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white
                    after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
                  />
                </label>
              </div>
              <li>
                <motion.button whileHover={{ scale: 1.05 }}>
                  <Link
                    href={"https://github.com/debxd"}
                    target="_blank"
                    className={`${poppins.className} bg-gradient-to-r  from-gray-800 to-purple-400 hover:bg-gradient-to-r hover:from-gray-800 hover:to-purple-800 py-2 px-4 text-white rounded-md ml-8`}
                  >
                    Projects
                  </Link>
                </motion.button>
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
          <motion.div
            initial={{ scale: 1.0 }}
            animate={{ scale: 1.1 }}
            className="text-center"
          >
            <div
              className={`text-4xl inline-block  text-transparent bg-clip-text bg-gradient-to-r  from-gray-800 to-purple-500 hover:bg-gradient-to-r hover:from-gray-800 hover:to-purple-800   cursor-pointer  ${teko.className}`}
            >
              Debiprasad Das
            </div>
          </motion.div>

          <div className="text-center">
            <h3
              className={`text-xl py-2 text-gray-900 dark:text-gray-200 ${ibmMono.className}`}
            >
              Full Stack Developer, FOSS, Linux & Privacy Enthuasiast
            </h3>

            <ReactTypingEffect
              staticText="I"
              text={[
                "write Typescript/Javascript.",
                "love to build API.",
                "use Arch btw.",
                "use react to build websites.",
              ]}
              speed={75}
              eraseSpeed={75}
              typingDelay={1000}
              cursor="_"
              className={`${jetbrainsMono.className} my-5 leading-8 text-gray-800 dark:text-gray-300 text-md`}
            />
          </div>
          <div className="mt-5 text-4xl flex justify-center text-gray-600 dark:text-gray-400 gap-16 py-3">
            <motion.button whileHover={{ scale: 1.2 }}>
              <Link
                href={"https://github.com/DebXD?tab=repositories"}
                target="_blank"
              >
                <AiFillGithub />
              </Link>
            </motion.button>
            <motion.button whileHover={{ scale: 1.2 }}>
              <Link
                href={"https://www.linkedin.com/in/debiprasad-das-xd/"}
                target="_blank"
              >
                <AiFillLinkedin />
              </Link>
            </motion.button>
            <motion.button whileHover={{ scale: 1.2 }}>
              <Link href={"https://t.me/debnationxd/"} target="_blank">
                <FaTelegramPlane />
              </Link>
            </motion.button>
          </div>
        </section>
      </main>
    </div>
  );
}
