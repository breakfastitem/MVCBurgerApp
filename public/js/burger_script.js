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
        $.ajax("/api/burgers", {
            method: "GET"
        }).then((response)=>{
 
        });
        
    });
});