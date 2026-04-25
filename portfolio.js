// Back to top arrow button

const backToTopButton = $("#backToTopButton");

// Nav fade on scroll
const nav = document.getElementById("nav");
let lastScrollY = window.scrollY;
let scrollTimeout;

window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    // Show back-to-top button
    if (currentScrollY > 300) {
        backToTopButton.addClass("show");
    } else {
        backToTopButton.removeClass("show");
    }

    // Fade nav out while scrolling, fade back in when stopped
    if (currentScrollY > 80) {
        nav.classList.add("nav-hidden");
    }

    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        nav.classList.remove("nav-hidden");
        lastScrollY = currentScrollY;
    }, 350);

    lastScrollY = currentScrollY;
});

backToTopButton.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});


//Updating NavBar

const sections = document.querySelectorAll("section[id].section");

function scrollTracker() {
    const currentYScroll = window.scrollY;

    sections.forEach((section) => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 450;
        const id = section.getAttribute("id");
        const currentNavLink = document.querySelector(`.nav-links a[href*="#${id}"]`);
        if(
            currentYScroll > sectionTop &&
            currentYScroll <= sectionTop + sectionHeight
        ) {
            currentNavLink.classList.add("active");
        } else {
            currentNavLink.classList.remove("active");
        }
    });
}

window.addEventListener("scroll", scrollTracker);