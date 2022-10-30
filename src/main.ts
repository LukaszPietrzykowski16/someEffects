import './style.css'



const imageContainer = document.querySelector<HTMLElement>('.image-container')


function changeImage(){
  const y = window.scrollY;
  const label = Math.min(Math.floor(y/59) + 1, 59)

  console.log(label)
  if (imageContainer !== null){
    imageContainer.style.backgroundImage = `url('images/frame_${label}_delay-0.1s.gif')`
  }
  

  window.addEventListener('scroll', changeImage)
}

changeImage()