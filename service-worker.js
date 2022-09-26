/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "ef61bc2ed9adf83dbe14300f736555ce"
  },
  {
    "url": "assets/css/0.styles.57064493.css",
    "revision": "bdfc107ffa09860922a6644b10cc5fcd"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.267254bb.js",
    "revision": "e1122f8868c4e6315e8a7bf11d315b22"
  },
  {
    "url": "assets/js/10.3e94535d.js",
    "revision": "8f92585f2c257ab4fdc9c04b9a4e6b04"
  },
  {
    "url": "assets/js/11.cf8bfb2f.js",
    "revision": "06ffa0bb3165b1d8ec2e19e1297c6565"
  },
  {
    "url": "assets/js/12.45fd41dd.js",
    "revision": "54fb6d95764e1a0121a73196f188bbbd"
  },
  {
    "url": "assets/js/13.cd66c14e.js",
    "revision": "88907df55ddf0e92e7d824fee3f0a94f"
  },
  {
    "url": "assets/js/14.1a94d600.js",
    "revision": "960ab8745b60c9eee2f3b9b4b7271e83"
  },
  {
    "url": "assets/js/15.45732e83.js",
    "revision": "aae355859d275f3722425a4a3d971b3a"
  },
  {
    "url": "assets/js/16.ad3b47d3.js",
    "revision": "77d86646973db802dec199f749183516"
  },
  {
    "url": "assets/js/17.b0b32db7.js",
    "revision": "f8bf5c88f9cd04152dd34f36961f89d7"
  },
  {
    "url": "assets/js/18.7f0be485.js",
    "revision": "37096429146de7a0aad6505c7fb80f0b"
  },
  {
    "url": "assets/js/4.7ba65a8e.js",
    "revision": "2971ff8699ce6f0f8b7e5017c3ef1a5e"
  },
  {
    "url": "assets/js/5.38ad200e.js",
    "revision": "7cca75e8e4ba93d3c9450f7abb9a64a5"
  },
  {
    "url": "assets/js/6.e9124f59.js",
    "revision": "1ec20a6e7e67382f2246b0f1365beaf5"
  },
  {
    "url": "assets/js/7.f99d6d8e.js",
    "revision": "7d30b98bfd57db7181109a2a075025be"
  },
  {
    "url": "assets/js/8.b9207daf.js",
    "revision": "cbe2e70db850a968b3fe5ccba1bccd99"
  },
  {
    "url": "assets/js/9.c432a680.js",
    "revision": "bca34c4ae9ae3c148ea244fbbf490c70"
  },
  {
    "url": "assets/js/app.089c4199.js",
    "revision": "7497bad036949a2c5cb82e11f1294e17"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.8e492b97.js",
    "revision": "5f74bb947a906e821af871857bb92c32"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "f672f9adff775043bd607ac35fd39ec6"
  },
  {
    "url": "categories/java/index.html",
    "revision": "b6325c4661453f116609eb3b0f1a9d0e"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "79cfdc4523351a834789ba037146b08e"
  },
  {
    "url": "categories/jquery/index.html",
    "revision": "40141e384648dbafd848de0efd2cd781"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "e5bf3c3deebc88564305fffa10eadfb1"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "c8263983aa6090a94c913df6aa5715a1"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "28c498e8a3c404ef9db2d73ce39b1cf4"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "f3befb1deda6e1b92a3109809c1fd820"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "1cf194eed85595dd04c164c2418cacd4"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "f17af49b704ca44b4646704894c5dbf5"
  },
  {
    "url": "tags/jquery/index.html",
    "revision": "8d6cb4a306a467ca4c2eb198be8e9624"
  },
  {
    "url": "tags/jquery分享/index.html",
    "revision": "65baf2e58d0971355dc4a6b09ec71497"
  },
  {
    "url": "tags/js/index.html",
    "revision": "dfb5c1198025c4fc5139055c8658e6c1"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "5eacc5dd80719df6c91f0a50258708dc"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "6eeca28a8cbf72745a53507931846ca6"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "0fb7e8dbd159172d8c7dcd71951538f8"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "e673552cce645117b973839ca700dccb"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "b3aee946b626f383fe84dcee63f08135"
  },
  {
    "url": "timeline/index.html",
    "revision": "23e15e898a9c07267b199fddbf8c8f1f"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "9de2b6f34d074468325c38c60d60e9ec"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "b9dd72a4c3f8babfa8fa2d80ef3cbe3b"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "27fceb2f035eb900a6c388cfa326a763"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "cbe40fff94f5feebfe1676b1ea438800"
  },
  {
    "url": "生活分享/life.html",
    "revision": "870891ed7b95f9d80279dcc89ffdd06c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
