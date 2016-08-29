$(function(){
    var Height=$(window).height();
    $(".bgbox").css({height:Height});
    $(".left span").hover(function(){
        $(this).html("前端工程师")
    },function(){
        $(this).html("个人简历")
    })
    var flag=true;
    $(".tubiao>div").click(function(){
        var index=$(this).index();
        if(flag){
            $(".sanjiao").eq(index).css({
                transform:"rotate(180deg)",
            })
            $(".tubiao ul").eq(index).animate({opacity:1},500,function(){
                flag=false;
            })
        }else{
            $(".sanjiao").eq(index).css({
                transform:"rotate(0deg)",
            })
            $(".tubiao ul").eq(index).animate({opacity:0},500,function(){
                flag=true;
            })
        }
    })
    $('#fullpage').fullpage({
        'verticalCentered': false,
        'css3': true,
        'anchors':["m1","m2","m3","m4","m5"],
         menu: '#menu',
        'navigation': true,
        'navigationPosition': 'right',
        'navigationTooltips': ['首页', '关于我', '专业技能', '作品展示', '自我评价'],
        afterRender: function(){
            $("header .right a").eq(0).css({
                color:"rgb(31,174,255)",borderBottom:"3px solid rgb(31,174,255)"
            })
            $(".first div").css({
                "-webkit-animation":"first 0.5s linear forwards",
                animation:"first 0.5s linear forwards"
            })
            $(".first span").eq(0).css({
                "-webkit-animation":"upl 0.5s linear 0.4s forwards",
                animation:"upl 0.5s linear 0.4s forwards"
            })
            $(".first hr").css({
                "-webkit-animation":"hr1 0.5s linear 0.8s forwards",
                animation:"hr1 0.5s linear 0.8s forwards"
            })
            $(".first span").eq(1).css({
                "-webkit-animation":"upl 0.5s ease-out 1.2s forwards",
                animation:"upl 0.5s ease-out 1.2s forwards"
            })
            $(".first span").eq(2).css({
                "-webkit-animation":"upl 0.5s ease-out 1.6s forwards",
                animation:"upl 0.5s ease-out 1.6s forwards"
            })
            $(".first span").eq(3).css({
                "-webkit-animation":"upl 0.5s ease-out 2s forwards",
                animation:"upl 0.5s ease-out 2s forwards"
            })
        },
        afterLoad: function(anchorLink, index){
        
            if(index==1){
                $("header .right a").eq(0).css({
                    color:"rgb(31,174,255)",borderBottom:"3px solid rgb(31,174,255)"
                })
                $(".first div").css({
                    "-webkit-animation":"first 0.5s linear forwards",
                    animation:"first 0.5s linear forwards"
                })
                $(".first span").eq(0).css({
                    "-webkit-animation":"upl 0.5s linear 0.4s forwards",
                    animation:"upl 0.5s linear 0.4s forwards"
                })
                $(".first hr").css({
                    "-webkit-animation":"hr1 0.5s linear 0.8s forwards",
                    animation:"hr1 0.5s linear 0.8s forwards"
                })
                $(".first span").eq(1).css({
                    "-webkit-animation":"upl 0.5s ease-out 1.2s forwards",
                    animation:"upl 0.5s ease-out 1.2s forwards"
                })
                $(".first span").eq(2).css({
                    "-webkit-animation":"upl 0.5s ease-out 1.6s forwards",
                    animation:"upl 0.5s ease-out 1.6s forwards"
                })
                $(".first span").eq(3).css({
                    "-webkit-animation":"upl 0.5s ease-out 2s forwards",
                    animation:"upl 0.5s ease-out 2s forwards"
                })
            }else{
                $("header .right a").eq(0).css({
                    color:"#000",borderBottom:"0"
                })
                $(".first div").css({
                    animation:""
                })
                $(".first hr").css({
                    animation:""
                })
                $(".first span").eq(0).css({
                    animation:""
                })
                $(".first span").eq(1).css({
                    animation:""
                })
                $(".first span").eq(2).css({
                    animation:""
                })
                $(".first span").eq(3).css({
                    animation:""
                })
            }
            if(index==2){
                $("header .right a").eq(1).css({
                    color:"rgb(31,174,255)",borderBottom:"3px solid rgb(31,174,255)"
                })
                $(".mebox h3").css({
                    "-webkit-animation":"down 0.5s linear forwards",
                    animation:"down 0.5s linear forwards"
                })
                $(".mebox hr").css({
                    "-webkit-animation":"hr 0.5s linear 0.4s forwards",
                    animation:"hr 0.5s linear 0.4s forwards"
                })
                $(".mebox h5").css({
                    "-webkit-animation":"xianshi 0.5s linear 0.8s forwards",
                    animation:"xianshi 0.5s linear 0.8s forwards"
                })
                $(".zijibox").css({
                    "-webkit-animation":"rotateX 1s linear 1.2s forwards",
                    animation:"rotateX 1s linear 1.2s forwards"
                })
                $(".ziwojieshao").css({
                    "-webkit-animation":"ziwo 0.6s linear 2s forwards",
                    animation:"ziwo 0.6s linear 2s forwards"
                })
            }else{
                $("header .right a").eq(1).css({
                    color:"#000",borderBottom:"0"
                })
                $(".mebox h3").css({
                    animation:""
                })
                $(".mebox hr").css({
                    animation:""
                })
                $(".mebox h5").css({
                    animation:""
                })
                $(".zijibox").css({
                    animation:""
                })
                $(".ziwojieshao").css({
                    animation:""
                })
            }
            if(index==3){
                $("header .right a").eq(2).css({
                    color:"rgb(31,174,255)",borderBottom:"3px solid rgb(31,174,255)"
                })
                $(".jnbox h3").css({
                    "-webkit-animation":"right 0.5s linear forwards",
                    animation:"right 0.5s linear forwards"
                })
                $(".jnbox hr").css({
                    "-webkit-animation":"hr 1s linear 0.4s forwards",
                    animation:"hr 1s linear 0.4s forwards"
                })
                $(".jnbox h5").css({
                    "-webkit-animation":"left 0.5s linear 1.3s forwards",
                    animation:"left 0.5s linear 1.3s forwards"
                })
                $(".third p").css({
                    "-webkit-animation":"third 1s linear 1.7s forwards",
                    animation:"third 1s linear 1.7s forwards"
                })
                $(".tubiao>div:nth-child(1)").css({
                    "-webkit-animation":"right 0.5s linear 2.6s forwards",
                    animation:"right 0.5s linear 2.6s forwards"
                })
                $(".tubiao>div:nth-child(2)").css({
                    "-webkit-animation":"right1 0.5s linear 2.8s forwards",
                    animation:"right1 0.5s linear 2.8s forwards"
                })
                $(".tubiao>div:nth-child(3)").css({
                    "-webkit-animation":"left 0.5s linear 2.8s forwards",
                    animation:"left 0.5s linear 2.8s forwards"
                })
                $(".tubiao>div:nth-child(4)").css({
                    "-webkit-animation":"left 0.5s linear 2.6s forwards",
                    animation:"left 0.5s linear 2.6s forwards"
                })
            }else{
                $("header .right a").eq(2).css({
                    color:"#000",borderBottom:"0"
                })
                $(".jnbox h3").css({
                    animation:""
                })
                $(".jnbox hr").css({
                    animation:""
                })
                $(".jnbox h5").css({
                    animation:""
                })
                $(".third p").css({
                    animation:""
                })
                $(".tubiao>div:nth-child(1)").css({
                    animation:""
                })
                $(".tubiao>div:nth-child(2)").css({
                    animation:""
                })
                $(".tubiao>div:nth-child(3)").css({
                    animation:""
                })
                $(".tubiao>div:nth-child(4)").css({
                    animation:""
                })
            }
            if(index==4){
                $("header .right a").eq(3).css({
                    color:"rgb(31,174,255)",borderBottom:"3px solid rgb(31,174,255)"
                })
                $(".demo h3").css({
                    "-webkit-animation":"down 0.5s ease-out forwards",
                    animation:"down 0.5s ease-out forwards"
                })
                $(".demo hr").css({
                    "-webkit-animation":"hr 0.5s linear 0.4s forwards",
                    animation:"hr 0.5s linear 0.4s forwards"
                })
                $(".demo h5").css({
                    "-webkit-animation":"upl 0.5s linear 0.8s forwards",
                    animation:"upl 0.5s linear 0.8s forwards"
                })
                $(".suoluetu").css({
                    "-webkit-animation":"xianshi 0.5s linear 1.2s forwards",
                    animation:"xianshi 0.5s linear 1.2s forwards"
                })
                $(".lianjie").css({
                    "-webkit-animation":"xianshi 0.5s linear 1.6s forwards",
                    animation:"xianshi 0.5s linear 1.6s forwards"
                })
                $(".lianjie li:nth-child(2)").css({
                    "-webkit-animation":"lianjie1 0.5s linear 2s forwards",
                    animation:"lianjie1 0.5s linear 2s forwards"
                })
                $(".lianjie li:nth-child(3)").css({
                    "-webkit-animation":"lianjie2 0.5s linear 2.4s forwards",
                    animation:"lianjie2 0.5s linear 2.4s forwards"
                })
                $(".lianjie li:nth-child(4)").css({
                    "-webkit-animation":"lianjie3 0.5s linear 2.8s forwards",
                    animation:"lianjie3 0.5s linear 2.8s forwards"
                })
            }else{
                $("header .right a").eq(3).css({
                    color:"#000",borderBottom:"0"
                })
                $(".demo h3").css({
                    animation:""
                })
                $(".demo hr").css({
                    animation:""
                })
                $(".demo h5").css({
                    animation:""
                })
                $(".suoluetu").css({
                    animation:""
                })
                $(".lianjie").css({
                    animation:""
                })
                $(".lianjie li:nth-child(2)").css({
                    animation:""
                })
                $(".lianjie li:nth-child(3)").css({
                    animation:""
                })
                $(".lianjie li:nth-child(4)").css({
                    animation:""
                })
            }
            if(index==5){
                $("header .right a").eq(4).css({
                    color:"rgb(31,174,255)",borderBottom:"3px solid rgb(31,174,255)"
                })
                $(".pingjia h3").css({
                    animation:"left 0.5s ease-out forwards",
                    "-webkit-animation":"left 0.5s ease-out forwards"
                })
                $(".pingjia hr").css({
                    animation:"hr 0.5s linear 0.4s forwards",
                    "-webkit-animation":"hr 0.5s linear 0.4s forwards"
                })
                $(".pingjia h5").css({
                    animation:"right 0.5s linear 0.8s forwards",
                    "-webkit-animation":"right 0.5s linear 0.8s forwards"
                })
                $(".fifth p:nth-child(2)").css({
                    animation:"xianshi 0.5s linear 1.2s forwards",
                    "-webkit-animation":"xianshi 0.5s linear 1.2s forwards"
                })
                $(".fifth p:nth-child(3)").css({
                    animation:"xianshi 0.5s linear 1.4s forwards",
                    "-webkit-animation":"xianshi 0.5s linear 1.4s forwards"
                })
                $(".fifth p:nth-child(4)").css({
                    animation:"xianshi 0.5s linear 1.7s forwards",
                    "-webkit-animation":"xianshi 0.5s linear 1.7s forwards"
                })
                $(".fifth p:nth-child(5)").css({
                    animation:"xianshi 0.5s linear 2s forwards",
                    "-webkit-animation":"xianshi 0.5s linear 2s forwards"
                })
                $(".fifth p:nth-child(7)").css({
                    animation:"xianshi 0.5s linear 2.3s forwards",
                    "-webkit-animation":"xianshi 0.5s linear 2.3s forwards"
                })
                $(".fifth p:nth-child(6)").css({
                    animation:"xianshi 0.5s linear 2.6s forwards",
                    "-webkit-animation":"xianshi 0.5s linear 2.6s forwards"
                })
                $(".fifth p:nth-child(9)").css({
                    animation:"xianshi 0.5s linear 2.9s forwards",
                    "-webkit-animation":"xianshi 0.5s linear 2.9s forwards"
                })
                $(".fifth p:nth-child(8)").css({
                    animation:"xianshi 0.5s linear 3.2s forwards",
                    "-webkit-animation":"xianshi 0.5s linear 3.2s forwards"
                })
                $(".fifth p:nth-child(10)").css({
                    animation:"xianshi 0.5s linear 3.5s forwards",
                    "-webkit-animation":"xianshi 0.5s linear 3.5s forwards"
                })
                $(".fifth p:nth-child(11)").css({
                    animation:"xianshi 0.5s linear 3.8s forwards",
                    "-webkit-animation":"xianshi 0.5s linear 3.8s forwards"
                })
            }else{
                $("header .right a").eq(4).css({
                    color:"#000",borderBottom:"0"
                })
                $(".pingjia h3").css({
                    animation:""
                })
                $(".pingjia hr").css({
                    animation:""
                })
                $(".pingjia h5").css({
                    animation:""
                })
                $(".fifth p:nth-child(2)").css({
                    animation:""
                })
                $(".fifth p:nth-child(3)").css({
                    animation:""
                })
                $(".fifth p:nth-child(4)").css({
                    animation:""
                })
                $(".fifth p:nth-child(5)").css({
                    animation:""
                })
                $(".fifth p:nth-child(7)").css({
                    animation:""
                })
                $(".fifth p:nth-child(6)").css({
                    animation:""
                })
                $(".fifth p:nth-child(9)").css({
                    animation:""
                })
                $(".fifth p:nth-child(8)").css({
                    animation:""
                })
                $(".fifth p:nth-child(10)").css({
                    animation:""
                })
                $(".fifth p:nth-child(11)").css({
                    animation:""
                })
            }
        }
    })
    $(".fifth p:nth-child(11)").click(function(){
        fullpage.moveTo(1);
    })
    var num=0;
    var aa=document.querySelectorAll(".suoluetu li");
    var len= aa.length;
    var w=aa[0].offsetWidth;
    var ang= 360/len;
    var z=w/2/(Math.tan(ang/2*(Math.PI/180)));
      for (var i = 0; i < len; i++) {
         aa[i].style.transform="rotateY("+ang*i+"deg) translateZ("+z+"px)";
         console.log(aa[i].style.transform)
     };
     var t=setInterval(function(){
        num++;
        $(".suoluetu").css({transform:"rotateY("+(num*60)+"deg)"})
    },3000);
    // function move(){
    //     num++;
    //     $(".suoluetu").css({transform:"rotateY("+(num*90)+"deg) translateZ("+z+"px)"})
    // }
    // window.onblur=function(){
    //     clearInterval(t);
    // }
    // window.onfocus=function(){
    //     t=setInterval(move,3000)
    // }



// var aa=document.querySelectorAll(".parent a");
//     // alert(aa.length)
//     var len= aa.length;
//     var w=aa[0].offsetWidth;
//     var ang= 360/len;
//     var z=w/2/(Math.tan(ang/2*(Math.PI/180)));
    
//     for (var i = 0; i < len; i++) {
//         aa[i].style.transform="rotateY("+ang*i+"deg) translateZ("+z+"px)";
//         console.log(aa[i].style.transform)

//     };

//     var box=document.getElementsByClassName('parent')[0]
//     var num=0;
//     setInterval(function(){
//         num+=60;
//         box.style.transform="rotateY("+num+"deg)"
//     },1000)


// 去掉右导航
// var ww=document.documentElement.clientWidth;
// console.log(ww)
// if(ww<400){
//    $("#fullpage")[0].navigation=false; 
// }


// 遮罩效果
    // var zhezhao = $('.lianjie .zhezhao');
    // var la = $('.lianjie a');
    // var zw = $('.lianjie img').width();
    // var zh = $('.lianjie img').height();
    // // alert(zh);
    // for (var i = 0; i < la.length; i++) {
    //     la[i].index = i;
    //     la[i].onmouseover = function(e){
    //         var ev = e||window.event;
    //         var ex = ev.clientX;
    //         // alert(ex)
    //         var ey = ev.clientY;
    //         var l1 = zh/zw;
    //         var l2 = -(zh/zw);
    //         if(ey>l1*ex && ey>(zh-(l2*ex))){
    //             alert(1)
    //             zhezhao[this.index].style.top=-zh;
    //             zhezhao[this.index].style.left=0;

    //             // zhezhao[this.index].style.transform="translateY("+100%+")";
    //         }
    //     }
    // };



// 遮罩效果
    function getDirection(e,obj){
        var x = e.offsetX;
        var y = e.offsetY;
        var w = $(obj).width();
        var h = $(obj).height();
        var b = 0;
        if(x>y*(w/h)){
            if(y>h-(x*(h/w))){
                b=1; // 右边

            }else{
                b=2;// 上面
            }
        }else if(x<=y*(w/h)){
            if(y>h-(x*(h/w))){
                b=3;//下面
            }else{
                b=4;//左边
            }
        }
        return b;
    }
    
    var $li = $('.lianjie li')
    var $zhezhao = $('.lianjie .zhezhao');
    
    $li.hover(function(e){
        $zhezhao.stop(true,true)
        var index = $(this).index('.lianjie li');
        var m = getDirection(e,$li.eq(index));
        if(m==1){
            $zhezhao.eq(index).css({"right":"-100%","top":"0","bottom":"0","left":"auto"}).animate({"right":"0","opacity":"1"})
        }else if(m==2){
            $zhezhao.eq(index).css({"right":"0","top":"-100%","bottom":"auto","left":"0"}).animate({"top":"0","opacity":"1"})
        }else if(m==3){
            $zhezhao.eq(index).css({"right":"0","top":"auto","bottom":"-100%","left":"0"}).animate({"bottom":"0","opacity":"1"})
        }else if(m==4){
             $zhezhao.eq(index).css({"right":"auto","top":"0","bottom":"0","left":"-100%"}).animate({"left":"0","opacity":"1"})
        }
    },function(e){
        $zhezhao.stop(false,true)
        var index = $(this).index('.lianjie li');
        var m = getDirection(e,$li.eq(index));
        if(m==1){
            $zhezhao.eq(index).animate({"right":"-100%","opacity":"0"})
        }else if(m==2){
            $zhezhao.eq(index).animate({"top":"-100%","opacity":"0"})
        }else if(m==3){
            $zhezhao.eq(index).animate({"bottom":"-100%","opacity":"0"})
        }else if(m==4){
             $zhezhao.eq(index).animate({"left":"-100%","opacity":"0"})
        }
    })
        
})
