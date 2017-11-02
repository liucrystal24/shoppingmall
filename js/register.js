var username = document.getElementById("username");
var usernameTip = document.getElementById("usernameTip");
username.onfocus = function(){
  usernameTip.className = "col-md-5 show control-default";
  usernameTip.firstChild.nodeValue = "请输入8至16位的英文或数字."
}
username.onblur = function(){
  if(username.validity.valid){
    usernameTip.className = "col-md-5 show control-success";
    usernameTip.firstChild.nodeValue = "用户名正确.";
    userResult=true;
  }else if(username.validity.valueMissing){
    usernameTip.className = "col-md-5 show control-error";
    usernameTip.firstChild.nodeValue = "用户名不能为空.";
    userResult=false;
  }else if(username.validity.patternMismatch){
    usernameTip.className = "col-md-5 show control-error";
    usernameTip.firstChild.nodeValue = "用户名输入有误.";
    userResult=false;
  }
}
var password = document.getElementById("password");
var passwordTip = document.getElementById("passwordTip");
password.onfocus = function(){
  passwordTip.className = "col-md-5 show control-default";
  passwordTip.firstChild.nodeValue = "请输入6至12位的数字."
}
password.onblur = function(){
  if(password.validity.valid){
    passwordTip.className = "col-md-5 show control-success";
    passwordTip.firstChild.nodeValue = "密码正确.";
    pwdResult=true;
  }else if(password.validity.valueMissing){
    passwordTip.className = "col-md-5 show control-error";
    passwordTip.firstChild.nodeValue = "密码不能为空.";
    pwdResult=false;
  }else if(password.validity.patternMismatch){
    passwordTip.className = "col-md-5 show control-error";
    passwordTip.firstChild.nodeValue = "密码输入有误.";
    pwdResult=false;
  }
}
var email = document.getElementById("email");
var emailTip = document.getElementById("emailTip");
email.onfocus = function(){
  emailTip.className = "col-md-5 show control-default";
  emailTip.firstChild.nodeValue = "请输入你的电子邮件地址."
}
email.onblur = function(){
  if(email.validity.valid){
    emailTip.className = "col-md-5 show control-success";
    emailTip.firstChild.nodeValue = "电子邮件正确.";
    emailResult=true;
  }else if(email.validity.valueMissing){
    emailTip.className = "col-md-5 show control-error";
    emailTip.firstChild.nodeValue = "电子邮件不能为空.";
    emailResult=false;
  }else if(email.validity.typeMismatch){
    emailTip.className = "col-md-5 show control-error";
    emailTip.firstChild.nodeValue = "电子邮件输入有误.";
    emailResult=false;
  }
}
var home = document.getElementById("home");
var homeTip = document.getElementById("homeTip");
home.onfocus = function(){
  homeTip.className = "col-md-5 show control-default";
  homeTip.firstChild.nodeValue = "请输入你的个人主页(可忽略).";
}
home.onblur = function(){
  if(home.validity.valid){
    homeTip.className = "col-md-5 show control-success";
    homeTip.firstChild.nodeValue = "个人主页正确.";
    homelResult=true;
  }else if(home.validity.typeMismatch){
    homeTip.className = "col-md-5 show control-error";
    homeTip.firstChild.nodeValue = "个人主页输入有误.";
    emailResult=false;
  }
}
$('#bt-submit').click(function(){
  if(userResult&&pwdResult&&emailResult&&homelResult) {
    var data = $('#form-register').serialize();
    $.ajax({
      type: 'POST',
      url: 'data/register.php',
      data: data,
      success: function(obj){
        if(obj.code<0){
          alert('注册失败！错误原因：'+obj.msg);
        }else {
          alert('注册成功！3s后将自动跳转到登录页面...')
          setTimeout(function(){
            location.href = 'index.html';
          }, 3000);
        }
      },
      error: function(){
        alert('异步请求有误！请检查响应消息！');
      }
    });
  }else{return;}
});

