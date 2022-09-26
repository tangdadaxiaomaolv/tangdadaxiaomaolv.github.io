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
    "revision": "40b557cb1753a9ec3c00d15ccc46a659"
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
    "url": "assets/js/12.e15104ef.js",
    "revision": "975fb7d05964bb074f6c4f8eaa6d4d9a"
  },
  {
    "url": "assets/js/13.e21f5614.js",
    "revision": "6d01bb857e9f6f76f8ce877dcba60b5f"
  },
  {
    "url": "assets/js/14.2a14c172.js",
    "revision": "84c18ada04d7f96157697988af640b74"
  },
  {
    "url": "assets/js/15.77c1dcfc.js",
    "revision": "07cfd5445103ae2beed8109a01be1915"
  },
  {
    "url": "assets/js/16.ea5a63c1.js",
    "revision": "77980ee985e85bc7ef25e57e082625c7"
  },
  {
    "url": "assets/js/17.cf8d5fc5.js",
    "revision": "072b64ec8e2ec3611e91b2ad003707a3"
  },
  {
    "url": "assets/js/18.558301ea.js",
    "revision": "d694268519b57a4802a37a1900aa9515"
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
    "url": "assets/js/app.b6a47d12.js",
    "revision": "fd842bf5f08bed9a7912700ad4ce14eb"
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
    "revision": "1a6ba8dd482aa2bb0fd7d1b409d5a82f"
  },
  {
    "url": "categories/java/index.html",
    "revision": "d11cf369923563e3ab0392ae92e4da9a"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "aa7ee7b98377c51fc1e23cb7157cd000"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "e72a394f4b965ea2e85796f1455ac7a7"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "ff3f05506a76c6ae6c6ee8293352aa05"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "d451ab9b979070b45d62f1ccca8a751f"
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
    "revision": "0b432bf3954a191468c2ee2df65ff6ab"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "d4a58bd2fa4c617a3268a46f23c7ab94"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "59c1f7398bb1503bf82e1ac93366f0f4"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "e21f66efb18fdfbd98119e9f79294698"
  },
  {
    "url": "tags/js/index.html",
    "revision": "2bfc2cc4e8aeb3d6a3182f3ef2fdd9e7"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "46293ab6527750a2ed4a7dd5afee9182"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "561c022cab9fa6600984aa6451427f3f"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "d8075a59c98e1d94a7aa3a368482dedf"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "93370bc0d8f0a1383c593e5eb5e11dcb"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "f4f49ccf3baf6d66aea5339f8bfeac4f"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "811aee3e3ba7f400557e944fa85cf87e"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "53cb4673f20f256673e22cf3999354dd"
  },
  {
    "url": "timeline/index.html",
    "revision": "92cfde0f741ea30da85fc25fe38ebbdf"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "ec4cfd27c1d498c1a8e194786a8f26b6"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "59179db0716889df7ab27d7a9540b38a"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "9281d8cd4487af5122cb63d629748ec7"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "afda3a1605c0686060fbb68e92ba591e"
  },
  {
    "url": "生活分享/life.html",
    "revision": "5d323ee06b6fbc2397ce2c7b82ffea50"
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
