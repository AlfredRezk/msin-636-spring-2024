const notifications = document.querySelectorAll('.notification')
Array.from(notifications).forEach(notification=>{
    setTimeout(()=>{
        notification.remove();
    }, 3000)
})

function togglePassword(){
    const passwordEl = document.getElementById('password');
    const passwordIcon = document.getElementById('password-icon');
    if(passwordEl.getAttribute('type')==='password'){
        passwordEl.setAttribute('type', 'text');
        passwordIcon.classList.remove('fa-eye-slash');
        passwordIcon.classList.add('fa-eye')
    }else{
        passwordEl.setAttribute('type', 'password');
        passwordIcon.classList.remove('fa-eye');
        passwordIcon.classList.add('fa-eye-slash')
    }

}
function toggleConfirm(){
    const passwordEl = document.getElementById('password2');
    const passwordIcon = document.getElementById('password-icon2');
    if(passwordEl.getAttribute('type')==='password'){
        passwordEl.setAttribute('type', 'text');
        passwordIcon.classList.remove('fa-eye-slash');
        passwordIcon.classList.add('fa-eye')
    }else{
        passwordEl.setAttribute('type', 'password');
        passwordIcon.classList.remove('fa-eye');
        passwordIcon.classList.add('fa-eye-slash')
    }

}