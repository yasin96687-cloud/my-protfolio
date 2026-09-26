// ===== Mobile menu toggle =====
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", function () {
  navLinks.classList.toggle("open");
});

// Close menu when a link is clicked (mobile)
navLinks.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("open");
  });
});

// ===== Typing effect for hero role text =====
// "roles" ekta simple Array (Day 5) - jekhane kichu text jomano ache
const roles = ["Frontend Web Developer", "JavaScript Developer", "Aspiring Full-Stack (MERN) Learner"];
const typedEl = document.getElementById("typed");   // DOM theke element dhorlam (Day 9)
let roleIndex = 0;   // Array er kon index e ekhon achi
let charIndex = 0;   // Kotota letter type hoyeche
let deleting = false;

function typeLoop() {
  const currentRole = roles[roleIndex];

  if (!deleting) {
    typedEl.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === currentRole.length) {
      deleting = true;
      setTimeout(typeLoop, 1400);
      return;
    }
  } else {
    typedEl.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  setTimeout(typeLoop, deleting ? 40 : 80);
}

typeLoop();

// ===== Contact form (front-end only, no backend yet) =====
// eta ekhono কোনো server e data pathay na - shudhu ekta "thank you" message dekhay
// (Backend attachment sesh hole eta real email pathanor jonno connect kora jabe)
const contactForm = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();   // form er default "page reload" behavior bondho korlam
  formNote.textContent = "Thanks for reaching out! This form isn't connected to email yet — please use the direct contact links for now.";
  contactForm.reset();
});

// ===== Footer year =====
document.getElementById("year").textContent = new Date().getFullYear();
