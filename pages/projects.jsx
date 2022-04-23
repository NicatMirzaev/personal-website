import Image from "next/image";

const projects = [
  {
    id: 1,
    name: "HardCode",
    img: "/project.png",
    desc: "A full stack e-commerce website that I made with React and I used Node.js for create back-end.",
    techs: ["MongoDB", "Express"],
    link: "https://github.com/NicatMirzaev/hardcode-frontend"
  },
  {
    id: 2,
    name: "HardCode",
    img: "/project.png",
    desc: "A full stack e-commerce website that I made with React and I used Node.js for create back-end.",
    techs: ["MongoDB", "Express"],
    link: "https://github.com/NicatMirzaev/hardcode-frontend"
  },
  {
    id: 3,
    name: "HardCode",
    img: "/project.png",
    desc: "A full stack e-commerce website that I made with React and I used Node.js for create back-end.",
    techs: ["MongoDB", "Express"],
    link: "https://github.com/NicatMirzaev/hardcode-frontend"
  }
]

export default function Projects() {
  return (
    <div className="projects">
      {projects.map(project => (
        <a href={project.link} target="_blank" rel="noreferrer"key={project.id} className="project">
          <div className="project-img">
            <Image width="350px" height="230px" src={project.img} alt={project.name + " image"}/>
          </div>
          <h2 className="project-name">{project.name}</h2>
          <p className="project-description">{project.desc}</p>
          <div className="project-techs">
            {project.techs.map(tech => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </a>
      ))}
    </div>
  )
}