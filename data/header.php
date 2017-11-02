<?php
header('Content-Type: text/html;charset=UTF-8');
?>
<!--页面顶部! -->
<div class="navbar navbar-default my-navbar">
      <div class="container">
        <!--导航条头部-->
        <div class="navbar-header">
          <a class="navbar-brand" href="index.html">
            <!--添加标志图-->
            <span class="my-logo"></span>
          </a>
          <a data-toggle="collapse" href="#menu" class="navbar-toggle">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </a>
        </div>
        <!--导航条折叠部分-->
        <div id="menu" class="collapse navbar-collapse">
          <!--左侧的菜单-->
          <ul class="nav navbar-nav">
            <li><a href="index.html">首页</a></li>
            <li><a href="productlist.html">商城</a></li>
            <li class="dropdown">
              <a data-toggle="dropdown" href="#">
                菜单 <span class="caret"></span>
              </a>
              <ul class="dropdown-menu">
                <li><a href="">暴雪大新闻</a></li>
                <li class="divider"></li>
                <li><a href="">热点话题</a></li>
                <li class="divider"></li>
                <li><a href="">NGA论坛</a></li>
                <li class="divider"></li>
                <li><a href="">购买</a></li>
                <li class="divider"></li>
                <li><a href="">产品支持</a></li>
                <li class="divider"></li>
                <li><a href="">关于战网</a></li>
              </ul>
            </li>
          </ul>
          <!--右侧的菜单-->
          <ul class="nav navbar-nav navbar-right">
            <li><a href="register.html">注册</a></li>
            <li id="welcome"><a data-toggle="modal" href="#modal-login">登录</a></li>
          </ul>
          <!--右侧的搜索表单-->
          <form class="navbar-form navbar-right">
            <div class="form-group">
              <label class="sr-only" for="kw">搜索关键字</label>
              <input class="form-control" placeholder="请输入搜索关键字" type="text" id="kw">
            </div>
          </form>
          <!--右侧的分隔小竖条-->
          <span class="navbar-text navbar-right">|</span>
        </div>
      </div>
    </div>