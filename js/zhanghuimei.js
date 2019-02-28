$.ajax({
    url:"http://brandonxcc.top:8080/MyNetEase/play",
    type : "get",
    dateType:"json",
    jsonp:"callback",
    success : function(data){
        var result1 = JSON.parse(data)
        $(".music_list_li0").text("歌曲id:"+ result1.result[0].song_id +"歌曲名:"+result1.result[0].Song_name)
        $(".music_list_li1").text("歌曲id:"+ result1.result[1].song_id +"歌曲名:"+result1.result[1].Song_name)
        $(".music_list_li2").text("歌曲id:"+ result1.result[2].song_id +"歌曲名:"+result1.result[2].Song_name)
        $(".music_list_li3").text("歌曲id:"+ result1.result[3].song_id +"歌曲名:"+result1.result[3].Song_name)
        $(".music_list_li4").text("歌曲id:"+ result1.result[4].song_id +"歌曲名:"+result1.result[4].Song_name)
        $(".music_list_li5").text("歌曲id:"+ result1.result[5].song_id +"歌曲名:"+result1.result[5].Song_name)
        $(".music_list_li6").text("歌曲id:"+ result1.result[6].song_id +"歌曲名:"+result1.result[6].Song_name)
        $(".music_list_li7").text("歌曲id:"+ result1.result[7].song_id +"歌曲名:"+result1.result[7].Song_name) 
    },
    error : function(){
        alert("no")
    },
    
})

$(".gedanming").focus(function(){
    $(".gedanming").val( "") 
})

$(".chuangjian").click(function(){
    var name = "name="+$(".gedanming").val() 
if(name!= "" &&name!="在此输入歌单名"){
 $.ajax({
    url : "http://brandonxcc.top:8080/MyNetEase/songList/CreateList",
    data : name,
    type : "post",
    dateType:"json",
    jsonp:"callback",
    xhrFields:{
        withCredentials: true
       

    },
    success : function(data) {
        alert("你的歌单创建成功")
       
    },
    error : function() {
        alert("创建失败");
    }
});
 /*var xhr = new XMLHttpRequest(); 
// 前端设置是否带cookie，true为携带
xhr.withCredentials = true; 
xhr.open('post', 'http://brandonxcc.top:8080/MyNetEase/songList/CreateList', true);
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');//设置
xhr.send(name);
xhr.onreadystatechange = function() {
 if (xhr.readyState == 4 && xhr.status == 200) {
    alert(xhr.responseText);
}};*/




}

})


/*  $(".shouCang0").click(function(){
    songlist_id = prompt("请输入你的歌单名")
    song_id = 0
    $.ajax({
        url:"http://brandonxcc.top:8080/MyNetEase/songList/InsertSong",
        data : "{songlist_id="+songlist_id+" ,song_id="+song_id+"}",
        type : "post",
        dateType:"jsonp",
        jsonp:"callback",
        success : function(data){
           alert("收藏成功")
        },
        error : function(){
           alert("no")
        },
        
    })
})
s
*/

var Ajax= {
    ajax:function(obj){
        var xml = null
        if(window.XMLHttpRequest)
        {
        xml=new XMLHttpRequest();
        }
        else{
            xml=new ActiveXObject();
        }
        if(obj.type=='post'){
        xml.open(obj.type,obj.url+obj.data);
        xml.send();
    }  
     xml.onreadystatechange=function(){
            if(xml.readyState==4&&xml.status==200){
            var n = xml.responseText
              obj.success(n)  ;
            }
            else if(xml.status==400) {
                obj.error() 
            }    
            }
        }
    }
$(".shouCang").click(function(){
    window.location = "./music_play.html"
})   
$(".info").click(function(){
    window.location = "./zhanghuimei_info.html"
}
)
$(".works").click(function(){
    window.location = "./zhanghuimei.html"
}
)    
    