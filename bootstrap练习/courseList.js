$(function(){
	$("div.courseTypeDirection div").click(function(){
		var obj = $("div.courseTypeDirection div");
		var select = obj.index(this);
		obj.each(function(){
			if($(this).index() == select){
				$(this).addClass("select");
			}else{
				$(this).removeClass("select");
			}
		})
	})
	$("div.courseTypeClassify div").click(function(){
		var obj = $("div.courseTypeClassify div");
		var select = obj.index(this);
		obj.each(function(){
			if($(this).index() == select){
				$(this).addClass("select");
			}else{
				$(this).removeClass("select");
			}
		})
	})
	$("div.courseTypeType div").click(function(){
		var obj = $("div.courseTypeType div");
		var select = obj.index(this);
		obj.each(function(){
			if($(this).index() == select){
				$(this).addClass("select");
			}else{
				$(this).removeClass("select");
			}
		})
	})
	$("div.lessonTitle div a").click(function(){
		var obj = $("div.lessonTitle div a");
		var select = obj.index(this);
		obj.each(function(){
			if($(this).index() == select){
				$(this).css('color','#FF3300');
			}else{
				$(this).css('color','#333');
			}
		})
	})
	$("ul.lessonUl li").mouseover(function(){
		var liObj = $("ul.lessonUl li");
		var divObj = $("div.lessonBg");
		var select = liObj.index(this);
		liObj.each(function(){
			if($(this).index() == select * 2){
				$(this).css('display','none');
			}
			else{
				$(this).css('display','block');
			}
		})
		divObj.each(function(){
			if($(this).index() == (select * 2) + 1){
				$(this).css('display','block');
			}
			else{
				$(this).css('display','none');
			}
		})
	})
})