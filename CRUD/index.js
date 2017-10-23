$(document).ready(function () {
    var url = "http://localhost:3000/data";
$("#submit").click(function () {
   
    console.log("ready");
    $.post(url, {
        first_name : $("#first_name").val(),
        last_name : $("#last_name").val(),
        first_names : $("#first_names").val(),
        email : $("#emai").val(),
        message : $("#message").val(),
    
    });
   alert("complete!");
   window.location.replace("../HOME/index.html");
   
  });
});