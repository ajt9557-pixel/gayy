const btn = document.getElementById('btn');
const ask = document.getElementById('ask');
const result = document.getElementById('result');
const name = document.getElementById('name');
const email = document.getElementById('email');
const age = document.getElementById('age');
const gender = document.getElementById('gender');
const message = document.getElementById('message');

window.onload = function() {
    const formData = localStorage.getItem('formData');
    if(formData){
        Pow.textContent = formData;
    }
};

btn.onclick = function() {
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const ageValue = age.value.trim();
    const genderValue = gender.value.trim();
    const askValue = ask.value.trim();

    if (nameValue !== '' && emailValue !== '' && ageValue !== '' && genderValue !== '' && askValue !== '') {
         
         localStorage.setItem('formData', `name: ${nameValue}, email: ${emailValue}, age: ${ageValue}, gender: ${genderValue}, are you gay? ${askValue}`);
         
        
         window.location.href = 'next.html';
    }
    else {
        result.textContent = `please fill up the form first`;
    }
}
