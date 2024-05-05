const Profile = require("./profile.interface");

class VietnameseProfile extends Profile {
  constructor(name, dateOfBirth, address) {
    super();
    this.name = name;
    this.dateOfBirth = dateOfBirth;
    this.address = address;
  }

  cloneProfile() {
    return new VietnameseProfile(this.name, this.dateOfBirth, this.address);
  }

  printProfile() {
    console.log("Họ tên: " + this.name);
    console.log("Ngày sinh: " + this.dateOfBirth);
    console.log("Địa chỉ: " + this.address);
  }
}

module.exports = VietnameseProfile;
