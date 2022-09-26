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
    "revision": "dfde0f36e86151f8ddae54a4e8bd5c21"
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
    "url": "assets/js/12.2124be2d.js",
    "revision": "04988a0c32d9a4cccd98c982408591dd"
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
    "url": "assets/js/15.2b9c0695.js",
    "revision": "7b8054856375ad20b24dac641d4f4749"
  },
  {
    "url": "assets/js/16.4db6d0cc.js",
    "revision": "22924c3aa81d9c82f861200aec5d4679"
  },
  {
    "url": "assets/js/17.cf8d5fc5.js",
    "revision": "072b64ec8e2ec3611e91b2ad003707a3"
  },
  {
    "url": "assets/js/18.9152c63f.js",
    "revision": "32a5f8ea1bf0cef421b33b6bffbb0016"
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
    "url": "assets/js/app.209e8a08.js",
    "revision": "0ce3fd715bd572a680c2576fe41b308a"
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
    "revision": "7c92c0f0e86d8649f48caf8fbe241fa5"
  },
  {
    "url": "categories/java/index.html",
    "revision": "51bd813868cef08f8e92acf373a4df0b"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "7ec8cd128a15cc701a1d698053600131"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "eccba88994ad6749e3c6c50dd95d90c4"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "b7fe724b73d4de7537040b3e9614951e"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "888b930ba51474e04924a940c6e7de66"
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
    "revision": "2362ce88c3b85555461298c7d1fde1bb"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "38b8ec3c6544a7a26ce318301ce72f58"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "5c2f66403ffb4aaf44635ad2535b62b0"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "0ea9048342ce2ebe2c16fed5c2abd3e1"
  },
  {
    "url": "tags/js/index.html",
    "revision": "52b0622e54344463b61050c1eeba201e"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "58f4ea947b7e27da205cd8f8ba78b379"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "78c137d16d99fc846e83551a798d351a"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "548c8b2e17c1af25d59e8d5a4718392b"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "3c3809c2973c6574136c61a476619fbe"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "315fc4440982f534c8a887c0b81eedad"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "ed4a029ab25a1d054e5aef950f86700b"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "f9527bdc9c59ec3832ae7858e3b31b53"
  },
  {
    "url": "timeline/index.html",
    "revision": "bd5457237b81aa9f08dacd5e92ffd44d"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "d579a551326f7736fbee32bc62c2d37c"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "f740fc7469bdd363e5efc2da76cb23b5"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "d17124b44a6df389db3c795514d67f9a"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "ccf13c9ffdf6918bad2ec577b8d26286"
  },
  {
    "url": "生活分享/life.html",
    "revision": "f04e0465f9733adfa123f5d86a3028cc"
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
