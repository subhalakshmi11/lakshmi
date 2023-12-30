function validateForm(){
    // Get form inputs
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    

    document.getElementById('nameError').innerHTML='';
    document.getElementById('emailError').innerHTML='';

    // validate name

    if (name=== '') {
        document,getElementById('nameError').innerHTML = 'Name is required';
        return false; // prevent form from submission
    }
     
// validate email    
var emailRegex = . /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(email)) {
    document.getElementById('emaiError').innerHTML ='email is required'
    return false; // prevent form submission
}

// if validation passes , the form will be submitted
alert('form submitted successfully!');
return true;
}
