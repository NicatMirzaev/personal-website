import Image from "next/image";

const projects = [
  {
    id: 1,
    name: "Restaurant Menu",
    img: "/restaurant.png",
    desc: "It is a restaurant menu I made for a restaurant. Customers can enter the website by scanning the QR code. A few thousand people visit the site every day!",
    techs: ["React"],
    link: "https://restoran-nostalji-menu.netlify.app/"
  },
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
  {
    id: 3,
    name: "Chat App",
    img: "/chatapp.png",
    desc: "A simple chat application I developed while learning VueJS. By entering your name and the name of the room you want to join, you can message the members in that room. ",
    techs: ["Vue", "Express", "SocketIO"],
    link: "https://github.com/NicatMirzaev/chat-app-vuejs"
  },
  {
    id: 4,
    name: "Omegle Clone",
    img: "/omegle.png",
    desc: "It is a Omegle clone. You are talking with random people. It works like Omegle. ",
    techs: ["React", "Express", "SocketIO", "PeerJS"],
    link: "https://github.com/NicatMirzaev/omegle-clone"
  },
  {
    id: 5,
    name: "Reddit Clone",
    img: "/reddit.png",
    desc: "It is a Reddit home page UI clone. I made this to improve my HTML, CSS and Javascript skills.",
    techs: ["React", "styled-components"],
    link: "https://github.com/NicatMirzaev/reddit-clone"
  },
  {
    id: 6,
    name: "Twitter Clone",
    img: "/twitter.png",
    desc: "It is a Twitter home page UI clone. I made this to improve my HTML, CSS and Javascript skills.",
    techs: ["Vue"],
    link: "https://github.com/NicatMirzaev/twitter-ui-clone"
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