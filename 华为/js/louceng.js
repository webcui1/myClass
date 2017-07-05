$(function(){
			$(".shen dl").hover(function(){
				$(this).css("box-shadow","5px 7px 5px #e9e9e9")
				$(this).animate({"top":"-3px"},500)
			},function(){
				$(this).css("box-shadow","none")
				$(this).animate({"top":"0"},500)
			})
		})



	/*楼层*/
	$(window).scroll(function(){					
					var h=$(window).height();
					var w=$(window).scrollTop();
					var shang=$(".pinpai").eq(0).offset().top;
					if(w>=shang)
					{
						$(".lou").fadeIn();
						$(".pinpai").each(function(i){
							
							if(h+w-$(".pinpai").eq(i).offset().top>h/2)
							{ 
//								alert($(".pinpai").eq(i).offset().top);
								$(".lou li").eq(i).addClass("active2").siblings().removeClass("active2");
                                						
								$(".lou li").eq(i).children("a").css("display","block").parent().siblings().children("a").css("display","block");
//								$(".lou li").eq(i).children("span").css("display","block").parent().siblings().children("span").css("display","none");
							}
						})
					}
					else
					{
						$(".lou").fadeOut();
					}
					
				})
				
				$(".lou .last2").click(function(){
					
					$("body,html").animate({"scrollTop": 0},0)
						
				})
				$(".lou li").click(function(){
					
					var heigh=$(".pinpai").eq($(this).index()).offset().top;
					$("body,html").animate({"scrollTop":heigh},0)
					$(".lou li").eq($(this).index()).addClass("active2").siblings().removeClass("active2");
					$(this).children("a").css("display","none").parent().siblings().children("a").css("display","block");
//					$(this).children("span").css("display","block").parent().siblings().children("span").css("display","none");
					return false;
				})