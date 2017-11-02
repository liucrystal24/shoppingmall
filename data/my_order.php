<?php
header('Content-Type:application/json;charset=UTF-8');
@$uid=$_REQUEST['uid'] or die('{"code":-2,"msg":"用户编码不能为空"}');
require('1_init.php');
$sql="SELECT * FROM zw_order WHERE userId=$uid";
$result=mysqli_query($conn,$sql);
$orderlist=mysqli_fetch_all($result,MYSQLI_ASSOC);
foreach($orderlist as $i=>$order){
  $oid=$order['oid'];
  $sql="SELECT * FROM zw_product WHERE pid IN (SELECT productId FROM zw_order_detail WHERE orderId=$oid)";
  $result=mysqli_query($conn,$sql);
  $plist=mysqli_fetch_all($result,MYSQLI_ASSOC);
  $orderlist[$i]['products']=$plist;
}
echo json_encode($orderlist);