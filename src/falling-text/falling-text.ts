import "./style.css";

class AnimatedDiv {
  body;
  numClicks;
  constructor() {
    this.body = document.querySelector("body");
    this.numClicks = 0;
    this.registerClickEvent();
  }

  registerClickEvent() {
    this.body!.addEventListener("click", (e) => {
      this.numClicks++;
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const newDiv = document.createElement("div");
      newDiv.style.left = mouseX + "px";
      newDiv.style.top = mouseY + "px";
      newDiv.classList.add("red-block");

      const keyframeInXAxis = [
        { left: `${mouseX}px`, opacity: 0 },
        { opacity: 1 },
        { left: `${this.generateRandomNumber(mouseX)}px` },
      ];
      const keyframeInYAxis = [
        { top: `${mouseY}px`, opacity: 0 },
        { opacity: 1 },
        { top: `${mouseY - 0.5}px` },
      ];

      const keyframesOpacity = [{ opacity: 1 }, { opacity: 0 }];

      const keyFrameEffectX = new KeyframeEffect(newDiv, keyframeInXAxis, {
        duration: 3000,
        fill: "forwards",
      });

      const keyFrameEffectY = new KeyframeEffect(newDiv, keyframeInYAxis, {
        duration: 3000,
        easing: "cubic-bezier(1, 1500, 0.8, -1500)",
        fill: "forwards",
      });

      const keyframeEffectOpacity = new KeyframeEffect(
        newDiv,
        keyframesOpacity,
        { duration: 2500, fill: "forwards" }
      );

      const animationX = new Animation(keyFrameEffectX, document.timeline);
      const animationY = new Animation(keyFrameEffectY, document.timeline);
      const animationOpacity = new Animation(
        keyframeEffectOpacity,
        document.timeline
      );

      animationX.play();
      animationY.play();
      animationOpacity.play();

      animationOpacity.onfinish = () => {
        newDiv.remove();
        this.numClicks--;
        if (this.numClicks === 0) {
          this.body!.removeEventListener("click", this.registerClickEvent);
        }
      };

      this.body!.appendChild(newDiv);
    });
  }

  generateRandomNumber(positionX: number) {
    const randomNumber = Math.random();
    const scaledNumber = randomNumber * 1600 - 800;
    const randomInteger = Math.round(scaledNumber);

    return positionX - randomInteger;
  }
}
const animatedDiv = new AnimatedDiv();
