document.addEventListener("DOMContentLoaded", function () {
    const overlay = document.getElementById("overlay");
    const bulb = document.getElementById("bulb");
    const switchButton = document.getElementById("light-switch");
    const learnButton = document.querySelector(".hero button");
    
    switchButton.addEventListener("click", function () {
        overlay.style.opacity = "0";
        setTimeout(() => {
            overlay.style.display = "none";
        }, 1500);
        bulb.classList.add("glow");
    });
    
    learnButton.addEventListener("click", function () {
        alert("Let's start learning Luganda!");
        window.location.href = "lessons.html";
    });
});
