const component = document.querySelector(".component");
const textWrapper = document.querySelector<HTMLElement>(".text-wrapper");

component?.addEventListener("mousemove", (event: Event) => {
  const mouseEvent = event as MouseEvent;

  textWrapper!.style.transform = `rotateY(${mouseEvent.clientX * 0.2}deg)`;

  console.log(mouseEvent.clientX);
});
