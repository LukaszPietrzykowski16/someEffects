import img0 from '../images/gallery/img0.webp'
import img1 from '../images/gallery/img1.webp'
import img2 from '../images/gallery/img2.webp'
import img3 from '../images/gallery/img3.webp'
import img4 from '../images/gallery/img4.webp'
import img5 from '../images/gallery/img5.png'

const imageArray:Array<any> = [img0, img1, img2, img3, img4, img5]
const namesArray:Array<string> = ['Jesse Pinkman', 'Walter White', 'Hank Shrader', 'Mike Ehrmantraut', 'Saul Goodman', 'Skyler White']
const paragraphArray:Array<string> = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus ex fermentum viverra ultricies. Maecenas scelerisque risus nec nunc elementum, in auctor massa gravida. Nunc vel tincidunt lectus. Sed volutpat efficitur purus non tincidunt. Mauris blandit, elit ac mollis ultrices, turpis risus malesuada augue, quis auctor tellus ante ut sem. Ut porttitor ligula quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac nulla finibus, posuere ante vitae, semper diam. Mauris sit amet erat felis.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus ex fermentum viverra ultricies. Maecenas scelerisque risus nec nunc elementum, in auctor massa gravida. Nunc vel tincidunt lectus. Sed volutpat efficitur purus non tincidunt. Mauris blandit, elit ac mollis ultrices, turpis risus malesuada augue, quis auctor tellus ante ut sem. Ut porttitor ligula quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac nulla finibus, posuere ante vitae, semper diam. Mauris sit amet erat felis.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus ex fermentum viverra ultricies. Maecenas scelerisque risus nec nunc elementum, in auctor massa gravida. Nunc vel tincidunt lectus. Sed volutpat efficitur purus non tincidunt. Mauris blandit, elit ac mollis ultrices, turpis risus malesuada augue, quis auctor tellus ante ut sem. Ut porttitor ligula quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac nulla finibus, posuere ante vitae, semper diam. Mauris sit amet erat felis.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus ex fermentum viverra ultricies. Maecenas scelerisque risus nec nunc elementum, in auctor massa gravida. Nunc vel tincidunt lectus. Sed volutpat efficitur purus non tincidunt. Mauris blandit, elit ac mollis ultrices, turpis risus malesuada augue, quis auctor tellus ante ut sem. Ut porttitor ligula quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac nulla finibus, posuere ante vitae, semper diam. Mauris sit amet erat felis.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus ex fermentum viverra ultricies. Maecenas scelerisque risus nec nunc elementum, in auctor massa gravida. Nunc vel tincidunt lectus. Sed volutpat efficitur purus non tincidunt. Mauris blandit, elit ac mollis ultrices, turpis risus malesuada augue, quis auctor tellus ante ut sem. Ut porttitor ligula quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac nulla finibus, posuere ante vitae, semper diam. Mauris sit amet erat felis.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus ex fermentum viverra ultricies. Maecenas scelerisque risus nec nunc elementum, in auctor massa gravida. Nunc vel tincidunt lectus. Sed volutpat efficitur purus non tincidunt. Mauris blandit, elit ac mollis ultrices, turpis risus malesuada augue, quis auctor tellus ante ut sem. Ut porttitor ligula quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac nulla finibus, posuere ante vitae, semper diam. Mauris sit amet erat felis.']
const leftDiv = document.querySelector<HTMLElement>('.photo-container__small--left')
const rightDiv = document.querySelector<HTMLElement>('.photo-container__small--right')
const mainDiv = document.querySelector<HTMLElement>('.photo-container__photo')
const leftButton = document.querySelector<HTMLElement>('.photo-conariner__arrow--left')
const rightButton = document.querySelector<HTMLElement>('.photo-conariner__arrow--right')


interface indexType {
    count: number;
  }

const index:indexType = {
    count: 4
}

function renderMainImages(currentCount: number){
    return `
    <img class='photo-container__image'src='${imageArray[currentCount]}'/> 
    <h1> ${namesArray[currentCount]} </h1>
    <p> ${paragraphArray[currentCount].slice(0, 180)} </p>
    `
}

function renderPrevImages(currentCount: number){
    return `<img class='photo-container__image'src='${imageArray[currentCount]}'/>`
}

function renderNextImages(currentCount: number){
    return `<img class='photo-container__image'src='${imageArray[currentCount]}'/>`
}




function displayImages():void  {
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


function animateRight(_e: MouseEvent):void {
    _e.preventDefault;
    cleanUp()
    if(rightDiv !== null && leftDiv !== null && mainDiv !== null){
        leftDiv.classList.add('photo-container__small--left-effectRight')
        rightDiv.classList.add('photo-container__small--right-effectRight')
        mainDiv.classList.add('photo-container__photo-effectRight')
    }
    
}

function cleanUp(){
    if(rightDiv !== null && leftDiv !== null && mainDiv !== null) {
        rightDiv.classList.remove('photo-container__small--right-effectRight')
        leftDiv.classList.remove('photo-container__small--left-effectRight')
        mainDiv.classList.remove('photo-container__photo-effectRight')
        rightDiv.classList.remove('photo-container__small--right-effectLeft')
        leftDiv.classList.remove('photo-container__small--left-effectLeft')
        mainDiv.classList.remove('photo-container__photo-effectLeft')
    
        rightDiv.offsetWidth;
        leftDiv.offsetWidth;
        mainDiv.offsetWidth;
    }
    
}


function animateLeft(_e: MouseEvent){
    _e.preventDefault;
    cleanUp()
    if(rightDiv !== null && leftDiv !== null && mainDiv !== null){
        leftDiv.classList.add('photo-container__small--left-effectLeft')
        rightDiv.classList.add('photo-container__small--right-effectLeft')
        mainDiv.classList.add('photo-container__photo-effectLeft')
    }
    
}


displayImages()
if(leftButton !== null){
    leftButton.addEventListener('click', (e) => {
        animateLeft(e)
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
        animateRight(e)
        let newCount = index.count + 1;
        index.count = newCount;
        if(newCount > imageArray.length - 1){
            index.count = 0;
        }
        displayImages();
    })
}




