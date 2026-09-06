const navLinks = document.querySelectorAll(".main-nav a");
const sections = document.querySelectorAll(".page-section");

navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
        event.preventDefault();

        sections.forEach(function (section) {
            section.classList.remove("active");
        });

        const targetId = link.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.classList.add("active");
    });
});

