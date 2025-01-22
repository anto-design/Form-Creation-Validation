document.addEventListener('DOMContentLoaded', function(event){
})

  const form = document.getElementById('registration-form')
  const feedbackDiv = document.getElementById('form-feedback')

  form.addEventListener('submit' , (event)=>{
    event.preventDefault();

    const usernameInput = document.getElementById('username')
    const emailInput = document.getElementById('email')
    const passwordInput = document.getElementById('password')
    
usernameInput.trim()
 emailInput.trim()
  passwordInput.trim()

  let isValid = true
  let messages = []

if(usernameInput.value.length < 3) {
  isValid = false
  
}else{
  messages.push('invalid user-name')
}

if(emailInput.value=== '@'&& '.'){
  isValid=false
}else{
  messages.push('invalid email')
}

if(passwordInput.value.length < 8){
  isValid = false
}else{
  messages.push('invalid password')
}


feedbackDiv.style.display = block

if(isValid=== true){
  feedbackDiv.textContent = 'Registration successful'
  feedbackDiv.style.color =rgb(40,167,69)
}else
{
  feedbackDiv.innerHTML = messages.join ( <br></br>)
  feedbackDiv.style.color = #dc3545
}

});



