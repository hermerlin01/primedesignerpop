const hamburger = document.getElementById("hamburger");
const closeBtn = document.getElementById("closeBtn");
const sideMenu = document.getElementById("sideMenu");
const buttons = document.querySelectorAll(".port-filter");
const cards = document.querySelectorAll(".port-card");



/* OPEN */

hamburger.addEventListener("click", function () {

    sideMenu.classList.add("active");

});


/* CLOSE */

closeBtn.addEventListener("click", function () {

    sideMenu.classList.remove("active");

});

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const selectedCategory = button.dataset.category;

        cards.forEach(card => {

            const cardCategory = card.dataset.category;

            if (
                selectedCategory === "all" ||
                cardCategory === selectedCategory
            ) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

});