document.addEventListener("DOMContentLoaded", () => {
    const navState = document.querySelector("#nav-state");
    const navLinks = document.querySelector("#nav-links");
    const navToggle = document.querySelector("#nav-toggle");

    navLinks.setAttribute("aria-expanded", "false");
    navState.addEventListener("change", () => {
        if(navState.checked) {
            navLinks.setAttribute("aria-expanded", "true");
            navToggle.setAttribute("aria-label", "Collapse Navigation Menu");
        } else {
            navLinks.setAttribute("aria-expanded", "false");
            navToggle.setAttribute("aria-label", "Expand Navigation Menu");
        }
    });
});