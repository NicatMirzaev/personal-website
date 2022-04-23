import Image from "next/image";

const projects = [
  {
    id: 1,
    name: "HardCode",
    img: "/hardcode.png",
    desc: "A platform where users can improve their programming skills by solving tasks. They solve various tasks in different programming languages and earn experience points.",
    techs: ["React", "Redux", "TailwindCSS", "GraphQL", "MySQL"],
    link: "https://github.com/NicatMirzaev/hardcode-frontend"
  },
  {
    id: 2,
    name: "Personal Blog",
    img: "/personal-blog.png",
    desc: "My personal blog where I share my blogs. I made this for coding competition.",
    techs: ["NextJS", "TailwindCSS", "Express"],
    link: "http://nicat-personal-blog.herokuapp.com/"
  },
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