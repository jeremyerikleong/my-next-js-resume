import SectionTitle from "./SectionTitle";

export default function Languages() {
    const languagesProficiencyArr = [
        {
            languages: "Cantonese",
            fluency: "Fluent"
        },
        {
            languages: "Mandarin",
            fluency: "Fluent"
        },
        {
            languages: "English",
            fluency: "Proficiency"
        },
        {
            languages: "Bahasa Melayu",
            fluency: "Conversational"
        }
    ]

    return (
        <section>
            <SectionTitle title="Language Proficiency" />

            <ul>
                {languagesProficiencyArr && languagesProficiencyArr.map((language, index) => {
                    return (
                        <li key={index}>
                            {language.languages} ({language.fluency})
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}