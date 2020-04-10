const name = document.getElementById('name')
const password = document.getElementById('passowrd')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')
form.addEventListener('submit', (e) =>{
  let massges = []
  if(name.value === '' || name.value == null){
    massges.push('Name is required')
  }
  if(password.value.length <= 6){
    massges.push('Password must be longer than 6 chrarcters')
  }
  if(password.value.length >= 20){
    massges.push('Password must be less than 20 chrarcters')
  }
  if(massges.length > 0){
    e.preventDefault()
    errorElement.innerText = massges.join(',')
  }
})
