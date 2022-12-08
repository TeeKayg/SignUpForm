const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');
const errorMessage = document.querySelector('.errorMessage');
const form = document.querySelector('form');
const phoneNumber = document.querySelector('#phone-number');
const submitButton = document.querySelector('.submitButton');

submitButton.addEventListener('click', (e) => {
    let messages = [];
    if (password.value.length <= 6){
        messages.push('Password must be longer than 6 characters')
    }

    if (password.value !== confirmPassword.value){
        messages.push('The passwords do not match')
    }

    if (phoneNumber.value.length > 11){
        messages.push('Phone number cannot be more than 11 digits')
    }

    if (messages.length > 0)
{
    e.preventDefault()
    errorMessage.innerText = messages.join(' & ')
}})