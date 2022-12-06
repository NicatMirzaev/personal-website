import translate from "../lib/translate"
import BriefcaseIcon from "./icons/Briefcase"

const experiences = [
  {
    id: 1,
    company: "Citadeli (ციტადელი)",
    position: "Front End Developer",
    period: "May 2022 - Oct 2022",
    description_en: "Technologies I used: Typescript, React, Git, Material UI.",
    description_ge: "გამოვიყენე ტექნოლოგიები: Typescript, React, Git, Material UI.",
    type: "Full Time",
  },
]

export default function Experience({ language }) {
  return (
    <div className="experience">
      <div className="separator" />
      <h2 className="header-text">{translate(language, "experience")}</h2>
      {experiences.map((exp) => (
        <div key={exp.id} className="experience-item">
          <div className="left-side">
            <div className="work-icon"><BriefcaseIcon /></div>
          </div>
          <div className="right-side">
            <div className="period">{exp.period}</div>
            <h1>{exp.position} - <span>{exp.company}</span></h1>
            <span>{!language ? exp.description_en : exp.description_ge}</span>
          </div>
        </div>
      ))}
    </div>
  )
}