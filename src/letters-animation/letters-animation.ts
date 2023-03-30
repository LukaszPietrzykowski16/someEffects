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
  console.log(event.clientX, event.clientY);
});
