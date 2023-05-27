const component = document.querySelector(".component");
const textWrapper = document.querySelector<HTMLElement>(".text-wrapper");
const minValue = 0;
const rotateDegresValue = 0.019;
const glowEffect = document.querySelector<HTMLElement>("#glow");

textWrapper!.addEventListener("mousemove", (event: Event) => {
  const mouseEvent = event as MouseEvent;
  const divWidth = textWrapper!.offsetWidth;
  const divLeft = textWrapper!.offsetLeft;

  if (mouseEvent.clientX < divLeft + divWidth / 2) {
    const rotation = mapRange(mouseEvent.clientX, minValue, divWidth);

    textWrapper!.style.transform = `rotateY(${
      rotation! * rotateDegresValue
    }deg)`;
  } else {
    textWrapper!.style.transform = `rotateY(-${
      mouseEvent.clientX * rotateDegresValue
    }deg)`;
  }
});

textWrapper!.addEventListener("mouseleave", () => {
  textWrapper!.style.transform = `rotateY(0deg)`;
});

function hideFollower() {}

function mapRange(value: number, minNumber: number, maxNumber: number) {
  if (value === maxNumber / 2) {
    return value;
  } else value < maxNumber / 2;
  return maxNumber - value;
}

var delay = 100; // Set the delay time in milliseconds
var timeOutDelay;

textWrapper!.addEventListener("mousemove", (event: Event) => {
  const glowEffect = document.querySelector<HTMLElement>("#glow");
  const mouseEvent = event as MouseEvent;

  let mouseX = mouseEvent.clientX;
  let mouseY = mouseEvent.clientY;

  const scrollX = window.scrollX;
  const scrollY = window.scrollY;

  glowEffect!.style.width = "50px";
  glowEffect!.style.height = "50px";

  mouseX += scrollX;
  mouseY += scrollY;
  glowEffect!.style.left = `${mouseX - glowEffect!?.offsetWidth / 2}px`;
  glowEffect!.style.top = `${mouseY - glowEffect!?.offsetHeight / 2}px`;

  // var followerRect = glowEffect!.getBoundingClientRect();
  // if (
  //   followerRect.left < 0 ||
  //   followerRect.right > textWrapper!.offsetWidth ||
  //   followerRect.top < 0 ||
  //   followerRect.bottom > textWrapper!.offsetHeight
  // ) {
  //   glowEffect!.style.visibility = "hidden";
  // } else {
  //   glowEffect!.style.visibility = "visible";
  // }
});
