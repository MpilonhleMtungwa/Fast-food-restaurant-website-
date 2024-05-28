"use strict";

const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");
const navLink = document.querySelectorAll(".nav-link");

burger.addEventListener("click", () => {
  ul.classList.toggle("show");
});

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

document.querySelectorAll("a.nav-link").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    const offset = 90;

    const elementPosition =
      targetElement.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  });
});

//menu items

function showSection(sectionId) {
  // Hide all sections
  const sections = document.querySelectorAll(".menu-items");
  sections.forEach((section) => {
    section.style.display = "none";
  });

  // Show the selected section
  document.getElementById(sectionId).style.display = "flex";
}
// testimonals
const testimonials = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Dui faucibus in ornare quam viverra orci sagittis. Nec tincidunt praesent semper feugiat nibh sed. Sed viverra tellus in hac habitasse platea. Maecenas sed enim ut sem viverra.",
    author: "Mary Johnson",
  },
  {
    text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    author: "John Doe",
  },

  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed tempus urna et pharetra. Est ullamcorper eget nulla facilisi etiam dignissim diam quis enim.",
    author: "Lily Johns",
  },
];

let currentIndex = 0;

function showTestimonial(index) {
  const testimonialContent = document.querySelector(".testimonial-content");
  testimonialContent.classList.remove("show"); // Hide current testimonial

  setTimeout(() => {
    const blockquote = testimonialContent.querySelector("blockquote");
    blockquote.querySelector("p").innerText = testimonials[index].text;
    blockquote.querySelector("footer").innerText = testimonials[index].author;
    testimonialContent.classList.add("show"); // Show new testimonial
  }, 500); // Match this duration with the transition duration in CSS
}

document.getElementById("prev-btn").addEventListener("click", () => {
  currentIndex = currentIndex > 0 ? currentIndex - 1 : testimonials.length - 1;
  showTestimonial(currentIndex);
});

document.getElementById("next-btn").addEventListener("click", () => {
  currentIndex = currentIndex < testimonials.length - 1 ? currentIndex + 1 : 0;
  showTestimonial(currentIndex);
});

// Initialize with the first testimonial
showTestimonial(currentIndex);

document.querySelector("form").addEventListener("submit", function (event) {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !subject || !message) {
    alert("Please fill out all required fields.");
    event.preventDefault();
  } else {
    // Additional validation can be added here
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  const dotsContainer = document.querySelector(".dots");
  let currentIndex = 0;

  // Create dots slides
  slides.forEach((slide, index) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active");
    dot.addEventListener("click", () => goToSlide(index));
    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll(".dot");

  function goToSlide(index) {
    slides[currentIndex].classList.remove("active");
    dots[currentIndex].classList.remove("active");
    currentIndex = index;
    slides[currentIndex].classList.add("active");
    dots[currentIndex].classList.add("active");
    document.querySelector(".slides").style.transform = `translateX(-${
      index * 100
    }%)`;
  }

  function nextSlide() {
    let nextIndex = currentIndex + 1;
    if (nextIndex >= slides.length) nextIndex = 0;
    goToSlide(nextIndex);
  }

  // Auto slide
  setInterval(nextSlide, 5000); // Change slide every 5 seconds
});
