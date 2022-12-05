const translates = {
  iam: ["Hey I'm", "მე ვარ"],
  name: ["Nicat", "ნიჯადი"],
  about: [
    "I am a full stack web developer with experience in developing front-end and back-end systems. I build high quality websites that meets with your business goals.",
    "მე ვარ Full Stack ვებ დეველოპერი, მაქვს გამოცდილება front-end და back-end სისტემების შემუშავებაში. ვაკეთებ მაღალი ხარისხის ვებ საიტებს, რომლებიც შეესაბამება თქვენს ბიზნეს მიზნებს.",
  ],
  experience: ["Experience", "გამოცდილება"],
  projects: ["Projects", "პროექტები"],
  technologies: ["Technologies", "ტექნოლოგიები"],
  techdesc: [
    "I've worked with numerous tools when it comes to web development, but these are what I'm most proficient in.",
    "მე ვმუშაობ უამრავი ტექნოლოგიებით, მაგრამ ესენი არიან ის ტექნოლოგიები, რომლებზეც გამოცდილება მაქვს.",
  ],
  personalAchievements: ["Personal Achievements", "პირადი მიღწევები"],
};

export default function translate(language, code) {
  if (translates[code]) {
    return translates[code][language];
  }
  return null;
}
