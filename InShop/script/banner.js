// JavaScript Document//banner图部分
$(document).ready(function() {
    var lis = $(".img_box").find("li");
	var as = $(".img_Num").find("a");
	as.each(function() {
        var n =$(this);
		var indexa = n.index();
		n.mouseover(function(){
			lis.each(function(){
				$(this).fadeOut(1000);
				$(this).css({"z-index":"0"});

			});
			lis.eq(indexa).css({"z-index":"1"});
			lis.eq(indexa).fadeIn(1000);
			as.each(function() {
				$(this).removeClass("active");
            });
			as.eq(indexa).addClass("active");
		});
    });
});
	
	