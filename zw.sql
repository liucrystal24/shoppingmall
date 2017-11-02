SET NAMES UTF8;
DROP DATABASE IF EXISTS zw;
CREATE DATABASE zw CHARSET=UTF8;
USE zw;

/**用户信息表**/
CREATE TABLE zw_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,  
  uname VARCHAR(32),    
  upwd VARCHAR(32),
  uemail VARCHAR(64),
  uhome VARCHAR(64)
);
INSERT INTO zw_user VALUES
(10, 'liucrystal', '123456','lgy@qq.com','http:/lgy.com');


/**产品信息表**/
CREATE TABLE zw_product(
  pid INT PRIMARY KEY AUTO_INCREMENT,  
  pname VARCHAR(64),  
  price FLOAT(8,2),  
  pic VARCHAR(32)
);
INSERT INTO zw_product VALUES
(NULL,'2016暴雪嘉年华 暴雪25周年纪念背包',488,'images/game/game1.jpeg'),
(NULL,'预售 2016暴雪嘉年华 Q版随机小手办',79,'images/game/game2.jpeg'),
(NULL,'2016暴雪嘉年华 七合一纪念限量礼盒',299,'images/game/game3.jpeg'),
(NULL,'炉石传说 棒球服',439,'images/game/game4.jpeg'),
(NULL,'炉石传说 卫衣 厚',299,'images/game/game5.jpeg'),
(NULL,'炉石传说 卫衣 薄',399,'images/game/game6.jpeg'),
(NULL,'炉石传说 logo 陶瓷水杯 酒桶杯',188,'images/game/game7.jpeg'),
(NULL,'炉石传说 随身笔记本',188,'images/game/game8.jpeg'),
(NULL,'守望先锋 温斯顿 毛绒玩具',238,'images/game/game9.jpeg'),
(NULL,'2016暴雪嘉年华 守望先锋 旅行包',399,'images/game/game10.jpeg'),
(NULL,'2016暴雪嘉年华 守望先锋 洋葱小鱿 发声毛绒玩具',69,'images/game/game11.jpeg'),
(NULL,'守望先锋 项链 身份牌 铭牌 黑百合',488,'images/game/game12.jpeg'),
(NULL,'2016暴雪嘉年华 暴雪25周年纪念背包',488,'images/game/game13.png'),
(NULL,'2016暴雪嘉年华 暴雪25周年纪念背包',488,'images/game/game14.jpeg'),
(NULL,'2016暴雪嘉年华 暴雪25周年纪念背包',488,'images/game/game15.jpeg'),
(NULL,'2016暴雪嘉年华 暴雪25周年纪念背包',488,'images/game/game16.jpeg'),
(NULL,'2016暴雪嘉年华 暴雪25周年纪念背包',488,'images/game/game17.jpeg'),
(NULL,'2016暴雪嘉年华 暴雪25周年纪念背包',488,'images/game/game18.jpeg'),
(NULL,'2016暴雪嘉年华 暴雪25周年纪念背包',488,'images/game/game19.jpeg'),
(NULL,'2016暴雪嘉年华 暴雪25周年纪念背包',488,'images/game/game20.jpeg'),
(NULL,'2016暴雪嘉年华 暴雪25周年纪念背包',488,'images/game/game21.jpeg'),
(NULL,'2016暴雪嘉年华 暴雪25周年纪念背包',488,'images/game/game22.jpeg'),
(NULL,'2016暴雪嘉年华 暴雪25周年纪念背包',488,'images/game/game23.jpeg'),
(NULL,'2016暴雪嘉年华 暴雪25周年纪念背包',488,'images/game/game24.jpeg'),
(NULL,'2016暴雪嘉年华 暴雪25周年纪念背包',488,'images/game/game25.jpeg'),
(NULL,'2016暴雪嘉年华 暴雪25周年纪念背包',488,'images/game/game26.jpeg'),
(NULL,'2016暴雪嘉年华 暴雪25周年纪念背包',488,'images/game/game27.jpeg'),
(NULL,'2016暴雪嘉年华 暴雪25周年纪念背包',488,'images/game/game28.jpeg'),
(NULL,'2016暴雪嘉年华 暴雪25周年纪念背包',488,'images/game/game29.jpeg'),
(NULL,'2016暴雪嘉年华 暴雪25周年纪念背包',488,'images/game/game30.jpeg'),
(NULL,'2016暴雪嘉年华 暴雪25周年纪念背包',488,'images/game/game31.jpeg'),
(NULL,'2016暴雪嘉年华 暴雪25周年纪念背包',488,'images/game/game32.png'),
(NULL,'2016暴雪嘉年华 暴雪25周年纪念背包',488,'images/game/game33.jpeg'),
(NULL,'2016暴雪嘉年华 暴雪25周年纪念背包',488,'images/game/game34.jpeg'),
(NULL,'2016暴雪嘉年华 暴雪25周年纪念背包',488,'images/game/game35.jpeg'),
(NULL,'2016暴雪嘉年华 暴雪25周年纪念背包',488,'images/game/game36.jpeg');
/**购物车表**/
CREATE TABLE zw_cart(
  cid INT PRIMARY KEY AUTO_INCREMENT,  
  userId INT
);
INSERT INTO zw_cart VALUES
(100, 10);

/**购物车详情表**/
CREATE TABLE zw_cart_detail(
  did INT PRIMARY KEY AUTO_INCREMENT,  
  cartId INT,  
  productId INT,  
  count INT
);
INSERT INTO zw_cart_detail VALUES
(NULL, 100, 8, 2),
(NULL, 100, 15, 1),
(NULL, 100, 27, 3);
CREATE TABLE zw_order(
  oid INT PRIMARY KEY AUTO_INCREMENT,
  rcvName VARCHAR(64),
  rcvAddr VARCHAR(64),
  rcvPhone VARCHAR(15),
  price FLOAT(8,2),
  payment INT,
  orderTime BIGINT,
  status INT,
  userID INT
);
CREATE TABLE zw_order_detail(
  did INT PRIMARY KEY AUTO_INCREMENT,
  orderId INT,
  productId INT,
  count INT
);
INSERT INTO zw_order VALUES(NULL,'qiangdong','beijing','13805122560','5888','1','123456789','1','10');
INSERT INTO zw_order VALUES(NULL,'qiangdong','beijing','13805122560','5888','2','123456789','2','10');
INSERT INTO zw_order VALUES(NULL,'qiangdong','beijing','13805122560','5888','3','123456789','3','10');
INSERT INTO zw_order VALUES(NULL,'qiangdong','beijing','13805122560','5888','4','123456789','4','10');
INSERT INTO zw_order VALUES(NULL,'qiangdong','beijing','13805122560','5888','1','123456789','1','10');
