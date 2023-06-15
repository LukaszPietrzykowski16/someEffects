import "../style.css";
import "./style.css";

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      section?.classList.add("fade-in-animation");
    } else {
      console.log("Seciton is not in view");
    }
  });
});

const section = document.querySelector(".text-element2");
observer.observe(section!);
