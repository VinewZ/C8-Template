/* ====================== BG IMAGE PARALLAX ====================== */
const imgParallax = document.querySelector('.parallax')
const html = document.getElementsByTagName('html')[0]

window.addEventListener('scroll',() =>{
    let y = window.pageYOffset //get scrollbar Y position
    imgParallax.style.top = 0.3*y+'px'
})
/* ====================== BG IMAGE PARALLAX ====================== */



/* ====================== CLIP PATH TITLE AT HEADER ====================== */

window.addEventListener('load', () =>{
        setTimeout(function animateHeaderTitle(){
            const clipText = document.querySelectorAll('.clip-path-text')

            clipText.forEach(clipText =>{
                clipText.style.transitionProperty = 'clip-path, transform'
                clipText.style.transition = `${clipText.dataset.time}s ease`
                clipText.style.clipPath = 'polygon(0 100%, 100% 100%, 100% 0, 0 0)'
                clipText.style.transform = `translate(0px, 0px)`
            })
        }, 800)
    }
)

/* ====================== CLIP PATH TITLE AT HEADER ====================== */



/* ====================== OVERFLOW TEXT ANIMATION ON ====================== */

const text = document.querySelectorAll('.overflow-text')
const screenPosition = window.innerHeight

window.addEventListener('scroll', () =>{
    for(let i=0; i<text.length; i += 2){
        const textposition = text[i].getBoundingClientRect().top //get position of the text inside the whole document
        if(textposition<screenPosition){
            text[i].style.transform = `translate(${-100+window.pageYOffset/10}px, 0px)` 
            //higher the first value, the more to the left will be the text
        }
    }
    for(let i=1; i<text.length; i += 2){
        const textposition = text[i].getBoundingClientRect().top //get position of the text inside the whole document
        if(textposition<screenPosition){
            text[i].style.transform = `translate(${110+window.pageYOffset/-10}px, 0px)` 
            //higher the first value, the more to the right will be the text
        }
    }
})

/* ====================== OVERFLOW TEXT ANIMATION ON ====================== */



/* ====================== FILTER ANIMATED ON SCROLL ====================== */

const animateBox = document.querySelectorAll('.animate-filter-invert')
const screenPositionBox = window.innerHeight

window.addEventListener('scroll',() =>{

    for(let i=0; i<animateBox.length; i++){
        const animateBoxPosition = animateBox[i].getBoundingClientRect().top //get position of the img inside the whole document
        if(animateBoxPosition<screenPositionBox){
            animateBox[i].style.animation = 'invertEffectOnImgs 1.5s forwards ease-out'
        } else{
            animateBox[i].style.animation = 'none'
        }
    }
})
/* ====================== FILTER ANIMATED ON SCROLL ====================== */



/* ====================== MEDIA QUERIES ====================== */

/* ====================== CLIENTS BUBBLE MOVE ====================== */

if(window.matchMedia("(min-width:769px)").matches){
    const bubbles = document.querySelectorAll('.client-item')

    for(let i=0; i<bubbles.length; i++){
        bubbles[i].addEventListener('mousemove', (mousePos) => {
            const rect = mousePos.target.getBoundingClientRect();
            const x = mousePos.clientX - rect.left;
            const y = mousePos.clientY - rect.top; 
            bubbles[i].style.transform = `translate(${x/5}px, ${y/5}px)`
        })
    }
}

/* ====================== CLIENTS BUBBLE MOVE ====================== */

/* ====================== MEDIA QUERIES ====================== */