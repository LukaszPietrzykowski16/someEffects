import "./style.css";

const body = document.querySelector("body");

body?.addEventListener("click", (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  const newDiv = document.createElement("div");
  newDiv.style.left = mouseX + "px";
  newDiv.style.top = mouseY + "px";
  newDiv.classList.add("red-block");

  const keyframeInXAxis = [
    { left: `${mouseX}px` },
    { left: `${mouseX + 200}px` },
  ];
  const keyframeInYAxis = [
    { top: `${mouseY}px` },
    { top: `${mouseY - 0.5}px` },
  ];

  const keyFrameEffectX = new KeyframeEffect(
    document.querySelector(".red-block"),
    keyframeInXAxis,
    { duration: 2000, fill: "forwards" }
  );
  const keyFrameEffectY = new KeyframeEffect(
    document.querySelector(".red-block"),
    keyframeInYAxis,
    { duration: 2000, easing: "cubic-bezier(0, 500, 1, 500)", fill: "forwards" }
  );

  const animationX = new Animation(keyFrameEffectX, document.timeline);

  const animationY = new Animation(keyFrameEffectY, document.timeline);

  body.appendChild(newDiv);
  animationX.play();
  animationY.play();
});
