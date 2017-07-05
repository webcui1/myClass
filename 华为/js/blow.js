$(function(){
	
	$(".option li").click(function(){
	 index=$(this).index()
		
		$(this).show().addClass("borders").siblings().removeClass()
		$(".small ul li").eq(index).show().siblings().hide()
		$(".big_imgs li").eq(index).show().siblings().hide()
	})
	/*放大镜*/
	$(".move").mouseover(function(){
				var index=$(this).index()
				var h=$(window).height();
//				console.log(h)
					$(".mask").show()
					$(".big_imgs").show()
				})
//	console.log($(".move").outerHeight())
//	console.log($(".mask").outerHeight())
				$(".move").mouseout(function(){
					$(".mask").hide()
					$(".big_imgs").hide()
				})
					$(".move").mousemove(function(e){
					var e=window.event || e;
					var left=e.clientX-$(".move").offset().left-$(".mask").outerWidth()/2;
					var top=e.clientY-$(".move").offset().top+$(".mask").outerWidth()/2;
//					console.log($(".move").offset().top)
//					console.log(e.clientY)
//					console.log($(".mask").outerHeight()/2)
//					console.log(top)
					if(left<0){
						left=0;
					}else if(left>$(".move").outerWidth()-$(".mask").outerWidth()){
						left=$(".move").outerWidth()-$(".mask").outerWidth()
					}
//					
					if(top<0){
						top=0;
					}else if(top>$(".move").outerHeight()-$(".mask").outerHeight()){
						top=$(".move").outerHeight()-$(".mask").outerHeight()
					}
					$(".mask").css({"left":left,"top":top})
					
					
					var bei=$(".big_imgs img").outerWidth() / $(".move li img").outerWidth();
					console.log(bei)
					$(".big_imgs li img").css({
						left:-bei*left+"px",
						top:-bei*top+"px"
					})
				})
				
})

