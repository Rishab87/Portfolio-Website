// Custom cursor
const cursor = document.querySelector(".cursor")

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px"
  cursor.style.top = e.clientY + "px"
})

document.addEventListener("mousedown", () => {
  cursor.style.transform = "translate(-50%, -50%) scale(0.8)"
})

document.addEventListener("mouseup", () => {
  cursor.style.transform = "translate(-50%, -50%) scale(1)"
})

// Hamburger menu toggle
const hamburgerMenu = document.querySelector(".hamburger-menu")
const mobileNav = document.querySelector(".mobile-nav")
const body = document.body
const mobileNavLinks = document.querySelectorAll(".mobile-nav a")

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("active")
  mobileNav.classList.toggle("active")
  body.classList.toggle("menu-open")
})

// Close mobile menu when a link is clicked
mobileNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburgerMenu.classList.remove("active")
    mobileNav.classList.remove("active")
    body.classList.remove("menu-open")
  })
})

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  if (mobileNav.classList.contains("active") && !mobileNav.contains(e.target) && !hamburgerMenu.contains(e.target)) {
    hamburgerMenu.classList.remove("active")
    mobileNav.classList.remove("active")
    body.classList.remove("menu-open")
  }
})

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()

    const targetId = this.getAttribute("href")
    const targetElement = document.querySelector(targetId)

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      })
    }
  })
})

// Scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-in")
    }
  })
}, observerOptions)

// Observe all sections
document.querySelectorAll("section").forEach((section) => {
  observer.observe(section)
  section.classList.add("fade-in")
})

// Observe project cards for staggered animation
document.querySelectorAll(".project-card").forEach((card, index) => {
  card.style.transitionDelay = `${index * 0.1}s`
  observer.observe(card)
  card.classList.add("slide-up")
})

// Observe timeline items for staggered animation
document.querySelectorAll(".timeline-item").forEach((item, index) => {
  item.style.transitionDelay = `${index * 0.1}s`
  observer.observe(item)
  item.classList.add("slide-in")
})

// Add these CSS classes
document.head.insertAdjacentHTML(
  "beforeend",
  `
<style>
    .fade-in {
        opacity: 0;
        transition: opacity 0.6s ease;
    }
    
    .slide-up {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .slide-in {
        opacity: 0;
        transform: translateX(-30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .animate-in {
        opacity: 1;
        transform: translate(0, 0);
    }
</style>
`,
)

