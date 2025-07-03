import React, { useRef } from "react";
import "./contactme.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaPinterestP,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import emailjs from "@emailjs/browser";

export default function ContactMe() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9r3oq27",
        "template_8kfopnm",
        form.current,
        "hhRTeopgej44pjkGu"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to send message, please try again.");
        }
      );
  };

  return (
    <section id="contact-me">
      <div className="wrapper p-block-9">
        <div className="text-center">
          <span className="sub-text overlay-text middle" datatype="Contact Me">
            Contact Me
          </span>
          <h2>
            Let's Talk for{" "}
            <span className="green-text">
              Your <br /> Next Project
            </span>
          </h2>
        </div>

        <div className="flex gap-5 mt-5 stretch">
          <form ref={form} onSubmit={sendEmail}>
            <div className="flex gap-2">
              <div className="input-container">
                <label for="name">Your Name*</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  autoComplete="name"
                  placeholder="Ex. John Doe"
                  className="input-field"
                />
              </div>
              <div className="input-container">
                <label for="email">Email*</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  required
                  autoComplete="email"
                  placeholder="example@gmail.com"
                  className="input-field"
                />
              </div>
            </div>
            <div className="flex gap-2 mt-1">
              <div className="input-container">
                <label for="phone">Phone*</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  required
                  autoComplete="phone"
                  placeholder="Enter Phone Number"
                  className="input-field"
                />
              </div>
              <div className="input-container">
                <label for="interest">I'm interested in*</label>
                <br />
                <select
                  name="interest"
                  id="interest"
                  required
                  defaultValue="Select"
                  className="input-field select"
                >
                  <option disabled value="Select">
                    Select interest
                  </option>
                  <option value="website-project">
                    New website project from $300/project
                  </option>
                  <option value="hourly support">
                    Hourly support - $15/hr
                  </option>
                  <option value="monthly support">
                    Monthly support - $500/mo
                  </option>
                  <option value="quarterly support">
                    Quarterly support - $1,200/qtr
                  </option>
                  <option value="other">Other / Something Else</option>
                </select>
              </div>
            </div>
            <div className="flex gap-2 mt-1">
              {/* <div className="input-container">
                <label for="range">Budget Range(USD)*</label>
                <br />
                <select
                  name="range"
                  id="range"
                  defaultValue="Select"
                  className="input-field select"
                  required
                >
                  <option disabled value="Select">
                    Select budget
                  </option>
                  <option value="Hourly">$15 per hour</option>
                  <option value="Monthly">$500 per month</option>
                  <option value="Quarterly">$1,200 for 3 months</option>
                  <option value="Project">Over $300</option>
                </select>
              </div> */}
              <div className="input-container">
                <label for="country">Country (optional)</label>
                <br />
                <input
                  type="text"
                  name="country"
                  placeholder="Enter country"
                  autoComplete="country"
                  className="input-field select"
                />
              </div>
            </div>
            <div className="mt-1">
              <label for="message">Your message*</label>
              <br />
              <textarea
                name="message"
                id="message"
                placeholder="Enter message here..."
                required
                className="input-field"
                rows={9}
              ></textarea>
            </div>
            <div className="mt-1">
              <button type="submit" className="btn">
                Send Message
              </button>
            </div>
          </form>

          <div className="info">
            <div className="detail gap-4">
              <div>
                <h6>Address</h6>
                <p>
                  Airport road,
                  <br />
                  Abuja, Nigeria.
                </p>
              </div>
              <div>
                <h6>Contact</h6>
                <p>
                  Phone: +234-813-8464-573
                  <br />
                  Email: augustineezra@gmail.com
                </p>
              </div>
              <div>
                <h6>Time</h6>
                <p>
                  Mon-Fri: 09:00 - 16:00 (WAT)
                  <br />
                  Sat: 10:00 - 15:00 (WAT)
                </p>
              </div>
            </div>

            <div className="bg-header rounded-b">
              <h5>Stay Connected</h5>

              <div className="flex gap-1 mt-2">
                <a href="#" className="icon-container black-inverse">
                  <FaFacebookF />
                </a>
                <a href="#" className="icon-container black-inverse">
                  <FaXTwitter />
                </a>
                <a href="#" className="icon-container black-inverse">
                  <FaInstagram />
                </a>
                <a
                  href="https://www.linkedin.com/in/ezra-austine"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-container black-inverse"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
