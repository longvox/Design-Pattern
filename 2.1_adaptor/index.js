const VietNamPower = require("./vietNamPower");
const AdapterElectric = require("./adapterElectric");

// Led.js
class Led {
  static main() {
    let led = new AdapterElectric(new VietNamPower());

    switch (led.connect()) {
      // Nếu hiệu điện thế lớn 3v kết quả trả về -1
      case -1:
        console.log("Crash");
        break;
      // Nếu hiệu điện thế nhỏ hơn 3v kết quả trả về 0
      case 0:
        console.log("Not Thing");
        break;
      // Nếu hiệu điện thế bằng 3v kết quả trả về 1
      case 1:
        console.log("Light");
        break;
    }
  }
}

Led.main();
