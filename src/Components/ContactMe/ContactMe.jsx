import React from "react";
import "./contactme.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaPinterestP,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function ContactMe() {
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
          <form>
            <div className="flex gap-2">
              <div className="input-container">
                <label for="name">Your Name*</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  autoComplete="off"
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
                  autoComplete="off"
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
                  autoComplete="off"
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
                  defaultValue="Select"
                  className="input-field select"
                >
                  <option disabled value="Select">
                    Select interest
                  </option>
                  <option value="website-project">New website project</option>
                  <option value="hourly">Hourly support</option>
                  <option value="monthly">Monthly support</option>
                  <option value="quarterly">Quarterly support</option>
                  <option value="other">Other / Something Else</option>
                </select>
              </div>
            </div>
            <div className="flex gap-2 mt-1">
              <div className="input-container">
                <label for="range">Budget Range(USD)*</label>
                <br />
                <select
                  name="range"
                  id="range"
                  defaultValue="Select"
                  className="input-field select"
                >
                  <option disabled value="Select">
                    Select budget
                  </option>
                  <option value="Hourly">$15 per hour</option>
                  <option value="Monthly">$500 per month</option>
                  <option value="Quarterly">$1,200 for 3 months</option>
                  <option value="Project">Over $300</option>
                </select>
              </div>
              <div className="input-container">
                <label for="country">Country*</label>
                <br />
                <select
                  name="range"
                  id="country"
                  defaultValue="Select"
                  className="input-field select"
                >
                  <option disabled value="Select">
                    Select country
                  </option>
                  <option value="Canada">$100-$500</option>
                  <option value="UAE">$500-$1000</option>
                  <option value="Spain">$1000+</option>
                </select>
              </div>
            </div>
            <div className="mt-1">
              <label for="message">Your message*</label>
              <br />
              <textarea
                name="message"
                id="message"
                placeholder="Enter here..."
                required
                className="input-field"
                rows={9}
              ></textarea>
            </div>
            <div className="mt-1">
              <a href="#" className="btn">
                Send Message
              </a>
            </div>
          </form>

          <div className="info">
            <div className="detail gap-4">
              <div>
                <h6>Address</h6>
                <p>
                  42 Royal Ln. Mesa,
                  <br />
                  New Jersey 35555
                </p>
              </div>
              <div>
                <h6>Contact</h6>
                <p>
                  Phone: 0123-4567-789
                  <br />
                  Email: example@gmail.com
                </p>
              </div>
              <div>
                <h6>Time</h6>
                <p>
                  Monday-Friday: 10:00 - 08:00
                  <br />
                  Saturday-Sunday: 10:00 - 06:00
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
                  <FaPinterestP />
                </a>
                <a href="#" className="icon-container black-inverse">
                  <FaInstagram />
                </a>
                <a href="#" className="icon-container black-inverse">
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
