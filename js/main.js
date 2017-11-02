//异步加载页头和页尾
$(function(){
  $(".header").load("data/header.php",function(){
    scrollMove();
    userName();
  });
  $(".my-footer").load("data/footer.php");
});
//判断导航栏是否显示用户名
function userName(){
  if (sessionStorage['loginUname']!=null){
    $('#welcome').html('欢迎回来：'+sessionStorage['loginUname']);
    $('#welcome').addClass('navbar-text navbar-right');
  }
}
//分类选择展示栏
$('#sec1').click(function(e){
  e.preventDefault();
  $('#tc10').css('display','block');
  $('#tc10').siblings().css('display','none');
  $('#sec1').parent().siblings().children().removeClass('gameactive');
  $('#sec1').addClass('gameactive');

});
$('#sec2').click(function(e){
  e.preventDefault();
  $('#tc20').css('display','block');
  $('#tc20').siblings().css('display','none');
  $('#sec2').parent().siblings().children().removeClass('gameactive');
  $('#sec2').addClass('gameactive');
});
$('#sec3').click(function(e){
  e.preventDefault();
  $('#tc30').css('display','block');
  $('#tc30').siblings().css('display','none');
  $('#sec3').parent().siblings().children().removeClass('gameactive');
  $('#sec3').addClass('gameactive');
});
$('#sec4').click(function(e){
  e.preventDefault();
  $('#tc40').css('display','block');
  $('#tc40').siblings().css('display','none');
  $('#sec4').parent().siblings().children().removeClass('gameactive');
  $('#sec4').addClass('gameactive');
});
//回到头部
function scrollMove(){
  window.onscroll=function() {
    var h = document.body.scrollTop;
    if (h >= 150) {
      $('.goTop').fadeIn();
    }
    if (h < 150) {
      $('.goTop').fadeOut();
    }
  }
}
$('.goTop').on('click',function () {
  $("body,html").animate({
    scrollTop: 0
  },500);
});
//登录js
$('#bt-login').click(function(){
  var n = $('[name="uname"]').val();
  var p = $('[name="upwd"]').val();
  //发起异步POST请求，进行登录验证
  $.ajax({
    type: 'POST',
    url: 'data/2_user_login.php',
    data: {uname: n, upwd: p},
    success: function(data){
      //console.log('开始处理响应消息');
      if(data.code<0){  //登录失败
        $('#modal-login .alert').html(data.msg);
      }else {           //登录成功
        $('#modal-login').css('display','none');
        $('.modal-backdrop').remove();
        $('#welcome').html('欢迎回来：'+data.uname);
        $('#welcome').addClass('navbar-text navbar-right');
        //loginUname = data.uname; //在全局范围保存登录用户名
        //loginUid = data.uid;//在全局范围保存登录用户编号
        sessionStorage['loginUname'] = data.uname;
        sessionStorage['loginUid'] = data.uid;
      }
    },
    error: function(){
      alert('响应消息有问题！请检查Network！');
    }
  });
});
//首页展示图片跳转
$('.p-right img').click(function(){
  console.log('hh');
  location.href='productlist.html';
})
//微信
$('.weixin').on('mouseenter',function(){
  $('.liu-wei').css('display','block');
});
$('.weixin').on('mouseleave',function(){
  $('.liu-wei').css('display',' none');
});
