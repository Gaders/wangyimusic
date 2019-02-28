$(".top_search").click(function(){
    window.location.href='./html/search_album.html'
    
})




$(".search_logo").click(function(){
   var key = "key="+$(".search_text").val()
 
   $.ajax({
       url:"http://brandonxcc.top:8080/MyNetEase/search/sing" ,
       data : key ,
       type : "post",
       dateType:"json",
       jsonp:"callback",
       success : function(data) {
           var result1 = JSON.parse(data)
           var imgUrl = result1.result[0].imgUrl
           $(".search_result_img").css("background-image","url("+imgUrl+")")
           $(".search_result_enname").text("英文名："+result1.result[0].EnName)
           $(".search_result_name").text("中文名："+result1.result[0].name)         

           
       } ,
       error : function() {
           alert("no")
       } ,
       
   })
})
var flag = 0
$(".search_logo_album").click(function(){
    var key = "key="+$(".search_text").val()
    if($(".search_text").val()!= "sdf"){
        alert("抱歉 目前仅支持搜索sdf")
    }
    else{
  
    $.ajax({
        url:"http://brandonxcc.top:8080/MyNetEase/search/album" ,
        data : key ,
        type : "post",
        dateType:"json",
        jsonp:"callback",
        success : function(data) {
            var result1 = JSON.parse(data)
            var imgUrl = result1.result[0].imgUrl
            $(".search_result_img").css("background-image","url("+imgUrl+")")
            $(".search_result_name").text("中文名："+result1.result[0].name)
            $(".search_result_enname").text("出版公司："+result1.result[0].publishCompany)  
            $(".search_result_name_1").text("出版时间："+result1.result[0].publishTime)
         
 
            
        } ,
        error : function() {
            alert("no")
        } ,
        
    })}
 })
 $(".search_logo_song").click(function(){
    var key = "key="+$(".search_text").val()
  
    $.ajax({
        url:"http://brandonxcc.top:8080/MyNetEase/search/song" ,
        data : key ,
        type : "post",
        dateType:"json",
        jsonp:"callback",
        success : function(data) {
            
            var result1 = JSON.parse(data)
            var imgUrl = result1.result[0].albumInfo[0].imgUrl
            $(".search_result_img").css("background-image","url("+imgUrl+")")
            $(".search_result_name").text("歌名："+result1.result[0].name)
            $(".search_result_enname").text("出版公司："+result1.result[0].albumInfo[0].publishCompany)  
            $(".search_result_name_1").text("出版时间："+result1.result[0].albumInfo[0].publishTime)
            
           
 
            
        } ,
        error : function() {
            alert("no")
        } ,
        
    })
 })
 
$(".singer_music_table_div").click(function(){
    window.location="./zhanghuimei.html"
})




$(".search_all_bottom_li1_2").click(function(){
    window.location.href='./search_sing.html'
})
$(".search_all_bottom_li1_1").click(function(){
    window.location.href='./search_sing.html'
})
$(".search_all_bottom_li1").click(function(){
    window.location.href='./search_sing.html'
})
$(".search_all_bottom_li2_2").click(function(){
    window.location.href='./search_song.html'
})
$(".search_all_bottom_li2_1").click(function(){
    window.location.href='./search_song.html'
})
$(".search_all_bottom_li2").click(function(){
    window.location.href='./search_song.html'
})
$(".search_all_bottom_li3").click(function(){
    window.location.href='./search_album.html'
})
$(".search_all_bottom_li3_2").click(function(){
    window.location.href='./search_album.html'
})  
 
