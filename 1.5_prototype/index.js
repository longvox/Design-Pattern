const VietnameseProfile = require("./vietnameseProfile");

(function main() {
  // Create an original profile
  let originalProfile = new VietnameseProfile(
    "Nguyễn Văn A",
    "01/01/1990",
    "Hà Nội",
  );

  // Clone the profile
  let clonedProfile = originalProfile.cloneProfile();

  // Print information of original and cloned profiles
  console.log("Thông tin hồ sơ cá nhân gốc:");
  originalProfile.printProfile();

  console.log("\nThông tin hồ sơ cá nhân sao chép:");
  clonedProfile.printProfile();
})();
