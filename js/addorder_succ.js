/**功能点1：若用户未登录，则跳转到登录页面（产品列表页）**/
if(!sessionStorage['loginUid']){
  location.href = 'productlist.html';
}

/**功能点2：异步请求页头和页尾，修改页头中的欢迎消息**/
$('#header').load('data/header.php',function(){
  $('#welcome').html('欢迎回来：'+sessionStorage['loginUname']);
  $('#welcome').addClass('navbar-text navbar-right');
});
$('#footer').load('data/footer.php');

/**功能点3：显示成功创建的订单编号**/
$('#oid').html( sessionStorage['oid'] );
sessionStorage.removeItem('oid'); //删除已经显示给用户的订单编号








