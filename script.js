document.addEventListener('DOMContentLoaded', function(event){
})

  const form = document.getElementById('registration-form')
  const feedbackDiv = document.getElementById('form-feedback')

  form.addEventListener('submit' , (event)=>{
    event.preventDefault();

    const usernameInput = document.getElementById('username')
    const emailInput = document.getElementById('email')
    const passwordInput = document.getElementById('password')
    
usernameInput.value.trim()
 emailInput.value.trim()
  passwordInput.value.trim()
});



