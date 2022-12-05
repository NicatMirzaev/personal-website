import translate from "../lib/translate"
import BackendIcon from "./icons/Backend"
import ReactIcon from "./icons/React"
import UIUXIcon from "./icons/UIUX"

const technologies = [
  {
    id: 1,
    icon: <ReactIcon />,
    title: "Front-End",
    desc: ["Experienced with React.js, Next.js, Razzle.js", ""] 
  },
  {
    id: 2,
    icon: <BackendIcon />,
    title: "Back-End",
    desc: ["Experienced with Node.js (Express), GraphQL, MongoDB, PostgreSQL", ""] 
  },
  {
    id: 3,
    icon: <UIUXIcon />,
    title: "UI / UX",
    desc: ["Experienced with tools like TailwindCSS and Material UI.", ""] 
  }
]

export default function Technologies({ language }) {
  return (
    <div className="technologies">
      <div className="separator" />
      <h2 className="header-text">{translate(language, "technologies")}</h2>
      <p className="description">{translate(language, "techdesc")}</p>
      <div className="technology-cards">
        {technologies.map(technology => (
          <div key={technology.id} className="technology">
            <picture>{technology.icon}</picture>
            <h4 className="technology-title">{technology.title}</h4>
            <p className="technology-desc">{technology.desc[0]}</p>
          </div>
        ))}
      </div>
    </div>
  )
}