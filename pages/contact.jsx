import { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
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
            message:
              "Your message has been sent, I will get back to you as soon as possible.",
            messageType: 2,
            loading: false,
          });

          setValues({ fullName: "", email: "", message: "" });
        },
        function (error) {
          setData({
            message: `There was an error sending your message, try again. (${error})`,
            messageType: 1,
            loading: false,
          });
          setValues({ fullName: "", email: "", message: "" });
        }
      );
    };

  return (
    <form className="contact" onSubmit={onSubmit}>
      <h1>Contact</h1>
      <h3>Get in touch or shoot me an email directly on nicatmirzoev111@gmail.com</h3>
      <input type="text" name="fullName" value={values.fullName} onChange={handleChange} placeholder="Full Name" required /> 
      <input type="email" name="email" value={values.email} onChange={handleChange} placeholder="Email" required />
      <textarea name="message" value={values.message} onChange={handleChange} placeholder="Message" required ></textarea>
      <button disabled={data.loading} type="submit">Send</button>
      {data.message.length > 0 && (
        <p style={{ color: data.messageType === 1 ? "red" : "green" }}>
          {data.message}
        </p>
      )}
    </form>
  )
}