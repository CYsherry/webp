$(document).ready(function(){
    setInterval(function(){
        var nowTime=new Date();
        var str=nowTime.getHours()+":"+nowTime.getMinutes()+":"+nowTime.getSeconds();
        $("#theTime").html("<h2>"+str+"</h2>");
    },1000);
})