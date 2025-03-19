document.addEventListener("DOMContentLoaded", function () {
    const overlay = document.getElementById("overlay");
    const bulb = document.getElementById("bulb");
    const switchButton = document.getElementById("light-switch");
    const learnButton = document.querySelector(".hero button");
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");

    // Lightbulb welcome screen effect
    switchButton.addEventListener("click", function () {
        overlay.style.opacity = "0";
        setTimeout(() => {
            overlay.style.display = "none";
        }, 1500);
        bulb.classList.add("glow");
    });

    // Start learning button
    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("show-menu");
        menuToggle.classList.toggle("open");

        // Change icon between ☰ and ✖
        if (menu.classList.contains("show-menu")) {
            menuIcon.innerHTML = "✖"; // Close icon
        } else {
            menuIcon.innerHTML = "&#9776;"; // Hamburger icon
        }
    });
});