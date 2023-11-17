//active
const scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: "#navbar-example",
});

// type js
$(document).ready(function () {
  var typed = new Typed("#typed", {
    strings: ["Designer", "Developer", "Freelancer", "Photographer"],
    backSpeed: 70,
    typeSpeed: 70,
    loop: true,
    cursorChar: "|",
  });
});

//Image Modal
document.addEventListener("DOMContentLoaded", function () {
  var modal = document.querySelector(".modal");
  var images = document.querySelectorAll(".myImg");
  var modalImg = document.getElementById("img01");
  var captionText = document.querySelector(".caption");
  var closeBtn = document.querySelector(".close");

  images.forEach(function (img) {
    img.addEventListener("click", function () {
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    });
  });

  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });
});

//Owl Carousel 
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items: 1,
    autoplay: true,
    loop: true,
    autoplayTimeout: 3000,
    mouseDrag: true,

  });
});


//Hiding and showing items
var portfolioLinks = document.querySelectorAll(".portfolio-link");
var blogLinks = document.querySelectorAll(".blog-link");
var sections = [
  "home",
  "about",
  "services",
  "count",
  "work",
  "PortfolioDetails",
  "testimonials",
  "blogs",
  "contact",
  "blog-details"
];

function navigateTo(section) {
  sections.forEach(function (s) {
    var element = document.getElementById(s);
    if (s === section) {
      element.classList.remove("d-none");
    } else {
      element.classList.add("d-none");
    }
  });
  console.log(section);
}

// Add click event listener to all portfolio links
portfolioLinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior
    navigateTo("PortfolioDetails");
  });
});

// Add click event listener to all blog Links
blogLinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior
    var targetSection = link.getAttribute("data-section");

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

    navigateTo(targetSection);
  });
});


// Button event listener for the "home" section
var btnhome = document.getElementById("btnhome");
btnhome.addEventListener("click", function () {
  sections.forEach(function (s) {
    var element = document.getElementById(s);
    if (s !== "blog-details" && s !== "PortfolioDetails") {
      element.classList.remove("d-none");
    } else {
      element.classList.add("d-none");
    }
  });

  console.log("home");
});

// Button event listener for the "about" section
var btnabout = document.getElementById("btnabout");
btnabout.addEventListener("click", function () {
  // Show all sections except "about" and "PortfolioDetails"
  sections.forEach(function (s) {
    var element = document.getElementById(s);
    if (s !== "blog-details" && s !== "PortfolioDetails") {
      element.classList.remove("d-none");
    } else {
      element.classList.add("d-none");
    }
  });

  console.log("about");
});
// Button event listener for the "services" section
var btnservices = document.getElementById("btnservices");
btnservices.addEventListener("click", function () {
  // Show all sections except "about" and "PortfolioDetails"
  sections.forEach(function (s) {
    var element = document.getElementById(s);
    if (s !== "blog-details" && s !== "PortfolioDetails") {
      element.classList.remove("d-none");
    } else {
      element.classList.add("d-none");
    }
  });

  console.log("services");
});
// Button event listener for the "work" section
var btnwork = document.getElementById("btnwork");
btnwork.addEventListener("click", function () {
  // Show all sections except "about" and "PortfolioDetails"
  sections.forEach(function (s) {
    var element = document.getElementById(s);
    if (s !== "blog-details" && s !== "PortfolioDetails") {
      element.classList.remove("d-none");
    } else {
      element.classList.add("d-none");
    }
  });

  console.log("work");
});
// Button event listener for the "blogs" section
var btnblogs = document.getElementById("btnblogs");
btnblogs.addEventListener("click", function () {
  // Show all sections except "about" and "PortfolioDetails"
  sections.forEach(function (s) {
    var element = document.getElementById(s);
    if (s !== "blog-details" && s !== "PortfolioDetails") {
      element.classList.remove("d-none");
    } else {
      element.classList.add("d-none");
    }
  });

  console.log("blogs");
});
// Button event listener for the "contact" section
var btncontact = document.getElementById("btncontact");
btncontact.addEventListener("click", function () {
  // Show all sections except "about" and "PortfolioDetails"
  sections.forEach(function (s) {
    var element = document.getElementById(s);
    if (s !== "blog-details" && s !== "PortfolioDetails") {
      element.classList.remove("d-none");
    } else {
      element.classList.add("d-none");
    }
  });

  console.log("contact");
});


// Scroll To Top
let span = document.querySelector(".top");
let nums = document.querySelectorAll(".nums .num");
let section = document.querySelector(".counter");
let counterStarted = false;

window.onscroll = function () {
  // Scroll To Top
  this.scrollY >= 300 ? span.classList.add("show") : span.classList.remove("show");

  // Counter JS
  let sectionRect = section.getBoundingClientRect();
  if (sectionRect.top <= window.innerHeight && sectionRect.bottom >= 0) {
    if (!counterStarted) {
      nums.forEach((num) => startCount(num));
    }
    counterStarted = true;
  } else {
    counterStarted = false;
  }

  // Add other scroll-related functionality here if needed
};

// Function for counter
function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

// Scroll To Top functionality
span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// Add any other event listeners or functionality here
