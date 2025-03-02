// Back to top arrow button

const backToTopButton = $("#backToTopButton");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    backToTopButton.addClass("show");
  } else {
    backToTopButton.removeClass("show");
  }
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
