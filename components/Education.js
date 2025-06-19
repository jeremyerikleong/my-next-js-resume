import SectionTitle from "./SectionTitle.js";

export default function Eduction() {
    const educationArr = [
        {
            id: "1",
            college_name: "The One Academy",
            course_name: "BA(Hons) Interactive Media Design",
            course_period: "May 2017 - July 2019",
            course_result: "CGPA: 3.5 / 4.0",
            course_work: [{
                project_name: "Brain & Brawn Co-op Puzzle Game (FYP): The One Academy Hall of Fame 2020 (shortlisted)",
                project_url: "https://www.behance.net/gallery/77883443/Brain-Brawn-(Local-Co-Op-Puzzle-Game)"
            }]
        },
        {
            id: "2",
            college_name: "Taylor's University",
            course_name: "Diploma in Multimedia Design",
            course_period: "March 2014 - July 2016",
            course_result: "CGPA: 3.02 / 4.0",
            course_work: []
        }
    ]

    return (
        <section>
            <SectionTitle title="Education" />

            {educationArr && educationArr.map(education => {
                return (
                    <div key={education.id} className="div-gap">
                        <h3>{education.course_name}</h3>

                        <p><span className="text-white">
                            {education.college_name}
                        </span> · <span className="text-sm">{education.course_period}</span></p>
                        <ul>
                            <li>
                                {education.course_result}
                            </li>

                            {education.course_work.length > 0 && education.course_work.map((work, index) => {
                                return (
                                    <li key={index}>
                                        <a href={work.project_url} target="_blank" className="underline">
                                            {work.project_name}
                                        </a>
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