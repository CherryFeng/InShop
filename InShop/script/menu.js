// JavaScript Document
// JavaScript Document
$(document).ready(function() {
	var shopclass = $(".shopClass");
	var shopclshow= $(".shopClass_show");
	var shopClassitems = $(".shopClass_item");
	var i = shopclass.find("i");
	var items = $(".item");
	
	//"全部商品分类"的hover
	shopclass.mouseover(function(){
		shopclass.css("background","#4593FD");
		shopclshow.addClass("show").removeClass("hide");
		shopclass.find("i").addClass("shopClasshoveri").removeClass("shopClassoni");

	});
	shopclass.mouseout(function(){
		shopclass.css("background","#1369C0");
		shopclshow.addClass("hide").removeClass("show");
		shopclass.find("i").addClass("shopClassoni").removeClass("shopClasshoveri");
	});
	
	//左侧商品分类的hover，出现子导航
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

});