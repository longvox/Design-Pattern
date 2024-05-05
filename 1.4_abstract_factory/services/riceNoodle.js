const ICarbohydrate = require('./interface/iCarbohydrate');

class RiceNoodle extends ICarbohydrate {
  prepare() {
    console.log("Preparing rice noodle");
  }
}

module.exports = RiceNoodle;
