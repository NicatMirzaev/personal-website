import { useState } from "react";
import emailjs from "emailjs-com";
import translate from "../lib/language";

export default function Contact({ language }) {
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [data, setData] = useState({
    message: "",
    messageType: 1,
    loading: false,
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    if (data.loading) return;
    setData({ ...data, loading: true });

    const templateParams = {
      from_name: values.fullName,
      reply_to: values.email,
      message: values.message,
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_USER_ID
      )
      .then(
        function (response) {
          setData({
            message: translate(language, "sent"),
            messageType: 2,
            loading: false,
          });

          setValues({ fullName: "", email: "", message: "" });
        },
        function (error) {
          setData({
            message: translate(language, "notSent") + `(${error})`,
            messageType: 1,
            loading: false,
          });
          setValues({ fullName: "", email: "", message: "" });
        }
      );
    };

  return (
    <form className="contact" onSubmit={onSubmit}>
      <h1>{translate(language, "contact")}</h1>
      <h3>{translate(language, "contactMail")}</h3>
      <input type="text" name="fullName" value={values.fullName} onChange={handleChange} placeholder={translate(language, "namePlaceholder")} required /> 
      <input type="email" name="email" value={values.email} onChange={handleChange} placeholder={translate(language, "emailPlaceholder")} required />
      <textarea name="message" value={values.message} onChange={handleChange} placeholder={translate(language, "messagePlaceholder")} required ></textarea>
      <button disabled={data.loading} type="submit">{translate(language, "send")}</button>
      {data.message.length > 0 && (
        <p style={{ color: data.messageType === 1 ? "red" : "green" }}>
          {data.message}
        </p>
      )}
    </form>
  )
}