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
	
