var btn  = $('#submit');
btn.click(function(event){


        event.preventDefault();
            $.ajax({
                url: 'https://jsonplaceholder.typicode.com/posts',
                method: 'GET',
                success: function(posts) {   
                        // var posts =results;
                            $.ajax({
                                url: 'https://jsonplaceholder.typicode.com/users',
                                method: 'GET',
                                success : function(users){


                                    fillData(posts, users)
                                }
                            })     
                },
                error: function() {}
            })
})

function fillData(posts, users) 
{

                                        // console.log("users",users)
                                        // console.log("posts",posts)

    for(var i=0;i<posts.length;i++){
        // console.log(users[posts[i].userId]);
        var card = `
           <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">${posts[i].title} </h5>
            <h6 class="card-subtitle mb-2 text-muted">${users[posts[i].userId].name} </h6>
            <p class="card-text">${posts[i].body} </p>
          </div>
        </div>`;
        $('#posts').append(card);
    }
}
