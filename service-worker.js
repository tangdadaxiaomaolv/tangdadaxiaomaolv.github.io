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
    "revision": "7118e8968bf16da30bf493adb2f88b20"
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
    "url": "assets/js/12.bdfba657.js",
    "revision": "03ecf82cefce3ebbbb2644c493aaa943"
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
    "url": "assets/js/16.1d205796.js",
    "revision": "befece637990c090cf157dbdbf7d2f81"
  },
  {
    "url": "assets/js/17.22ecac8d.js",
    "revision": "9e03087b3f532f65b42b9202be0e7af8"
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
    "url": "assets/js/app.15e9db8b.js",
    "revision": "efe3da7ba5075c15e5e6624bb6a4ff69"
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
    "revision": "43424d55a2ecc7fa791a02a28195e0e9"
  },
  {
    "url": "categories/java/index.html",
    "revision": "5307c9fe66eb19defbef094098138755"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "57566ff455fb01cec9c2b5d78234b4b2"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "ab1be3337a09602c581c29b828c0e3e4"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "063241bcc9b293972d16a95722db8949"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "07f4534eee48bd52de1c7ed10dcbb4ee"
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
    "revision": "f5de74939823a84ac37d152b9600d31f"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "2ee09b9baca3111daf31c97105602937"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "2acb6523c079bb23d45d83e94d357d2a"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "04a74fa740b9453120d9540c5db00b2a"
  },
  {
    "url": "tags/js/index.html",
    "revision": "3f97e7849a739ac7451c945a3db00d66"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "cba6fe4695ace18e594ea99b75062b9f"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "5797c070d764900a3636d1f6171278d8"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "1865d424b296a94e1f63e1c3b72b6f97"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "36a4fc0470f9554f69869b6242227dd0"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "5ee03cc430c1ab3d303c572524e68dbb"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "fc46c16d8dc3fb4660b097beedc519c3"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "45a3ba052fd136d273f768f4e084c8a4"
  },
  {
    "url": "timeline/index.html",
    "revision": "eecf19569e2b2d9c02fe17abab017bf7"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "537fbcdb696826ffa53c1f083c45145f"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "4e81232e9548536d6bc45ac8eff6de80"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "cb176a727364c80c45f06b69899ebbe8"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "d5f21995dd811c8dd41abeb8c5eb9c00"
  },
  {
    "url": "生活分享/life.html",
    "revision": "a778b9c1a7407d2a98f6e1258e1a48f5"
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
