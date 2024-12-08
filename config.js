window.config = {
  list: {},
  version: '1.7.6',
  host: "https://api.onionyun.cc", // 后端接口地址,务必用https协议
  title: "Onion", // 网站标题
  logo: '/static/img/logo.png', // 网站logo
  logo2: '', // 网站logo
  language: 'zh', //设置默认访问语言：zh, en
  email: 'admin123@gmail.com',
  crisp: '3f7a6562-476a-4cdd-804d-f2ae538c5c79', //填写了会加载crisp
  // 系统公告弹窗
  index_notice: `<div>
      <h2>欢迎使用Onion</h2>
      <div>✅使用Onion为您的网络增加更多趣味吧！<div>
      <div style="font-weight: 600; color: #007bff;margin:12px 0;">
          ➡️TG交流群：<a href="https://t.me/" target="_blank">待定</a>
      </div>
      <hr>
      <h2>邀请好友享首次付费<span style="color: #e74c3c;">25%</span>返佣</h2>
      <p>创建自身邀请码，邀请好友注册时填写您的邀请码<br>
          好友首次付费时，即可享有该笔订单金额<span style="color: #e74c3c;">25%</span>佣金<br>
          赶紧邀请好友一同使用洋葱云上网！</p>
      <button
          style="color:#007bff; background-color:#fff; border:1px solid #007bff; padding:8px 22px; border-radius:8px; cursor:pointer;"
          onclick="window.location.href=\'/#/user/invite\'">
          立即邀请
      </button>
  </div>`,
  currency: 'CNY', //货币符号
  currency_symbol: '￥', //货币单位
  telegram_discuss_link: 'https://t.me/', //TG频道
  is_telegram: 1, //1-开启TG绑定，0-关闭
  commission_withdraw_method: ['USDT'], //提现方式
  cloudflare: {
    siteKey:"0x4AAAAAAAzhhb3p0bgijwYY",  //这个非空值,发送注册邮件会弹出Cloudflare Turnstile验证
    token:"0x4AAAAAAAzhhbbtZFJkwqHcniDRZbsR5bA",
  },
  // 客户端列表
  clients: {
    windows: {
      download_url: 'https://www.test.com', // 下载地址
      version: '1.0.01', // 教程地址
    },
    macos: {
      download_url: '/articles/read?id=6',
      version: '1.0.01',
    },
    android: {
      download_url: 'https://www.test.com',
      version: '1.0.01',
    },
    ios: {
      download_url: '/user/doc_ios',
      version: '1.0.01',
      video: '/download/video/ios.mp4', //视频地址
    },
  },

  show_reg_tos: 1,//0不显示注册页面的服务条款，1显示
  //购买页面
  coupon_open: 1, //0不显示输入优惠劵输入框，1显示
  discount: 'onion8.8',  //这个非空值则会弹窗 discount_img
  discount_img: '/static/img/112.png', //这个非空值购买页面则会弹窗 discount_img
  // v2b的后端支持礼品卡功能
  giftCard: {
    open: 0, //0-关闭兑换码功能，1-开启
    title: '没有兑换码？ 点我购买',
    url: 'http://www.baidu.com',
  },
  // 知识库需要展示视频的知识库ID，和视频URL
  videoList: [
    {
      id: 1,
    },
    {
      id: 6, url: '/download/video/ios.mp4'
    },
  ],
}
