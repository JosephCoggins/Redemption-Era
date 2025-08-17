document.addEventListener("DOMContentLoaded", () => {
    const navState = document.querySelector("#nav-state");
    const navLinks = document.querySelector("#nav-links");
    const navToggle = document.querySelector("#nav-toggle");
    const isEnglish = document.documentElement.lang.startsWith("en") || navigator.language.startsWith("en");
    const carousel = document.querySelector("#credentials");
    const images = carousel.querySelectorAll("img");

    navLinks.setAttribute("aria-expanded", "false");
    navState.addEventListener("change", () => {
        const collapseMessage = isEnglish ? "Collapse Navigation Menu" : "Colapsar Menú de Navegación";
        const expandMessage = isEnglish ? "Expand Navigation Menu" : "Expandir Menú de Navegación";

        if(navState.checked) {
            navLinks.setAttribute("aria-expanded", "true");
            navToggle.setAttribute("aria-label", collapseMessage);
        } else {
            navLinks.setAttribute("aria-expanded", "false");
            navToggle.setAttribute("aria-label", expandMessage);
        }
    });

    let current = 0;
    setInterval(() => {
        images[current].removeAttribute("aria-current");
        current = (current + 1) % images.length;
        images[current].setAttribute("aria-current", "true");
        carousel.scrollTo({
            left: images[current].offsetLeft,
            behavior: "smooth"
        });
    }, 5000);
});