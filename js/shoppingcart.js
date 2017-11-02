/**功能点1：读取上一个页面保存的Cookie，获得用户名和用户编号**/
if(!sessionStorage['loginUid']){  //没有需要的Cookie数据
  location.href="productlist.html";
}


/**功能点2：页面加载完后，异步请求页头和页尾**/
$(function(){
  $('#site_header').load('data/header.php',function(){
    //异步请求完成(即页头加载完成)后的回调
    $('#welcome').html('欢迎回来：'+sessionStorage['loginUname']);
    $('#welcome').addClass('navbar-text navbar-right');
  });
  $('#site_footer').load('data/footer.php');
});



/**功能点3：页面加载完后，异步请求当前登录用户购物车中的商品**/
$.ajax({
  url: 'data/6_cart_detail_list.php',
  data: {uid: sessionStorage['loginUid']},
  success: function(data){
    var html = '';
    $.each(data, function(i, p){
      html += `
      <tr>
          <td>
            <input type="checkbox"/>
            <input type="hidden" value="${p.did}" />
            <div><img src="${p.pic}" class="img-responsive"></div>
          </td>
          <td><a href="">${p.pname}</a></td>
          <td>￥${p.price}</td>
          <td>
             <button class="button-left">-</button><input type="text" value="${p.count}"/><button>+</button>
          </td>
          <td><span class="sum_price">￥${p.price*p.count}</span></td>
          <td><a href="${p.did}">删除</a></td>
      </tr>
      `;
    });
    //异步请求结算总价
    $('#cart tbody').html(html);
    var arr=$('.sum_price').text().split('￥').slice(1);
    for(i=0,sum=0;i<arr.length;i++){
      sum+=Math.floor(arr[i]);
    }
    $('#cart_footer div span').html('￥'+sum);
  },
  error: function(){
    alert('购物车数据加载失败！请检查响应消息！');
  }
});


/**功能点4：为“删除”按钮绑定事件监听，实现购买详情的删除**/
$('#cart tbody').on('click', 'a:contains("删除")', function(e){
  e.preventDefault();
  var did = $(this).attr('href');
  var that = this;  //使用临时变量指向当前被点击的A
  $.ajax({
    type: 'POST',
    url: 'data/7_cart_detail_delete.php',
    data: {'did': did},
    success: function(data){
      if(data.code<0){
        alert('响应成功但删除失败！原因：'+data.msg);
      }else {
        alert('购买记录删除成功！');
        $(that).parent().parent().remove();
        //异步请求结算总价
        var arr=$('.sum_price').text().split('￥').slice(1);
        for(i=0,sum=0;i<arr.length;i++){
          sum+=Math.floor(arr[i]);
        }
        $('#cart_footer div span').html('￥'+sum);
      }
    },
    error: function(){
      alert('购买记录删除失败！请检查响应消息！');
    }
  })
})