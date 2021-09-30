const modals = document.querySelectorAll("[data-modal]"); //attribute data modal

modals.forEach((el) => {
    el.addEventListener("click", () => {
        const modal = document.getElementById(el.getAttribute("data-modal")); //hidden portion
        modal.classList.add("open");
        const exits = modal.querySelectorAll(".modal-exit");
        exits.forEach((exit) => {
            exit.addEventListener("click", () => {
                modal.classList.remove("open");
            });
        });
    });
});