// JavaScript Document

	function arrowEvent(){
		var arrow = document.getElementById("addr_arrow");
		var list = document.getElementById("address_list");
		/*arrow.onmouseover = function(){
			list.style.display="block";
		}
		arrow.onmouseout = function(){
			list.style.display="none";
		}*/
		document.onclick = function(){
		
				list.style.display = "none";
			
		}
		arrow.onclick = function(e){
			stopPropagation(e);
			if(list.style.display=="block"){
				list.style.display = "none";
			}else if(list.style.display == "none"){
				list.style.display = "block";
			}
			
		}
		/*li被选中的事件未添加*/		
	}
	//防止冒泡事件
	function stopPropagation(e){
		if(e.stopPropagation){
			e.stopPropagation();
		}else{
			e.cancelBubble = true;
		}
	}
	
	//商品图片浏览区切换图片
	function changeImg_Left(){
		var bigImg = document.getElementById("big_img");
		var midImg = document.getElementById("mid_image");
		var smallImgBox = document.getElementById("small_img_box");
		var lis = smallImgBox.getElementsByTagName("li");
		var index = 0;
		for(var i=0;i<lis.length;i++){
			var img = lis[i].getElementsByTagName("img")[0];
			if(img.className=="img_active"){
				index = i;
				index--;
				if(index<0){
					return;
				}else if(index==0){
					midImg.src = "img/products/shop_detail_item1/item1.jpg";
					bigImg.src="img/products/shop_detail_item1/item1_big.jpg";
					
				}else if(index==1){
					
					midImg.src = "img/products/shop_detail_item1/item2.jpg";
					bigImg.src="img/products/shop_detail_item1/item2_big.jpg";
				}
				img.className="";
				lis[index].getElementsByTagName("img")[0].className ="img_active";
				break;
			}
		} 
	}	
	//商品图片浏览区切换图片
	function changeImg_Right(){
		var bigImg = document.getElementById("big_img");
		var midImg = document.getElementById("mid_image");
		var smallImgBox = document.getElementById("small_img_box");
		var lis = smallImgBox.getElementsByTagName("li");
		var index = 0;
		for(var i=0;i<lis.length;i++){
			var img = lis[i].getElementsByTagName("img")[0];
			if(img.className=="img_active"){
				index = i;
				index++;
				//判读是否大于2是因为一共三张图
				if(index>2){
					return;
				}else if(index==1){
					//更改资源文件
					midImg.src = "img/products/shop_detail_item1/item2.jpg";
					bigImg.src="img/products/shop_detail_item1/item2_big.jpg";
					
				}else if(index==2){
					midImg.src = "img/products/shop_detail_item1/item3.jpg";
					bigImg.src="img/products/shop_detail_item1/item3_big.jpg";
				}
				//改变底部小图片的选中样式
				img.className="";
				lis[index].getElementsByTagName("img")[0].className ="img_active";
				break;
			}
		} 
		
		
	}
	
	
	
	
	//增加购买数量
	function numInc(){
		var maxAmount = parseInt(document.getElementById("maxAmount").innerHTML);
		var amount = parseInt(document.getElementById("amount").value);
		if(amount >= maxAmount){
			alert("已经达到购买数量的最大上限！");
		}else{	
			amount++;
			document.getElementById("amount").value = amount;
		}
	}
	//减少购买数量
	function numDec(){
		var amount = parseInt(document.getElementById("amount").value);
		if(amount <= 0){
			return;
		}else{	
			amount--;
			document.getElementById("amount").value = amount;
		}
	}
	
