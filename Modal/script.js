const modalBtn = document.querySelector(".open-modal");
const modalEl = document.querySelector(".modal-wrapper");
const closeModalBtn = document.querySelector(".modal-close");

modalBtn.addEventListener("click", () => {
  modalEl.style.display = "block";
});
closeModalBtn.addEventListener("click", () => {
  modalEl.style.display = "none";
});