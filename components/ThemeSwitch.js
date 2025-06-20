"use client"

import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { IoPrintOutline } from "react-icons/io5";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdLaptop } from "react-icons/md";
import { MdClose } from "react-icons/md";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function ThemeSwitch() {
    const [mounted, setMounted] = useState(false);
    const { setTheme, resolvedTheme } = useTheme();

    const [commandModal, setCommandModal] = useState(false);

    function triggerCommandMenu(evt) {
        if (evt.key === "k" && evt.metaKey) {
            setCommandModal(prev => !prev)
            console.log("You just pressed control and k");
        }
    }

    useEffect(() => setMounted(true), [])

    useEffect(() => {
        window.addEventListener("keydown", triggerCommandMenu);
        return () => {
            window.removeEventListener("keydown", triggerCommandMenu);
        };
    }, [])

    function closeCommandMenu() {
        setCommandModal(prev => !prev)
    }

    if (mounted)
        return (
            <>
                {commandModal && <div className={`${commandModal ? 'flex' : 'hidden'} fixed top-0 left-0 z-99 w-full h-full px-4 bg-black/50 justify-center items-center`} onClick={closeCommandMenu}>
                    <div className="w-lg md:w-2xl mx-auto bg-[#fff] dark:bg-[#0f172a] text-black dark:text-greyish-blue rounded-md border border-greyish-blue/25" onClick={(evt) => evt.stopPropagation()}>
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
                                <button className="w-full flex items-center rounded-md p-2 hover:bg-slate-200 dark:hover:bg-[#1d283a] cursor-pointer">
                                    <IoPrintOutline size={20} />
                                    <span className="ml-2 text-sm">
                                        Print
                                    </span>
                                </button>
                            </div>

                            <div>
                                <div className="text-xs p-2">Theme</div>
                                <button className="w-full flex items-center rounded-md p-2 hover:bg-slate-200 dark:hover:bg-[#1d283a] cursor-pointer" onClick={() => setTheme('light')}>
                                    <MdOutlineLightMode size={20} />
                                    <span className="ml-2 text-sm">
                                        Light
                                    </span>
                                </button>
                                <button className="w-full flex items-center rounded-md p-2 hover:bg-slate-200 dark:hover:bg-[#1d283a] cursor-pointer" onClick={() => setTheme('dark')}>
                                    <MdOutlineDarkMode size={20} />
                                    <span className="ml-2 text-sm">
                                        Dark
                                    </span>
                                </button>
                                <button className="w-full flex items-center rounded-md p-2 hover:bg-slate-200 dark:hover:bg-[#1d283a] cursor-pointer" onClick={() => setTheme('system')}>
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
            </>
        )
}