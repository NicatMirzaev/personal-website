import Image from "next/image"
import translate from "../lib/translate"

const projects = [
  {
    id: 1,
    name: "Restaurant Menu",
    img: "/restaurant.png",
    desc: [
      "It is a restaurant menu I made for a restaurant. Customers can enter the website by scanning the QR code.",
      "ეს ჩემი პირველი ფრილენს პროექტია. პროექტი გავაკეთე რესტორნისთვის, სახელად 'ნოსტალჯი'. მომხმარებელს შეუძლია შევიდეს ვებსაიტზე QR კოდის სკანირებით და დაათვალიეროს რესტორნის მენიუ."
    ],
    techs: ["React"],
    link: "https://restoran-nostalji-menu.netlify.app/"
  },
  {
    id: 2,
    name: "HardCode",
    img: "/hardcode.png",
    desc: [
      "A platform where users can improve their programming skills by solving tasks. They solve various tasks in different programming languages and earn experience points.",
      "ეს არის პლატფორმა სადაც მომხმარებლებს შეუძლიათ რომელიმე პროგრამირების ენით (Python, NodeJS, C++, C#) შეუასრულონ სხვადასხვა დავალებები (როგორც HackerRank)."
    ],
    techs: ["React", "Redux", "TailwindCSS", "GraphQL", "MySQL"],
    link: "https://github.com/NicatMirzaev/hardcode-frontend"
  },
  {
    id: 3,
    name: "Personal Blog",
    img: "/personal-blog.png",
    desc: [
      "My personal blog where I share my blogs. I made this for coding competition.",
      "ეს არის ჩემი პერსონალური ბლოგი, სადაც შეგიძლიათ შეხვიდოთ თქვენი Google, Twitter and GitHub ანგარიშების გამოყენებით. შესვლის შემდეგ შეგიძლიათ გააკეთოთ კომენტარები, დაალაიქოთ და სხვა ბევრი რამ."
    ],
    techs: ["NextJS", "TailwindCSS", "Express"],
    link: "https://github.com/NicatMirzaev/personal-blog"
  },
  {
    id: 4,
    name: "Chat App",
    img: "/chatapp.png",
    desc: [
      "A simple chat application I developed while learning VueJS. By entering your name and the name of the room you want to join, you can message the members in that room. ",
      "ეს არის ჩატის აპლიკაცია. მომხმარებლის სახელისა და ოთახის სახელის შეყვანის შემდეგ შეგიძლიათ ისაუბროთ იმ ოთახში მყოფ წევრებთან. "
    ],
    techs: ["Vue", "Express", "SocketIO"],
    link: "https://github.com/NicatMirzaev/chat-app-vuejs"
  },
  {
    id: 5,
    name: "Omegle Clone",
    img: "/omegle.png",
    desc: [
      "It is a Omegle clone. You are talking with random people. It works like Omegle. ",
      "ეს არის Omegle-ს კლონი სადაც შეგიძლიათ ისაუბროთ უცხო ადამიანებთან. მუშაობს როგორც Omegle. "
    ],
    techs: ["React", "Express", "SocketIO", "PeerJS"],
    link: "https://github.com/NicatMirzaev/omegle-clone"
  },
  {
    id: 6,
    name: "Reddit Clone",
    img: "/reddit.png",
    desc: [
      "It is a Reddit home page UI clone. I made this to improve my HTML, CSS and Javascript skills.",
      "ეს არის Reddit-ის UI კლონი. ეს გავაკეთე HTML, CSS და Javascript უნარების გასაუმჯობესებლად. "
    ],
    techs: ["React", "styled-components"],
    link: "https://github.com/NicatMirzaev/reddit-clone"
  },
]

export default function Projects({ language }) {
  return (
    <div className="projects">
      <div className="separator" />
      <h2 className="header-text">{translate(language, "projects")}</h2>
      <div className="project-cards">
        {projects.map(project => (
          <a href={project.link} target="_blank" rel="noreferrer" key={project.id} className="project">
            <div className="project-img">
              <Image width={280} height={230} src={project.img} alt={project.name + " image"}/>
            </div>
            <h2 className="project-name">{project.name}</h2>
            <p className="project-description">{project.desc[language]}</p>
            <div className="project-techs">
              {project.techs.map(tech => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}