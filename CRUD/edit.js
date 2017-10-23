$(document).ready(function () {
    
        var url = "http://localhost:3000/data";
        
    
        $("#submit").click(function () {
            console.log();
            
            $.get(url + "/"+$("#username").val(), function (data, status) {
                console.log(data);
                console.log($("#username").val());
                var newuser = {};
                newuser.id = data.id;
                newuser.username = $("#username").val();
                newuser.password = $("#password").val();
                newuser.name = $("#username").val();
           
                console.log(JSON.stringify(newuser));
                var updateUrl = url + "/"+data.id;
                $.ajax({
                    url: updateUrl,
                    type: 'PUT',
                    data: newuser,
                    success: function (result) {
                        console.log('Updated!');
                        alert("complete!");
                        location.replace('index.html');
                    }
                });
            });
        });
    });