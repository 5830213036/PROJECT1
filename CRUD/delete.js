 $(function(){
        var url = "http://localhost:3000/data";
        $.get(url, function(data){
            console.log(data);  
            var template = $('#template').html();
            var select;
            for(var i=0;i<data.length;i++){
                
               select += "<option value='"+ data[i].id+"'>"+data[i].name+"</option>"
               console.log(select);
               
            }
            $("#username").append(select);
        });
        
            var url = "http://localhost:3000/data";
            $("#delete").click(function () {
                console.log($("#username").val());
                $.ajax({
                    url: url + "/"+$("#username").val(),
                    method: "DELETE",
                    success: function (data, status, xhr) {
                      console.log(data);
                      alert('complete');
                      location.replace('index.html');
                    }
                  })
          });
        
    });