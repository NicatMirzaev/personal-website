import Link from "next/link";
import Image from "next/image";
import Logo from "../public/logo.jpg";

export default function Header() {
  return (
    <header>
      <div className="container">
        <Link href="/">
          <a className="logo-container">
            <Image className="logo" layout="intrinsic" src={Logo} alt="logo"/>
          </a>
        </Link>
        <div className="navs">
          <Link href="/projects">
            <a>
              <span className="nav">Projects</span>
            </a>
          </Link>
          <Link href="/resume">
            <a>
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