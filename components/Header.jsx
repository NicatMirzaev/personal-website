import Link from "next/link";
import Image from "next/image";
import translate from "../lib/language";

export default function Header({ language, setLanguage }) {
  return (
    <header>
      <div className="container">
        <Link href="/">
          <a className="logo-container">
            <Image className="logo" width="128px" height="128px" layout="intrinsic" src="/logo.jpg" alt="logo"/>
          </a>
        </Link>
        <div className="navs">
          <Link href="/projects">
            <a>
              <span className="nav">{translate(language, "projects")}</span>
            </a>
          </Link>
          <Link href={!language ? "/resume_english.pdf" : "/resume_georgian.pdf"}>
            <a target="_blank" rel="noopener noreferrer">
              <span className="nav">{translate(language, "resume")}</span>
            </a>
          </Link>
          <Link href="/contact">
            <a>
              <span className="nav">{translate(language, "contact")}</span>
            </a>
          </Link>
          <div onClick={() => setLanguage(!language ? 1 : 0)} style={{cursor: "pointer", display: "flex", alignItems: "center", gap: "5px"}}>
            <Image width="24px" height="24px" src={!language ? "/english.png" : "/georgia.png"} alt="language logo" />
            <span className="nav">{!language ? "English" : "ქართულად"}</span>
          </div>
        </div>
      </div>
    </header>
  )
}