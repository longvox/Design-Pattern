/**
                   ,------------.
                   |Video       |
                   |------------|
                ___|+showVideo()|____
                |  `------------'    |
                |                    |
                |                    |
          ,------------.  ,---------------------.
          |RealVideo   |  |ProxyVideo           |
          |------------|  |---------------------|
          |+url: String|  |-realVideo: RealVideo|
          |+showVideo()|  |+url: String         |
          `------------'  |+showVideo()         |
                          `---------------------'
**/

const ProxyVideo = require("./ProxyVideo");

(function main() {
  let proxyVideo = new ProxyVideo("codetreknomad.mp4");
  proxyVideo.showVideo();
  console.log();
  proxyVideo.showVideo();
  console.log();
  proxyVideo.showVideo();
})();
