/**
 * Created by bjwsl-001 on 2017/1/17.
 */

if(!sessionStorage['loginUid']){  //没有需要的Cookie数据
  location.href="productlist.html";
}
$(function(){
  $('#header').load('data/header.php',function(){
    $('#welcome').html('欢迎回来：'+sessionStorage['loginUname']);
    $('#welcome').addClass('navbar-text navbar-right');
  });
  $('#footer').load('data/footer.php');
});
$.ajax({
  url: 'data/6_cart_detail_list.php',
  data: {uid: sessionStorage['loginUid']},
  success: function(data){
    var html = '';
    var sum=0;
    var snum=0;
    $.each(data, function(i, p){
      sum+=p.price*p.count;
      html += `
      <div class="goods-item">
                <div class="p-img">
                  <a target="_blank" href=""><img src="${p.pic}" alt=""></a>
                </div>
                <div class="p-name">
                  <a href="" target="_blank">
                    ${p.pname}
                  </a>
                </div>
                <div class="p-price">
                  <strong class="jd-price"> ${p.price}</strong>
                  <span class="p-num">x${p.count}</span>
                  <span class="p-state">有货</span>
                </div>
              </div>
      `;
      snum++;
    });
    $('.goods-items').html(html);
    $('.price-num').html('￥'+sum.toFixed(2)).siblings(':hidden').val(sum);
    $('#warePriceId').html('￥'+sum);
    $('.snum').html(snum);
  },
  error: function(){
    alert('购物车数据加载失败！请检查响应消息！');
  }
});
$('.payment-list').on('click','li',function(){
  $(this).addClass('payment-item-selected').siblings('.payment-item-selected').removeClass('payment-item-selected');
  $(this).siblings('.hidden').val($(this).data('value'));
});
$('.checkout-submit').click(function(){
  var data=$('#form-order').serialize();
  data+='&userId='+sessionStorage['loginUid'];
  console.log(data);
  $.ajax({
    type:'POST',
    url:'data/order_add.php',
    data:data,
    success:function(obj){
      if(obj.code<0){
        alert('订单生成失败，原因'+obj.msg);
      }else {
        sessionStorage['oid'] = obj.oid;
        location.href='addorder_succ.html';
      }
    },
    error:function(){
      console.log(arguments);
    }
  });
});
