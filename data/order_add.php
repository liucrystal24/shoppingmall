<?php
header('Content-Type:application/json;charset=UTF-8');
@$rN=$_REQUEST['rcvName'] or die('{"code":"-1","msg":"收件人姓名未填"}');
@$rA=$_REQUEST['rcvAddr'] or die('{"code":"-2"},"msg":"收件人地址未填"}');
@$rP=$_REQUEST['rcvPhone'] or die('{"code":"-3,"msg":"收件人手机未填"}"}');
@$pr=$_REQUEST['price'] or die('{"code":"-4,"msg":"价格未确定"}"}');
@$pa=$_REQUEST['payment'] or die('{"code":"-5","msg":"支付方式未填"}}');
@$u=$_REQUEST['userId'] or die('{"code":"-6","msg":"收件人编号未填"}}');
@$oT=time()*1000;
require('1_init.php');
$sql1="INSERT INTO zw_order VALUES(NULL,'$rN','$rA','$rP','$pr','$pa','$oT','1','$u')";
mysqli_query($conn,$sql1);
$o=mysqli_insert_id($conn);
$sql2="SELECT did,productId,count FROM zw_cart_detail WHERE cartId=(SELECT cid FROM zw_cart WHERE userId=$u )";
$result=mysqli_query($conn,$sql2);
$list=mysqli_fetch_all($result,MYSQLI_ASSOC);
foreach($list as $key){
$sql3="INSERT INTO zw_order_detail VALUES(NULL,$o,$key[productId],$key[count])";
mysqli_query($conn,$sql3);
$sql4="DELETE FROM zw_cart_detail WHERE did=$key[did]";
mysqli_query($conn,$sql4);
}
echo '{"code":1,"msg":"订单生成成功","oid":'.$o.'}';