const faq = document.querySelectorAll(".faq");
const toggle = document.querySelectorAll(".faq-toggle");

toggle.forEach((item) => {
  item.addEventListener("click", () => {
    item.parentNode.classList.toggle("active");
  });
});
