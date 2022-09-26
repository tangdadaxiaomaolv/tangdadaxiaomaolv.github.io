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
    "revision": "5123ace5e6490d1c40e3246f2ee0bd9f"
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
    "url": "assets/js/12.4881051f.js",
    "revision": "34daa3004d2519dbf33b84631dcb4446"
  },
  {
    "url": "assets/js/13.cd66c14e.js",
    "revision": "88907df55ddf0e92e7d824fee3f0a94f"
  },
  {
    "url": "assets/js/14.93df3760.js",
    "revision": "cc6353588aaf3730546012d0bec820b8"
  },
  {
    "url": "assets/js/15.e8d3ea25.js",
    "revision": "4af495968cb4e72dfefdb55963743c7f"
  },
  {
    "url": "assets/js/16.a65a16f6.js",
    "revision": "f1a5ceffe3cb9147f59f01c5658b2d5e"
  },
  {
    "url": "assets/js/17.22ecac8d.js",
    "revision": "9e03087b3f532f65b42b9202be0e7af8"
  },
  {
    "url": "assets/js/18.ebf34d88.js",
    "revision": "bc08193e1c527c660acf1adee6587962"
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
    "url": "assets/js/app.bc04e494.js",
    "revision": "d9687d5b2eeef84d9ac978c441f55838"
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
    "revision": "b712b4c5585b5d9e207d80d07f925b63"
  },
  {
    "url": "categories/java/index.html",
    "revision": "48faf6ba94d0439c9f5a13fa633622b0"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "506c0725c35cc919bd38d4f27079df00"
  },
  {
    "url": "categories/jquery/index.html",
    "revision": "15b483ac92a9e451e1fcd76aed12b744"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "0372f1a0cdf5c03ece3ee0cbc98144cb"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "98ed9e562e1da00f6ac2ae6a386b9372"
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
    "revision": "912ca58b10ab722f4adc1a1c8d9fcfc3"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "0183583314ba7c24bd6b02ebc20c1804"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "08f8eca1bb666621132af8a2b24a6c81"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "3f888e7b802a32518dfd8bc1a3719e7c"
  },
  {
    "url": "tags/jquery/index.html",
    "revision": "ed8d27cd86150f53bf3d319807b75b4c"
  },
  {
    "url": "tags/jquery分享/index.html",
    "revision": "a595f63284d2710f60d1d3ec43c42a52"
  },
  {
    "url": "tags/js/index.html",
    "revision": "c475de9acf14c6bfc8893b0f82bd8e21"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "71e0b27eda2558a5ba88c0145c8cbbe0"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "ae5019378a061f16d64bc455da5e79ba"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "5de97cd2ae2e2bf6d069144da96262a5"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "00babf318ea5f4d8fce463f35fbc6bdc"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "c9905f3acabde89bb60683846ba3b5b7"
  },
  {
    "url": "timeline/index.html",
    "revision": "5b9f8328f61a80fe05fd18386fdca25a"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "af71c457854fe7008090daa6c503daa8"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "a7eae79f23ec1d5756fba9aa2ea22551"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "98740d3c196636d9e3945ba5ed230258"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "360a3a4f24f347cc1f4d0d7b72f19b42"
  },
  {
    "url": "生活分享/life.html",
    "revision": "3c53efe7d7dd663fdf3128c454989954"
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
