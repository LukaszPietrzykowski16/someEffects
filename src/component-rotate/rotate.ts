const component = document.querySelector(".component");
const textWrapper = document.querySelector<HTMLElement>(".text-wrapper");

textWrapper!.addEventListener("mousemove", (event: Event) => {
  const mouseEvent = event as MouseEvent;
  const divWidth = textWrapper!.offsetWidth;

  if (mouseEvent.clientX < divWidth / 2) {
    console.log("left");
    textWrapper!.style.transform = `rotateY(${mouseEvent.clientX * 0.079}deg)`;
  } else {
    console.log("right");
    textWrapper!.style.transform = `rotateY(-${mouseEvent.clientX * 0.039}deg)`;
  }

  console.log(mouseEvent.clientX, divWidth);
});
