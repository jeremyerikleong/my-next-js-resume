"use client"
import Header from "@/components/Header.js";
import About from "@/components/About.js";
import Skills from "@/components/Skills.js";
import Experience from "@/components/Experience.js";
import Education from "@/components/Education.js";
import Languages from "@/components/Languages.js";
import References from "@/components/References.js";
import Footer from "@/components/Footer.js";

import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { IoPrintOutline } from "react-icons/io5";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdLaptop } from "react-icons/md";
import { MdClose } from "react-icons/md";

import { useEffect, useState } from "react";

export default function Home() {
  const [commandModal, setCommandModal] = useState(false);

  function triggerCommandMenu(evt) {
    if (evt.key === "k" && evt.metaKey) {
      setCommandModal(prev => !prev)
      console.log("You just pressed control and k");
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", triggerCommandMenu);
    return () => {
      window.removeEventListener("keydown", triggerCommandMenu);
    };
  }, [])

  function closeCommandMenu() {
    setCommandModal(prev => !prev)
  }

  return (
    <div className="flex flex-wrap items-center justify-items-center min-h-screen p-6 py-12 font-[family-name:var(--font-montserrat)] w-full max-w-[768px] mx-auto relative">
      <main className="flex flex-col gap-[32px] row-start-2">
        <Header />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Languages />
        <References />

        <div className="w-full bg-background sticky bottom-0 flex items-center border-t border-greyish-blue/25 gap-3 py-3 backdrop-blur-sm print:hidden">
          <kbd className="pointer-events-none inline-flex select-none items-center gap-1 rounded px-1.5 py-0.5 text-[10px] font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border border-greyish-blue/25">
            <div className="text-xs text-greyish-blue flex gap-1">
              <span>⌘</span><span>K</span>
            </div>
          </kbd>
          <span className="text-greyish-blue text-xs">Show command menu</span>
        </div>
      </main>
      <Footer />

      {
        commandModal && <div className={`${commandModal ? 'flex' : 'hidden'} fixed top-0 left-0 z-99 w-full h-full px-4 bg-black/65 justify-center items-center`} onClick={closeCommandMenu}>
          <div className="w-lg md:w-2xl mx-auto bg-[#030711] rounded-md border border-greyish-blue/25" onClick={(evt) => evt.stopPropagation()}>
            <div className="flex items-center px-4 py-2 border-b border-greyish-blue/25 relative">
              <HiMiniMagnifyingGlass size={20} />
              <input type="text" placeholder="Type a command or search..." className="w-full h-[36px] ml-2 focus:outline-none placeholder:text-sm" />

              <span className="cursor-pointer" onClick={closeCommandMenu}>
                <MdClose size={20} />
              </span>
            </div>

            <div className="p-2">
              <div className="">
                <div className="text-xs p-2">Actions</div>
                <button className="w-full flex items-center rounded-md p-2 hover:bg-[#1d283a] cursor-pointer">
                  <IoPrintOutline size={20} />
                  <span className="ml-2 text-sm">
                    Print
                  </span>
                </button>
              </div>

              <div className="">
                <div className="text-xs p-2">Theme</div>
                <button className="w-full flex items-center rounded-md p-2 hover:bg-[#1d283a] cursor-pointer">
                  <MdOutlineLightMode size={20} />
                  <span className="ml-2 text-sm">
                    Light
                  </span>
                </button>
                <button className="w-full flex items-center rounded-md p-2 hover:bg-[#1d283a] cursor-pointer">
                  <MdOutlineDarkMode size={20} />
                  <span className="ml-2 text-sm">
                    Dark
                  </span>
                </button>
                <button className="w-full flex items-center rounded-md p-2 hover:bg-[#1d283a] cursor-pointer">
                  <MdLaptop size={20} />
                  <span className="ml-2 text-sm">
                    System
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
}
