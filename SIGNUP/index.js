$(document).ready(function () {
    var url = "http://localhost:3000/data";
$("#submit").click(function () {
   
    console.log("ready");
    $.post(url, {
        username : $("#username").val(),
        password : $("#password").val(),
        email : $("#emai").val(),
        message : $("#message").val(),
    
    });
   alert("complete!");
   window.location.replace("../HOME/index.html");
   
  });
});