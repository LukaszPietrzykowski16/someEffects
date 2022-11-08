import img0 from '../images/gallery/img0.webp'
import img1 from '../images/gallery/img1.webp'
import img2 from '../images/gallery/img2.webp'
import img3 from '../images/gallery/img3.webp'
import img4 from '../images/gallery/img4.webp'
import img5 from '../images/gallery/img5.png'

const imageArray = [img0, img1, img2, img3, img4, img5]
const leftDiv = document.querySelector<HTMLElement>('.photo-container__small--left')
const rightDiv = document.querySelector<HTMLElement>('.photo-container__small--right')
const mainDiv = document.querySelector<HTMLElement>('.photo-container__photo')
const leftButton = document.querySelector<HTMLElement>('.photo-conariner__arrow--left')
const rightButton = document.querySelector<HTMLElement>('.photo-conariner__arrow--right')

const index = {
    count: 4
}

function renderMainImages(currentCount: number){
    return `<img class='photo-container__image'src='${imageArray[currentCount]}'/>`
}

function renderPrevImages(currentCount: number){
    return `<img class='photo-container__image'src='${imageArray[currentCount]}'/>`
}

function renderNextImages(currentCount: number){
    return `<img class='photo-container__image'src='${imageArray[currentCount]}'/>`
}




function displayImages()  {
    if(mainDiv !== null){
        mainDiv.innerHTML = renderMainImages(index.count)
    }
    if(leftDiv !== null){
        leftDiv.innerHTML = renderPrevImages(index.count - 1 < 0 ? imageArray.length - 1 : index.count - 1 )
    }
    if(rightDiv !== null){
        rightDiv.innerHTML = renderNextImages(index.count + 1 > imageArray.length - 1 ? 0 : index.count + 1)
        
    }
}


function animate(_e: MouseEvent){
    _e.preventDefault;
    rightDiv.classList.remove('photo-container__small--right-effect')
   

    rightDiv.offsetWidth;
    rightDiv.classList.add('photo-container__small--right-effect')
}


displayImages()
if(leftButton !== null){
    leftButton.addEventListener('click', () => {
        let newCount = index.count - 1;
        index.count = newCount;
        if(newCount < 0){
            index.count = imageArray.length - 1;
        }
        displayImages();
    })
}

if(rightButton !== null){
    rightButton.addEventListener('click', (e) => {
        animate(e)
        let newCount = index.count + 1;
        index.count = newCount;
        if(newCount > imageArray.length - 1){
            index.count = 0;
        }
        displayImages();
    })
}




