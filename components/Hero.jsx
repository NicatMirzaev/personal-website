import Image from "next/image";
import translate from "../lib/translate";

export default function Hero({ language }) {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2 className="iam">{translate(language, "iam")} <br /> {translate(language, "name")}</h2>
        <p className="description">{translate(language, "about")}</p>
      </div>
      <div className="imgcontainer">
        <Image src="/hero-anim.svg" fill alt="hero svg" />
      </div>
    </div>
  )
}