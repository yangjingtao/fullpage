$(function(){
    $("#fullpage").fullpage({
        anchors:['page1','page2','page3','page4','page5','page6'],
        menu:'#menu',
        afterLoad:function(anchorLink,index){
            if(index==1) {
                $(".bg12").css({
                    bottom: "90px", opacity: 1});
                $(".bg13").css({bottom: "0px", opacity: 1});
                $(".mail").css({top:"40px"});
                $(".hgroup").css({transform:"scale(1,1)"});
                $(".hgroup p").css({opacity:1})
            }else if(index==2){
                $(".section2 strong").css("transform","scale(1,1)");
                $(".section2 h3").css("transform","scale(1,1)");
                $(".section2 p").css("opacity",1);
                $(".bg21").css({marginLeft:"-100px",opacity:1});
                $(".bg22").css({marginRight:"-100px",opacity:1});
                $(".bg23").css({bottom:"100px"})
            }else if(index==3){
                $(".section3 strong").css("transform","scale(1,1)");
                $(".section3 h3").css("transform","scale(1,1)");
                $(".section3 p").css("left","200px");
                $(".bg31").css({opacity:1});
                $(".bg33").css({marginBottom:"0px",opacity:1})
            }else if(index==4){
                $(".section4 strong").css("transform","scale(1,1)");
                $(".section4 h3").css("transform","scale(1,1)");
                $(".section4 p").css("opacity",1);
                $(".bg41").css({bottom:"100px"});
                $(".bg42").css({bottom:"100px",transitionDelay:"0.2s"});
            }else if(index==5){
                $(".section5 strong").css("transform","scale(1,1)");
                $(".section5 h3").css("transform","scale(1,1)");
                $(".bg51").css({left:"10%"});
                $(".bg52").css({left:"30%"});
                $(".bg53").css({right:"30%"});
                $(".bg54").css({right:"10%"});
            }else if(index==6){
                $(".section6 strong").css("transform","scale(1,1)");
                $(".section6 h3").css("transform","scale(1,1)");
                $(".bg61").css({height:"545px"});
                $(".bg62").css({left:"10%"});
                $(".txt6").css({right:"10%"});
            }
        },
        onLeave:function(index){
            if(index==1){
                $(".bg12").css({bottom:"-329px", opacity:0});
                $(".bg13").css({bottom:"-377px", opacity:0});
                $(".mail").css({top:"-26px"});
                $(".hgroup p").css({opacity:0});
                $(".hgroup").css({transform:"scale(0.5,0.5)"})
            }else if(index==2){
                $(".section2 strong").css("transform","scale(0.5,0.5)");
                $(".section2 h3").css("transform","scale(0.5,0.5)");
                $(".section2 p").css("opacity",0);
                $(".bg21").css({marginLeft:"-233px",opacity:0});
                $(".bg22").css({marginRight:"-233px",opacity:0});
                $(".bg23").css({bottom:"-200px"})
            }else if(index==3){
                $(".section3 strong").css("transform","scale(0.5,0.5)");
                $(".section3 h3").css("transform","scale(0.5,0.5)");
                $(".section3 p").css("left","-200px");
                $(".bg31").css({opacity:0});
                $(".bg33").css({marginBottom:"-441px",opacity:0})
            }else if(index==4){
                $(".section4 strong").css("transform","scale(0.5,0.5)");
                $(".section4 h3").css("transform","scale(0.5,0.5)");
                $(".section4 p").css("opacity",0);
                $(".bg41").css({bottom:"-372px"});
                $(".bg42").css({bottom:"-449px"});
            }else if(index==5){
                $(".section5 strong").css("transform","scale(0.5,0.5)");
                $(".section5 h3").css("transform","scale(0.5,0.5)");
                $(".bg51").css({left:"-20%"});
                $(".bg52").css({left:"-40%"});
                $(".bg53").css({right:"-40%"});
                $(".bg54").css({right:"-20%"});
            }else if(index==6){
                $(".section6 strong").css("transform","scale(1,1)");
                $(".section6 h3").css("transform","scale(1,1)");
                $(".bg61").css({height:"0px"});
                $(".bg62").css({left:"-30%"});
                $(".txt6").css({right:"-20%"});
            }
        }
    })
})