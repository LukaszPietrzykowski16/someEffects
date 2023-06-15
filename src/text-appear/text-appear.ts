import "../style.css";
import "./style.css";

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log("Section is in view");
    } else {
      console.log("Seciton is not in view");
    }
  });
});

const section = document.querySelector(".text-element3");
observer.observe(section!);
