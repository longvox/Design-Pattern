const {
  LoginService,
  ShipService,
  PayService,
  NotiService,
} = require("./service");

class ShopFacade {
  constructor() {
    this.loginService = new LoginService();
    this.payService = new PayService();
    this.shipService = new ShipService();
    this.notiService = new NotiService();
  }

  buyProductByMoMoWithGrabShipping(name) {
    this.loginService.loginFB(name);
    this.payService.payByMoMo();
    this.shipService.grabShip();
    this.notiService.NotificationSMS();
  }

  buyProductByPayPalWithNinjaVanShipping(name) {
    this.loginService.loginGithub(name);
    this.payService.payByPayPal();
    this.shipService.ninjaVanShip();
    this.notiService.NotificationGmail();
  }
}

module.exports = ShopFacade;
