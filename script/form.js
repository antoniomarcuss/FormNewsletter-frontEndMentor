const validarEmail = function(email){
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(String(email).toLowerCase())
}

const form = document.querySelector('form')
const emailInput = document.querySelector('#email')
const erroEmail = document.querySelector('.erro')

let isvalidForm = false

form.addEventListener('submit', function(e){
    e.preventDefault()
    validarInput()
    if(isvalidForm){
        // POST Backend
        form.submit()
        console.log('validou e enviou');
    }else{
        console.log('não enviou');
    }
    
})


function validarInput(){
    isvalidForm = true
    if(!emailInput.value || !validarEmail(emailInput.value)){
        isvalidForm = false
        emailInput.classList.add('orange-placeholder')
        emailInput.classList.add('borderInput')
        erroEmail.style.display = 'block'
    }
}

emailInput.addEventListener('input', function(){
    validarInput()
    emailInput.classList.remove('orange-placeholder')
    emailInput.classList.remove('borderInput')
    erroEmail.style.display = 'none'
})



































