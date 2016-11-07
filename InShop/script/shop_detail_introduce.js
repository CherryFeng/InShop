// JavaScript Document
window.onload = function(){
	var des_image = document.getElementById("description_image");
	var midBox = document.getElementById("mid_img_box");
	var mark = document.getElementById("mark");
	var floatBox = document.getElementById("float-box");
	var bigImgBox = document.getElementById("big_img_box");
	var bigImg = bigImgBox.getElementsByTagName("img")[0];
	
	mark.onmouseover = function(){
		floatBox.style.display = "block";
		bigImgBox.style.display = "block";
	}
	
	mark.onmouseout = function(){
		floatBox.style.display = "none";
		bigImgBox.style.display = "none";
	}
	
	mark.onmousemove = function(ev){
		var e = ev || window.event; //兼容IE
		var left = e.clientX - des_image.offsetLeft - midBox.offsetLeft - floatBox.offsetWidth / 2;
		//此处会有一个浏览器滚动条滚动的问题
		//但是要考虑兼容性问题
		//可以使用body.scrollTop 所有都支持
		var top =document.body.scrollTop + e.clientY - des_image.offsetTop - midBox.offsetTop - floatBox.offsetHeight / 2;
		
		//当到midBox最左边的时候和最右边的时候
		if( left<0 ){
			left = 0;
		}else if(left > (mark.offsetWidth - floatBox.offsetWidth)){
			left = mark.offsetWidth - floatBox.offsetWidth;
		}
		
		//当到midBox最上边的时候和最下边的时候
		if( top<0 ){
			top = 0;
		}else if( top>mark.offsetHeight - floatBox.offsetHeight ){
			top = mark.offsetHeight - floatBox.offsetHeight;
		}
		//设置放大镜的位置
		floatBox.style.left = left + "px";
		floatBox.style.top = top +"px";
		
		//百分比
		var percentX = left / (mark.offsetWidth - floatBox.offsetWidth);
		var percentY = top / (mark.offsetHeight - floatBox.offsetHeight);
		
		//设置大图片宽高
		bigImg.style.left = - percentX * (bigImg.offsetWidth - bigImgBox.offsetWidth) + "px";
		bigImg.style.top = - percentY * (bigImg.offsetHeight - bigImgBox.offsetHeight) + "px";
		
	}
}