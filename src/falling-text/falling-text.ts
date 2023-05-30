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
    { left: `${mouseX}px`, opacity: 1 },
    { opacit: 0 },
    { left: `${mouseX + 200}px` },
  ];
  const keyframeInYAxis = [
    { top: `${mouseY}px`, opacity: 1 },
    { opacit: 0 },
    { top: `${mouseY - 0.5}px` },
  ];

  const keyframesOpacity = [{ opacity: 1 }, { opacity: 0 }];

  const keyFrameEffectX = new KeyframeEffect(
    document.querySelector(".red-block"),
    keyframeInXAxis,
    { duration: 3000, fill: "forwards" }
  );
  const keyFrameEffectY = new KeyframeEffect(
    document.querySelector(".red-block"),
    keyframeInYAxis,
    {
      duration: 3000,
      easing: "cubic-bezier(1, 1500, 0.8, -1500)",
      fill: "forwards",
    }
  );

  const keyframeEffectOpacity = new KeyframeEffect(
    document.querySelector(".red-block"),
    keyframesOpacity,
    { duration: 2500, fill: "forwards" }
  );

  const animationX = new Animation(keyFrameEffectX, document.timeline);
  const animationY = new Animation(keyFrameEffectY, document.timeline);
  const animationOpacity = new Animation(
    keyframeEffectOpacity,
    document.timeline
  );

  body.appendChild(newDiv);
  animationX.play();
  animationY.play();
  animationOpacity.play();
});
