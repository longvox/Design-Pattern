const Video = require("./video.interface");
const RealVideo = require("./realVideo");

class ProxyVideo extends Video {
  constructor(url) {
    super();
    this.realVideo = null;
    this.url = url;
  }

  showVideo() {
    if (!this.realVideo) {
      this.realVideo = new RealVideo(this.url);
    } else {
      console.log(`Video already exists: ${this.url}`);
    }
    this.realVideo.showVideo();
  }
}

module.exports = ProxyVideo;
