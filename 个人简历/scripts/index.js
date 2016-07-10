$(document).ready(function(){
     
    $(".base").mouseenter(function(){
        $(this).animate({bottom:10},0)
    });
     $(".base").mouseleave(function(){
        $(this).animate({bottom:0},0)
    })
     $(".selected").click(function(){
        $("#books").css("display","block");
        $("#code").css("display","none");
        $(".null").css("display","block");
        $(".null2").css("display","none");
        $(".tool").css("background-color","#fe6b40");
        $(this).css("background-color","#a6a6a6");
     });
     $(".tool").click(function(){
        $(".null2").css("display","block");
        $(".null").css("display","none");
        $("#code").css("display","block");
        $("#books").css("display","none");
        $(".selected").css("background-color","#fe6b40");
        $(this).css("background-color","#a6a6a6");
     })
     //作品展示
      $("#production_list nav ul li").each(function(index){
        var liNode = $(this);
        liNode.hover(function(){
        timeroutid = setTimeout(function(){
            $("#production_message .selected").removeClass("selected");
            $("#production_message .production_message").eq(index).addClass("selected");
        },300);     
    });
    $("#production_content").mouseleave(function(){
        clearTimeout(timeroutid);
       $("#production_message .selected").removeClass("selected");  
    })  
    });
      //轮播图图片定义
   var imgsNode=$("#production_imgs li"),
   pagesNode=$("#production_pages li");
   imgsNode.eq(0).show().siblings().hide();
   //手动焦点
   pagesNode.each(function(index){
        var liNode=$(this);
        liNode.mouseover(function(){
        var index=liNode.index();
        imgsNode.eq(index).fadeIn(300).siblings().fadeOut(300);
        pagesNode.eq(i).addClass("selected").siblings().removeClass("selected");
        })
    });
    //点击左右按钮播放
    $("#left_finger").click(function(){
        i--;
        if(i==-1){i=5;}
        imgsNode.eq(i).fadeIn(300).siblings().fadeOut(300);
        pagesNode.eq(i).addClass("selected").siblings().removeClass("selected");
    });
   $("#right_finger").click(function(){
        autoplay();
    });
   //图片自动轮播
   var i=0;
   var time=setInterval(autoplay,7000);
   function autoplay(){
        i++;
        if(i==5){
        i=0
        }
        imgsNode.eq(i).fadeIn(300).siblings().fadeOut(300);
        pagesNode.eq(i).addClass("selected").siblings().removeClass("selected");
    }
   $("#production_loop,#production_finger").hover(function(){
        clearInterval(time);},function(){
        time=setInterval(autoplay,7000);
   });
   $(function () {
    setTimeout(function () {
    alert("哈哈O(∩_∩)O谢谢来看我！"); 
    } ,10000);
    })
})
