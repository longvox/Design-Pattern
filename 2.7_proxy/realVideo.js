const Video = require("./video.interface");

class RealVideo extends Video {
  constructor(url) {
    super();
    this.url = url;
    console.log(`Video loaded: ${this.url}`);
  }

  showVideo() {
    console.log(`Video Showed: ${this.url}`);
  }
}

module.exports = RealVideo;
