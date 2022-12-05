import translate from "../lib/translate"

const achievements = [
  {
    id: 1,
    title: "2+",
    desc: ["Years Of Experience", "წლის გამოცდილება"]
  },
  {
    id: 2,
    title: "600+",
    desc: ["GitHub Commits", "GitHub Commits"],
  },
  {
    id: 3,
    title: "15+",
    desc: ["Projects Worked On", "პროექტი"]
  },
  {
    id: 4,
    title: "14",
    desc: ["GitHub Stars", "GitHub Stars"]
  }
]

export default function PersonalAchievements({ language }) {
  return (
    <div className="PersonalAchievements">
      <div className="separator" />
      <h2 className="header-text">{translate(language, "personalAchievements")}</h2>
      <div className="achievement-cards">
        {achievements.map(ach => (
          <div key={ach.id} className="achievement">
            <h5 className="achievement-title">{ach.title}</h5>
            <p className="achievement-desc">{ach.desc[language]}</p>
          </div>
        ))}
      </div>
    </div>
  )
}