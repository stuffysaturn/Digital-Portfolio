var slideIndex1 = 1
var slideIndex2 = 1
var slideIndex3 = 1
var slideIndex4 = 4

showImg(slideIndex1)
showImg2(slideIndex2)
showImg3(slideIndex3)
showImg4(slideIndex4)

function plusDivs(n) {
    showImg(slideIndex1 += n);
  }
  
function currentDiv(n) {
    showImg(slideIndex1 = n);
}
  
function showImg(n){
    var slideArr = document.getElementsByClassName("mySlides")
    var dots = document.getElementsByClassName("dot")
    if(n > slideArr.length){
        slideIndex1 = 1
    }
    if(n < 1){
        slideIndex1 = slideArr.length
    }
    for(i = 0; i < slideArr.length; i++){
        slideArr[i].style.display = "none"
    }
    for(i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" dot-active", " dot")
    }
    slideArr[slideIndex1-1].style.display = "block"
    dots[slideIndex1-1].className += " dot-active"
}


function plusDivs2(n) {
    showImg2(slideIndex2 += n);
  }
  
function currentDiv2(n) {
    showImg2(slideIndex2 = n);
}
  

function showImg2(n){
    var slideArr = document.getElementsByClassName("mySlides2")
    var dots = document.getElementsByClassName("dot2")
    if(n > slideArr.length){
        slideIndex2 = 1
    }
    if(n < 1){
        slideIndex2 = slideArr.length
    }
    for(i = 0; i < slideArr.length; i++){
        slideArr[i].style.display = "none"
    }
    for(i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" dot-active2", " dot2")
    }
    slideArr[slideIndex2-1].style.display = "block"
    dots[slideIndex2-1].className += " dot-active2"
}

function plusDivs3(n) {
    showImg3(slideIndex3 += n);
  }
  
function currentDiv3(n) {
    showImg3(slideIndex3 = n);
}
  

function showImg3(n){
    var slideArr = document.getElementsByClassName("mySlides3")
    var dots = document.getElementsByClassName("dot3")
    if(n > slideArr.length){
        slideIndex3 = 1
    }
    if(n < 1){
        slideIndex3 = slideArr.length
    }
    for(i = 0; i < slideArr.length; i++){
        slideArr[i].style.display = "none"
    }
    for(i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" dot-active3", " dot3")
    }
    slideArr[slideIndex3-1].style.display = "block"
    dots[slideIndex3-1].className += " dot-active3"
}

function plusDivs4(n) {
    showImg4(slideIndex4 += n);
  }
  
function currentDiv4(n) {
    showImg4(slideIndex4 = n);
}
  

function showImg4(n){
    var slideArr = document.getElementsByClassName("mySlides4")
    var dots = document.getElementsByClassName("dot4")
    if(n > slideArr.length){
        slideIndex4 = 1
    }
    if(n < 1){
        slideIndex4 = slideArr.length
    }
    for(i = 0; i < slideArr.length; i++){
        slideArr[i].style.display = "none"
    }
    for(i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" dot-active4", " dot4")
    }
    slideArr[slideIndex4-1].style.display = "block"
    dots[slideIndex4-1].className += " dot-active4"
}