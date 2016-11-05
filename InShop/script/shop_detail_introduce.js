// JavaScript Document
window.onload = function(){
	var des_image = document.getElementById("description_image");
	var bigBox = document.getElementById("big_image");
	var mark = document.getElementById("mark");
	var floatBox = document.getElementById("float-box");
	var magBigBox = document.getElementById("mag_big_image");
	var magBoxImg = magBigBox.getElementsByTagName("img");
	
	mark.onmouseover = function(){
		floatBox.style.display = "block";
		magBigBox.style.display = "block";
	}
	mark.onmouseout = function(){
		floatBox.style.display = "none";
		magBigBox.style.display = "none";
	}
	mark.onmousemove = function(e){
		var ev = e || window.event;
		
		var left = ev.clientX -  des_image.offsetLeft - bigBox.offsetLeft - floatBox.offsetWidth / 2;
		var top = ev.clientY - des_image.offsetTop - bigBox.offsetTop - floatBox.offsetHeight/2;
		
		if(left<0){
			left = 0;
		}else if(left>(mark.offsetWidth - floatBox.offsetWidth)){
			left = mark.offsetWidth - floatBox.offsetWidth;
		}
		
		if(top<0){
			top = 0;
		}else if(top>(mark.offsetHeight-floatBox.offsetHeight)){
			top = mark.offsetHeight - floatBox.offsetHeight; 
		}
		
		floatBox.style.left = left + "px";
		floatBox.style.top = top +"px";
		
		var percentX = left / (mark.offsetWidth - floatBox.offsetWidth);
		var percentY = top/(mark.offsetHeight - floatBox.offsetHeight);
		for(var i=0;i<magBoxImg.length;i++){
			magBoxImg[i].style.left = -percentX * (magBoxImg[i].offsetWidth - magBigBox.offsetWidth) + "px";
			magBoxImg[i].style.top = -percentY * (magBoxImg[i].offsetHeight - magBigBox.offsetHeight)+"px";
		}
	}
}