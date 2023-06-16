//-------- modal---------//

// daejeon Modal
const $daejeonModalBtn = document.querySelector(".modal_open.daejeon");
const $daejeonModal = document.querySelector(".daejeon_modal");
const $daejeonClose = document.querySelector(".daejeon_modal .modal_close");

$daejeonModalBtn.addEventListener("click", () => {
  $daejeonModal.classList.add("on");
});

$daejeonClose.addEventListener("click", () => {
  $daejeonModal.classList.remove("on");
});

// NEWNEEK Modal

const $newneekBtn = document.querySelector(".modal_open.newneek");
const $newneekModal = document.querySelector(".newneek_modal");
const $newneekClose = document.querySelector(".newneek_modal .modal_close");

$newneekBtn.addEventListener("click", () => {
  $newneekModal.classList.add("on");
});

$newneekClose.addEventListener("click", () => {
  $newneekModal.classList.remove("on");
});

// Map'smart Modal

const $mapsmartBtn = document.querySelector(".modal_open.map");
const $mapModal = document.querySelector(".map_modal");
const $mapClose = document.querySelector(".map_modal .modal_close");

$mapsmartBtn.addEventListener("click", () => {
  $mapModal.classList.add("on");
});

$mapClose.addEventListener("click", () => {
  $mapModal.classList.remove("on");
});

//Tourguide Modal

const $tourBtn = document.querySelector(".modal_open.tour");
const $tourModal = document.querySelector(".tour_modal");
const $tourClose = document.querySelector(".tour_modal .modal_close");

$tourBtn.addEventListener("click", () => {
  $tourModal.classList.add("on");
});

$tourClose.addEventListener("click", () => {
  $tourModal.classList.remove("on");
});

// tabs

const tabImgs = document.querySelectorAll(".tabImg");

tabImgs.forEach((tabImg) => {
  tabImg.addEventListener("click", () => {
    tabImgs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tabImg.classList.add("active");
  });
});

//codeAni

// setTimeout(() => {
//   const codeImages = document.querySelectorAll(".codeList");
//   codeImages.forEach((image) => {
//     image.classList.add("hidden");
//   });
// }, 5000);
