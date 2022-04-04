$(document).ready(function(){
    $("#myTable").DataTable({
        "ajax" : "data.json",
        "columns" : [
            { "data" : "name"},
            { "data" : "website"},
            { "data" : "phoneNumber"},
            { "data" : "address"},
            { "data" : "city"},
            { "data" : "state"},
            { "data" : "country"},
            { "data" : "industry"}
        ]
    })
})

var button = `<button><a href="./index.html">Logout</a></button>`;
$("#logout_btn").append(button);

$("button").css({"height": "50px", "width":"100px", "background-color":"darkblue", "border-radius":"10px", "border":"3px solid silver"})
$("a").css({"text-decoration":"none", "color":"white","font-size":"25px"})
