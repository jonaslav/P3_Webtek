
const slideshowImgList = ['1', '2', '3']
const container = document.getElementById('slideshowContainer')
let innerContent = ''

const slides = document.getElementsByClassName('slides')

for (let i in slideshowImgList) {
    innerContent += '<div class="slides"><img src="images/slideshow/' + slideshowImgList[i] + '.jpeg" alt="Image of ' + slideshowImgList[i] + '"></div>'
}
container.innerHTML = innerContent

let index = 0
let prevIndex = 0

let slideTimeout
let animationResetTimeout


const nextSlide = () => {
    index += 1
    IndexCleaner()
    ClearTimeouts()
    ShowSlides()
}

const IndexCleaner = () => {
    if (index > slides.length - 1) {index = 0}
    if (index < 0) {index = slides.length -1}

    prevIndex = index - 1

    if (prevIndex > slides.length -1) {prevIndex = 0}
    if (prevIndex < 0) {prevIndex = slides.length -1}
}

const ClearTimeouts = () => {
    if (slideTimeout ){
        clearTimeout(slideTimeout)
        slideTimeout = 0
    }
    if (animationResetTimeout){
        clearTimeout(animationResetTimeout)
        animationResetTimeout = 0
    }
}

const SlideAnimationReset = () => {
    slides[prevIndex].classList.remove("slideOut");
}

const SlideAnimation = () => {
    slides[index].classList.add("slideInn");

    slides[prevIndex].classList.remove("slideInn");
    slides[prevIndex].classList.add("slideOut");

    animationResetTimeout = setTimeout(SlideAnimationReset, 800);
}



const ShowSlides = () => {
    for (let i in slides.length) {
        slides[i].classList.remove('slideInn')
        slides[i].classList.remove('slideOut')
    }

    SlideAnimation()

    slideTimeout = setTimeout(nextSlide, 5000)
}