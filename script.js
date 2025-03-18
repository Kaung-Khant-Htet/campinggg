document.addEventListener("DOMContentLoaded", function() {
    console.log("Website loaded successfully!");
});

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.querySelectorAll(".view-all-products");
    if (buttons.length > 1) {
        for (let i = 1; i < buttons.length; i++) {
            buttons[i].remove(); 
        }
    }
});