// Mobile Navigation
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("nav-active");
  hamburger.classList.toggle("active");
});

// Close mobile menu when clicking a link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("nav-active");
    hamburger.classList.remove("active");
  });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Active navigation indicator
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").slice(1) === current) {
      link.classList.add("active");
    }
  });

  // Show/hide scroll to top button
  const scrollTop = document.getElementById("scroll-top");
  if (window.scrollY > 500) {
    scrollTop.classList.add("visible");
  } else {
    scrollTop.classList.remove("visible");
  }
});

// Contact form submission (Redirect to Gmail with Professional Template)
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    // Get user input
    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;

    // Your email where messages will be sent
    const email = "yurehito.cs@gmail.com";

    // Professional email format
    const subject = encodeURIComponent(
      `New Contact Form Submission from ${name}`
    );
    const body = encodeURIComponent(
      `Dear ${name},\n\n` +
        `Thank you for reaching out! We have received your message and will get back to you shortly.\n\n` +
        `📩 **Your Message:**\n` +
        "---------------------------------\n" +
        `${message}\n` +
        "---------------------------------\n\n" +
        `Best Regards,\n` +
        `Yūrei\n` +
        `📧 yurehito@gmail.com`
    );

    // Gmail compose URL
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;

    // Open Gmail in a new tab
    window.open(mailtoLink, "_blank");
  });

// Scroll to top functionality
document.getElementById("scroll-top").addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Add animation on scroll
const animateOnScroll = () => {
  const elements = document.querySelectorAll(
    ".timeline-item, .experience-card"
  );

  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;

    if (elementTop < window.innerHeight && elementBottom > 0) {
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    }
  });
};

// Initial animation setup
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(
    ".timeline-item, .experience-card"
  );
  elements.forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    element.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  });

  animateOnScroll();
});

window.addEventListener("scroll", animateOnScroll);
