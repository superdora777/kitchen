const swiper = new Swiper(".foodSwiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

document.getElementById("scrollToFooter").onclick = () => {
  document.getElementById("footer").scrollIntoView({
    behavior: "smooth",
  });
};

//Модальное окно
const form = document.getElementById("bookingForm");
const modal = document.getElementById("successModal");
const closeModal = document.getElementById("closeModal");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const button = form.querySelector("button");
  button.disabled = true;
  button.textContent = "Отправка...";

  setTimeout(() => {
    modal.classList.remove("hidden");
    button.disabled = false;
    button.textContent = "Забронировать";
    form.reset();
  }, 1500);
});

closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});

// Закрытие по фону
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
});
