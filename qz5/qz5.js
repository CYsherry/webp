<<<<<<< HEAD
$(document).ready(function(){

    $("#myList").click(consoleLog);
    $("ul").append("<li>hello cgu!</li>");

});

function consoleLog(e){
    if ( e.target.tagName.toLowerCase() === 'li' ) 
        console.log(e.target.textContent);
=======
$(document).ready(function(){

    $("#myList").click(consoleLog);
    $("ul").append("<li>hello cgu!</li>");

});

function consoleLog(e){
    if ( e.target.tagName.toLowerCase() === 'li' ) 
        console.log(e.target.textContent);
>>>>>>> 619454c00457905e30716d6ce8ec99618e3ea8e9
}