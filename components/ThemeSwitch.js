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
    const size = 20;
    const [input, setInput] = useState("");
    const [mounted, setMounted] = useState(false);
    const { setTheme } = useTheme();

    function triggerCommandMenu(evt) {
        if (evt.key === "k" && evt.metaKey) {
            setCommandModal(prev => !prev)
        }
    }

    const [commandModal, setCommandModal] = useState(false);
    const commandMenu = [{
        id: "1",
        command: [{
            id: "1",
            icon: <IoPrintOutline size={size} />,
            title: "print",
        }],
        category: "action",
    }, {
        id: "2",
        command: [{
            id: "1",
            icon: <MdOutlineLightMode size={size} />,
            title: "light",
        },
        {
            id: "2",
            icon: <MdOutlineDarkMode size={size} />,
            title: "dark",
        },
        {
            id: "3",
            icon: <MdLaptop size={size} />,
            title: "system",
        }],
        category: "theme",
    }]

    function handleCommandMenuInput(evt) {
        setInput(evt.target.value);
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
                {commandModal && <div className={`${commandModal ? 'flex' : 'hidden'} pop-up-overlay`} onClick={closeCommandMenu}>
                    <div className="pop-up-menu" onClick={(evt) => evt.stopPropagation()}>
                        <div className="command-menu-input-container">
                            <HiMiniMagnifyingGlass size={size} />
                            <input type="text" placeholder="Type a command or search..." value={input} className="command-menu-input" onInput={handleCommandMenuInput} />

                            <span className="cursor-pointer" onClick={closeCommandMenu}>
                                <MdClose size={size} />
                            </span>
                        </div>

                        <div className="p-2">
                            {commandMenu?.map(menu => (
                                <div key={menu.id} >
                                    <div className="command-menu-list-header">{menu.category}</div>
                                    {menu?.command.map(command => (
                                        <button key={`command${command.id}`} className="command-menu-list" onClick={() => setTheme(command.title)}>
                                            {command.icon}
                                            <span className="command-menu-list-text">
                                                {command.title}
                                            </span>
                                        </button>
                                    )
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                }
            </>
        )
}