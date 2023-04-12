const component = document.querySelector(".component");
const textWrapper = document.querySelector<HTMLElement>(".text-wrapper");

textWrapper!.addEventListener("mousemove", (event: Event) => {
  const mouseEvent = event as MouseEvent;

  textWrapper!.style.transform = `rotateY(${mouseEvent.clientX * 0.009}deg)`;

  console.log(mouseEvent.clientX);
});
