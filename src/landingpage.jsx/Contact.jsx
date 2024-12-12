import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false); // State to track form submission

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "aedb0090-0d68-4dd1-ad3f-0ee80ef3d256", // Replace with your Web3Forms access key
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" }); // Reset form
        alert("Message sent successfully!");
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error sending message.");
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-700 text-white p-10">
      <h2 className="text-4xl font-bold text-center mb-8">Contact Me</h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-gray-800 p-6 rounded-lg shadow-lg mb-8"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-semibold">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 mt-2 bg-gray-700 rounded-lg text-white"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 mt-2 bg-gray-700 rounded-lg text-white"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="subject" className="block text-sm font-semibold">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full p-2 mt-2 bg-gray-700 rounded-lg text-white"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-semibold">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-2 mt-2 bg-gray-700 rounded-lg text-white"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold p-2 rounded-lg"
          disabled={isSubmitted} // Disable button after submission
        >
          {isSubmitted ? "Message Sent" : "Send Message"}
        </button>
      </form>

      {/* Contact Details with Icons */}
      <div className="max-w-lg mx-auto text-center bg-gray-800 p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
        <div className="flex items-center justify-center space-x-4">
          <MdEmail className="text-xl text-blue-400" />
          <p>
            <a href="mailto:your_email@example.com" className="text-blue-400 hover:underline">
               venkatraju695@gmail.com
            </a>
          </p>
        </div>
        <div className="flex items-center justify-center space-x-4 mt-2">
          <FaPhoneAlt className="text-xl text-blue-400" />
          <p>
            <a href="tel:+1234567890" className="text-blue-400 hover:underline">
              +919014813438
            </a>
          </p>
        </div>
        <div className="flex items-center justify-center space-x-4 mt-2">
          <MdLocationOn className="text-xl text-blue-400" />
          <p>Visakhapatnam, India</p>
        </div>
        <div className="flex justify-center space-x-4 mt-4">
          <a
            href="www.linkedin.com/in/venkatarajuch"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline flex items-center space-x-2"
          >
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/venkataraju0707"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline flex items-center space-x-2"
          >
            <FaGithub />
            <span>GitHub</span>
          </a>
          <a
            href="venky___0707"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline flex items-center space-x-2"
          >
            <FaInstagram />
            <span>Instagram</span>
          </a>
        </div>
      </div>
    </div>
  );
}
