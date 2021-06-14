function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }




  window.onload = pageLoad;
  function pageLoad() {
      var contactForm = document.getElementById("myForm");
      contactForm.onsubmit = validate;
  }
  function validate() {
      var check = true;
      var password = document.getElementById("password").value;
      var phone = document.getElementById("telephone").value;
      if (!password.match(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,8}$/)){
alert("Password is Not Valid, It must contain 8 characters: 1 uppercase, one lowercase, one number and one special character at least");
check=false;
}
if (!phone.match(/[0-9]{3}-[0-9]{3}-[0-9]{3}/)){
  // if (!phone.match(/^[0-9]{11}$/))
  alert("Phone is not valid");
  check=false;
}
return check;
  }