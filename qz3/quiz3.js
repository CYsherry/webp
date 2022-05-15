function init(){
    var txt=document.getElementById('txt');
    var changeTxt=function(e){
        var theWord=String.fromCharCode(e.keyCode);   
        txt.innerText+=theWord;
    }
    document.addEventListener('keydown',changeTxt);
}
