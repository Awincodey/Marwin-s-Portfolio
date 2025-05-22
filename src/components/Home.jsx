import React, { useEffect, useState } from "react";
import "./Home.css";
import profileImage from "../assets/awin1.png";
import aboutImage from "../assets/awin3.png";
import initScrollAnimation from "../utils/scrollanimation";
import Footer from "./Footer"; // Ensure the path is correct
import certificate1 from "../assets/Certificate1.png";
import certificate2 from "../assets/Certificate2.png";
import certificate3 from "../assets/SAP1.png";
import project1 from "../assets/Race.png";
import project2 from "../assets/png1.png";
import project3 from "../assets/photobooth.png";
import project4 from "../assets/kyoto.png";
import project5 from "../assets/Inventory.png";
import project6 from "../assets/API.png";



// Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

// Import your logo images
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/B.png";
import logo3 from "../assets/D.png";
import logo4 from "../assets/A.png";
import logo5 from "../assets/C.png";
import logo6 from "../assets/2.png";

function Home() {
  useEffect(() => {
    initScrollAnimation();
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Email sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Clear form
      } else {
        alert("Failed to send email. Please try again.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("Contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      console.warn("Contact section not found!");
    }
  };
  

  return (
    <div>
      {/* Hero Section */}
      <div className="hero" id="Home">
        <div className="hero-content fade-up">
          <h3>Hi, I'm Awin</h3>
          <h1 className="typing-effect">Freelance Web Developer</h1>
          <p>
           I'm a freelance web developer who builds clean, responsive websites tailored to your needs—whether it's for business, personal use, or anything in between.
          </p>
          
          {/* Buttons Container */}
          <div className="hero-buttons">
            <button 
              className="cta-button connect-button"
              onClick={scrollToContact}
            >
              Let's Connect!
            </button>
<a href="AWIN.pdf" download>
  <button className="cta-button download-button">
    Download CV 📄
  </button>
</a>
          </div>
        </div>
        
        <div className="hero-image fade-up">
          <img src={profileImage} alt="Profile" />
        </div>
      </div>

      {/* About Section */}
      <div className="About" id="About">
        <div className="About-content fade-up">
          <div className="About-image fade-up">
            <img src={aboutImage} alt="About Me" />
          </div>
          <div className="About-text fade-up">
            <h1>👋 Hello, I'm Awin!</h1>
            <p>
              I'm an IT professional and passionate Web Developer who brings designs to life using clean, responsive, and user-friendly code. With a strong foundation in HTML, CSS, JavaScript, and modern frameworks, I love creating websites that are not just visually appealing but also functional and optimized for performance.
            </p>

            <p>
              Whether it’s building landing pages, portfolios, or full-blown web applications, I focus on writing code that’s efficient, scalable, and easy to maintain. I enjoy turning complex problems into simple, beautiful interfaces.
            </p>

            <p>
              Let’s build something awesome together!
            </p>

          </div>
        </div>
      </div>

 <div className="projects-section fade-up" id="Certifications">
  <h1 className="section-title fade-up">Seminars & Certifications</h1>
  <div className="project-grid">
    {[
      {
        image: certificate1,
        title: "Network Foundations",
        org: "Huawei Talent",
        date: "Completed: June 28, 2022",
        portrait: true,
      },
      {
        image: certificate2,
        title: "Database Foundations",
        org: "Oracle Academy",
        date: "Completed: January 25, 2022",
        portrait: true,
      },
      {
        image: certificate3,
        title: "SAP Business One",
        org: "SAP Basic (Logistics & Financials)",
        date: "Completed: June 6, 2022",
        portrait: true,
      },
      {
        image: certificate1,
        title: "Service Operations Using ITIL Foundations",
        org: "",
        date: "Completed: June 24, 2024",
        portrait: true,
      },
    ].map((cert, i) => (
      <div className="project-card" key={i}>
        <div className="project-img-wrapper">
                    <img
            src={cert.image}
            alt={cert.title}
            className={cert.portrait ? "portrait" : ""}
          />
          <div className="project-overlay">
            <p>
              <strong>{cert.org}</strong><br />
              {cert.date}
            </p>
          </div>
        </div>
        <h3 className="project-title">{cert.title}</h3>
      </div>
    ))}
  </div>
</div>


<div className="projects-section fade-up" id="Projects">
  <h1 className="section-title fade-up">My Projects</h1>
  <div className="project-grid">
    {[
      {
        image: project1,
        title: "Typing Race Game",
        desc: "A C# Windows Forms game where users type falling words to move a car forward. Includes laps and speed boosts.",
      },
      {
        image: project2,
        title: "Barangay VAWC MIS",
        desc: "A web system for generating VAWC reports and inserting digital signatures. Built with Laravel PHP and JS.",
      },
      {
        image: project3,
        title: "Photo Booth Website",
        desc: "A React web app where users can take, decorate, and download photos.",
      },
      {
        image: project4,
        title: "CoffeeShop Website",
        desc: "A static website for a coffee shop with stylish menu, gallery, and contact form.",
      },
      {
        image: project5,
        title: "Inventory Web System",
        desc: "Inventory system to manage stock and order history. Built with PHP and JS.",
      },
      {
        image: project6,
        title: "Thirdparty API Webapp",
        desc: "A dynamic PHP/JS web app fetching and displaying real-time data via APIs.",
      },
    ].map((proj, i) => (
      <div className="project-card" key={i}>
        <div className="project-img-wrapper">
          <img src={proj.image} alt={proj.title} />
          <div className="project-overlay">
            <p>{proj.desc}</p>
          </div>
        </div>
        <h3 className="project-title">{proj.title}</h3>
      </div>
    ))}
  </div>
</div>




      {/* 🔥 Logo Carousel Section (Auto-Loop) */}
      <div className="carousel-section">
        <Swiper
          slidesPerView={3} // Shows 3 logos at a time
          spaceBetween={30}
          loop={true}
          speed={500} // Speed of transition (in ms, lower value = faster)
          autoplay={{ 
            delay: 500, // Shorter delay for faster transition
            disableOnInteraction: false 
          }}
          modules={[Autoplay]}
        >
          <SwiperSlide><img src={logo1} alt="Logo 1" className="carousel-logo" /></SwiperSlide>
          <SwiperSlide><img src={logo2} alt="Logo 2" className="carousel-logo" /></SwiperSlide>
          <SwiperSlide><img src={logo3} alt="Logo 3" className="carousel-logo" /></SwiperSlide>
          <SwiperSlide><img src={logo4} alt="Logo 4" className="carousel-logo" /></SwiperSlide>
          <SwiperSlide><img src={logo5} alt="Logo 5" className="carousel-logo" /></SwiperSlide>
          <SwiperSlide><img src={logo6} alt="Logo 6" className="carousel-logo" /></SwiperSlide>
        </Swiper>
      </div>

      <div className="contact-section" id="Contact">
        <div className="contact-container fade-up">
          <h1>Get in Touch</h1>
          <p>Have a question or want to work together? Fill out the form and I'll get back to you as soon as possible.</p>

          {/* Web3Forms Form */}
          <form 
            action="https://api.web3forms.com/submit" 
            method="POST"
            className="contact-form"
          >
            {/* Replace with your Web3Forms access key */}
            <input 
              type="hidden" 
              name="access_key" 
              value="11aad7ff-3c8e-4fc5-904d-8c029dbd8f99" 
            />

            {/* Name Input */}
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Enter your name" 
                required
              />
            </div>

            {/* Email Input */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="Enter your email" 
                required
              />
            </div>

            {/* Message Textarea */}
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                placeholder="Write your message here..." 
                required
              ></textarea>
            </div>

            {/* Honeypot Spam Protection (Web3Forms recommendation) */}
            <input 
              type="checkbox" 
              name="botcheck" 
              className="hidden" 
              style={{ display: "none" }} 
            />

            {/* Custom Confirmation / Success Page (optional) */}
            {/* <input type="hidden" name="redirect" value="https://mywebsite.com/thanks.html" /> */}

            {/* Submit Button */}
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </div>

  {/* Footer Section */}
  <Footer />
    </div>
  );
}

export default Home;
