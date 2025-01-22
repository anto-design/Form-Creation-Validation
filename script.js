document.addEventListener('DOMContentLoaded', function(event){
})

  const form = document.getElementById('registration-form')
  const feedbackDiv = document.getElementById('form-feedback')

  form.addEventListener('submit' , (event)=>{
    event.preventDefault();

    const username = document.getElementById('username')
    const email = document.getElementById('email')
    const password = document.getElementById('password')
    
username.trim()
 email.trim()
  password.trim()

  let isValid = true
  let messages = []

if(username.length < 3) {
  isValid = false
  
}else{
  messages.push('invalid user-name')
}

if(email.value=== '@'&& '.'){
  isValid=false
}else{
  messages.push('invalid email')
}

if(password.length < 8){
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



