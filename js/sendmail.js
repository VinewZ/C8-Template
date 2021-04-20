const msgModal = document.querySelector('.contact-modal-msg')
const loadingScreen = document.querySelector('.loadingScreen')
const msgSent = document.querySelector('.successful')
const msgNotSent = document.querySelector('.failed')
const closeModalBtn = document.querySelector('.closeModal')
function sendmail(){
    msgModal.style.opacity = 1
    loadingScreen.style.opacity = 1

    const tempParams={
        from_name:document.getElementById('name').value,
        subject:document.getElementById('subject').value,
        from_email:document.getElementById('email').value,
        message:document.getElementById('msg').value
    }
    
    emailjs.send('VinewOutlook', 'template_z1h0t2u', tempParams)
    .then(function(res){
        
        loadingScreen.style.opacity = 0

        if(res.status == '200') msgSent.style.opacity = 1
        if(res.status != '200') msgNotSent.style.opacity = 1
    })
}

function closeModalMsg(){
    msgModal.style.opacity = 0
}