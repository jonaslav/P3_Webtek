let imageContainer = document.getElementById("imageContainer")

const imagesFromFolder = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg","11.jpg","12.jpg"]
let text = ""

for (let i in imagesFromFolder){text += "<img src='../images/gallery/"+imagesFromFolder[i]+"' alt='Imgae Placeholder'>"}
console.log(text)

imageContainer.innerHTML = text

let imgList = document.querySelectorAll("#imageContainer > img");
let image;
let squareAm =0;
let modal = document.getElementById("modal");
let modalImage = document.getElementById("modalImage");

modal.onclick = function(){
    modal.style.display = "none"
}

for(image of imgList){
    image.onclick = function(){
        modal.style.display = "block" //when image is pressed, show modal, with the pressed image in the middle of it
        modalImage.src = this.src
    }
    console.log(image.onclick)
    if(image.naturalWidth/image.naturalHeight > 1.5){ //image is wide -> make it use a 2x1 area in the grid
        image.style.gridColumnEnd = "span 2"
    }
    else if(image.naturalWidth/image.naturalHeight < 0.75){ //image is narrow -> make it use a 1x2 area in the grid
        image.style.gridRowEnd = "span 2"
    }
    else{
        squareAm++
        if(squareAm % 4 === 0){ //make every forth square image big
            image.style.gridColumnEnd = "span 2"
            image.style.gridRowEnd = "span 2"
        }
    }
}