const navLinks = document.querySelectorAll(".main-nav a");
const sections = document.querySelectorAll(".page-section");
const siteTitle = document.getElementById("site-title");


navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
        event.preventDefault();

        const targetId = link.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        const wasActive = targetSection.classList.contains("active");

        sections.forEach(function (section) {
            section.classList.remove("active");
        });

        if (!wasActive) {
            targetSection.classList.add("active");
        }

    });

});

siteTitle.addEventListener("click", function () {
    sections.forEach(function (section) {
        section.classList.remove("active");
    });
});