$("ul li a").click((event)=>{
    event.preventDefault();
    $.get(event.target.href , (data , status )=>{
        $("#page").html(data);
        console.log(data)
    })
})