function init(){
  var button = document.getElementById('submit_button');
  
  function showText() {
	alert("Thank you for submitting! Your ticket will be emailed to you!");
  }
  
  button.addEventListener('click', showText);
  }

window.addEventListener('load', init); 