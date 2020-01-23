const name= document.getElementById('name')
const password= document.getElementById('password')
const form= document.getElementById('form')
const errorElement= document.getElementById('error')

form.addEventListener('submit',(e) => {
	let messages= [];
	let message= [];
	if (name.value === ''|| name.value == null){
		messages.push('name is required')
	}
	if (password.value.length<= 9) {messages.push(' password must be greater than or equal to 10 digits')}
	if (password.value.length>= 35) {messages.push(' password must be less than or equal to 35 digits')}
	if (password.value ==='password') {
		messages.push('password can not be set to password')
	 var lowerCaseLetters = /[a-z]/g
  
	}
	if(messages.length = 0){
	message.push("your password is"+password+"and it meets requirements")
	}
		if (messages.length > 0) {
	e.preventDefault()
	errorElement.innerText= messages.join(', ')
}
})


