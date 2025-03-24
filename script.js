document.addEventListener("DOMContentLoaded", function () {
    const overlay = document.getElementById("overlay");
    const bulb = document.getElementById("bulb");
    const switchButton = document.getElementById("light-switch");
    const learnButton = document.getElementById("start-learning");
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");
    const gradeCards = document.querySelectorAll(".grade-card");
    const menuIcon = menuToggle.querySelector("i");
    const resourceLinks = document.querySelectorAll(".resource-item");

    // Lightbulb welcome screen effect
    if (switchButton) {
        switchButton.addEventListener("click", function () {
            bulb.classList.add("glow");
            overlay.style.opacity = "0";
            setTimeout(() => {
                overlay.style.display = "none";
            }, 1500);
        });
    }

    // Start learning button navigation
    if (learnButton) {
        learnButton.addEventListener("click", function () {
            window.location.href = "sub_pages/grades.html";
        });
    }

    // Menu toggle function
    if (menuToggle) {
        menuToggle.addEventListener("click", function () {
            menu.classList.toggle("show-menu");

            if (menu.classList.contains("show-menu")) {
                menuIcon.classList.remove("fa-bars");
                menuIcon.classList.add("fa-times");
            } else {
                menuIcon.classList.remove("fa-times");
                menuIcon.classList.add("fa-bars");
            }
        });
    }

    // Make grade cards clickable
    gradeCards.forEach(card => {
        card.addEventListener("click", function () {
            const page = this.getAttribute("data-page");
            window.location.href = `sub_pages/grades/${page}`;
        });
    });

    // Open resource links in a new tab
    resourceLinks.forEach(link => {
        link.addEventListener("click", function () {
            const url = this.getAttribute("data-url");
            window.open(url, "_blank");
        });
    });
});