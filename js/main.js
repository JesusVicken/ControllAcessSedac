const openModalButton = document.querySelector("#open-modal");
const openModalButton2 = document.querySelector("#open-modal2");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = () => {
  [modal,fade].forEach((el) => el.classList.toggle("hide"));
};

[openModalButton, openModalButton2, closeModalButton, fade].forEach((el) => {  
  el.addEventListener("click", () => toggleModal());

}); 


  