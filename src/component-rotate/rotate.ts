const component = document.querySelector(".component");
const textWrapper = document.querySelector<HTMLElement>(".text-wrapper");
const minValue = 0;
const rotateDegresValue = 0.01;
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

function mapRange(value: number, minNumber: number, maxNumber: number) {
  if (value === maxNumber / 2) {
    return value;
  } else value < maxNumber / 2;
  return maxNumber - value;
}

var delay = 100; // Set the delay time in milliseconds
var timeOutDelay;

textWrapper!.addEventListener("mouseleave", showFollower);

textWrapper!.addEventListener("mousemove", (event: Event) => {
  const glowEffect = document.querySelector<HTMLElement>("#glow");
  const mouseEvent = event as MouseEvent;

  let mouseX = mouseEvent.clientX;
  let mouseY = mouseEvent.clientY;

  let textWrapperRect = textWrapper?.getBoundingClientRect();
  let glowEffectX = mouseX - textWrapperRect!.left;
  let glowEffectY = mouseY - textWrapperRect!.top;

  let glowEffectRect = glowEffect?.getBoundingClientRect();
  let glowEffcetHalfWidth = glowEffectRect!.width / 2;
  let glowEffcetHalfHeight = glowEffectRect!.height / 2;

  var distanceLeft = glowEffectX;
  var distanceRight = textWrapperRect!.width - glowEffectX;
  var distanceTop = glowEffectY;
  var distanceBottom = textWrapperRect!.height - glowEffectX;

  glowEffect!.style.left = glowEffectX + "px";
  glowEffect!.style.top = glowEffectY + "px";

  var clipPathValue = `circle(${Math.min(
    glowEffcetHalfWidth,
    glowEffcetHalfHeight
  )}px at ${glowEffcetHalfWidth}px ${glowEffcetHalfHeight}px)`;
  clipPathValue += `, ${distanceRight}px 0, ${distanceBottom}px ${distanceLeft}px, 0 ${distanceTop}px`;
  glowEffect!.style.clipPath = clipPathValue;
});

function showFollower() {
  glowEffect!.style.clipPath = "circle(50%)";
}
