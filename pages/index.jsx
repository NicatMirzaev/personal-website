import Head from 'next/head';
import Link from "next/link";
import GitHubIcon from '../components/icons/Github';
import LinkedInIcon from '../components/icons/Linkedin';

import translate from "../lib/language";

export default function Home({ language }) {
  return (
    <div className="content">
      <div className="about">
        <h5 className="name">{translate(language, "hello")}</h5>
        <h1 className="whatido">{translate(language, "imake")}</h1>
        <p className="about-me">{translate(language, "about")}</p>
        <Link href="/projects">
          <a className="check-projects">
            {translate(language, "viewProjects")}
          </a>
        </Link>
        <div className="social-media">
          <a
            href="https://github.com/NicatMirzaev"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon className="social-media-icon"/>
          </a>

          <a
            href="https://www.linkedin.com/in/nicat-mirzoev/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon className="social-media-icon"/>
          </a>
        </div>
      </div>
    </div>
  )
}
