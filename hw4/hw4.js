<<<<<<< HEAD
$(document).ready(function(){

    $("div").width(screen.width);
    time1=new Date();

    $(document).keydown(addWord);
    $(document).keydown(removeWord);

    setInterval(wordMove,1000);
    setInterval(wallTouched,100);
});

var time1;
var time2;
function getRandom(n){//產生0~n的變數
    return Math.floor(Math.random()*n);
}
function getN(time1, time2){
    var diff=(time2.getTime() - time1.getTime())/1000;//毫秒轉換成秒
    return Math.floor(diff*1.5 + 0.5);//+0.5是為了四捨五入
}
function getWord(wordNum){
    if(wordNum==0){
        return "<img id='A' src='./A~Z/A.png'/>";
    }
    else if(wordNum==1){
        return "<img id='B' src='./A~Z/B.png'/>";
    }
    else if(wordNum==2){
        return "<img id='C' src='./A~Z/C.png'/>";
    }
    else if(wordNum==3){
        return "<img id='D' src='./A~Z/D.png'/>";
    }
    else if(wordNum==4){
        return "<img id='E' src='./A~Z/E.png'/>";
    }
    else if(wordNum==5){
        return "<img id='F' src='./A~Z/F.png'/>";
    }
    else if(wordNum==6){
        return "<img id='G' src='./A~Z/G.png'/>";
    }
    else if(wordNum==7){
        return "<img id='H' src='./A~Z/H.png'/>";
    }
    else if(wordNum==8){
        return "<img id='I' src='./A~Z/I.png'/>";
    }
    else if(wordNum==9){
        return "<img id='J' src='./A~Z/J.png'/>";
    }
    else if(wordNum==10){
        return "<img id='K' src='./A~Z/K.png'/>";
    }
    else if(wordNum==11){
        return "<img id='L' src='./A~Z/L.png'/>";
    }
    else if(wordNum==12){
        return "<img id='M' src='./A~Z/M.png'/>";
    }
    else if(wordNum==13){
        return "<img id='N' src='./A~Z/N.png'/>";
    }
    else if(wordNum==14){
        return "<img id='O' src='./A~Z/O.png'/>";
    }
    else if(wordNum==15){
        return "<img id='P' src='./A~Z/P.png'/>";
    }
    else if(wordNum==16){
        return "<img id='Q' src='./A~Z/Q.png'/>";
    }
    else if(wordNum==17){
        return "<img id='R' src='./A~Z/R.png'/>";
    }
    else if(wordNum==18){
        return "<img id='S' src='./A~Z/S.png'/>";
    }
    else if(wordNum==19){
        return "<img id='T' src='./A~Z/T.png'/>";
    }
    else if(wordNum==20){
        return "<img id='U' src='./A~Z/U.png'/>";
    }
    else if(wordNum==21){
        return "<img id='V' src='./A~Z/V.png'/>";
    }
    else if(wordNum==22){
        return "<img id='W' src='./A~Z/W.png'/>";
    }
    else if(wordNum==23){
        return "<img id='X' src='./A~Z/X.png'/>";
    }
    else if(wordNum==24){
        return "<img id='Y' src='./A~Z/Y.png'/>";
    }
    else if(wordNum==25){
        return "<img id='Z' src='./A~Z/Z.png'/>";
    }
}
function addWord(){
    time2=new Date();
    var numOfWord=getN(time1,time2);
    for(var i=0; i<numOfWord; i++){
        var wordNum=getRandom(25);
        $("#track1").prepend(getWord(wordNum));
    }
    for(var i=0; i<numOfWord; i++){
        var wordNum=getRandom(25);
        $("#track2").prepend(getWord(wordNum));
    }
    for(var i=0; i<numOfWord; i++){
        var wordNum=getRandom(25);
        $("#track3").prepend(getWord(wordNum));
    }
    for(var i=0; i<numOfWord; i++){
        var wordNum=getRandom(25);
        $("#track4").prepend(getWord(wordNum));
    }
    for(var i=0; i<numOfWord; i++){
        var wordNum=getRandom(25);
        $("#track5").prepend(getWord(wordNum));
    }
    for(var i=0; i<numOfWord; i++){
        var wordNum=getRandom(25);
        $("#track6").prepend(getWord(wordNum));
    }

    time1=time2;
}
function wordMove(){
    $("img").animate({left: "+=50px"},800);
}
function wallTouched(){
    var edge=screen.width-45;
    if($("#track1").children("img").last().offset().left >= edge){
        gameOver();
    }
    else if($("#track2").children("img").last().offset().left >= edge){
        gameOver();
    }
    else if($("#track3").children("img").last().offset().left >= edge){
        gameOver();
    }
    else if($("#track4").children("img").last().offset().left >= edge){
        gameOver();
    }
    else if($("#track5").children("img").last().offset().left >= edge){
        gameOver();
    }
    else if($("#track6").children("img").last().offset().left >= edge){
        gameOver();
    }
}
function gameOver(){
    $("body").empty();
    $("body").prepend("<div>Game Over</div>");
}

var removeWord=function(e){
    var wordPressed=String.fromCharCode(e.keyCode);
    if(wordPressed == $("#track1").children("img").last().attr("id")){
        $("#track1").children("img").last().remove();
    }
    else if(wordPressed == $("#track2").children("img").last().attr("id")){
        $("#track2").children("img").last().remove();
    }
    else if(wordPressed == $("#track3").children("img").last().attr("id")){
        $("#track3").children("img").last().remove();
    }
    else if(wordPressed == $("#track4").children("img").last().attr("id")){
        $("#track4").children("img").last().remove();
    }
    else if(wordPressed == $("#track5").children("img").last().attr("id")){
        $("#track5").children("img").last().remove();
    }
    else if(wordPressed == $("#track6").children("img").last().attr("id")){
        $("#track6").children("img").last().remove();
    }
=======
$(document).ready(function(){

    $("div").width(screen.width);
    time1=new Date();

    $(document).keydown(addWord);
    $(document).keydown(removeWord);

    setInterval(wordMove,1000);
    setInterval(wallTouched,100);
});

var time1;
var time2;
function getRandom(n){//產生0~n的變數
    return Math.floor(Math.random()*n);
}
function getN(time1, time2){
    var diff=(time2.getTime() - time1.getTime())/1000;//毫秒轉換成秒
    return Math.floor(diff*1.5 + 0.5);//+0.5是為了四捨五入
}
function getWord(wordNum){
    if(wordNum==0){
        return "<img id='A' src='./A~Z/A.png'/>";
    }
    else if(wordNum==1){
        return "<img id='B' src='./A~Z/B.png'/>";
    }
    else if(wordNum==2){
        return "<img id='C' src='./A~Z/C.png'/>";
    }
    else if(wordNum==3){
        return "<img id='D' src='./A~Z/D.png'/>";
    }
    else if(wordNum==4){
        return "<img id='E' src='./A~Z/E.png'/>";
    }
    else if(wordNum==5){
        return "<img id='F' src='./A~Z/F.png'/>";
    }
    else if(wordNum==6){
        return "<img id='G' src='./A~Z/G.png'/>";
    }
    else if(wordNum==7){
        return "<img id='H' src='./A~Z/H.png'/>";
    }
    else if(wordNum==8){
        return "<img id='I' src='./A~Z/I.png'/>";
    }
    else if(wordNum==9){
        return "<img id='J' src='./A~Z/J.png'/>";
    }
    else if(wordNum==10){
        return "<img id='K' src='./A~Z/K.png'/>";
    }
    else if(wordNum==11){
        return "<img id='L' src='./A~Z/L.png'/>";
    }
    else if(wordNum==12){
        return "<img id='M' src='./A~Z/M.png'/>";
    }
    else if(wordNum==13){
        return "<img id='N' src='./A~Z/N.png'/>";
    }
    else if(wordNum==14){
        return "<img id='O' src='./A~Z/O.png'/>";
    }
    else if(wordNum==15){
        return "<img id='P' src='./A~Z/P.png'/>";
    }
    else if(wordNum==16){
        return "<img id='Q' src='./A~Z/Q.png'/>";
    }
    else if(wordNum==17){
        return "<img id='R' src='./A~Z/R.png'/>";
    }
    else if(wordNum==18){
        return "<img id='S' src='./A~Z/S.png'/>";
    }
    else if(wordNum==19){
        return "<img id='T' src='./A~Z/T.png'/>";
    }
    else if(wordNum==20){
        return "<img id='U' src='./A~Z/U.png'/>";
    }
    else if(wordNum==21){
        return "<img id='V' src='./A~Z/V.png'/>";
    }
    else if(wordNum==22){
        return "<img id='W' src='./A~Z/W.png'/>";
    }
    else if(wordNum==23){
        return "<img id='X' src='./A~Z/X.png'/>";
    }
    else if(wordNum==24){
        return "<img id='Y' src='./A~Z/Y.png'/>";
    }
    else if(wordNum==25){
        return "<img id='Z' src='./A~Z/Z.png'/>";
    }
}
function addWord(){
    time2=new Date();
    var numOfWord=getN(time1,time2);
    for(var i=0; i<numOfWord; i++){
        var wordNum=getRandom(25);
        $("#track1").prepend(getWord(wordNum));
    }
    for(var i=0; i<numOfWord; i++){
        var wordNum=getRandom(25);
        $("#track2").prepend(getWord(wordNum));
    }
    for(var i=0; i<numOfWord; i++){
        var wordNum=getRandom(25);
        $("#track3").prepend(getWord(wordNum));
    }
    for(var i=0; i<numOfWord; i++){
        var wordNum=getRandom(25);
        $("#track4").prepend(getWord(wordNum));
    }
    for(var i=0; i<numOfWord; i++){
        var wordNum=getRandom(25);
        $("#track5").prepend(getWord(wordNum));
    }
    for(var i=0; i<numOfWord; i++){
        var wordNum=getRandom(25);
        $("#track6").prepend(getWord(wordNum));
    }

    time1=time2;
}
function wordMove(){
    $("img").animate({left: "+=50px"},800);
}
function wallTouched(){
    var edge=screen.width-45;
    if($("#track1").children("img").last().offset().left >= edge){
        gameOver();
    }
    else if($("#track2").children("img").last().offset().left >= edge){
        gameOver();
    }
    else if($("#track3").children("img").last().offset().left >= edge){
        gameOver();
    }
    else if($("#track4").children("img").last().offset().left >= edge){
        gameOver();
    }
    else if($("#track5").children("img").last().offset().left >= edge){
        gameOver();
    }
    else if($("#track6").children("img").last().offset().left >= edge){
        gameOver();
    }
}
function gameOver(){
    $("body").empty();
    $("body").prepend("<div>Game Over</div>");
}

var removeWord=function(e){
    var wordPressed=String.fromCharCode(e.keyCode);
    if(wordPressed == $("#track1").children("img").last().attr("id")){
        $("#track1").children("img").last().remove();
    }
    else if(wordPressed == $("#track2").children("img").last().attr("id")){
        $("#track2").children("img").last().remove();
    }
    else if(wordPressed == $("#track3").children("img").last().attr("id")){
        $("#track3").children("img").last().remove();
    }
    else if(wordPressed == $("#track4").children("img").last().attr("id")){
        $("#track4").children("img").last().remove();
    }
    else if(wordPressed == $("#track5").children("img").last().attr("id")){
        $("#track5").children("img").last().remove();
    }
    else if(wordPressed == $("#track6").children("img").last().attr("id")){
        $("#track6").children("img").last().remove();
    }
>>>>>>> 619454c00457905e30716d6ce8ec99618e3ea8e9
}