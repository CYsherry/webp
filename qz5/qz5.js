$(document).ready(function(){

    $("#myList").click(consoleLog);
    $("ul").append("<li>hello cgu!</li>");

});

function consoleLog(e){
    if ( e.target.tagName.toLowerCase() === 'li' ) 
        console.log(e.target.textContent);
}