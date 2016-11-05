// JavaScript Document
$(document).ready(function() {
	var shopclass = $(".shopClass");
	var shopclshow= $(".shopClass_show");
	var shopClassitems = $(".shopClass_item");
	var i = shopclass.find("i");
	var items = $(".item");
	/*shopclass.mouseover(function(){
		shopclass.css("background","#4593FD");
		shopclshow.addClass("show").removeClass("hide");
		
		
	});
	shopclass.mouseout(function(){
		shopclass.css("background","#1369C0");
		shopclshow.addClass("hide").removeClass("show");
	});*/

	items.each(function() {
		var m = $(this);
		var index = m.index();
		m.mouseover(function(){		
			items.eq(index).find(".shopClass_submenu").addClass("show").removeClass("hide");
			items.eq(index).find("dl").addClass("shopClass_itemhover");
			shopClassitems.eq(index).find("a:not(.aLink)").css("color","#000");			
		});
		m.mouseout(function(){	
			items.eq(index).find(".shopClass_submenu").addClass("hide").removeClass("show");
			items.eq(index).find("dl").removeClass("shopClass_itemhover");
			shopClassitems.eq(index).find("a:not(.aLink)").css("color","#fff");
		});
	});


	
	
/*	var j = 1;
	var time = setInterval(Banner,2000);
	function Banner(){
		lis.each(function(){
				$(this).css({"z-index":"0","opacity":"0"});
				//$(this).remove("onli");
				$(this).fadeOut(1000);
		});
		lis.eq(j).css({"z-index":"1","opacity":"1"});
		//lis.eq(j).addClass("onli");
		lis.eq(j).fadeIn(1000);
		as.each(function() {
				$(this).removeClass("active");
        });
		as.eq(j).addClass("active");
		j++;
		if(j==3){j=0;}
	}*/
});

