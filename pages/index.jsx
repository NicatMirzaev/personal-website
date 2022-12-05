import Hero from "../components/Hero";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Technologies from "../components/Technologies";
import PersonalAchievements from "../components/PersonalAchievements";

export default function Home({ language }) {
  return (
    <>
      <Hero language={language} />
      <Experience language={language} />
      <Projects language={language} />
      <Technologies language={language} />
      <PersonalAchievements language={language}/>
    </>
  )
}
