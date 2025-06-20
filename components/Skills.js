import SectionTitle from "./SectionTitle"

export default function Skills() {
    const technicalSkillsArr = [
        {
            languages: "HTML, CSS, JavaScript (ES6), SQL"
        },
        {
            frameworks: "Bootstrap, Tailwind CSS, Next.js, Express.js "
        },
        {
            libraries: "jQuery, React.js"
        },
        {
            database: "PostgreSQL"
        },
        {
            tools: "Git, GitLab, Node.js, Postman, Sublime Merge, Visual Studio Code"
        }
    ]

    return (
        <section>
            <SectionTitle title="Technical Skills" />

            <ul>
                {technicalSkillsArr && technicalSkillsArr.map((skill, index) => {
                    return <li key={index}>
                        <b className="capitalize subheader">{Object.keys(skill)}:</b>
                        <span className="ml-1 text-greyish-blue">{Object.values(skill)}</span>
                    </li>
                })}
            </ul>
        </section>
    )
}