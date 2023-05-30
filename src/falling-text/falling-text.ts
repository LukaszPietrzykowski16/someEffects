import "./style.css";

const body = document.querySelector("body");

body?.addEventListener("click", (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  const newDiv = document.createElement("div");
  //   newDiv.style.left = mouseX + "px";
  //   newDiv.style.top = mouseY + "px";
  newDiv.classList.add("red-block");

  body.appendChild(newDiv);
});
