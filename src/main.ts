import './style.css'
// i need import photos here 

window.addEventListener('scroll', () => {
  const imageContainer = document.querySelector<HTMLElement>('.image-container')
  const y = window.scrollY;
  const label = Math.min(Math.floor(y/59) + 1, 59)
  

  if (imageContainer !== null){
    imageContainer.style.backgroundImage = `url('images/frames/frame_${label}_delay-0.1s.gif')`
    if (label < 30) {
      imageContainer.style.transform = `scale(1.0)`
    }
    if (label > 30){
      imageContainer.style.transform = `scale(${Math.cos(label / 60)})`
    }
    if (label > 40) {
      // imageContainer.style.width = `${value - label * 1.4}%`
    }
 
  }

 

})
