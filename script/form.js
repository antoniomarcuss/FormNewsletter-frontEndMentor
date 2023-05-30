let form = document.querySelector('form')
let email = document.getElementById('email')
let erro = document.querySelector('.erro')
form.addEventListener('submit', enviarForm)
email.addEventListener('focus', clickEmail)
function enviarForm(e){
    if(!email.value){
        erro.style.display = 'block'
        email.style.backgroundColor = '#f3d4ca'
        email.classList.add('orange-placeholder')
        email.style.border = '1px solid #FF784F'
        e.preventDefault()
    }else{
        clickEmail()
    }
}

function clickEmail(){
    erro.style.display = ''
    email.style.backgroundColor = ''
    email.classList.remove('orange-placeholder')
    email.style.border = ''
    

}







