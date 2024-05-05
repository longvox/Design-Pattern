const LedInterFace = require("./led.interface");
class AdapterElectric extends LedInterFace {
  constructor(adapter) {
    super();
    this.adapter = adapter;
  }

  connect() {
    let electric = this.downElectric(this.adapter.getElectric());
    // Hiệu điện thế lớn hơn 3v bóng đèn sẽ cháy.
    if (electric > 3) return -1;
    // Hiệu điện thế bằng 3v bóng đèn phát sáng.
    if (electric === 3) return 1;
    // Đèn không phát sáng.
    return 0;
  }

  downElectric(electric) {
    return electric - 217;
  }
}

module.exports = AdapterElectric;
