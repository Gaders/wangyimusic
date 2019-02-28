

$(".left_title").click(function(){
   $.ajax({
    url:"http://brandonxcc.top:8080/MyNetEase/songList/SongList",
    type : "get",
    dateType:"jsonp",
    jsonp:"callback",
    success : function(data){
        alert(data)

    } ,   
    error : function(){
        alert("no")
    },
    
}) 
})