import Link from "next/link";
import Image from "next/image";

export default function Header() {
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
              <span className="nav">Projects</span>
            </a>
          </Link>
          <Link href="/resume.pdf">
            <a target="_blank" rel="noopener noreferrer">
              <span className="nav">Resume</span>
            </a>
          </Link>
          <Link href="/contact">
            <a>
              <span className="nav">Contact</span>
            </a>
          </Link>
        </div>
      </div>
    </header>
  )
}