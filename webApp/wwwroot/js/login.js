

function login() {
    var username = document.getElementById('username').value;
    console.log(username);
    var password = document.getElementById('password').value;
    console.log(password);

    if (loginWorked()){
    window.location.href="/Chat/Chat";
    } else {
        alert("That didnt work");
    }
}

function loginWorked(){
    //-------------------DATABASE CODE----------------------
    return true;
}

var modal = document.getElementById('id01');
var modal2 = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal || event.target == this.modal2) {
    modal.style.display = "none";
    this.modal2.style.display = "none";
  }
}
