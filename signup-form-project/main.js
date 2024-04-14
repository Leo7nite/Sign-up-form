const password = document.getElementById("password");
const confirmPass = document.getElementById("password-confirm");



function passwordMatches(){
    let passValue = password.value;
    let passValueDva = confirmPass.value;
    if(passValue === passValueDva)
    {
        password.style.border = "2px solid green";
        confirmPass.style.border = "2px solid green";
    }
    else {
        password.style.border = "2px solid orange";
        confirmPass.style.border = "2px solid orange";
    }

    
}

password.addEventListener("input", passwordMatches);
confirmPass.addEventListener("input", passwordMatches);
const form = document.querySelector("form");
const submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", function() {
   
    form.submit();
});

form.addEventListener("submit", function(event) {
    event.preventDefault(); 

    
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: new FormData(form),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Form submitted successfully:', data);
        
    })
    .catch(error => {
        console.error('Error submitting form:', error);
    });
});