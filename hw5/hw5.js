<<<<<<< HEAD
$(document).ready(function(){
    loadDoc();
})
function loadDoc(){
    $.ajax({
        url:"https://ptx.transportdata.tw/MOTC/v2/Rail/Metro/ODFare/TYMC?%24top=420&%24format=JSON",
        type:"get",
        dataType:"json",
        success:function(info){
            console.log(info);
            for(var i=0; i<400; i+=21 ){
                $("#trainTable").append(
                    "<tr>"
                    +"<td>"+info[i].OriginStationName.Zh_tw+"</td>"
                    +"<td>"+info[i].DestinationStationName.Zh_tw+"</td>"
                    +"<td>"+info[i].Fares[0].Price+"</td>"
                    +"<td>"+info[i].TravelTime+"</td>"            
                    +"</tr>");
            }
        },
        error:function(data){
            alert("error");
        }
    })
=======
$(document).ready(function(){
    loadDoc();
})
function loadDoc(){
    $.ajax({
        url:"https://ptx.transportdata.tw/MOTC/v2/Rail/Metro/ODFare/TYMC?%24top=420&%24format=JSON",
        type:"get",
        dataType:"json",
        success:function(info){
            console.log(info);
            for(var i=0; i<400; i+=21 ){
                $("#trainTable").append(
                    "<tr>"
                    +"<td>"+info[i].OriginStationName.Zh_tw+"</td>"
                    +"<td>"+info[i].DestinationStationName.Zh_tw+"</td>"
                    +"<td>"+info[i].Fares[0].Price+"</td>"
                    +"<td>"+info[i].TravelTime+"</td>"            
                    +"</tr>");
            }
        },
        error:function(data){
            alert("error");
        }
    })
>>>>>>> 619454c00457905e30716d6ce8ec99618e3ea8e9
}