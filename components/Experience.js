import SectionTitle from "./SectionTitle.js";

export default function Experience() {
    const workExperienceArr = [
        {
            id: "1",
            company_name: "TTwoWeb",
            company_url: "https://www.ttwoweb.com/",
            work_position: "Front-End Web Developer",
            work_period: "July 2022 - September 2024",
            job_scope: ["Develop dynamic and responsive websites.",
                "Deliver responsive web and mobile UI designs with cross-browser compatibility.",
                "Implement backend integration via a RESTful API.",
                "Assists backend developers in debugging and upgrading.",
                "Working closely with the designers, software engineers, and project executives to fulfill clients’ needs."
            ]
        },
        {
            id: "2",
            company_name: "MindSpace",
            company_url: "https://www.mindspace.my/",
            work_position: "Interactive Content Developer",
            work_period: "August 2019 – March 2021",
            job_scope: ["Develop Gamification education content for special needs using Unity3D.",
                "Managing website content via Grav CMS.",
                "Create company social media posts using Adobe tools.",
            ]
        },
        {
            id: "3",
            company_name: "MindSpace",
            company_url: "https://www.mindspace.my/",
            work_position: "IT Intern",
            work_period: "April 2019 – July 2019",
            job_scope: ["Manage company social media posts.",
                "Computer class and mandarin class teaching assistant.",
                "General IT support.",
            ]
        }
    ]

    return (
        <section>
            <SectionTitle title="Work Experience" />

            {workExperienceArr && workExperienceArr.map(workExperience => {
                return (
                    <div key={workExperience.id} className="div-gap">
                        <h3>{workExperience.work_position}</h3>

                        <p>
                            <a href={workExperience.company_url} target="_blank" className="text-white cursor-pointer">
                                {workExperience.company_name}
                            </a> · <span className="text-sm">{workExperience.work_period}</span></p>
                        <ul>
                            {workExperience.job_scope.map((jobscope, index) => {
                                return (
                                    <li key={index}>
                                        {jobscope}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                )
            })}
        </section>
    )
}