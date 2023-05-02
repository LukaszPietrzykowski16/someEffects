const component = document.querySelector(".component");
const textWrapper = document.querySelector<HTMLElement>(".text-wrapper");

textWrapper!.addEventListener("mousemove", (event: Event) => {
  const mouseEvent = event as MouseEvent;
  const divWidth = textWrapper!.offsetWidth;
  const divLeft = textWrapper!.offsetLeft;

  if (mouseEvent.clientX < divLeft + divWidth / 2) {
    console.log("left");
    textWrapper!.style.transform = `rotateY(${mouseEvent.clientX * 0.039}deg)`;
  } else {
    console.log("right");
    textWrapper!.style.transform = `rotateY(-${mouseEvent.clientX * 0.039}deg)`;
  }

  console.log(mouseEvent.clientX, divWidth);
});

textWrapper!.addEventListener("mouseleave", () => {
  textWrapper!.style.transform = `rotateY(0deg)`;
});
