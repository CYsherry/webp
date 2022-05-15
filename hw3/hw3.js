<<<<<<< HEAD
var time1;
var time2;
var removeWord = function(e){
    var txt=document.getElementById('txt');
    var str=txt.innerText;
    var pos=str.length - 1;
    var pressWord=String.fromCharCode(e.keyCode);
    var lastWord=str.charAt(pos);
    if(pressWord==lastWord){
        txt.innerText=str.substring(0,pos);
    }
}
var addNWord = function(e){
    time2=new Date();
    var n=getN(time1,time2);
    for(var i=0; i<n; i++){
        addWord();
    }
    time1=time2;
}

function getRandom(n){//產生0~n的變數
    return Math.floor(Math.random()*n);
}
function getN(time1, time2){
    var diff=(time2.getTime() - time1.getTime())/1000;//毫秒轉換成秒
    return Math.floor(diff*2.5 + 0.5);//+0.5是為了四捨五入
}
function addWord(){
    var added=String.fromCharCode(65 + getRandom(25));
    var txt=document.getElementById('txt');
    txt.innerText = added + txt.innerText;
}
function init(){
    time1=new Date();
    document.addEventListener('keydown',removeWord);
    document.addEventListener('keydown',addNWord);
}

=======
var time1;
var time2;
var removeWord = function(e){
    var txt=document.getElementById('txt');
    var str=txt.innerText;
    var pos=str.length - 1;
    var pressWord=String.fromCharCode(e.keyCode);
    var lastWord=str.charAt(pos);
    if(pressWord==lastWord){
        txt.innerText=str.substring(0,pos);
    }
}
var addNWord = function(e){
    time2=new Date();
    var n=getN(time1,time2);
    for(var i=0; i<n; i++){
        addWord();
    }
    time1=time2;
}

function getRandom(n){//產生0~n的變數
    return Math.floor(Math.random()*n);
}
function getN(time1, time2){
    var diff=(time2.getTime() - time1.getTime())/1000;//毫秒轉換成秒
    return Math.floor(diff*2.5 + 0.5);//+0.5是為了四捨五入
}
function addWord(){
    var added=String.fromCharCode(65 + getRandom(25));
    var txt=document.getElementById('txt');
    txt.innerText = added + txt.innerText;
}
function init(){
    time1=new Date();
    document.addEventListener('keydown',removeWord);
    document.addEventListener('keydown',addNWord);
}

>>>>>>> 619454c00457905e30716d6ce8ec99618e3ea8e9
