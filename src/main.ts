import './style.css'


window.addEventListener('scroll', () => {
  const imageContainer = document.querySelector<HTMLElement>('.image-container')
  const y = window.scrollY;
  const label = Math.min(Math.floor(y/59) + 1, 59)
  const value = 131;

  if (imageContainer !== null){
    imageContainer.style.backgroundImage = `url('images/frame_${label}_delay-0.1s.gif')`
    if (label > 30){
      imageContainer.style.width = `${value - label}%`
    }
    if (label > 40) {
      imageContainer.style.width = `${value - label * 1.4}%`
    }
 
  }

 

})
