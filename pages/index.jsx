import Head from 'next/head';
import Link from "next/link";
import GitHubIcon from '../components/icons/Github';
import LinkedInIcon from '../components/icons/Linkedin';

export default function Home() {
  return (
    <div className="content">
      <Head>
        <title>Personal Website - Nicat Mirzoev</title>
        <meta name="description" content="Nicat Mirzoev Personal Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="about">
        <h5 className="name">Hello, I'm Nicat Mirzoev</h5>
        <h1 className="whatido">I make websites.</h1>
        <p className="about-me">I’m a full stack web developer with experience in developing front-end and back-end systems. I am learning new web technologies to improve myself.</p>
        <Link href="/projects">
          <a className="check-projects">
            View my projects ->
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
