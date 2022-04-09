import "./contact.css";
import { ReactComponent as EmailIcon } from "../../svg/email.svg";
import { ReactComponent as AddressIcon } from "../../svg/address.svg";
import { primaryColor } from "../../contexts/useTheme";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const STATUSES = {
  hold: "hold",
  sent: "sent",
  failed: "failed",
};

const MESSAGES = {
  hold: "",
  sent: "Thanks! I will respond soon. 😉",
  failed: "Sorry, something went wrong. 😓",
};

const ContactSection = () => {
  const [status, setStatus] = useState(STATUSES.hold);
  const [statusMessage, setStatusMessage] = useState(MESSAGES.hold);
  const [buttonText, setButtonText] = useState("Submit");
  const isSending = buttonText === "Sending...";
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    emailjs
      .sendForm(
        "service_nq8e5bu",
        "template_us03g4m",
        formRef.current,
        "glg4TAFNPF8VgXlBp"
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus(STATUSES.sent);
          setButtonText("Submit Again");
          setStatusMessage(MESSAGES.sent);
        },
        (error) => {
          console.log(error.text);
          setStatus(STATUSES.failed);
          setButtonText("Submit Again");
          setStatusMessage(MESSAGES.failed);
        }
      );
  };

  return (
    <section className="c">
      <div className="c-left">
        <h2 className="title">Let's discuss your project</h2>
        <div className="c-info">
          <div className="c-info-item">
            <EmailIcon fill={primaryColor} className="c-icon medium" />
            <span>emma@emmaku.com</span>
          </div>
          <div className="c-info-item">
            <AddressIcon fill={primaryColor} className="c-icon" />
            <span>Seoul, South Korea</span>
          </div>
        </div>
      </div>
      <div className="c-right">
        <div className="c-form-container">
          <p className="c-desc">
            <strong>What's your story?</strong> Get in touch. Always open to
            freelancing if the right project comes along.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              name="username"
              id="c-username"
              autoComplete="off"
            />
            <input
              type="text"
              placeholder="Subject"
              name="subject"
              id="c-subject"
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              id="c-email"
              autoComplete="off"
            />
            <textarea
              name="message"
              id="c-message"
              rows="5"
              placeholder="Message"
            />
            <button disabled={isSending}>{buttonText}</button>
            {status !== STATUSES.hold && (
              <span className={status}>{statusMessage}</span>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
