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
    const [commandModal, setCommandModal] = useState(false);

    const commandMenu = [{
        id: "1",
        commands: [{
            id: "1",
            icon: <IoPrintOutline size={size} />,
            title: "print",
        }],
        category: "actions",
    }, {
        id: "2",
        commands: [{
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

    const [filteredCommandMenu, setFilteredCommandMenu] = useState(commandMenu);

    function triggerCommandMenu(evt) {
        if (evt.key === "k" && evt.metaKey) {
            setInput("");
            setCommandModal(prev => !prev);
            setFilteredCommandMenu(commandMenu);
        }
    }

    function handleCommandMenuInput(evt) {
        setInput(evt.target.value);

        if (evt.target.value !== "") {
            const filteredWithCategory = commandMenu.map((menu, index) => {
                const matchingCommands = menu.commands.filter(command => command.title.includes(evt.target.value));
                return matchingCommands.length > 0
                    ? { id: index + 1, category: menu.category, commands: matchingCommands }
                    : null;
            }).filter(Boolean);
            return setFilteredCommandMenu(filteredWithCategory);
        }
        setFilteredCommandMenu(commandMenu);
    }

    useEffect(() => setMounted(true), [])

    useEffect(() => {
        window.addEventListener("keydown", triggerCommandMenu);
        return () => {
            window.removeEventListener("keydown", triggerCommandMenu);
        };
    }, [])

    function closeCommandMenu() {
        setCommandModal(prev => !prev);
        setFilteredCommandMenu(commandMenu);
    }

    if (mounted)
        return (
            <>
                {commandModal && <div className={`${commandModal ? 'flex' : 'hidden'} pop-up-overlay`} onClick={closeCommandMenu}>
                    <div className="pop-up-menu" onClick={(evt) => evt.stopPropagation()}>
                        <div className="command-menu-input-container">
                            <HiMiniMagnifyingGlass size={size} />
                            <input type="text" placeholder="Type a command or search..." value={input} className="command-menu-input" onInput={handleCommandMenuInput} autoFocus />

                            <span className="cursor-pointer" onClick={closeCommandMenu}>
                                <MdClose size={size} />
                            </span>
                        </div>

                        <div className="p-2">
                            {filteredCommandMenu.map(menu => (
                                <div key={menu.id} >
                                    <div className="command-menu-list-header">{menu.category}</div>
                                    {menu.commands.map(command => (
                                        <button key={`command${command.id}`} className="command-menu-list" onClick={command.title === "print" ? () => console.log("print") : () => setTheme(command.title)}>
                                            {command.icon}
                                            <span className="command-menu-list-text">
                                                {command.title}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            ))}

                            {filteredCommandMenu.length === 0 && <p className="text-center">No command found.</p>}
                        </div>
                    </div>
                </div>
                }
            </>
        )
}