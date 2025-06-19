import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { RiGithubLine } from "react-icons/ri";
import { TbBrandLinkedin } from "react-icons/tb";
import { MdOutlineEmail } from "react-icons/md";
import { HiOutlineGlobe } from "react-icons/hi";

export default function Header() {
    const size = 18;

    const socialMediaArr = [
        {
            id: "1",
            platform: "Github",
            url: "https://github.com/jeremyerikleong",
            print_text: "https://github.com/jeremyerikleong",
            icon: <RiGithubLine size={size} />
        },
        {
            id: "2",
            platform: "Linkedin",
            url: "https://www.linkedin.com/in/jeremyerikleong95/",
            print_text: "https://www.linkedin.com/in/jeremyerikleong95/",
            icon: <TbBrandLinkedin size={size} />
        },
        {
            id: "3",
            platform: "Email",
            url: "mailto:jeremythegreat95@gmail.com",
            print_text: "jeremythegreat95@gmail.com",
            icon: <MdOutlineEmail size={size} />
        },
        {
            id: "4",
            platform: "Portfolio",
            url: "https://jeremyerikleong.com",
            print_text: "https://jeremyerikleong.com",
            icon: <HiOutlineGlobe size={size} />
        },
    ]

    return (
        <section>
            <div className="sr-only">
                Jeremy Erik Leong's Resume
            </div>

            <h1>
                Jeremy Erik Leong Kar Ye
            </h1>

            <div className="div-gap">
                <p>
                    Front-End Developer with 2+ years of experience specializing in JavaScript, React, and Node.js, developing websites with a strong emphasis on responsive design, user-centric principles, and accessibility.
                </p>

                <div className="flex items-center gap-2 my-4 text-greyish-blue">
                    <IoLocationOutline size={16} />
                    <p>
                        Kuala Lumpur, Malaysia
                    </p>
                </div>

                <ul className="flex justify-start items-start print:flex-col gap-3 pl-0">
                    {socialMediaArr && socialMediaArr.map(socialMedia => {
                        return <li className="list-none" key={socialMedia.id}>
                            <a href={socialMedia.url} target="_blank" aria-label={socialMedia.platform} className="print:hidden block border border-greyish-blue/25 rounded-md p-2 hover:bg-greyish-blue/5">
                                <span>
                                    {socialMedia.icon}
                                </span>
                            </a>

                            <div className="hidden print:flex items-center gap-2">
                                {socialMedia.icon}
                                <span className="hidden print:inline">
                                    {socialMedia.print_text}
                                </span>
                            </div>
                        </li>
                    })}
                </ul>
            </div>
        </section>
    )
}

