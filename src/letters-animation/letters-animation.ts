import "./style.css";

const text = "very long text";
const textContainer = document.querySelector(".text-container");

window.addEventListener("DOMContentLoaded", () => {
  for (let i = 0; i < text.length; i++) {
    const div = document.createElement("div");
    textContainer?.appendChild(div);
    div.classList.add("text");
    div.innerHTML = text[i];
  }
});

window.addEventListener("mousemove", (event) => {
  const mouseX = event.clientX;
  const mouseY = event.clientY;
  const text = document.querySelectorAll(".text");
  text.forEach((letter) => {
    const rect = letter.getBoundingClientRect();
    if (
      mouseX >= rect.left &&
      mouseX <= rect.right &&
      mouseY >= rect.top &&
      mouseY <= rect.bottom
    ) {
      animateLetter(letter);
    }
  });
});

function animateLetter(letter: any) {
  letter.classList.add("hover-text");
}
