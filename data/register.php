<?php
header('Content-type:application/json;charset=UTF-8');
@$n=$_REQUEST['username'] or die('{"code":-2,"msg":"用户名不为空"}');
@$p=$_REQUEST['password'] or die('{"code":-3,"msg":"密码不为空"}');
@$e=$_REQUEST['email'] or die('{"code":-4,"msg":"邮箱不为空"}');
@$h=$_REQUEST['home'];
require('1_init.php');
$sql="SELECT * FROM zw_user WHERE uname='$n'";
$result=mysqli_query($conn,$sql);
$row = mysqli_fetch_row($result);
if($row===null){
  $sql="INSERT INTO zw_user VALUES(NULL,'$n','$p','$e','$h')";
  $result=mysqli_query($conn,$sql);
  $uid=mysqli_insert_id($conn);
  $output=[
    'code'=>1,
    'msg'=>'添加成功',
    'uid'=>$uid
  ];
}else{
$output=[
'code'=>-1,
'msg'=>'用户名已存在'
];
}
echo json_encode($output);