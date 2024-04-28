const openModal = document.querySelector(".order-button");
const closeModal = document.querySelector(".close-button");
const backdrop = document.querySelector(".modal-overlay");

openModal.onclick = () => {
  backdrop.classList.remove("close");
  backdrop.classList.add("open");
};

closeModal.onclick = () => {
  backdrop.classList.remove("open");
  backdrop.classList.add("close");
};
