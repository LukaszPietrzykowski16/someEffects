import "./style.css";

const spans = document.querySelectorAll(".span-container span");

spans.forEach((span, index) => {
  span.addEventListener("mouseover", () => {
    if (index > 0) {
      spans[index - 1].classList.add("before-span");
    }
  });

  span.addEventListener("mouseout", () => {
    if (index > 0) {
      spans[index - 1].classList.remove("before-span");
    }
  });
});
