import img0 from '../images/gallery/img0.webp'
import img1 from '../images/gallery/img1.webp'
import img2 from '../images/gallery/img2.webp'
import img3 from '../images/gallery/img3.webp'
import img4 from '../images/gallery/img4.webp'
import img5 from '../images/gallery/img5.png'

const imageArray = [img0, img1, img2, img3, img4, img5]
const leftDiv = document.querySelector('.photo-container__small--left')
const rightDiv = document.querySelector('.photo-container__small--right')
const mainDiv = document.querySelector('.photo-container__photo')
const leftButton = document.querySelector('.photo-conariner__arrow--left')
const rightButton = document.querySelector('.photo-conariner__arrow--left')

const index = {
    count: 4
}

function renderImages(currentCount: number){
    return `<img class='photo-container__image'src='${imageArray[currentCount]}'/>`
}




function displayImages()  {

    mainDiv.innerHTML = renderImages(index.count)
    /*
    leftDiv.innerHTML = `
    <img 
    class='photo-container__image'
    src='${imageArray[index.count - 1]}'/>
    `
    */
    
    /*
    rightDiv.innerHTML = `
    <img 
    class='photo-container__image'
    src='${imageArray[index.count + 1]}'/>
    `
    */
}



displayImages()

leftButton.addEventListener('click', () => {
    let newCount = index.count - 1;
    index.count = newCount;
    console.log(index.count)
    displayImages();
})

rightButton.addEventListener('click', () => {
    let newCount = index.count + 1;
    index.count = newCount;
    console.log(index.count)
    displayImages();
})


