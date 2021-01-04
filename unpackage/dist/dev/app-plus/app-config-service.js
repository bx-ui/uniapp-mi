
var isReady=false;var onReadyCallbacks=[];
var __uniConfig = {"pages":["pages/login/login","pages/index/index","pages/category/category","pages/cart/cart","pages/user/user","pages/search/search","pages/search-list/search-list","pages/search/search","pages/shopDetail/shopDetail","pages/shop-evaluate/shop-evaluate","pages/setting/setting","pages/userInfo/userInfo","pages/address/address","pages/editAddress/editAddress","pages/order/order","pages/settlement/settlement","pages/invoice/invoice","pages/payType/payType","pages/coupon/coupon","pages/orderDetail/orderDetail"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"backgroundColor":"#ffffff","borderStyle":"black","selectedColor":"#FD6801","list":[{"pagePath":"pages/index/index","text":"首页","iconPath":"static/image/home.png","selectedIconPath":"static/image/home-active.png"},{"pagePath":"pages/category/category","text":"分类","iconPath":"static/image/category.png","selectedIconPath":"static/image/category-active.png"},{"pagePath":"pages/cart/cart","text":"购物车","iconPath":"static/image/cart.png","selectedIconPath":"static/image/cart-active.png"},{"pagePath":"pages/user/user","text":"我的","iconPath":"static/image/user.png","selectedIconPath":"static/image/user-active.png"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"仿小米","compilerVersion":"2.7.9","entryPagePath":"pages/login/login","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/login/login","meta":{"isQuit":true},"window":{"scrollIndicator":"none","bounce":"none","titleNView":false}},{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"enablePullDownRefresh":true,"backgroundColor":"#FFFFFF","scrollIndicator":false,"titleNView":{"searchInput":{"autoFocus":false,"align":"left","backgroundColor":"#F7F7F7","borderRadius":"4px","placeholder":"智能积木 越野四驱车","placeholderColor":"c0c0c0","disabled":true},"buttons":[{"float":"left","color":"#989898","colorPressed":"#FD6801","fontSize":"30px","fontSrc":"/static/font/iconfont.ttf","text":""},{"float":"right","color":"#989898","colorPressed":"#FD6801","fontSize":"22px","fontSrc":"/static/font/iconfont.ttf","text":""}]}}},{"path":"/pages/category/category","meta":{"isQuit":true,"isTabBar":true},"window":{"backgroundColor":"#FFFFFF","scrollIndicator":false,"titleNView":{"searchInput":{"autoFocus":false,"align":"left","backgroundColor":"#F7F7F7","borderRadius":"4px","placeholder":"智能积木 越野四驱车","placeholderColor":"c0c0c0","disabled":true},"buttons":[{"float":"right","color":"#989898","colorPressed":"#FD6801","fontSize":"22px","fontSrc":"/static/font/iconfont.ttf","text":""}]}}},{"path":"/pages/cart/cart","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom","scrollIndicator":"none","bounce":"none"}},{"path":"/pages/user/user","meta":{"isQuit":true,"isTabBar":true},"window":{"titleNView":false,"bounce":false}},{"path":"/pages/search/search","meta":{},"window":{"backgroundColor":"#FFFFFF","scrollIndicator":false,"titleNView":{"searchInput":{"autoFocus":false,"align":"left","backgroundColor":"#F7F7F7","borderRadius":"4px","placeholder":"智能积木 越野四驱车","placeholderColor":"c0c0c0","disabled":false},"buttons":[{"float":"right","color":"#989898","colorPressed":"#FD6801","fontSize":"16px","text":"搜索"}]}}},{"path":"/pages/search-list/search-list","meta":{},"window":{"backgroundColor":"#FFFFFF","scrollIndicator":false,"titleNView":{"searchInput":{"autoFocus":false,"align":"left","backgroundColor":"#F7F7F7","borderRadius":"4px","placeholder":"智能积木 越野四驱车","placeholderColor":"c0c0c0","disabled":false},"buttons":[{"float":"right","color":"#989898","colorPressed":"#FD6801","fontSize":"16px","text":"搜索"}]}}},{"path":"/pages/shopDetail/shopDetail","meta":{},"window":{"scrollIndicator":"none","bounce":"none","titleNView":{"type":"transparent","buttons":[{"type":"menu"}]}}},{"path":"/pages/shop-evaluate/shop-evaluate","meta":{},"window":{"navigationBarTitleText":"商品评价","enablePullDownRefresh":false}},{"path":"/pages/setting/setting","meta":{},"window":{"navigationBarTitleText":"设置","enablePullDownRefresh":false,"scrollIndicator":"none","bounce":"none"}},{"path":"/pages/userInfo/userInfo","meta":{},"window":{"navigationBarTitleText":"修改资料","enablePullDownRefresh":false,"scrollIndicator":"none","bounce":"none"}},{"path":"/pages/address/address","meta":{},"window":{"navigationBarTitleText":"地址列表","enablePullDownRefresh":false,"scrollIndicator":"none","bounce":"none","titleNView":{"buttons":[{"float":"right","color":"#999999","colorPressed":"#BBBBBB","fontSrc":"/static/font/iconfont.ttf","text":"","fontSize":"22px"}]}}},{"path":"/pages/editAddress/editAddress","meta":{},"window":{"navigationBarTitleText":"编辑收货地址","enablePullDownRefresh":false,"scrollIndicator":"none","bounce":"false","titleNView":{"buttons":[{"float":"right","color":"#333333","colorPressed":"#FD6801","fontSize":"16px","text":"删除"}]}}},{"path":"/pages/order/order","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom","scrollIndicator":"none","bounce":"none"}},{"path":"/pages/settlement/settlement","meta":{},"window":{"navigationBarTitleText":"订单配送至","enablePullDownRefresh":false,"navigationBarBackgroundColor":"#FD6801","navigationBarTextStyle":"white"}},{"path":"/pages/invoice/invoice","meta":{},"window":{"navigationBarTitleText":"发票","enablePullDownRefresh":false}},{"path":"/pages/payType/payType","meta":{},"window":{"navigationBarTitleText":"付款方式","enablePullDownRefresh":false,"scrollIndicator":"none","bounce":"none"}},{"path":"/pages/coupon/coupon","meta":{},"window":{"navigationBarTitleText":"优惠券","enablePullDownRefresh":true,"scrollIndicator":"none","bounce":"none"}},{"path":"/pages/orderDetail/orderDetail","meta":{},"window":{"scrollIndicator":"none","bounce":"none","titleNView":{"type":"transparent"}}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
