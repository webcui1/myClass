$(function() {
	/*头部*/
	$(".nav").mouseover(function() {
			//		alert()

			$(this).children(".tllog").css("background-position", "-7px 0")
				//			$(this).children(".sw").css("background","white")

			$(this).children(".sw").show()
		}).mouseout(function() {
			$(this).children(".tllog").css("background-position", "-14px 0")

			$(this).children(".sw").hide()
		})
		/*search*/
	$(".search").focus(function() {
		$(".icon").hide()
	}).blur(function() {
		$(".icon").show()

	})
	$(".icon a").hover(function() {

		$(this).css("color", "red")
	}, function() {
		$(this).css("color", "#a3a3a3")
	})
	$(".btn_box").hover(function() {
			$(this).css("background", "black")
			$(".btn_click").css("background-position", '0 0')
		}, function() {
			$(this).css("background", "#eeeeee")
			$(".btn_click").css("background-position", '-18px 0')
		})
		/*index_goods*/
	$(".index_goods ul li a").hover(function() {
			//		alert()
			$(this).css("border-bottom", "2px solid red")
		}, function() {
			$(this).css("border-bottom", "none")
		})
		/*轮播*/
	var ali = $(".ul_move li")
	var oul = $(".ul_move")
	var now = 0;

	function domove() {
		//					alert()
		if(now == ali.length - 1) {
			now = 0;
		} else {
			now++;
		}
		//					ali.eq(now).addClass("active").siblings().removeClass()
		//					$(".ul_move li").fadeOut(500)
		//					$(".ul_move li").eq(now).fadeIn(500)
		ali.eq(now).show().siblings().hide()
		$(".round li").eq(now).addClass('active').siblings().removeClass()

	}
	timer = setInterval(domove, 2000)

	/*goods左边列表*/
	$(".s_one").mouseover(function() {
		//					console.log(123)
		$(this).children(".list").show()

		//					$(".list").mousemove(function(){
		//						
		//					})
	})
	$(".s_one").mouseout(function() {
		$(this).children(".list").hide()

	})

	/*无缝滚动*/
	function scroll() {
		$(".scolls ul").animate({
			"margin-top": "-45px"
		}, function() {
			$(".scolls ul li:eq(0)").appendTo($(".scolls ul"))
			$(".scolls ul").css({
				"margin-top": 0
			})
		})
	}
	 timer=setInterval(scroll, 1000)
	 $(".scolls").hover(function(){
	 	clearInterval(timer)
	 },function(){
	 timer=setInterval(scroll, 1000)
	 	
	 })

})