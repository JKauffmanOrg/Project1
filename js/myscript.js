function init(){
  var form = document.querySelector('form');
  var button = document.getElementById('submit_button');
  
  function showText() {
    alert("Thank you for submitting! Your ticket will be emailed to you!");
  }

  function validateForm(event) {
    var fullName = document.getElementById('full_name').value.trim();
    var phoneNumber = document.getElementById('phone_num').value.trim();
    var email = document.getElementById('email').value.trim();
    var ageVerify = document.getElementById('age_verify').checked;

    if (fullName === '' || phoneNumber === '' || email === '' || !ageVerify) {
      alert("Please fill out all fields and verify your age.");
      event.preventDefault(); 
    } else {
      showText();
    }
  }

  button.addEventListener('click', validateForm);
}

window.addEventListener('load', init); 