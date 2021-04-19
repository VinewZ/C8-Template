window.addEventListener('load',  function pageTransition(){
    const body = document.getElementsByTagName('body')[0]
    const loadingScreen = document.querySelector('.page-transition')
    const transitionAnchors = document.querySelectorAll('.fade-on-click')

    body.style.overflow = 'hidden'
    setTimeout(() => {
        loadingScreen.classList.remove('is-active')
        body.style.overflow = null
    }, 500);

    for(let i=0; i<transitionAnchors.length; i++){
            transitionAnchors[i].addEventListener('click', (mouseClick)=>{
            mouseClick.preventDefault()
            loadingScreen.classList.add('is-active')
            setTimeout(() => {
                window.location.href = mouseClick.target.href
            }, 500);
        })
    }
})