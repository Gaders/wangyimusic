$(".play_this").click(function(){
   if (isNaN(audio.duration)){
      audio.src=music_list[0]
      audio.play()
      changeName(music_index)
   }
   else if (audio.paused){
       audio.play()
       
   }
   else{
       audio.pause()
       
   }
})
function change () {
    var adss = $("#play1")[0] ;
    if(adss.paused){

    }
    else{
    var widthNow = $(".jindu_now").width()
    var musicTime = document.getElementById("play1").duration;
    var parent = 1/musicTime
    var widthNowAdd = 500*parent
    widthNow = widthNow + widthNowAdd
    $(".jindu_now").css('width', widthNow)
    var min_all = Math.floor(musicTime/60)
    var sec_all = Math.floor(musicTime%60)
    var time_all = min_all + "." + sec_all
    var musicTime_now = document.getElementById("play1").currentTime
    var min_now = Math.floor(musicTime_now/60)
    var sec_now = Math.floor(musicTime_now%60)
    var time_now = min_now + "." + sec_now
    // document.getElementsByClassName("jindu_time").innerHTML= time_now+"|"+time_all
    $(".jindu_time").empty("<span class='jidu_time'>"+time_now+"|"+time_all+"</span>")
    $(".jindu_time").append("<span class='jidu_time'>"+time_now+"|"+time_all+"</span>")

   } 
  
    
}

$(".jindu_all").click(function change(){
 
    e=arguments.callee.caller.arguments[0] || window.event;
    var thX = $('.jindu_all').offset().left
    movex=e.clientX - thX;
    var parent = movex/500
    $(".jindu_now").css('width',movex)
    var musicTime = document.getElementById("play1").duration;
    var parent_now =  parent*musicTime
    document.getElementById("play1").currentTime  = parent_now ;
    
})
$(".voice_all").click(function change(event){
    var e = event || window.event;
    var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
    var y = e.pageY || e.clientY + scrollY;
    var thY = $('.voice_all').offset().top
    movey= y - thY ;
    var parent = movey/60
    $(".voice_now").css('height',movey)
    document.getElementById("play1").volume = 1-parent
    
    // var parent_now =  parent*musicTime
    // document.getElementById("play1").currentTime  = parent_now ;
    
})

setInterval(change,1000)

var music_list = []
var audio = document.getElementById("play1")
var music_index = 0
var model = ""
var musicName_list = []

$.ajax({
    url:"https://brandonxcc.top:8080/MyNetEase/play",
    type : "get",
    dateType:"json",
    jsonp:"callback",
    success : function(data){
        var result1 = JSON.parse(data)
        
        $(".music_list_li0").text("歌曲id:"+ result1.result[0].song_id +"歌曲名:"+result1.result[0].Song_name)
        for(var i = 0 ;i <= 7 ;i++){
            musicName_list.push(result1.result[i].Song_name);
            music_list.push(result1.result[i].play_add)
        }
        for(var i = 0 ;i <= 7 ;i++){
            $(".music_li"+i).text(musicName_list[i])
        }
    },
    error : function(){
        alert("no")
    },
    
})

function changeName(music_index) {
    var all = []
    for(var i = 0 ; i <musicName_list.length ;i ++){
        all.push(i)
    }
    for(var i = 0 ; i <musicName_list.length ;i ++){
        if(all[i]==music_index){
            all.splice(i,1) 
        }
    }
    for(var i = 0 ; i <=all.length ;i ++){
        $(".music_li"+i).css("background-color","white")
    }

    $(".music_li"+music_index).css("background-color","red")

}

for(var i = 0 ;i < musicName_list.length ; i++){
    $(".music_li"+i).text(musicName_list[i])
}
function music_up () {
    if(music_index==music_list.length-1){
    return   music_index = 0
    }
    else{
    return  music_index=music_index+1
    }
}
audio.addEventListener("ended",function(){
    if(model=="shunxu"){
        $(".jindu_now").css('width', 0)
        audio.src = music_list[music_up()]
        audio.play()
        changeName(music_index)
    }
    else if(model  =="suiji"){
        $(".jindu_now").css('width', 0)
        music_index =Math.floor(Math.random()*(music_list.length))
        audio.src = music_list[music_index]
        audio.play()
        changeName(music_index)
    }
    else if(model == "xunhuan"){
        $(".jindu_now").css('width', 0)
        audio.src = music_list[music_index]
        audio.play()
        changeName(music_index)
    }
   
    else{
        $(".jindu_now").css('width', 0)
        audio.src = music_list[music_up()]
        audio.play()
        changeName(music_index)
    }
    

})

Array.prototype.indexValue = function (arr) {
    for (var i = 0; i < this.length; i++) {
      if (this[i] == arr) {
        return i;
      }
    }
  }
$(".play_up").click(function(){
    if(music_index == 0){
        music_index=  music_list.length - 1
        audio.src = music_list[music_index]
        audio.play()
        changeName(music_index)
        $(".jindu_now").css('width', 0)
    }
    else{
    music_index = music_index -1
    audio.src = music_list[music_index]
    audio.play()
    changeName(music_index)
    $(".jindu_now").css('width', 0)}
})
$(".play_down").click(function(){
    if(music_index == music_list.length - 1) {
        music_index = 0
        audio.src = music_list[music_index]
        audio.play()
        changeName(music_index)
        $(".jindu_now").css('width', 0)
    }
    else{
    music_index = music_index +1
    audio.src = music_list[music_index]
    audio.play()
    changeName(music_index)
    $(".jindu_now").css('width', 0)
}
})
$(".suiji").click(function(){
    $(".suiji").css("background-color","red")
    $(".shunxu").css("background-color","white")
    $(".xunhuan").css("background-color","white")
    model = "suiji"
})
$(".shunxu").click(function(){
    $(".suiji").css("background-color","white")
    $(".shunxu").css("background-color","red")
    $(".xunhuan").css("background-color","white")
    model = "shunxu"
})
$(".xunhuan").click(function(){
    $(".suiji").css("background-color","white")
    $(".xunhuan").css("background-color","red")
    $(".shunxu").css("background-color","white")
    model = "xunhuan"
})

    $(".music_li1").click(function(){
        music_index = 1;
        audio.src = music_list[music_index]
        audio.play()
        $(".jindu_now").css('width', 0)
        changeName(music_index)
    })
    $(".music_li2").click(function(){
        music_index = 2;
        audio.src = music_list[music_index]
        audio.play()
        $(".jindu_now").css('width', 0)
        changeName(music_index)
    })
    $(".music_li3").click(function(){
        music_index = 3;
        audio.src = music_list[music_index]
        audio.play()
        $(".jindu_now").css('width', 0)
        changeName(music_index)
    })
    $(".music_li0").click(function(){
        music_index = 0;
        audio.src = music_list[music_index]
        audio.play()
        $(".jindu_now").css('width', 0)
        changeName(music_index)
    })
    $(".music_li4").click(function(){
        music_index = 4;
        audio.src = music_list[music_index]
        audio.play()
        $(".jindu_now").css('width', 0)
        changeName(music_index)
    })
    $(".music_li5").click(function(){
        music_index = 5;
        audio.src = music_list[music_index]
        audio.play()
        $(".jindu_now").css('width', 0)
        changeName(music_index)
    })
    $(".music_li7").click(function(){
        music_index = 7;
        audio.src = music_list[music_index]
        audio.play()
        $(".jindu_now").css('width', 0)
        changeName(music_index)
    })
    $(".music_li6").click(function(){
        music_index = 6;
        audio.src = music_list[music_index]
        audio.play()
        $(".jindu_now").css('width', 0)
        changeName(music_index)
    })

//此区域属于单机弹幕系统
var danmu_alllist =["富强","民主","文明","和谐","自由","平等","公正","法治","爱国","敬业","诚信","友善"]
var danmu_flag = 100
var danmuDom = [0,1,2,3,4]
var danmu_max = 0
var danmu_trash =[]



$(".fasongdanmu").click(function(){
    danmu_alllist.push($(".danmu").val())
    submit($(".danmu").val()) 
})

function submit(n) {
    if(danmu_max < 7&& n !=""){
        var info = document.createElement("div");
        info.innerHTML = n;
        var ran = danmuDom[Math.floor(Math.random()*danmuDom.length)];
        $(".danmu"+ran).append(info);
       
        //danmuDom.splice(ran,1)
        danmu_flag = ran;
        info.className = 'start'+ran
        info.className = 'start';
        danmu_max ++;
        $(".danmu").val("")
    }
    else{
        danmu_alllist.push($(".danmu").val())
    }
}
function submit_auto () {
   if(danmu_max<5){
    var info = document.createElement("div");
    var ran1 = danmu_alllist[Math.floor(Math.random()*danmu_alllist.length)]
    var ran = danmuDom[Math.floor(Math.random()*danmuDom.length)];
    info.innerText = ran1;
    $(".danmu"+ran).append(info);
    info.className = 'start'+ran
    info.className = 'start'
   // danmuDom.splice(ran,1)
    danmu_alllist.splice(ran1,1)
    danmu_flag = ran;
    danmu_max ++;
    danmu_trash.push(ran1);
    
   }
}
function del_danmu() {
    var arr = $(".start")
    for(var i =0 ;i<arr.length;i++){
        if(arr[i].offsetLeft == 0 ){
            arr[i].remove();
            danmu_max --;
           // danmuDom.push(i)
            danmu_alllist=["富强","民主","文明","和谐","自由","平等","公正","法治","爱国","敬业","诚信","友善"]

        }
    }
}

setInterval(submit_auto,1000)
setInterval(del_danmu,100)



