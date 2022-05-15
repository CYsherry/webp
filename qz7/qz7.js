$(document).ready(function(){
    //var dataUrl="https://cors-anywhere.herokuapp.com/https://wic.heo.taipei/OpenData/API/Rain/Get?stationNo=&loginId=open_rain&dataKey=85452C1D";
    //var data=$.getJSON(dataUrl);
    console.log(msg);

    //data.done(function(msg){
        for(var i=0; i<5; i++){
            $("#contain").append(
                "<h2>"+msg[i].stationName+" ("+msg[i].stationNo+")</h2>"
                +"<h3>"+msg[i].recTime.substring(0,4)+"年"+msg[i].recTime.substring(4,6)+"月"+msg[i].recTime.substring(6,8)+"號"+msg[i].recTime.substring(8,10)+"點"+msg[i].recTime.substring(10,12)+"分</h3>"
                +"<h3>即時雨量"+msg[i].rain+"<h3>"
            );
        }
    //});
    /*data.fail(function(msg){
        alert("fail QQ");
    });*/
})

var msg=[
        {
            "stationNo": "C0AD1",
            "stationName": "八里",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "C0AD0",
            "stationName": "三芝",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "C0AD4",
            "stationName": "土城",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "318",
            "stationName": "大安福州山",
            "recTime": "202204271602",
            "rain": 0
        },
        {
            "stationNo": "01A17",
            "stationName": "坪林",
            "recTime": "201911130140",
            "rain": 0
        },
        {
            "stationNo": "C0AD2",
            "stationName": "深坑",
            "recTime": "",
            "rain": 0
        },
        {
            "stationNo": "C0AD3",
            "stationName": "蘆洲",
            "recTime": "202204271600",
            "rain": 0
        },
        {
            "stationNo": "C0AD5",
            "stationName": "鶯歌",
            "recTime": "202204271600",
            "rain": 0
        }
    ]