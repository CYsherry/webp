<<<<<<< HEAD
function init(){
    var txt=document.getElementById('txt');
    var changeTxt=function(e){
        var theWord=String.fromCharCode(e.keyCode);   
        txt.innerText+=theWord;
    }
    document.addEventListener('keydown',changeTxt);
}
=======
function init(){
    var txt=document.getElementById('txt');
    var changeTxt=function(e){
        var theWord=String.fromCharCode(e.keyCode);   
        txt.innerText+=theWord;
    }
    document.addEventListener('keydown',changeTxt);
}
>>>>>>> 619454c00457905e30716d6ce8ec99618e3ea8e9
