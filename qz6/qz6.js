<<<<<<< HEAD
$(document).ready(function(){
    setInterval(function(){
        var nowTime=new Date();
        var str=nowTime.getHours()+":"+nowTime.getMinutes()+":"+nowTime.getSeconds();
        $("#theTime").html("<h2>"+str+"</h2>");
    },1000);
=======
$(document).ready(function(){
    setInterval(function(){
        var nowTime=new Date();
        var str=nowTime.getHours()+":"+nowTime.getMinutes()+":"+nowTime.getSeconds();
        $("#theTime").html("<h2>"+str+"</h2>");
    },1000);
>>>>>>> 619454c00457905e30716d6ce8ec99618e3ea8e9
})