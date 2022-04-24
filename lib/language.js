const translates = {
  "hello": ["Hello, I am Nicat Mirzoev", "გამარჯობა, მე ვარ ნიჯად მირზოევი"],
  "imake": ["I make websites.", "მე ვაკეთებ ვებ საიტებს."],
  "about": [
    "I am a full stack web developer with experience in developing front-end and back-end systems. I build high quality websites that meets with your business goals.",
    "მე ვარ Full Stack ვებ დეველოპერი, მაქვს გამოცდილება front-end და back-end სისტემების შემუშავებაში. ვაკეთებ მაღალი ხარისხის ვებ საიტებს, რომლებიც შეესაბამება თქვენს ბიზნეს მიზნებს."
  ],
  "viewProjects": ["View my projects ->", "დაათვალიერე ჩემი პროექტები ->"],
  "projects": ["Projects", "პროექტები"],
  "resume": ["Resume", "რეზიუმე"],
  "contact": ["Contact", "კონტაქტი"],
  "contactMail": ["Get in touch or shoot me an email directly on nicatmirzoev111@gmail.com", "შეგიძლიათ გამომიგზავნოთ მეილი პირდაპირ nicatmirzoev111@gmail.com მისამართზე."],
  "namePlaceholder": ["Full Name", "თქვენი სახელი და გვარი"],
  "emailPlaceholder": ["Email", "თქვენი ელ-ფოსტა"],
  "messagePlaceholder": ["Message", "შეტყობინება"],
  "send": ["Send", "გაგზავნა"],
  "sent": [
    "Your message has been sent, I will response as soon as possible.",
    "თქვენი შეტყობინება გაიგზავნა, პასუხს გაგცემთ რაც შეიძლება ადრე."
  ],
  "notSent": [
    "Your message could not be sent.",
    "თქვენი შეტყობინება ვერ გაიგზავნა."
  ]
}

export default function translate(language, code) {
  if(translates[code]) {
    return translates[code][language];
  }
  return null;
}