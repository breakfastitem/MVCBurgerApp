$("#submit-button").on("click",(event)=>{
    console.log(event);

    event.preventDefault();

    const burgerName= $("#name-input").val().trim();
    
    $.ajax("/api/burgers", {
        method: "POST",
        data: {
            name: burgerName
        },
        error: function(err){
            console.log(err);
        }
    }).then((res)=>{
        location.reload();     
    });
});

$("#left-list").on("click",(event)=>{
   
    if(event.target.id.split("-")[0]=="eatButton"){
        $.ajax("/api/eat",{
            method:"PUT",
            data:{
                id:event.target.id.split("-")[1]
            }
        }).then((res)=>{
            location.reload();
        });
    }
});