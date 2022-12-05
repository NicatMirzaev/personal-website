import Link from "next/link";
import Image from "next/image";
import GitHubIcon from "./icons/GitHub";
import LinkedInIcon from "./icons/LinkedIn";

export default function Navbar({ language, setLanguage }) {
  return (
    <header className="navbar">
      <Link href="/">
        <Image className="logo" width={90} height={90} layout="intrinsic" src="/logo.jpg" alt="logo"/>
      </Link>
      <div className="navs">
        <div onClick={() => setLanguage(!language ? 1 : 0)} className="language-switch">
          <Image width={24} height={24} src={!language ? "/english.png" : "/georgia.png"} alt="language logo" />
          <span className="nav">{!language ? "English" : "ქართულად"}</span>
        </div>
          <a href="/CV.pdf" target="_blank" rel="noopener noreferrer">
            <span className="nav">CV</span>
          </a>
        <a
            href="https://github.com/NicatMirzaev"
            target="_blank"
            rel="noreferrer"
            className="social-media"
          >
            <GitHubIcon fill="white"/>
          </a>

          <a
            href="https://www.linkedin.com/in/nicat-mirzoev/"
            target="_blank"
            rel="noreferrer"
            className="social-media"
          >
            <LinkedInIcon fill="white"/>
          </a>
      </div>
    </header>
  )
}