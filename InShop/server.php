<?php
//设置页面内容是html编码格式是utf-8
header("Content-Type: text/plain;charset=utf-8"); 
//header("Content-Type: application/json;charset=utf-8"); 
//header("Content-Type: text/xml;charset=utf-8"); 
//header("Content-Type: text/html;charset=utf-8"); 
//header("Content-Type: application/javascript;charset=utf-8"); 

//定义一个多维数组，包含员工的信息，每条员工信息为一个数组
$user = array
	(
		array("username" => "小艺", "password" => "101", "verify" => "123"),
		array("username" => "啊艺", "password" => "102", "verify" => "123")
		
	);

//判断如果是get请求，则进行搜索；如果是POST请求，则进行新建
//$_SERVER是一个超全局变量，在一个脚本的全部作用域中都可用，不用使用global关键字
//$_SERVER["REQUEST_METHOD"]返回访问页面使用的请求方法
if ($_SERVER["REQUEST_METHOD"] == "POST"){
	check();
}elseif($_SERVER["REQUEST_METHOD"]=="GET"){
	checkUsername();
}

//通过员工编号搜索员工
function check(){
	//检查是否有员工编号的参数
	//isset检测变量是否设置；empty判断值为否为空
	//超全局变量 $_GET 和 $_POST 用于收集表单数据
	if (!isset($_POST["username"])&&!isset($_POST["password"]) &&!isset($_POST["verify"])) {
		echo "参数错误";
		return;
	}
	//函数之外声明的变量拥有 Global 作用域，只能在函数以外进行访问。
	//global 关键词用于访问函数内的全局变量
	global $user;
	//获取number参数
	$username = $_POST["username"];
	$password = $_POST["password"];
	$verify = $_POST["verify"];
	$result = "用户名或密码错误";
	
	//遍历$staff多维数组，查找key值为number的员工是否存在，如果存在，则修改返回结果
	foreach ($user as $value) {
		if (($value["username"] == $username)&&($value["password"]=$password)&&($value["verify"]=$verify)) {
			$result = "登录成功！";
			
			break;
		}
	}
    echo $result;
}

function checkUsername(){
	if(!isset($_GET["username"])){
		echo "参数错误";
		return;
	}
	global $user;
	$username = $_GET["username"];
	$result = "false";
	
	foreach($user as $value){
		if($value["username"]==$username){
			$result="true";
		}
	}
	echo $result;
}