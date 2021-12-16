


// Get the modal
var signup_modal = document.getElementById("signup_modal");
var login_modal = document.getElementById("login_modal");
var signup_close = document.getElementById("signup_close");
var login_close = document.getElementById("login_close");

// Get the button that opens the modal
var login_btn = document.getElementById("login_button");


var signup_btn = document.getElementById("signup_button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
login_btn.onclick = function() {
  login_modal.style.display = "block";
}

signup_btn.onclick = function() {
    signup_modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
login_close.onclick = function() {
  login_modal.style.display = "none";
}

signup_close.onclick = function() {
    signup_modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    login_modal.style.display = "none";
    signup_modal.style.display = "none";
  }
}