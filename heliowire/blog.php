<?php
include("inc/header.php");

if($_SERVER["REQUEST_METHOD"] == "POST"){
    $name = trim(filter_input(INPUT_POST,"name",FILTER_SANITIZE_STRING));
    $email = trim(filter_input(INPUT_POST, "email", FILTER_SANITIZE_EMAIL));
    $comment = trim(filter_input(INPUT_POST, "comment", FILTER_SANITIZE_SPECIAL_CHARS));
}



?>

    <div class="blog container well">
        <div class="row">
        <div class="col-sm-6 filler">
           <form class="form" id="blog-form"action="blog.php" method="post">
                <label for = "name">Name</label>
                <div class="form-group">
                    <input class = "form-control" type = "text" name = "name" id = "name">
                </div>
                <label for = "email">Email</label>
                <div class="form-group">
                    <input class = "form-control" type = "text" name = "email" id = "email">
                </div>
                <label for = "comment">Comment</label>
                <div class="form-group">
                    <textarea class = "form-control" type = "text" name = "comment" id = "message"></textarea>
                </div>
                <div class = "form-group">
                <button class = "form-control btn btn-primary" type = "submit" value = "submit">Submit</button>
                </div>
           </form>
        </div>
        </div>
    </div>   
        
        
        
        
    <div id="redditText">
    </div>
<?php
include("inc/footer.php");
?>

<script>
    
   var xhr = new XMLHttpRequest();
    
    xhr.onreadystatechange = function(){
        if (xhr.readyState === 4){
                    console.log('readyState === 4');
                    if (xhr.status === 200){
                        console.log('success');
                        var result = xhr.responseText;
                        console.log(result[10]);
                        //var redditList = result.data.children[0].data;
                        var statusHTML = '<ul class = "redditList">';
                            
                            for (var i=0; i<result.length; i += 1){
                                statusHTML += '<li class = "redditItem">';
                                statusHTML += redditList;
                                statusHTML += '</li>';
                                document.getElementById('redditText').innerHTML = statusHTML;
                            }
                    }else if (xhr.status === 404){
                     console.log('error 404');
                }else if (xhr.status === 500){
                     console.log('error 500');
                };
        };
        
    };
    xhr.open('GET', 'data.js');
    xhr.send();
    console.log('sent');
    
   
      /*      $redditText = $('#redditText');
            $.get('data.json', function(){
                $.each(response, function(index, item){
                    $redditText.html(item.data);
                });
                console.log('success'); 
            }).fail(function(jqXHR){
                console.log('failed');
                $redditText.html("<p>error is: " + jqXHR.statusText + "</p>");
            });
    */
        
</script>
