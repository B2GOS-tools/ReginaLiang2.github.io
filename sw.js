/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./node_modules/@docusaurus/plugin-pwa/src/sw.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@docusaurus/plugin-pwa/src lazy recursive":
/*!***********************************************************************!*\
  !*** ./node_modules/@docusaurus/plugin-pwa/src lazy namespace object ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./node_modules/@docusaurus/plugin-pwa/src lazy recursive";

/***/ }),

/***/ "./node_modules/@docusaurus/plugin-pwa/src/sw.js":
/*!*******************************************************!*\
  !*** ./node_modules/@docusaurus/plugin-pwa/src/sw.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var workbox_precaching__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-precaching */ "./node_modules/workbox-precaching/index.mjs");
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/* eslint-disable no-restricted-globals */



function parseSwParams() {
  const params = JSON.parse(
    new URLSearchParams(self.location.search).get('params'),
  );
  if (params.debug) {
    console.log('[Docusaurus-PWA][SW]: Service Worker params:', params);
  }
  return params;
}

// doc advise against dynamic imports in SW
// https://developers.google.com/web/tools/workbox/guides/using-bundlers#code_splitting_and_dynamic_imports
// https://twitter.com/sebastienlorber/status/1280155204575518720
// but I think it's working fine as it's inlined by webpack, need to double check?
async function runSWCustomCode(params) {
  if (undefined) {
    const customSW = await __webpack_require__("./node_modules/@docusaurus/plugin-pwa/src lazy recursive")(undefined);
    if (typeof customSW.default === 'function') {
      customSW.default(params);
    } else if (params.debug) {
      console.warn(
        '[Docusaurus-PWA][SW]: swCustom should have a default export function',
      );
    }
  }
}

/**
 * Gets different possible variations for a request URL. Similar to
 * https://git.io/JvixK
 *
 * @param {String} url
 */
function getPossibleURLs(url) {
  const possibleURLs = [];
  const urlObject = new URL(url, self.location.href);

  if (urlObject.origin !== self.location.origin) {
    return possibleURLs;
  }

  // Ignore search params and hash
  urlObject.search = '';
  urlObject.hash = '';

  // /blog.html
  possibleURLs.push(urlObject.href);

  // /blog/ => /blog/index.html
  if (urlObject.pathname.endsWith('/')) {
    possibleURLs.push(`${urlObject.href}index.html`);
  } else {
    // /blog => /blog/index.html
    possibleURLs.push(`${urlObject.href}/index.html`);
  }

  return possibleURLs;
}

(async () => {
  const params = parseSwParams();

  const precacheManifest = [{"revision":"e01c39dc2325fd46677d53d7dad98eaf","url":"006938fa.e42875f4.js"},{"revision":"22226ad60603a93be434a9c56e77f3c7","url":"006cb2a8.0a9696c5.js"},{"revision":"ea960d0e9f226462722665094941d0eb","url":"01f540dc.1900b857.js"},{"revision":"6e6d21530f3bc5e639f60388f6eb2392","url":"024f96b7.52059c03.js"},{"revision":"a9d4317806ceac650996d26f1a3c1504","url":"032f740a.78f911d6.js"},{"revision":"17b1d736a05c55e83942cc71b057d779","url":"038ecd74.9ce9a251.js"},{"revision":"8a976d3f910c1c6db440e39103dd4683","url":"05e7d4cd.21870d35.js"},{"revision":"a78f6179349651c8807cfd892fbbc071","url":"06171450.3dd1ee2a.js"},{"revision":"9620b1695696c615e6799d250968511f","url":"08328c53.359eb27c.js"},{"revision":"975eeb37ab011472c133f8670de08dbb","url":"0b1fef00.bdf3add7.js"},{"revision":"f658a9ba896b65dbff0eca14a83d298f","url":"0c49fe93.22a732a7.js"},{"revision":"e7c5adfd8ff6fd0c75d552cf4feed015","url":"0cececf4.1c8418d2.js"},{"revision":"9f09ce4cd08527e86c0d29a0a2d1399b","url":"0df5f748.d6cde503.js"},{"revision":"6fec16e2a2a66fc89926f28464451fc3","url":"0ed8e504.a38185da.js"},{"revision":"64c56659e3687d7c461d891a56087dd5","url":"0f02e8c0.4da3701d.js"},{"revision":"92c5f09a8b550cc89306784d4bf8f358","url":"0f1c7f51.6bb31a76.js"},{"revision":"3dd938ac82bd96ef411b2a6b95437880","url":"1.cdb57f52.js"},{"revision":"806986e6250583e4fcf2885fbe10b6f7","url":"10b3a75b.204893f6.js"},{"revision":"962efb76f87a5549be1820e63a4e9f3a","url":"11ca7273.995a205a.js"},{"revision":"747727d206f660be2fadd9f43ab5c4a2","url":"1269a946.a61fefa5.js"},{"revision":"0b79315d32573b4c6e951543d9c81f21","url":"132cca51.7654abff.js"},{"revision":"afd540b097584d9d0b041582b183afe5","url":"136a7a5d.cb71e630.js"},{"revision":"924b670eaa287e0aa8de1a9bc7c8e4da","url":"15b4f9dc.8f4e828d.js"},{"revision":"968a134777980ff26a6fb76d02604f99","url":"166b1c46.25275f68.js"},{"revision":"bca960e717b58583c9e0e5d7925463cb","url":"166f7129.f82a30e1.js"},{"revision":"e31f25e0e71193d244ace38e1fd623ee","url":"1682066b.a14b51fb.js"},{"revision":"61d9973f480281b592c9740d19bb636d","url":"16a57243.292f954a.js"},{"revision":"70c38cef9c313f5e1b211b68f22988f3","url":"16e74e9f.578ae111.js"},{"revision":"ff0b41282eeff3abca166782764b9381","url":"178dc82f.18716d9c.js"},{"revision":"dc732d21f5d9230679c29512070d61e4","url":"17998b9e.d2cb7b08.js"},{"revision":"877c06de86c55b5c143b3f5bc98e62c9","url":"17b5c2ab.a4eea369.js"},{"revision":"9c90c3a5576a1b2331ca57478758c0b6","url":"18417816.bbfbe759.js"},{"revision":"7556fb4aebe71cc74f4977e74485fbf3","url":"1865c518.088127bd.js"},{"revision":"38441b34fc953ddb50a48deb905ab231","url":"18b93cb3.51afbeab.js"},{"revision":"b6d47549bb1651419b9a04feed7ef421","url":"19555ca7.eddef9bf.js"},{"revision":"500210247b3b007b6de32a20354325c5","url":"19c27bae.b528a69c.js"},{"revision":"875f6793d4f3b67a51652bfed9c5a20c","url":"1a24dc05.688e2f03.js"},{"revision":"8d4b13bf86f84e97031340966e7e0dde","url":"1a467cdf.ef2969aa.js"},{"revision":"e4bcd707dc3c1d91e494598e85d8a83a","url":"1b0cd48c.674936a6.js"},{"revision":"3d149bf84ca049c741d40a693e961218","url":"1be78505.0d028f67.js"},{"revision":"785660b023d9e89c5e7e3fce3f041a1c","url":"1c203882.85341890.js"},{"revision":"a7800a75998a166be0b6446c82555c95","url":"1c9783fa.3a214749.js"},{"revision":"f9d97b2a267c27920eae8167105d8ba3","url":"1de7428a.0adb7d75.js"},{"revision":"658088699dd81f4a6a3c69318afb0284","url":"1fa608a3.1340a3ef.js"},{"revision":"ad62138927f37d6eb2aaac4bd7be97de","url":"1fd073e6.9a4f7b4b.js"},{"revision":"91c67781ab84be3849fa9a7770ef2f9d","url":"222a2418.d1871069.js"},{"revision":"d964831769459c87bbe2c2a94f8c6f0e","url":"24d4b0dc.7db98607.js"},{"revision":"150dc9c2d501334cc01a6f4c78ba9bb0","url":"24f8b738.e87c46d7.js"},{"revision":"8217c7eaf63bc857da2b5a47f88ecb67","url":"2520b6ad.35989519.js"},{"revision":"75b7c16c67b523443024e4937ea54634","url":"25fe8ad9.0f27f8e2.js"},{"revision":"bc5c0a08bff00e84411e1d0bfee72a8d","url":"260092ab.361072d4.js"},{"revision":"15012600b80b082ccc6227fbb762eda3","url":"275b5fbb.55caa009.js"},{"revision":"21733965c752b95a16b03cef58887fd2","url":"28694c8d.40287478.js"},{"revision":"6e8fd64de642ccb6e38bcd7afc379ea0","url":"2877424d.c84cd0ab.js"},{"revision":"22e89a1cb1df2b4e73f64bca4a5093d5","url":"28bde5f6.4079fee9.js"},{"revision":"72e5e50dbb4d3da3ce02c2835edb0a17","url":"28e90a7c.0447c0ff.js"},{"revision":"69752198e5f8c14b75940f2a5d993bf0","url":"294f9121.45452302.js"},{"revision":"0c7290b170db572e0a492c38ae480485","url":"2c361ab1.030fc486.js"},{"revision":"4b2962032d6960dd55cc455e390de40e","url":"2d1c4cdb.7ee9a7d8.js"},{"revision":"b3416c66919a9c50d9594eae8f9df500","url":"2e09ce54.ae6904b0.js"},{"revision":"78681acfe99c96a7231a0245d799aab3","url":"2f205efa.b09fe259.js"},{"revision":"87bf0798fe9387f43c6bfd7cd07b9e50","url":"302e2efe.ec51e599.js"},{"revision":"b7b6d0843ed00594002848b819ac6761","url":"3032986c.6ccae86c.js"},{"revision":"b729b226a8d3f740ec1151cae4c63d26","url":"317.bde06806.js"},{"revision":"4c9a36553754a427ac12ef71ed69a83a","url":"318.5faf80a1.js"},{"revision":"880a12b56a88d930321d6eeec478f576","url":"319.53011765.js"},{"revision":"7a4394c10b3414a01108311f4cee87c7","url":"320.4c4a6ee1.js"},{"revision":"02988dddfcb2d74257dc7fa099b6c051","url":"321.170dc8ab.js"},{"revision":"fba7e83ca69f3d95b84232631cef7fc3","url":"322.e444369e.js"},{"revision":"9f1f777b43966e8e9ff5a456587ba138","url":"3221a44f.7c132678.js"},{"revision":"8838eff65aab3e6a2c67f023a8a7c206","url":"323.2c5e8f99.js"},{"revision":"2c480afbb0acf04760e98778fb0ae14b","url":"323fdaff.2b5b3295.js"},{"revision":"efc30bc34a4c0f3c4e3c654622fc3bca","url":"324.12c7f533.js"},{"revision":"b71bb3244a09499d242acfb338b374d6","url":"325.de68c33e.js"},{"revision":"9bbe932023ddfe3703ef6647d8798ce8","url":"32a821b3.1123d9df.js"},{"revision":"fbca2d394d403becdb5fe3e39007ae41","url":"334b1a27.33be714a.js"},{"revision":"86f8a72ce1e321b2136d2ffc2bab8588","url":"339b49aa.2371fc41.js"},{"revision":"770bee70b846bd338800bf814bdc63b3","url":"33acb1b6.93e9baa8.js"},{"revision":"3583a76a93c4f4e6ff09ff1a84a26de9","url":"3573e4be.c24b6628.js"},{"revision":"6e2b84b080fd13ad5fa25adeb2041683","url":"36485d10.b094edc5.js"},{"revision":"a3f6d2aaa97df531f36c068ff95d7a1c","url":"36581281.48187d6b.js"},{"revision":"2b025487f156661dc2c5d1b7e3d99a11","url":"37d4253f.a8d0afb2.js"},{"revision":"62eaa7d70045494fb06edcae6b73dc86","url":"393e417f.cdaef3f4.js"},{"revision":"53378ebe385fc9fd5cf1e4ddf7932058","url":"3a209a0e.bd59a289.js"},{"revision":"6890a964301db7c35aaf8edb09bb71f2","url":"3b980387.a2d203e6.js"},{"revision":"33ffdd2b79be8fdee17b1248b8f9542c","url":"3be5dd2d.7e37dcc7.js"},{"revision":"ad19455678989b5688ac584539f18aae","url":"3c66f024.aa18290f.js"},{"revision":"bbc75e24401433ed54ef08363e1a0550","url":"3cc07bc0.44c1c7bb.js"},{"revision":"fd38faa56869aa3038e3bb7afba24a47","url":"3e9acd80.ab172ea5.js"},{"revision":"f499fec4fbcaa29c490eeb4c93beca2b","url":"3f7b49ea.4da4c2f9.js"},{"revision":"88a3b145f660abfafeda39143073ab9b","url":"404.html"},{"revision":"2a94922bfd359ddb45b20e4be1d05c4c","url":"4060e46a.7e57c5bb.js"},{"revision":"8035f28743bd4deb1a30f6e574b0297b","url":"42bfc762.08f23e55.js"},{"revision":"450385af2c22768d520214aeacadd859","url":"42f4a713.769753b2.js"},{"revision":"bfea167e16b83b8be5593b83fec74267","url":"433b2dd2.27537528.js"},{"revision":"d60fa6f9cf3943a41736804598e715d3","url":"435b4761.b4a50827.js"},{"revision":"7779adfdb4293489331b81a58d7af161","url":"444a4b6d.041ce799.js"},{"revision":"aa465df37768c378435364d7ca841c3b","url":"451d40a5.51cd592d.js"},{"revision":"99d238eba1efb8afc1e0ec477abaf380","url":"455e9b06.6ea885e8.js"},{"revision":"7dad841ac0cb67152ea5663c6c8e0364","url":"45e5dbb5.545ca50b.js"},{"revision":"991ae6c45d2569025c30ec51351ed8cc","url":"462c9967.e0b47d86.js"},{"revision":"326f47bb3302ebecac8a4d58715c190a","url":"47ab3d60.758bc484.js"},{"revision":"517122d9e6ad0306c3d3ec8f29994fc2","url":"4be5a77a.5af277ba.js"},{"revision":"a1608d0e26a64ed16ccc0f4c2f6cd6bf","url":"4c97a590.73c4ad53.js"},{"revision":"630da62c8498cc0a91b8c1014a7497df","url":"4d86a565.f244ff9f.js"},{"revision":"d78ab9b191a4d1fa0d2036c923d80531","url":"4e84ad53.6d40db9d.js"},{"revision":"39583e852c332cf4b16f7baaa5b9e27a","url":"4e8bb889.9e89bf43.js"},{"revision":"9d961fc381e7992ae504901f7f61775b","url":"4e9dc0eb.299726e5.js"},{"revision":"d5eede343e61e6480be61ff38fb340ae","url":"4ecbed19.d8866a29.js"},{"revision":"7ec8f9ea6bf0e1d13ec071590f28b782","url":"4ecdb638.e806731e.js"},{"revision":"7662d929488ecd4a5381545026bb2cca","url":"4fb8e227.9e95f05b.js"},{"revision":"d862788b0298d9eca2d91fd6e7582272","url":"505e94d3.c1cad4f0.js"},{"revision":"b3a3709653b5d7485ff08a33b586ccd8","url":"509f25ab.97bc3296.js"},{"revision":"8ed43d61182282b74619d1b8c7b8db53","url":"51b1f1d6.dc89482b.js"},{"revision":"a02f7a5d5b92e08bd3d44c41309f514a","url":"51d48bbf.c45e8004.js"},{"revision":"492ba5cc7e92ce35da650adf7ce80def","url":"51e1f865.f0544cb7.js"},{"revision":"5567ce3b17654bebd061e88f010dce09","url":"5291ce87.9145fcb6.js"},{"revision":"3cb95ad4a2954570f1d780135e0861af","url":"53f52407.79922af2.js"},{"revision":"f208d08a9c8a24f30cb32ddba65bf97f","url":"54250d4d.471ac870.js"},{"revision":"96a881b0d1180da07de98d120656548f","url":"5484bcf5.6474708d.js"},{"revision":"8bd99419bddb0031e133064c2bee3312","url":"55e8683d.f66389bd.js"},{"revision":"67c3b4ac4c7bc19ce8e45627b80a1b09","url":"5712438b.946412be.js"},{"revision":"65bc056382b536f55b4a4fb8f0de5570","url":"5761b0a3.fd6343de.js"},{"revision":"a2f6dae18c0f08f59e35e798fc638878","url":"579fad5a.3768e7dc.js"},{"revision":"21f785f34e0170ab6736dcb842b95911","url":"5955e0b6.fece5d61.js"},{"revision":"f561c7a557f3d99c11032ead8ec1d8d0","url":"5aa87ad2.087fb3ac.js"},{"revision":"88ba05948b4fe9ff1986e3d204c5bf64","url":"5ca32b86.95e9ea4b.js"},{"revision":"679cc5c060d413d8de988b9c61615ad8","url":"5cfdd9a4.41f28191.js"},{"revision":"a62562c801806feb706674785a31ffa0","url":"5d051fb4.f03f8417.js"},{"revision":"937cf64bc3db4d6e775d69b181bf0362","url":"5d6ae8e6.b2a75160.js"},{"revision":"c432fdc8220a689a9d2232b4615409c2","url":"5e934855.e86d80c2.js"},{"revision":"6031ca49642ab02024a86b6c37bdf36e","url":"60628d4f.5619a961.js"},{"revision":"ad9df89576c1d75378b69e1cb98ba1a2","url":"607c901f.0aeba423.js"},{"revision":"964b193b570ac42ff1488860f3877d81","url":"6137f5fb.870ab142.js"},{"revision":"2d6d0c4655b39b60a352709fed51809d","url":"628947d4.15bf1ed2.js"},{"revision":"f7be605b76708c065988a080c16facb5","url":"62b4331c.42b6d9cc.js"},{"revision":"bc6cec166b16c35c3eedb91b34a99247","url":"6414d337.b912d463.js"},{"revision":"d66fd82b1efc06e70eb6d33ebaa6a22f","url":"654e214e.eb976bf2.js"},{"revision":"6b56d060d8007ec3488d5f5cd29c65b8","url":"659d8883.3c7b79df.js"},{"revision":"6515e5ed9b551b3d84115e7d34148ea1","url":"65cdc18d.23880f1d.js"},{"revision":"ada8f38633be7e36bbe56bc293078ff8","url":"669eb163.a7d18147.js"},{"revision":"d51175d7d08c253cbc539701fd1d1e07","url":"67b6d43f.ce4a5def.js"},{"revision":"665a1d7e05f7d69f7f0588c877adb124","url":"6ad20620.b20010f6.js"},{"revision":"be60717c9f31a877c6b8d1aa7afa31ee","url":"6ead7d9e.c8f96592.js"},{"revision":"10d94bea7a442ed3261d054d6db98297","url":"6fa2e0d3.a60111ad.js"},{"revision":"bf957239f623e3b40dc910f04e63cf73","url":"7041b36e.f5e3e8f0.js"},{"revision":"c9792074c9adf2b06da168641cd24ff7","url":"7134b72c.e35755bb.js"},{"revision":"1217319e5d17a3942009ea43d9c3cd21","url":"71b56dd2.1c6ac777.js"},{"revision":"bec95f9562a6fbf512aade2ec5e1246d","url":"71ea0185.422e8ac9.js"},{"revision":"52a3bb2210ee5d0a082b95961f61694c","url":"72a44d47.1874be38.js"},{"revision":"b254e23098896b1dfa62ec517d7fa991","url":"73a10da1.03d47f5c.js"},{"revision":"4d0bf2eaa74698c8f0c4abdd574c0987","url":"743d4cab.112a5d0c.js"},{"revision":"c49b8baf62992f24d4680aa80d1867fe","url":"74fa4497.3791a35c.js"},{"revision":"361929b51c7964f800af69b42fe4edae","url":"75260993.80046755.js"},{"revision":"a14aefcb64b7b58f8c7c309d7bad40d3","url":"759f9c8a.5eb19f2d.js"},{"revision":"e945b221d94037470317e7cfb2a3f7dd","url":"7620d40c.e93d807f.js"},{"revision":"e4407196288c11609b6a6736a3137e86","url":"768f72cc.c03632c6.js"},{"revision":"2cda80438b8ea89606bdc696983aac11","url":"76ac18e7.7dc63656.js"},{"revision":"f21acb1f36d5851f6e124d5e22bd415a","url":"78a2ab2b.e6a5b86e.js"},{"revision":"999d134bc3f99ccb020c18e6c82edf99","url":"792bcde8.3511ad6b.js"},{"revision":"70abb0a8338ffae95675c29fd2c06407","url":"7a6aa70e.b73f99b8.js"},{"revision":"5dd6ba33e21ad5b81606d0da5a6c260c","url":"7b80dbc9.e1754f7e.js"},{"revision":"dce34e6dec62e2f48534039cecdb4d4a","url":"7cbc181c.086a4fbd.js"},{"revision":"a412b54b331fdbb877fdfb0bf6c910df","url":"7d2e3e28.958de3a1.js"},{"revision":"8dc6ef02be1948a88ac37bf8841786ba","url":"7d517e30.f7651c4f.js"},{"revision":"1d9bac665659ae4d7302ee34a070e61d","url":"7d8a996a.c17d2061.js"},{"revision":"dafbbeb0e0bbe8e366e6241045980479","url":"7d977d41.36218227.js"},{"revision":"3d2f67ebf93e620925a3dd74ec3d1d0b","url":"7eb20fae.30c4f215.js"},{"revision":"ef42e6dd751d84b29a90ccb2a4667d6e","url":"7ee0f70c.1387674c.js"},{"revision":"42da6c64a4694b4d1c1c30a12665f8fc","url":"7f250459.f44ae484.js"},{"revision":"c2641cbf34b18a69ff6351d9fe1c35a5","url":"7f27be82.3d1cc1bd.js"},{"revision":"7af54517ba577fd2601767647770b8a5","url":"7fd3c70e.4358f467.js"},{"revision":"baaeb3e1d41bfcb641e7114815e47489","url":"8040ab6f.343c127e.js"},{"revision":"79071a86cf8975d78e9775875dff883c","url":"81849d11.3658337b.js"},{"revision":"4e7121501cc776a75a15c671925315a5","url":"825191db.0762e301.js"},{"revision":"675a81883edd3d8f6b17fc113b2beb1e","url":"83373783.30798411.js"},{"revision":"ae4864f5211b77f4d49a1ee4a1cf9d89","url":"834416f3.abda8e15.js"},{"revision":"617d23f26c564669074244c16b2ad359","url":"83e112b9.2e931c4d.js"},{"revision":"2a521c4db887eb4b7088ab24e46a1016","url":"83e91371.62e15e7b.js"},{"revision":"0aec4851b831b4da12f1eb14b7ce5a6a","url":"8430369a.08a2efb2.js"},{"revision":"a5932d901d460533a9b5d69941a0c3ea","url":"8595625c.41ee77cd.js"},{"revision":"ffec59f2cefabe97b4f2a9d89e2d6160","url":"861ababf.86210a7a.js"},{"revision":"815c89994838a1b1ce5c650f1f5cb3a3","url":"8725f69e.b8f66f95.js"},{"revision":"c678face725bf2a1a981f4731578a970","url":"879f2319.8c596c49.js"},{"revision":"af5e3a6e81c10670324d19c0601954ee","url":"87b27bf6.edfac49d.js"},{"revision":"66bd44c034562e98d6097de0ac8bdeb8","url":"87e29058.e357a188.js"},{"revision":"063bb7d54857872f4a319c43a6ea8b85","url":"87f4f442.de16c6b9.js"},{"revision":"2f349ed37c2cac369ecba67c8f19866c","url":"88b2b791.11b585fc.js"},{"revision":"c252fcd0f7a2a608daa8cdc32c87c229","url":"89584298.86632456.js"},{"revision":"054f811925e5d4dceefd162cbd0a88ac","url":"8a19da18.cf7dfba2.js"},{"revision":"c962344d3896caec13dc6a440dc409f0","url":"8cf7af7c.1372fe02.js"},{"revision":"9c330e04cc8d6eb7e719238cc0ca9737","url":"8d01b13b.d21596ca.js"},{"revision":"9e44b64824cf65eb0acc1b269f1f5b9b","url":"8d114fbb.11080d40.js"},{"revision":"7afa60e070de24a08eca171f98349ca5","url":"8df00363.a6a748cb.js"},{"revision":"ca05f5ffae17cb0678a379030e997cea","url":"8f27653e.3f83d336.js"},{"revision":"23d1e6386bd2480b8d62dbaecb61b18a","url":"8f43e3ea.3e07312d.js"},{"revision":"4726fdd4dfe2bdcfb200aacf4c55fec8","url":"8f480895.71011f1f.js"},{"revision":"776f16f782fb9105a814f6d81c156314","url":"92403fa2.09496759.js"},{"revision":"cfb9226d21b38eb8715ffd5124e765cd","url":"9261bb02.593237a8.js"},{"revision":"2b18b60fb15d410ca8be95d3ca7237ca","url":"935f2afb.5d098ef3.js"},{"revision":"becde76686b12f6c427c5dd945014467","url":"943f69c0.1d5f909a.js"},{"revision":"ccfb83f41d3ec5d5d858c5bf8fefa068","url":"951ed4a6.e3611ab8.js"},{"revision":"7aa0bd681e7c79b2b5babe17b64865a6","url":"958d803e.79112a11.js"},{"revision":"60249333f4e44856cbc16f5101140bc9","url":"965e3580.992e0361.js"},{"revision":"1a172bb5192ab59e05d4b6ea5996ad93","url":"9680d6f0.bee86697.js"},{"revision":"0de8eee57266439cc87ce5955e1cdecf","url":"9be183bd.1f65c2b2.js"},{"revision":"970f96ed7ff6b05eb7bc823be7bff0ee","url":"9c261e19.ec0d44d6.js"},{"revision":"7d1f1a4180835e87b7addaf238b2ab2d","url":"9cca358d.78008c66.js"},{"revision":"d5c8d016393ce6931f149aeda59bfa28","url":"9e3226a7.0ea0da65.js"},{"revision":"a4b084dc5a3eed34f752ca324a2bdc36","url":"9e5a5f0c.2d146bad.js"},{"revision":"4e44deaba251bcccf8e2668eb04d978f","url":"9e95c497.341ff2e0.js"},{"revision":"b09d2a4a57c3138801658ea38c90c5a9","url":"9ee95b98.81df7615.js"},{"revision":"3938cd34a6b4ea046e54cb06ed89970a","url":"9f968440.ecc667d9.js"},{"revision":"53046a4782c1fb4baf51f7ff5a21ee4d","url":"a01c19f0.82c3db0d.js"},{"revision":"0e13cec738b75124ee9a8e4a8fc0f0c5","url":"a072fbc1.cc11fb54.js"},{"revision":"d14acc39e362ef5fd1076f968ffe5cb5","url":"a1bf5f6b.f0f5113c.js"},{"revision":"3cf52a2e66de049519ebb036352302a5","url":"a1cd342c.d7951811.js"},{"revision":"740d567f1acf3e2aae7d8929cf098e9f","url":"a243809d.01964ac7.js"},{"revision":"e04208c5f602475882ca50ece7aff3b7","url":"a7143e1d.5873e7fb.js"},{"revision":"aed99c19e6101e00f421cfa7f7972b4d","url":"a7af4bb1.d569c3c5.js"},{"revision":"28ba8b2a877a2f1ade25558899d2ce4a","url":"a997e6c1.285380a4.js"},{"revision":"caa57b5e85af05542104baa4980f8c65","url":"aa5a8f7e.7784c2b4.js"},{"revision":"cb59419c30cd2c7a0c259531c1eeb8c4","url":"aad31e6c.383c89d2.js"},{"revision":"e08e125493eb66f8daa176e621f294fe","url":"abd20303.688d0c23.js"},{"revision":"4dd4c8975c74318d3b45b8c8e4d07459","url":"ac50af83.035a7d23.js"},{"revision":"f774b52903793516030bcf8a4e896c69","url":"acd581f1.edc171e6.js"},{"revision":"15c023dde9a472a36da514ccc8578ff7","url":"ae873307.ca553048.js"},{"revision":"b1a999f7a1268091ef2dfdfa3b9b4ede","url":"af0ba617.54bacfd0.js"},{"revision":"465fec7eb371a402497494a3245b08de","url":"af1dbbeb.556531f4.js"},{"revision":"6c35010f5c79f4206230e1ddb5a148aa","url":"algolia.6a89ed7d.js"},{"revision":"dab65d25dc18094e5a8bd076d2e264b5","url":"algolia.ac26a670.css"},{"revision":"50ee0300bba5be4ccb7ad68521a130b2","url":"algolia.f9f53405.js"},{"revision":"0f451ca7e463cb469ed851a02cb05482","url":"apis/index.html"},{"revision":"731e4ffa3914a4f1562893433e0ee4ab","url":"b34af260.9acf9180.js"},{"revision":"f4752de5afd076bbac5baaee8b140426","url":"b45c2ba5.32601b54.js"},{"revision":"6c2238c0c8711206a0e3707ae6194b3a","url":"b4f36c32.923188d6.js"},{"revision":"fc9894dffaf5ffe711b2990f3c8dcefd","url":"b59dc080.c1f1d75b.js"},{"revision":"2df132e54216ad38389b997aad44b80b","url":"b755a579.dc8c8687.js"},{"revision":"6316d08468e59eab5f2b7bc1004df94d","url":"b7c8240d.5602dfc2.js"},{"revision":"db4a99999dadeeeb0785c090005c0265","url":"b7da9610.27c11ceb.js"},{"revision":"182148a496fe01afef413757a6ab9515","url":"bb0f61f8.e908baa3.js"},{"revision":"098dcdf88c16f710d3cfb784da891498","url":"bd0f4eea.0c5348e0.js"},{"revision":"919b2f58c4aba0e87e6a73093c9b8d7d","url":"bd362a96.d0559436.js"},{"revision":"c1ae676d90dc41433b23b5ea7052ffa5","url":"bdb4e8d0.a37d46c0.js"},{"revision":"70df7313e12668bf1916eaba887dba19","url":"bdb5c4d6.b9f31502.js"},{"revision":"84df96366e438465ea14835b6b2aa5a5","url":"be6d2e70.22afb732.js"},{"revision":"f1b8b1a736ae1d712147724b905f7d95","url":"bf873832.d0e57f37.js"},{"revision":"3837fe0b4173caf94a0a3a2bf619bfaa","url":"c3d2d74e.44cb3ebf.js"},{"revision":"6cbfdb65ba137b1a2889b5bdbedc8202","url":"c3e25d8b.61cba8fd.js"},{"revision":"b356571c6ea34824a632edd6b142fb42","url":"c4f5d8e4.092931da.js"},{"revision":"3882095d8f05d2a4b241be2437c32399","url":"c61f8ce1.146fc4e9.js"},{"revision":"e806ce7bc37bf5633fcda5530f7cf096","url":"c6c8a2d5.021c6c91.js"},{"revision":"71cd5c7fa1b263e6920af19cb23fc7fc","url":"c6e39e53.8627c1de.js"},{"revision":"ab74f5d711c08e8b7b43df303321535c","url":"c7cac574.d652b83a.js"},{"revision":"e283215d70b680386f4c8411c70ed53d","url":"c7cb9327.e02deb49.js"},{"revision":"fc44eab3e03f90cc10d1634dfa9ace0b","url":"c7e01f08.6043a625.js"},{"revision":"b3b2433ca82903abc924d05da5612fe8","url":"c805690c.a691468a.js"},{"revision":"21ef839a6a2c532c616d316371fc41af","url":"c89572b6.230bc7a8.js"},{"revision":"74da14222f77291bcc9ad5d909a068bf","url":"c8a4923a.2d7ba2b3.js"},{"revision":"293804d75d881d5ddf9c6add61ec2e9e","url":"ca089b43.f734cfb4.js"},{"revision":"a7a14472dca27c8649f028604d7a688e","url":"ca3d8cc2.fcf5a9a4.js"},{"revision":"626055fa7ff9571e8b22fd47f6fba6dc","url":"cb23facc.ed289d9f.js"},{"revision":"59b65a52d50622289ec871b60a57148b","url":"cc04f164.c7060e8c.js"},{"revision":"3b342fd2873e5232fcaa581f193f5bd9","url":"cd77a548.944e5013.js"},{"revision":"90bce137742c40746e3bc84a7dc55349","url":"cdaffefa.42171153.js"},{"revision":"22c1ed8bc50bec1769b7d69f1c70fdc0","url":"cdfb8226.0100fe55.js"},{"revision":"47c441c7c3e2ba7703a81d6e8890516e","url":"d156d349.14877e87.js"},{"revision":"f678f42079c9d79ffa7c3f188e1f41a0","url":"d29a201c.c67a28ae.js"},{"revision":"97ed0450ce26a35bf580fd51cff460d9","url":"d2c8a737.95c9a45f.js"},{"revision":"77dd0451341725d008c27a7d94f383bc","url":"d3c175ee.fa67cf32.js"},{"revision":"223418e4d03c08b2dd969fd2f76757fe","url":"d45d7b50.351ae29c.js"},{"revision":"fad5b86e38dba1e622adb793f0e44a87","url":"d5207480.e0090888.js"},{"revision":"33b7fbe6c0e00735365b88b793c446c8","url":"d52e2001.c94bfb7d.js"},{"revision":"37516076ac7af686c0f83642fc8287d1","url":"d556866d.5d27205e.js"},{"revision":"cc7c2b1141d055ac31b030da614d8163","url":"d6a1d581.69f862ae.js"},{"revision":"a2ba48a49c3304eb50e1ae44379dce76","url":"d809f4e8.437e1850.js"},{"revision":"3196edb2431f8c149ffc9c0a37183ee8","url":"d822d9a1.8891ec23.js"},{"revision":"d39774fe5afffb8bf3bc75301b2c6f2f","url":"d88905f8.46cdabd3.js"},{"revision":"da9dba54c28a891e7bc820dbff4b6cd5","url":"d8d64ed0.9e71700b.js"},{"revision":"11c4d94273b675e9d3260afdcfe4b0c8","url":"d94d767c.9e3b256f.js"},{"revision":"9b9246a67c96738e44854aefde152a13","url":"d9bc6954.d06c858d.js"},{"revision":"fafb5929c30949b8eed5b1e9253b6efc","url":"d9e29860.2b0928c6.js"},{"revision":"61c6eefe2f071ccf5c1d4c40ad29bd83","url":"dc836790.ce4099cd.js"},{"revision":"1aaf5410cfd2d860c546184f93661453","url":"dcc372b8.6ff59d05.js"},{"revision":"881f9d8afbe944e8b26f8db7e93b7efb","url":"dd3dfd22.82780d82.js"},{"revision":"7c181afa095a3e465507eb477d628a6f","url":"docs/01.introduction/history/index.html"},{"revision":"b686c8a702904ac830bfd3e59aaf43da","url":"docs/01.introduction/technologies/index.html"},{"revision":"4541134d2f3209e165b95a6baa701a2b","url":"docs/02.getting-started/01.env-setup/development-env/index.html"},{"revision":"90ede4b1f211c2ca58edb28b0cecace5","url":"docs/02.getting-started/01.env-setup/os-env-setup/index.html"},{"revision":"dfc0d19e90c80f810dc303c126e4168d","url":"docs/02.getting-started/01.env-setup/simulator/index.html"},{"revision":"d376eafaa9ee3a756bd70e3791086ee3","url":"docs/02.getting-started/02.main-concepts/manifest/index.html"},{"revision":"acf7730bdd41facf795abcd39276b470","url":"docs/02.getting-started/02.main-concepts/security-access-level/index.html"},{"revision":"2468d63ad729de26870afb1d977b35aa","url":"docs/02.getting-started/03.build-your-first-package-app/building-with-web-technologies/index.html"},{"revision":"7ce8bbac848f205358b9b5d6d8928a10","url":"docs/02.getting-started/03.build-your-first-package-app/sample-code/index.html"},{"revision":"b5070b9944086f45e9019d6b3ad135b1","url":"docs/02.getting-started/03.build-your-first-package-app/test-your-apps/index.html"},{"revision":"ee5486995b7286e2ac41f1f151a2cb72","url":"docs/02.getting-started/04.build-your-first-hosted-app/packaged-or-hosted/index.html"},{"revision":"571d42fae38efa668fef2a6466b6ef33","url":"docs/02.getting-started/04.build-your-first-hosted-app/pwa-to-hosted-app/index.html"},{"revision":"fc31cc4fd8ee40312d3b709b918ca6af","url":"docs/02.getting-started/04.build-your-first-hosted-app/your-first-hosted-app/index.html"},{"revision":"af15e427a14d06cb9fd8042290a6b383","url":"docs/03.core-developer-topics/caching/index.html"},{"revision":"d51bea93fff9fd27612acf9f2f98c495","url":"docs/03.core-developer-topics/dpad-navigation/index.html"},{"revision":"837a175d4ca5fdb6aa2e0808d68127db","url":"docs/03.core-developer-topics/emulated-cursor/index.html"},{"revision":"ac32557673910d8af660afa18a4bc54a","url":"docs/03.core-developer-topics/network-state-changes/index.html"},{"revision":"30a44251c260de23bc79973bbbfc9196","url":"docs/03.core-developer-topics/permissions/index.html"},{"revision":"60818f05acd43ba6bb69efd8004b8cb5","url":"docs/03.core-developer-topics/softkeys/index.html"},{"revision":"ae9bc644c8f2fc614dafe3bceb101c95","url":"docs/03.core-developer-topics/storage/index.html"},{"revision":"04168cba2dcd74d07dc35013d2c846a4","url":"docs/03.core-developer-topics/supporting-multiple/index.html"},{"revision":"783a37d548a8bba131ef875bec1eefe0","url":"docs/03.core-developer-topics/using-push-notifications/index.html"},{"revision":"b8c487a60e98b046808db0912ac0c708","url":"docs/04.design-guide/action-icon/index.html"},{"revision":"a0d7ba47d05fa60de1c1ff72c38bcdc9","url":"docs/04.design-guide/basic-navigation/index.html"},{"revision":"eafef116db52f8fccc02a2f1ceaffccb","url":"docs/04.design-guide/hosted-app/index.html"},{"revision":"836e0072c68679bb2c5e6f5de698cf7f","url":"docs/04.design-guide/key/index.html"},{"revision":"f5672db7da005b8d1d1ecf2012e7218b","url":"docs/04.design-guide/launcher-icon/index.html"},{"revision":"f70a15be9590fbd0e96bef5bb224e5bc","url":"docs/04.design-guide/marketing-banner/index.html"},{"revision":"46095ae947d637b3c32cae1211e8184c","url":"docs/04.design-guide/typography/index.html"},{"revision":"9d1b9f30018e5a9289c8b6bdacd121df","url":"docs/04.design-guide/ui-component/index.html"},{"revision":"6cc02650893d9da6efbdd5e5fdfaa85f","url":"docs/05.run-and-debug/index.html"},{"revision":"4a9977898e229874685d29cf6f8d66a6","url":"docs/06.api/other-apis/index.html"},{"revision":"06190d05a4a124f33ec04f2c65f3ad0c","url":"docs/06.api/web-apis/alarm/alarm/index.html"},{"revision":"8f186fe4e64506e416a5f3258ed78040","url":"docs/06.api/web-apis/alarm/mozAlarms/index.html"},{"revision":"1c5039d2483d822b0bc2e45a96e8c748","url":"docs/06.api/web-apis/alarm/mozAlarmsManager/add/index.html"},{"revision":"bf8aa24904613482cf836b6beff8285f","url":"docs/06.api/web-apis/alarm/mozAlarmsManager/getAll/index.html"},{"revision":"a1db4fa486ef7b473528898fc8c5da13","url":"docs/06.api/web-apis/alarm/mozAlarmsManager/index.html"},{"revision":"713e24315bbfa960a0ae16f6a9c87340","url":"docs/06.api/web-apis/alarm/mozAlarmsManager/remove/index.html"},{"revision":"6a8ad3d6d7ef8ad5f3a5c4282f5cdd27","url":"docs/06.api/web-apis/audiocontext/audiocontext/index.html"},{"revision":"9c08875b6de1d5caad56997d443b7817","url":"docs/06.api/web-apis/batterymanager/batterymanager/index.html"},{"revision":"a04e57ae29603f10ba9c16a79c027cf8","url":"docs/06.api/web-apis/batterymanager/charging/index.html"},{"revision":"8cd00142a2db9fd6233a9d75e2ca1852","url":"docs/06.api/web-apis/batterymanager/chargingtime/index.html"},{"revision":"1ab6388486a23fedcc10942ce16aeeee","url":"docs/06.api/web-apis/batterymanager/dischargingtime/index.html"},{"revision":"e32a6600e8ec3687719dbd7c0e77554a","url":"docs/06.api/web-apis/batterymanager/health/index.html"},{"revision":"19a28b78154e1f14a955dab007ce1a4f","url":"docs/06.api/web-apis/batterymanager/level/index.html"},{"revision":"9867bde4332709cce1db68afe98d9ee9","url":"docs/06.api/web-apis/batterymanager/onbatteryhealthchange/index.html"},{"revision":"54f052ea92b18be10fd377e8ede8794a","url":"docs/06.api/web-apis/batterymanager/onchargingchange/index.html"},{"revision":"ac34cc9f14c744d71cd6395d48d8fb34","url":"docs/06.api/web-apis/batterymanager/onchargingtimechange/index.html"},{"revision":"fcdd5b19a6bfc1a776ba6f029c546e75","url":"docs/06.api/web-apis/batterymanager/ondischargingtimechange/index.html"},{"revision":"fa30f72784beb4ab85e6f132038db2b1","url":"docs/06.api/web-apis/batterymanager/onlevelchange/index.html"},{"revision":"73f2802a33add0eecce72f9e61f927e7","url":"docs/06.api/web-apis/batterymanager/present/index.html"},{"revision":"ea8435f13c520e19d8dc60be6b1ca2fd","url":"docs/06.api/web-apis/batterymanager/temperature/index.html"},{"revision":"0f23a073a898c306126dcd3a19e164da","url":"docs/06.api/web-apis/bluetooth/bluetooth/index.html"},{"revision":"a8e9dbcde17b823c85150f664fcfcb7b","url":"docs/06.api/web-apis/bluetooth/bluetoothadapter/04.discoverable/index.html"},{"revision":"589ee74ed4c882c9fe3545b78b654a21","url":"docs/06.api/web-apis/bluetooth/bluetoothadapter/05.discovering/index.html"},{"revision":"04e256c50ab0f6854831cdaf06c7044f","url":"docs/06.api/web-apis/bluetooth/bluetoothadapter/06.name/index.html"},{"revision":"b3e53d11bd29c34327790c5445b3a70d","url":"docs/06.api/web-apis/bluetooth/bluetoothadapter/10.ona2dpstatuschanged/index.html"},{"revision":"b603b3a1cdb7080dcbcf4c258f181c5b","url":"docs/06.api/web-apis/bluetooth/bluetoothadapter/12.onhfpstatuschanged/index.html"},{"revision":"19b7f876734e43b1c62e4806b9778f72","url":"docs/06.api/web-apis/bluetooth/bluetoothadapter/14.onrequestmediaplaystatus/index.html"},{"revision":"7d78e67967741d07c5b23bb5ec8b3255","url":"docs/06.api/web-apis/bluetooth/bluetoothadapter/15.onscostatuschanged/index.html"},{"revision":"af0f441ce3f011592356fe89da6d63a2","url":"docs/06.api/web-apis/bluetooth/bluetoothadapter/16.getpaireddevices/index.html"},{"revision":"499c7a22494bf3f1d8e539c154329707","url":"docs/06.api/web-apis/bluetooth/bluetoothadapter/17.pair/index.html"},{"revision":"be852c5281614b8d3e93291897f230c7","url":"docs/06.api/web-apis/bluetooth/bluetoothadapter/18.setdiscoverable/index.html"},{"revision":"363fca684cb4014ee2985c9855a0ed6c","url":"docs/06.api/web-apis/bluetooth/bluetoothadapter/19.startdiscovery/index.html"},{"revision":"662470d9b6c3489e411e03ad55a8cb4a","url":"docs/06.api/web-apis/bluetooth/bluetoothadapter/21.stopdiscovery/index.html"},{"revision":"572bee8c4ff183e0e9367115e04c6b34","url":"docs/06.api/web-apis/bluetooth/bluetoothadapter/22.unpair/index.html"},{"revision":"7fd82dbcd0914c15cdef584be374ce37","url":"docs/06.api/web-apis/bluetooth/bluetoothadapter/index.html"},{"revision":"ae63a167f41fe5a0213212a77bb2c303","url":"docs/06.api/web-apis/bluetooth/bluetoothadapterevent/index.html"},{"revision":"c9120d77a62a31da00ab5d4452727e2b","url":"docs/06.api/web-apis/bluetooth/bluetoothattributeevent/index.html"},{"revision":"517dcd28d85e8d369ec1d3ae27362c64","url":"docs/06.api/web-apis/bluetooth/bluetoothclassofdevice/index.html"},{"revision":"69e983688722817146d4c52ddca531c4","url":"docs/06.api/web-apis/bluetooth/bluetoothconnectionhandle/index.html"},{"revision":"a6c47cd5a526948d29e72479b99bc42d","url":"docs/06.api/web-apis/bluetooth/bluetoothdevice/01.address/index.html"},{"revision":"eb9c6dfbdbd798b673346a45ac408d40","url":"docs/06.api/web-apis/bluetooth/bluetoothdevice/02.cod/index.html"},{"revision":"cef1681c04ea08ef7cf17b5ab1e6ce24","url":"docs/06.api/web-apis/bluetooth/bluetoothdevice/03.name/index.html"},{"revision":"c2275e81981ab48aee6cd797a81aa528","url":"docs/06.api/web-apis/bluetooth/bluetoothdevice/07.paired/index.html"},{"revision":"690188d268f446dbd06fcb61b4f25568","url":"docs/06.api/web-apis/bluetooth/bluetoothdevice/09.uuids/index.html"},{"revision":"44b3d3a0a6543604be1bb39a366dc7c1","url":"docs/06.api/web-apis/bluetooth/bluetoothdevice/10.gatt/index.html"},{"revision":"5c5094d5455e278cbc16b4b75058786e","url":"docs/06.api/web-apis/bluetooth/bluetoothdevice/11.onattributechanged/index.html"},{"revision":"4f260f6153ad78eb802cbcd01d495eda","url":"docs/06.api/web-apis/bluetooth/bluetoothdevice/12.fetchuuids/index.html"},{"revision":"d76fea02c57333fc0e74d6b0b17f4ac1","url":"docs/06.api/web-apis/bluetooth/bluetoothdevice/index.html"},{"revision":"34dfcb2c69ec4185e42562ddf1db571a","url":"docs/06.api/web-apis/bluetooth/bluetoothdeviceevent/index.html"},{"revision":"4d550e4f20233e0a8bcf0f295a779184","url":"docs/06.api/web-apis/bluetooth/bluetoothdiscoveryhandle/index.html"},{"revision":"3af3e69101864b0dc850653750506228","url":"docs/06.api/web-apis/bluetooth/bluetoothgatt/index.html"},{"revision":"828118362256ea8802f350fa15d92036","url":"docs/06.api/web-apis/bluetooth/bluetoothgattcharacteristic/index.html"},{"revision":"5ca1d2465bf3c4ceaefd319da7a4f0d7","url":"docs/06.api/web-apis/bluetooth/bluetoothgattcharacteristicevent/index.html"},{"revision":"b92d39f7870978b9d35b6e95253ce0a3","url":"docs/06.api/web-apis/bluetooth/bluetoothgattdescriptor/index.html"},{"revision":"f1988c92a7f70a42104dd6f3481a69eb","url":"docs/06.api/web-apis/bluetooth/bluetoothgattserver/index.html"},{"revision":"68c8f5f99ead150a2c24903b7a3b4f50","url":"docs/06.api/web-apis/bluetooth/bluetoothgattservice/index.html"},{"revision":"fa1678fe21a909eb3311bf814b789099","url":"docs/06.api/web-apis/bluetooth/bluetoothledeviceevent/index.html"},{"revision":"20f9587db8dca9bb164d446aee7461e9","url":"docs/06.api/web-apis/bluetooth/bluetoothmanager/03.onadapteradded/index.html"},{"revision":"607b67ab65e337fcd99df62549a5275b","url":"docs/06.api/web-apis/bluetooth/bluetoothmanager/index.html"},{"revision":"376b207c8f8df0c7c080a0a9a4ecd0ad","url":"docs/06.api/web-apis/bluetooth/bluetoothstatuschangedevent/index.html"},{"revision":"745ead34e8321282d08e7be341722593","url":"docs/06.api/web-apis/clients/01.openapp/index.html"},{"revision":"880ff51e54117f3be2cc643e9f92cdbf","url":"docs/06.api/web-apis/clients/clients/index.html"},{"revision":"03b7ad52eb88417acd0fc2b9c9d8314f","url":"docs/06.api/web-apis/dataStore/data-store/index.html"},{"revision":"c1de53b67d19f13047bf89290d47a010","url":"docs/06.api/web-apis/dataStore/datastore/01.name/index.html"},{"revision":"102eaf42e5afa71cea121edcf4d106fc","url":"docs/06.api/web-apis/dataStore/datastore/02.owner/index.html"},{"revision":"1316c86be95e19e6a9f3a644c8d0d12d","url":"docs/06.api/web-apis/dataStore/datastore/03.readonly/index.html"},{"revision":"8bf659f7cc50dd802f6b4cd365960554","url":"docs/06.api/web-apis/dataStore/datastore/04.revisionid/index.html"},{"revision":"01dbf2b69273488b58658a2042564502","url":"docs/06.api/web-apis/dataStore/datastore/05.onchange/index.html"},{"revision":"e7eefb236693e3ecbe81b54b9f80b865","url":"docs/06.api/web-apis/dataStore/datastore/06.get/index.html"},{"revision":"ba31669c636dcfb40fcb7baa9ee790ad","url":"docs/06.api/web-apis/dataStore/datastore/07.add/index.html"},{"revision":"cd73c68421ee2f14ccd325d2bff45478","url":"docs/06.api/web-apis/dataStore/datastore/08.put/index.html"},{"revision":"338647ea6099141dbcd3370b9f1a1245","url":"docs/06.api/web-apis/dataStore/datastore/09.remove/index.html"},{"revision":"e935231db16aa0f60bbf2fc571332ca3","url":"docs/06.api/web-apis/dataStore/datastore/10.clear/index.html"},{"revision":"eed96b77acd613b9e602087512bd93f7","url":"docs/06.api/web-apis/dataStore/datastore/11.getlength/index.html"},{"revision":"bdd86efa18da8e6dc279976eab506e7f","url":"docs/06.api/web-apis/dataStore/datastore/12.sync/index.html"},{"revision":"927d89f2007808b2c65bdd283959c0bd","url":"docs/06.api/web-apis/dataStore/datastore/index.html"},{"revision":"78336baacb7036b6628ad4ecd20639a1","url":"docs/06.api/web-apis/dataStore/datastorechangeevent/id/index.html"},{"revision":"c83b7b9fa78ab2db32ef277925045ba6","url":"docs/06.api/web-apis/dataStore/datastorechangeevent/index.html"},{"revision":"208580fc07d8f5a3b698d70fb95e738f","url":"docs/06.api/web-apis/dataStore/datastorechangeevent/operation/index.html"},{"revision":"d76bd90895edd273d06508ae72871130","url":"docs/06.api/web-apis/dataStore/datastorechangeevent/owner/index.html"},{"revision":"1ebad665a0bf77a6dbc72544516ca169","url":"docs/06.api/web-apis/dataStore/datastorechangeevent/revisionid/index.html"},{"revision":"4ae79166093dc20dd26a1841f2308af8","url":"docs/06.api/web-apis/dataStore/datastorecursor/close/index.html"},{"revision":"c8351c67f030511e572f4cab1e24b3d2","url":"docs/06.api/web-apis/dataStore/datastorecursor/index.html"},{"revision":"a8756f08be4e35e0a238b6da012220d8","url":"docs/06.api/web-apis/dataStore/datastorecursor/next/index.html"},{"revision":"97d778e4faeef23aa8a583231c929e28","url":"docs/06.api/web-apis/dataStore/datastorecursor/store/index.html"},{"revision":"eb52b30c9c5fef04b768b0877da23ab7","url":"docs/06.api/web-apis/dataStore/datastoretask/data/index.html"},{"revision":"b0153a9e52c68871e3ba343507d0d068","url":"docs/06.api/web-apis/dataStore/datastoretask/id/index.html"},{"revision":"361d571207ea197f7eb6af65f56cf474","url":"docs/06.api/web-apis/dataStore/datastoretask/index.html"},{"revision":"07c089eee8ff01df3731e98b827254f5","url":"docs/06.api/web-apis/dataStore/datastoretask/operation/index.html"},{"revision":"50be21f71f50a6810c5d1954797efb56","url":"docs/06.api/web-apis/dataStore/datastoretask/revisionid/index.html"},{"revision":"da33f8f781bc2dc3362d3fd5bc0a1bc4","url":"docs/06.api/web-apis/deviceStorage/01.devicestorage/01.default/index.html"},{"revision":"f7adae27f11496960b21b705b37ec554","url":"docs/06.api/web-apis/deviceStorage/01.devicestorage/02.lowdiskspace/index.html"},{"revision":"bdc5b49e3f1ce68f3a38302febd7aced","url":"docs/06.api/web-apis/deviceStorage/01.devicestorage/03.storagename/index.html"},{"revision":"19a056c3865f963eb874614f9cf929bb","url":"docs/06.api/web-apis/deviceStorage/01.devicestorage/04.onchange/index.html"},{"revision":"f7c852c1befa572182823fcf48c83bb8","url":"docs/06.api/web-apis/deviceStorage/01.devicestorage/05.add/index.html"},{"revision":"ab256ab232ca9a0e8e497e7584dfd437","url":"docs/06.api/web-apis/deviceStorage/01.devicestorage/06.addnamed/index.html"},{"revision":"6f1d6d3ae8fab77db0a0aa7e698d0977","url":"docs/06.api/web-apis/deviceStorage/01.devicestorage/07.available/index.html"},{"revision":"f123db9182a32f1d45f496fba2ed6d01","url":"docs/06.api/web-apis/deviceStorage/01.devicestorage/08.delete/index.html"},{"revision":"835e560f5b15615234aaca45a7041a24","url":"docs/06.api/web-apis/deviceStorage/01.devicestorage/09.enumerate/index.html"},{"revision":"4c5bfcc4d34979342e3af4f27e82226e","url":"docs/06.api/web-apis/deviceStorage/01.devicestorage/10.enumerateeditable/index.html"},{"revision":"768b464debba5b7eaf7e8df12dccc182","url":"docs/06.api/web-apis/deviceStorage/01.devicestorage/11.freespace/index.html"},{"revision":"e1981dc7a0e4f14d1c3f10f7608099fb","url":"docs/06.api/web-apis/deviceStorage/01.devicestorage/12.get/index.html"},{"revision":"ed0fd6a7951c8f78c82d77b4fe3f4c86","url":"docs/06.api/web-apis/deviceStorage/01.devicestorage/13.geteditable/index.html"},{"revision":"3ea97710d666476bf2a5b45eaea2d070","url":"docs/06.api/web-apis/deviceStorage/01.devicestorage/14.usedspace/index.html"},{"revision":"6e24e4b17b179c9001ebf80560d25678","url":"docs/06.api/web-apis/deviceStorage/01.devicestorage/index.html"},{"revision":"e330585346e9a62a8dbecf43d38d6d4a","url":"docs/06.api/web-apis/deviceStorage/02.devicestoragechangeevent/01.path/index.html"},{"revision":"30d804baeb0e4831a2c569f13848cb1d","url":"docs/06.api/web-apis/deviceStorage/02.devicestoragechangeevent/02.reason/index.html"},{"revision":"3e5d4abe7e7ee46e91fa60b3d94a19e1","url":"docs/06.api/web-apis/deviceStorage/02.devicestoragechangeevent/index.html"},{"revision":"f1e86865b551229aa0139fe7f0b159c8","url":"docs/06.api/web-apis/deviceStorage/device-storage/index.html"},{"revision":"5766836d40b30a9072091e0db9fb8c14","url":"docs/06.api/web-apis/geolocation/01.clearwatch/index.html"},{"revision":"6fb22fc68cb93da1687303504470b7b5","url":"docs/06.api/web-apis/geolocation/02.getposition/index.html"},{"revision":"270789bbf1ea42f446f2d7a78e1e64f8","url":"docs/06.api/web-apis/geolocation/03.watchposition/index.html"},{"revision":"ba5d4a87a898b210db32e19ba5b45c5b","url":"docs/06.api/web-apis/geolocation/geolocation/index.html"},{"revision":"87cdb67872f6ee5423df1653a32b7ba3","url":"docs/06.api/web-apis/index.html"},{"revision":"0fb963eeba1d6f49c23278e73262c7f8","url":"docs/06.api/web-apis/largetext/largetext/index.html"},{"revision":"61a0b0f640af9e3f9fc77616ebeb6c8e","url":"docs/06.api/web-apis/mediasource/mediasource/index.html"},{"revision":"3966b4dfc69d4b4299ad45b5f2632892","url":"docs/06.api/web-apis/mozhaspendingmessage/mozhaspendingmessage/index.html"},{"revision":"e9918965c774c6b737d0100b3139133f","url":"docs/06.api/web-apis/mozsetmessagehandler/mozsetmessagehandler/index.html"},{"revision":"ba68fd2c777b4b4d3be9daf21788779d","url":"docs/06.api/web-apis/networkStats/moznetworkstats/01.connectiontype/index.html"},{"revision":"c70b11e8c2d3ac5675d0d55b8ebd4f7a","url":"docs/06.api/web-apis/networkStats/moznetworkstats/02.data/index.html"},{"revision":"d1f2f42cf9190e5e143693c390f61d4a","url":"docs/06.api/web-apis/networkStats/moznetworkstats/03.start/index.html"},{"revision":"1242241dbb711210d484edda2f20b7ba","url":"docs/06.api/web-apis/networkStats/moznetworkstats/04.end/index.html"},{"revision":"0bc11dd31b5a4617f2733f2078c5380d","url":"docs/06.api/web-apis/networkStats/moznetworkstats/index.html"},{"revision":"0409e882cb9ccd703e5f989fe0072b93","url":"docs/06.api/web-apis/networkStats/moznetworkstatsdata/date/index.html"},{"revision":"76cfd859646c1fb84758360e15293756","url":"docs/06.api/web-apis/networkStats/moznetworkstatsdata/index.html"},{"revision":"0d69b28327e4c547c20d20516c8b7253","url":"docs/06.api/web-apis/networkStats/moznetworkstatsdata/rxbytes/index.html"},{"revision":"4453ef0c8d9a149618f4843071410691","url":"docs/06.api/web-apis/networkStats/moznetworkstatsdata/txbytes/index.html"},{"revision":"487db194da67537bf04c5250dabd66ab","url":"docs/06.api/web-apis/networkStats/moznetworkstatsmanager/addalarm/index.html"},{"revision":"b8a0d3be260588f781dc43d397f5d47b","url":"docs/06.api/web-apis/networkStats/moznetworkstatsmanager/clearallstats/index.html"},{"revision":"fb2542f2f75ebddf7ec7b456fad2721c","url":"docs/06.api/web-apis/networkStats/moznetworkstatsmanager/clearstats/index.html"},{"revision":"4bc326ad3cde7777c8b114621ddd2d10","url":"docs/06.api/web-apis/networkStats/moznetworkstatsmanager/getallalarms/index.html"},{"revision":"bb35143f63dd5dc74b55c2982be82f63","url":"docs/06.api/web-apis/networkStats/moznetworkstatsmanager/getavailablenetworks/index.html"},{"revision":"db74bb27f09b80ee912068410352756b","url":"docs/06.api/web-apis/networkStats/moznetworkstatsmanager/getavailableservicetypes/index.html"},{"revision":"d2a6d3c223bd41f9d03d0b8f4c34031c","url":"docs/06.api/web-apis/networkStats/moznetworkstatsmanager/getsamples/index.html"},{"revision":"b07c82053c180924157a1ca426b3e010","url":"docs/06.api/web-apis/networkStats/moznetworkstatsmanager/index.html"},{"revision":"c2367e72635ffc609d9c64c6827eafb9","url":"docs/06.api/web-apis/networkStats/moznetworkstatsmanager/maxstorageage/index.html"},{"revision":"deb79b4d57a623750b9511251db2b290","url":"docs/06.api/web-apis/networkStats/moznetworkstatsmanager/removealarms/index.html"},{"revision":"f24c6f5993cefa64eadc5732e1a0bfc7","url":"docs/06.api/web-apis/networkStats/moznetworkstatsmanager/samplerate/index.html"},{"revision":"99ac2fa20fa3ebe80affe902ef3f2c33","url":"docs/06.api/web-apis/networkStats/network-stats/index.html"},{"revision":"e0aa365ada9f23b967926170bb3792c1","url":"docs/06.api/web-apis/seChannel/sechannel/index.html"},{"revision":"7edfde54549ae990e681469ad6015030","url":"docs/06.api/web-apis/seManager/semanager/index.html"},{"revision":"d25138e96ed74bb0666a37a7f827d4f7","url":"docs/06.api/web-apis/seReader/sereader/index.html"},{"revision":"d341cfa06786af4d99265eaa9aa37da6","url":"docs/06.api/web-apis/seresponse/seresponse/index.html"},{"revision":"1afc229e96337f9411c0e7e4c0de09b5","url":"docs/06.api/web-apis/seSession/sesession/index.html"},{"revision":"4122410422e8b5b9f3f0a2ae8a074096","url":"docs/06.api/web-apis/speeddial/speeddial/index.html"},{"revision":"6b164d9303f8e5f5a5980750ca527e22","url":"docs/06.api/web-apis/volumemanager/volumemanager/index.html"},{"revision":"40388048998386df909b1c9ad593891f","url":"docs/06.api/web-apis/wifiInformation/mozwificonnectioninfoevent/index.html"},{"revision":"84e49a1dc0efb6ce667ff06c56a2d268","url":"docs/06.api/web-apis/wifiInformation/mozwificonnectioninfoevent/ipaddress/index.html"},{"revision":"e80c2795bbef4c221adee56dd9cf54f0","url":"docs/06.api/web-apis/wifiInformation/mozwificonnectioninfoevent/linkspeed/index.html"},{"revision":"8cb527b52ff373a1dcb6cd34b0565a86","url":"docs/06.api/web-apis/wifiInformation/mozwificonnectioninfoevent/network/index.html"},{"revision":"43102b82e0ce0a2bbab48efef21ef149","url":"docs/06.api/web-apis/wifiInformation/mozwificonnectioninfoevent/relsignalstrength/index.html"},{"revision":"b095cb28d9fc88d10efab40768fa649c","url":"docs/06.api/web-apis/wifiInformation/mozwificonnectioninfoevent/signalstrength/index.html"},{"revision":"1b1b105821e79f51fa2199bbe5289ae7","url":"docs/06.api/web-apis/wifiInformation/mozwifistatuschangeevent/index.html"},{"revision":"c6dcf21e29d29fbc981cb20762388662","url":"docs/06.api/web-apis/wifiInformation/mozwifistatuschangeevent/network/index.html"},{"revision":"ecf30db190157a4cf4ad24a86bdb2751","url":"docs/06.api/web-apis/wifiInformation/mozwifistatuschangeevent/status/index.html"},{"revision":"200a4685d2f3cccf70c192354b8fa1d8","url":"docs/06.api/web-apis/wifiInformation/wifi-information/index.html"},{"revision":"bee392d24251fbc35e97c54597e1e3fd","url":"docs/06.api/web-apis/wifiInformation/wifimanager/associate/index.html"},{"revision":"b6ab111c93bc7b9b6c021fa0d2143a35","url":"docs/06.api/web-apis/wifiInformation/wifimanager/connection/index.html"},{"revision":"92c3e0121d556bd824dc60a9b85a59ae","url":"docs/06.api/web-apis/wifiInformation/wifimanager/connectioninformation/index.html"},{"revision":"9ef16d60acd153b04598d70fe84eae44","url":"docs/06.api/web-apis/wifiInformation/wifimanager/enabled/index.html"},{"revision":"015fec3f780148ada95db4487dd1ac20","url":"docs/06.api/web-apis/wifiInformation/wifimanager/forget/index.html"},{"revision":"4617559527a75c0e442790c4151fa290","url":"docs/06.api/web-apis/wifiInformation/wifimanager/getknownnetworks/index.html"},{"revision":"a1b7ac8d92a44b1aff41efb453bc80c5","url":"docs/06.api/web-apis/wifiInformation/wifimanager/getnetworks/index.html"},{"revision":"898e9cf9ef9044246b92a0243924de42","url":"docs/06.api/web-apis/wifiInformation/wifimanager/index.html"},{"revision":"946bf5cd1d5223fcd980bd64694952d8","url":"docs/06.api/web-apis/wifiInformation/wifimanager/macaddress/index.html"},{"revision":"4dfe8a4838d9fbd719058970c2e25710","url":"docs/06.api/web-apis/wifiInformation/wifimanager/onconnectioninfoupdate/index.html"},{"revision":"61e3cbb81c99151fb1736383f41916a7","url":"docs/06.api/web-apis/wifiInformation/wifimanager/ondisabled/index.html"},{"revision":"939ec4327456f457ba52ac5a02665b47","url":"docs/06.api/web-apis/wifiInformation/wifimanager/onenabled/index.html"},{"revision":"4e7b19dc83f051517e5e548faf6556c5","url":"docs/06.api/web-apis/wifiInformation/wifimanager/onstatuschange/index.html"},{"revision":"73233319c702038ad9ef9e56ad047a60","url":"docs/06.api/web-apis/wifiInformation/wifimanager/setpowersavingmode/index.html"},{"revision":"33f10a8f2e661197e15163116dbfc6cd","url":"docs/06.api/web-apis/wifiInformation/wifimanager/setstaticipmode/index.html"},{"revision":"bb6a6d5375764771c351b5cfd21711a0","url":"docs/06.api/web-apis/wifiInformation/wifimanager/wps/index.html"},{"revision":"6a3346e322e3867dc8da6594a902bf3c","url":"docs/07.submit-to-kaistore/index.html"},{"revision":"774716a143d5d2a24fca1607e335c012","url":"docs/08.contact-us/index.html"},{"revision":"be89e03062a221c8acf06d5571279c95","url":"docs/index.html"},{"revision":"2b727d5cff38fa1ec697874bcb60afb1","url":"docs/sfp-3.0/01.introduction/history/index.html"},{"revision":"f68ac898b449c23912c7bc036779af3d","url":"docs/sfp-3.0/01.introduction/overview/index.html"},{"revision":"722e75ae0b6dfb46547c039c4eed5881","url":"docs/sfp-3.0/01.introduction/technologies/index.html"},{"revision":"3b9d1b52d5fa5d1a4f607e6dd2cad0bf","url":"docs/sfp-3.0/02.getting-started/01.env-setup/development-env/index.html"},{"revision":"65bd6d559e4c7041a675d952257069fc","url":"docs/sfp-3.0/02.getting-started/01.env-setup/os-env-setup/index.html"},{"revision":"7151b6fa889e5ed5217f9d16f3b3c660","url":"docs/sfp-3.0/02.getting-started/01.env-setup/simulator/index.html"},{"revision":"2bd5d3cde96e8b2c08b91948f7ff92fb","url":"docs/sfp-3.0/02.getting-started/02.main-concepts/manifest/index.html"},{"revision":"89dd6f8195e76b99ba23b90b2152a7f3","url":"docs/sfp-3.0/02.getting-started/02.main-concepts/security-access-level/index.html"},{"revision":"c9bb0f7b52fc99f3765eda657553f87a","url":"docs/sfp-3.0/02.getting-started/03.build-your-first-package-app/building-with-web-technologies/index.html"},{"revision":"c25bb37d5eb6353146f11ac8b698bcc0","url":"docs/sfp-3.0/02.getting-started/03.build-your-first-package-app/sample-code/index.html"},{"revision":"046f22f05e60b570ab46b82114e073ec","url":"docs/sfp-3.0/02.getting-started/03.build-your-first-package-app/test-your-apps/index.html"},{"revision":"53498f364c94f58a70211faec523399d","url":"docs/sfp-3.0/02.getting-started/04.build-your-first-hosted-app/packaged-or-hosted/index.html"},{"revision":"c2ad493a202abe8b2b23fea894b800e1","url":"docs/sfp-3.0/02.getting-started/04.build-your-first-hosted-app/pwa-to-hosted-app/index.html"},{"revision":"edd99f2d6e5ca0ee50f3b94e3a14ae8b","url":"docs/sfp-3.0/02.getting-started/04.build-your-first-hosted-app/your-first-hosted-app/index.html"},{"revision":"e0f782f7bf7f299f90177f721a39df65","url":"docs/sfp-3.0/03.core-developer-topics/caching/index.html"},{"revision":"302a6af75bdb4d5d38b4dd24b8304bfd","url":"docs/sfp-3.0/03.core-developer-topics/dpad-navigation/index.html"},{"revision":"1df82b77007f42f5d060ee6c931056fc","url":"docs/sfp-3.0/03.core-developer-topics/emulated-cursor/index.html"},{"revision":"0dc66dc3258a0ba7a594f039a01c460d","url":"docs/sfp-3.0/03.core-developer-topics/network-state-changes/index.html"},{"revision":"7cb5a795ee01cae3b1beb13359dc3462","url":"docs/sfp-3.0/03.core-developer-topics/permissions/index.html"},{"revision":"1a62e7dfb0810574cdb93f3d9794a75b","url":"docs/sfp-3.0/03.core-developer-topics/softkeys/index.html"},{"revision":"f5c023df28f4adad4bf8c74288fc389e","url":"docs/sfp-3.0/03.core-developer-topics/storage/index.html"},{"revision":"0d47a2c3544b16509a7ae924c0a2f081","url":"docs/sfp-3.0/03.core-developer-topics/supporting-multiple/index.html"},{"revision":"3701aecc760c1aaec4574033740a50dc","url":"docs/sfp-3.0/03.core-developer-topics/using-push-notifications/index.html"},{"revision":"d096064ab6bd0e0f8d370ddc1e7dd41a","url":"docs/sfp-3.0/04.design-guide/action-icon/index.html"},{"revision":"00ed3c68712c64da69a8a671205ba01f","url":"docs/sfp-3.0/04.design-guide/basic-navigation/index.html"},{"revision":"a6840dd9d26b808f55c909dfa6d974ac","url":"docs/sfp-3.0/04.design-guide/hosted-app/index.html"},{"revision":"b5e99dac17a28e77e6062a69c678fe14","url":"docs/sfp-3.0/04.design-guide/kai-designed/index.html"},{"revision":"254a6d0190e75832c8baaf78eb093da8","url":"docs/sfp-3.0/04.design-guide/key/index.html"},{"revision":"8b50aba5b9f6d0407429896dbc50e66c","url":"docs/sfp-3.0/04.design-guide/launcher-icon/index.html"},{"revision":"d17f9ad085b8b13b329b9cc68593b9e9","url":"docs/sfp-3.0/04.design-guide/marketing-banner/index.html"},{"revision":"0536a1c02751782f19d83e017e6423af","url":"docs/sfp-3.0/04.design-guide/typography/index.html"},{"revision":"110e7b16fced22ec9e98cc7a3da2fc3d","url":"docs/sfp-3.0/04.design-guide/ui-component/index.html"},{"revision":"2b5a47625f0580e14bc50a7d146b3249","url":"docs/sfp-3.0/05.run-and-debug/index.html"},{"revision":"0362be484d00da638cbd00d2eaf4dd03","url":"docs/sfp-3.0/06.api/other-apis/index.html"},{"revision":"a5631e21a6b9b5fb958a34bdd88ba164","url":"docs/sfp-3.0/06.api/web-apis/alarm/alarm/index.html"},{"revision":"b48d0dae5620fa7b3e3c317a0b70ad85","url":"docs/sfp-3.0/06.api/web-apis/index.html"},{"revision":"194ae7fa781d9e85429787522abf9747","url":"docs/sfp-3.0/07.submit-to-kaistore/index.html"},{"revision":"02e5b27e1e004a01a9f5fe6e95aecbc7","url":"docs/sfp-3.0/08.contact-us/index.html"},{"revision":"10e2d7d74b9c55a4c2ed7b9064130d52","url":"docs/sfp-3.0/09.migration-from-2.5/api-change/index.html"},{"revision":"055c1d6741f06ff115f72342bdbcdc93","url":"docs/sfp-3.0/09.migration-from-2.5/manifest-change/index.html"},{"revision":"6af634345ab111228ff6ea5c126e29e1","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/b2g/alarmManager/navigator-b2g-alarmManager/index.html"},{"revision":"f0844e49407ac62fbac0004cc322617f","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/b2g/audioChannelManager/navigator-b2g-audioChannelManager/index.html"},{"revision":"97e48107dd3dd63d734e8492a9ccb5e9","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/b2g/cameras/cameraManager/getCamera/index.html"},{"revision":"fe8974454ba18b4ae7ae956be9d71fdb","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/b2g/cameras/cameraManager/getListOfCameras/index.html"},{"revision":"d5239a7e7d4d6457adbddb08e3bfd7f4","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/b2g/cameras/cameraManager/index.html"},{"revision":"d83fbcaac7de6339b39a392b7f1860b3","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/b2g/cameras/navigator-b2g-cameras/index.html"},{"revision":"7541f7d07f3e9015303b18941126efcd","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/b2g/dataCallManager/navigator-b2g-dataCallManager/index.html"},{"revision":"04ec060a318d5072b047dad5b11d4910","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/b2g/downloadManager/navigator-b2g-downloadManager/index.html"},{"revision":"d10faa9b4e36f719e4ccbe9f93037dd6","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/b2g/externalapi/navigator-b2g-externalapi/index.html"},{"revision":"feca07313233211eb82d9faeddade626","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/b2g/fmRadio/navigator-b2g-fmRadio/index.html"},{"revision":"bc3578f4893e15a8f98669dc851c1b50","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/b2g/getDeviceStorage/navigator-b2g-getDeviceStorage/index.html"},{"revision":"345349a48770fafeb9dcd3acafc11d5d","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/b2g/inputMethod/navigator-b2g-inputMethod/index.html"},{"revision":"72b53275794816dfb4e53fb41df42fab","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/b2g/mobileConnection/navigator-b2g-mobileConnection/index.html"},{"revision":"fad8db844746df6df1f534ae879e0be3","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/b2g/mobileMessage/navigator-b2g-mobileMessage/index.html"},{"revision":"94b2d2048b06e7302e772c9c4a3b8f7a","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/b2g/virtualCursor/navigator-b2g-virtualCursor/index.html"},{"revision":"2fdb0d726ac0c4ab213e01a938d3050a","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/daemon-api/appmanager/daemon-api-appsmanager/index.html"},{"revision":"789be47b98428a924346d2ea311247d4","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/daemon-api/audiovolumemanager/daemon-api-audiovolumemanager/index.html"},{"revision":"070bedecd2ae6bde260ce62b06deea41","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/daemon-api/contacts/daemon-api-contacts/index.html"},{"revision":"7e584f94a8911fe96f3c823faf72bc2e","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/daemon-api/devicecapability/daemon-api-devicecapability/index.html"},{"revision":"f4e81b4052016f74986afe770b6243bb","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/daemon-api/powermanager/daemon-api-powermanager/index.html"},{"revision":"087304a0744cc447aee5711d1dc7b13f","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/daemon-api/settings/daemon-api-settings/index.html"},{"revision":"767c3c37acab201ac281a5b09554cd84","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/daemon-api/tcpsocket/daemon-api-tcpsocket/index.html"},{"revision":"82dc7c3e2bdebe53249cb082c2ac6799","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/daemon-api/telephony/daemon-api-telephony/index.html"},{"revision":"e8101cbe3144515097f926938f13e604","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/daemon-api/timeservice/daemon-api-timeservices/index.html"},{"revision":"27bf7127af412517f3c359372e618e74","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/navigator/geolocation/navigator-geolocation/index.html"},{"revision":"4bcfe4b80e7a8c16e2b606ed109d0d20","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/navigator/getUserMediaDevices/navigator-getUserMediaDevices/index.html"},{"revision":"9d8cdb2cd88ed7d2f56d1b67a14fbc7d","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/navigator/mozTCPSocket/navigator-mozTCPSocket/index.html"},{"revision":"6928201c2c2f6fa8b261d1dbc4c6b208","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/navigator/mozTCPSocket/tcpSocket/index.html"},{"revision":"e31e28de86b890f11e9d5d9a7ec9abf1","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/navigator/mozTCPSocket/tcpSocketAPI/index.html"},{"revision":"5f523278a0a59dcb8ed56db05b66a4b6","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/navigator/vibrate/navigator-vibrate/index.html"},{"revision":"601a27415cc55826838d08bf679195ae","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/others/AudioChannelClient/other-AudioChannelClient/index.html"},{"revision":"204287ec7f761960fbb88f2bf4eaf099","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/others/AudioContext/other-AudioContext/index.html"},{"revision":"2e895f0489b9d2837e9dae317b9149b0","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/others/HTMLMediaElement/other-HTMLMediaElement/index.html"},{"revision":"084e82167bae0ab7fecca82885b8db8f","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/others/notification/other-Notification/index.html"},{"revision":"f6c8955505a09a23e88e25064ec42ec6","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/others/ServiceWorker/other-ServiceWorker/index.html"},{"revision":"0db5fe07859ca7ec68f941d341147738","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/others/speakerManager/other-SpeakerManager/index.html"},{"revision":"df04501d4076260cfed33ad82ac5f890","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/others/XMLHttpRequest/other-XMLHttpRequest/index.html"},{"revision":"607a443a66021c1dc911285a43037bcc","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/permissionAPIs/AudioChannels/permission-table-audiochannel/index.html"},{"revision":"f2d98c2dd3c3d977d50b2ac7eff2f9d4","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/permissionAPIs/BlueTooth/bluetoothadapter/BluetoothAdapter/index.html"},{"revision":"505eb851339b48314ad3a2c384bb6b67","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/permissionAPIs/BlueTooth/bluetoothadapterevent/BluetoothAdapterEvent/index.html"},{"revision":"96fa6be3bae073c1377512595b250dce","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/permissionAPIs/BlueTooth/bluetoothattributeevent/BluetoothAttributeEvent/index.html"},{"revision":"5914d25b44c9b0ac1fd62b528a19d4f6","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/permissionAPIs/BlueTooth/bluetoothclassofdevice/BluetoothClassOfDevice/index.html"},{"revision":"4ec64f53cc4d46e62dea26a4908f2c8d","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/permissionAPIs/BlueTooth/bluetoothconnectionhandle/BluetoothConnectionHandle/index.html"},{"revision":"7109ab794ebdf2f643684d91f9d50d51","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/permissionAPIs/BlueTooth/bluetoothdevice/BluetoothDevice/index.html"},{"revision":"27c10b6e7d1c50cf8ae99b023c579cf5","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/permissionAPIs/BlueTooth/bluetoothdeviceevent/BluetoothDeviceEvent/index.html"},{"revision":"88a7675537d40db6d4776b9bbd42b786","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/permissionAPIs/BlueTooth/bluetoothdiscoveryhandle/BluetoothDiscoveryHandle/index.html"},{"revision":"85cd36dc4298f99ec10682f8c3410570","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/permissionAPIs/BlueTooth/bluetoothgatt/BluetoothGatt/index.html"},{"revision":"8b3618acc527f5c3018680f90be73f97","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/permissionAPIs/BlueTooth/bluetoothgattcharacteristic/BluetoothGattCharacteristic/index.html"},{"revision":"57d93b08650551160169d1e56f6d04d6","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/permissionAPIs/BlueTooth/bluetoothgattcharacteristicevent/BluetoothGattCharacteristicEvent/index.html"},{"revision":"10160c6c206947fa16a4478c988d67ba","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/permissionAPIs/BlueTooth/bluetoothgattdescriptor/BluetoothGattDescriptor/index.html"},{"revision":"b35dd9dd7638dd845cf9d59ce876cedc","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/permissionAPIs/BlueTooth/bluetoothgattserver/BluetoothGattServer/index.html"},{"revision":"6c96b54124c2304069a36f745d07a9f2","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/permissionAPIs/BlueTooth/bluetoothgattservice/BluetoothGattService/index.html"},{"revision":"602c7d391af7fb11e7d449676110ff61","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/permissionAPIs/BlueTooth/bluetoothledeviceevent/BluetoothLeDeviceEvent/index.html"},{"revision":"66039b686a784f36d475dedd35c3cbdc","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/permissionAPIs/BlueTooth/bluetoothmanager/BluetoothManager/index.html"},{"revision":"dbdf63123f459f180ae7b040b8315994","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/permissionAPIs/BlueTooth/bluetoothstatuschangedevent/BluetoothStatusChangedEvent/index.html"},{"revision":"b8dbec800133478d339d9eff151f8a82","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/permissionAPIs/BlueTooth/permission-table-bluetooth/index.html"},{"revision":"214ec5327a18002f3e165154479af06e","url":"docs/sfp-3.0/09.migration-from-2.5/permission-change/index.html"},{"revision":"324cc51306ac9a2c4591fb11e2e394ef","url":"docs/sfp-3.0/index.html"},{"revision":"b12bbd6ff89b0780ea86361ddd0fb624","url":"e03e333f.07984269.js"},{"revision":"ea27206ebecea0d9f44f1fcd81def4cd","url":"e04cd368.63d7c41f.js"},{"revision":"9832427f18070cca2ed6a4ef13b0dfe9","url":"e15894fd.14ae5ee2.js"},{"revision":"5ad3aed64d6ea9339ce406ac17db7786","url":"e1f487dd.c18d0821.js"},{"revision":"6a39463a2a2f22c8a1e0210dbfb2c00b","url":"e29a3678.fe0672b2.js"},{"revision":"9f8491ae7a841f912c41f828d35c1072","url":"e2d3c563.a094f79c.js"},{"revision":"d5a3120cec9d8576beb1cc23ecaf095b","url":"e571c9ec.03d37ff9.js"},{"revision":"7eb0b32c5cd9642f14a72bcc9ef37815","url":"e5b12751.fd06a8e7.js"},{"revision":"b7dd30efcbfd7efd6a2bdfed10b3f8b4","url":"e63499fd.052660e2.js"},{"revision":"b2b9ab119dd10c0069d9a9c3e1bf5e9c","url":"e7605af6.0be25163.js"},{"revision":"9e2a8ca3421f1c094305271653d6f98c","url":"e83ab80a.d0ec1bdf.js"},{"revision":"c10aeb33b929900d8c68d5902df0d973","url":"e896f735.e14feec6.js"},{"revision":"ad500d201fa80faa3db7488028e5fdf5","url":"e8d38d99.7b93c159.js"},{"revision":"b2865fc11447e92150bab061cef7b9b0","url":"e9641d40.191c792a.js"},{"revision":"46089993c0eec94eb6f92d1ec8399d09","url":"ead8dcef.11aa04f6.js"},{"revision":"d7a3cc5501c74de1015410a4d1b13caa","url":"eae0ba19.5a3b233a.js"},{"revision":"f9ca191b2a2d0169ebc3fb3d90f7a202","url":"eaf33bdf.e0326be8.js"},{"revision":"002af622562ad564121b170c4c4e8ef7","url":"eb2cf5b8.e5745b3f.js"},{"revision":"c0ed54e0b063d2f7f0e30da835d7309f","url":"eb396f45.004e666d.js"},{"revision":"82a66d13113fbe8ee50729bd73932bf2","url":"ec84a8f2.b335aadc.js"},{"revision":"ed988c8ec40b34a167beeaa4c73df2ca","url":"ece02ee3.b0403b80.js"},{"revision":"d160a49c384ef7587aeb4f310fe760b4","url":"ee1e85fa.a9e9c329.js"},{"revision":"c1bd79e02349e25bdb8bf11523f30342","url":"eecbf1a7.4d3dcf28.js"},{"revision":"5cd48a156be3ee6a4974e72a39cef85b","url":"ef51d256.6b7274f1.js"},{"revision":"2a03ce2c808f7e619a5e7c67b32b5c34","url":"efea8de1.0407adf7.js"},{"revision":"5e42deff2af580cc34c23f87a72f0162","url":"f05d2e09.fc758764.js"},{"revision":"1f5adddc020b97876ed38242ae997e31","url":"f09dd44d.b739fd3c.js"},{"revision":"1718c09ad5fe3743fc6cfc5a35498ab8","url":"f0d21e25.75f08b56.js"},{"revision":"9a5061645e1bfd35434bbcafd7b4866e","url":"f1615df7.f0cea149.js"},{"revision":"4eb4da95fd937ba34ad03ea2ebf56667","url":"f1980bbd.738d8093.js"},{"revision":"91d7676d488fab70fb53b3fd80c89418","url":"f314bcd3.45794149.js"},{"revision":"c9ca023172bab6979aafc9d44e43663f","url":"f3cee438.3d79461d.js"},{"revision":"7faaf3070f102a02ec164bc294c72158","url":"f4326478.c682ae66.js"},{"revision":"9f7601f06b674780d0360ae180f4b404","url":"f47c3fa9.4ae68f0f.js"},{"revision":"a36b036cfee4c3ddd0f4add22362e480","url":"f4be8a09.d6b0d3be.js"},{"revision":"61babf4af35cae392330ed79ffa8a303","url":"f71e9104.7f153a0d.js"},{"revision":"d3c17c1dda364d7913d867a77e557445","url":"f7489ac7.5f06711e.js"},{"revision":"5e0828d715a801dae2647210d119cfa4","url":"f7975823.91ebe49c.js"},{"revision":"fb6aebdb34bae014eab01de70beb287d","url":"f976e792.fdbf4dd1.js"},{"revision":"2cb8aad977a6eb6a17ed14d71473db0f","url":"fc8299ee.dd98dda1.js"},{"revision":"80aac211a9be9fd311eb084df3e34219","url":"fd96de28.a3fd4fd0.js"},{"revision":"b2c6a018a4b08fc4c3dc3bb99a709c29","url":"fdfbcd02.3436ea6c.js"},{"revision":"eac3fbfadcdf6f2ad358188dbf2eea8c","url":"index.html"},{"revision":"99031a95c623eaa165e4a4748094ef8c","url":"main.8d687b20.js"},{"revision":"e5bcb7d7d9c467b49f4e392c1b8007f5","url":"manifest.json"},{"revision":"16c1afb14ae5c1f6ced50fb766eb9873","url":"runtime~main.d39aee7e.js"},{"revision":"07b2dbc93a9ac5f72f3a99fc3dbccec7","url":"search/index.html"},{"revision":"93089f68226eca4c3bce9e03e2fd801e","url":"styles.b4f37c86.css"},{"revision":"315ea6356f6eeac758864fad61847e11","url":"styles.f5a16c98.js"},{"revision":"9a2c651689c152b8831228182bb290f5","url":"versions/index.html"},{"revision":"6944adc75e18c3b6892eac5fb33e7876","url":"a60c0139b0872e020a78e7df478cd862.svg"},{"revision":"d81d6b71366fb0a6c431a4f97e9380d3","url":"assets/images/banner-apis-bb62d5fc3e3ff0bb4b2dd939e4c8d561.jpg"},{"revision":"6944adc75e18c3b6892eac5fb33e7876","url":"icons/arrow.svg"},{"revision":"a88e8d80f1f9bae15b6710e50f742940","url":"icons/todo112.png"},{"revision":"6b379feb6ffe269cd9f221d40bd04326","url":"icons/todo56.png"},{"revision":"78b6324b1be55e9473b2ab31652d2374","url":"icons/todo84.png"},{"revision":"e6ce79c8fb88a46fcfa745543215ad82","url":"img/action-icon/action_icon.png"},{"revision":"a22ba2d90717b55cdcae021b01f7cbf2","url":"img/action-icon/normal_focus_status_do.png"},{"revision":"048f889ffe6b0600965017a7e3a81aeb","url":"img/action-icon/normal_focus_status_dont.png"},{"revision":"3010755e386823f70dde19a91d270c43","url":"img/action-icon/shape.png"},{"revision":"4ee9c9ddde21b8d3c19ad210a0c67fb3","url":"img/action-icon/size_and_format_2.png"},{"revision":"69aa252ef60d8d0e9943193518f3daee","url":"img/action-icon/size_and_format.png"},{"revision":"7e28fdb4f8cd0b6192ee650c91c0a565","url":"img/action-icon/style.png"},{"revision":"d81d6b71366fb0a6c431a4f97e9380d3","url":"img/api/banner-apis.jpg"},{"revision":"823964ce39fb67fdbdf31009ae7a5b9c","url":"img/basic-navigation/grid_view_2.png"},{"revision":"c806be6d7f91cac382849a57284a18ab","url":"img/basic-navigation/grid_view_3.png"},{"revision":"b86cfb5444780a659c39b482930be6a9","url":"img/basic-navigation/grid_view.png"},{"revision":"bf00bf67bc22852851c3887319c99667","url":"img/basic-navigation/list_view_2.png"},{"revision":"6b5624e164af886bab52f929bf450113","url":"img/basic-navigation/list_view.png"},{"revision":"17dbdff5c9d7ee8c0c2c530a25d9aa7f","url":"img/basic-navigation/tab_view.png"},{"revision":"37f0a147d00b3f38958e3f0845a2412a","url":"img/env-setup/adb-windows.png"},{"revision":"991f6366463e9b88a0156825b2818e5d","url":"img/env-setup/debugger.png"},{"revision":"375424568ff825331707b468f04a6fbf","url":"img/env-setup/settings-device.png"},{"revision":"293a0667f9bd17a38e0da9ec28cb17b7","url":"img/env-setup/webide-windows-app.png"},{"revision":"1e62845f33f77580c1021c2a18477973","url":"img/env-setup/win-firefox-config.png"},{"revision":"459b4dfc575b3b34be041db25bf8950e","url":"img/favicon.png"},{"revision":"c38e0a71c1c376f547c6b2ce8e40cc8a","url":"img/first-hosted-app/first-hosted-app-install.png"},{"revision":"33e8116455a41bdfd36fa0b14aed7562","url":"img/footer-logo.svg"},{"revision":"386a1e0c266f69b7502b18c95a7224e6","url":"img/home-center/_architecture/architecture.png"},{"revision":"0e87617c19d1cf1b76b88c63bb00a9e7","url":"img/home-center/_architecture/architecture@2x.png"},{"revision":"ab1895dbb806912af642794934efe039","url":"img/home-center/_architecture/architecture@3x.png"},{"revision":"c6af9835d2eb0b079bf652c952127794","url":"img/home-center/_architecture/banner.jpg"},{"revision":"c6af9835d2eb0b079bf652c952127794","url":"img/home-center/_kaistore/banner.jpg"},{"revision":"4e1f266b1f9f0655aa96fd8959bbecb6","url":"img/home-center/_kaistore/kaistore.png"},{"revision":"21508ca8295ae6599bd816ff3f58e129","url":"img/home-center/_presentation/banner.jpg"},{"revision":"56396a91e1138e8b59e10969a4e53fb3","url":"img/home-center/_presentation/kaios.png"},{"revision":"c5cca6b286b11077b3424c62d11113dd","url":"img/home-center/_presentation/kaios@2x.png"},{"revision":"407cf576aaec5ff559b42ae16a87dbef","url":"img/home-center/_presentation/kaios@3x.png"},{"revision":"ce4c414b86af90e13e6a4eb9f60c2f85","url":"img/home-center/_technologies/tehnologies-feature-phone.png"},{"revision":"65326763eab365bd81dbea570389bcf9","url":"img/home-center/_technologies/tehnologies-feature-phone@2x.png"},{"revision":"95882c0273bda5ecdace076c9bf8bc37","url":"img/home-center/_technologies/tehnologies-feature-phone@3x.png"},{"revision":"d7f0bc43cd67a5bf314e6258f30b4d1e","url":"img/hosted-app/address_bar.png"},{"revision":"185d8d0b1e2c40d06ec495f082925dc0","url":"img/hosted-app/cursor_off.png"},{"revision":"76ba51830c5d9cb46a38ca6526b8e75c","url":"img/hosted-app/cursor_on.png"},{"revision":"997852b344aa4b1c793855c11bd92e48","url":"img/hosted-app/error_handling.png"},{"revision":"c68d11b4a8117172e1d22d08e06f9fc1","url":"img/hosted-app/full-screen.png"},{"revision":"3a565b6ab8fab6847dedaef823096943","url":"img/hosted-app/fullscreen_off.png"},{"revision":"ec24e6cbaef56ef4e6d60aead38942aa","url":"img/hosted-app/fullscreen_on.png"},{"revision":"a14ffb58bbfdb33e865af4199d116422","url":"img/hosted-app/input.png"},{"revision":"7e6a8e2a511b618d60d5dafa905bb814","url":"img/hosted-app/loading_off.png"},{"revision":"7263907b0688ae97e4eb30f4bdb89f25","url":"img/hosted-app/loading_on.png"},{"revision":"f97263c8679e3b63bc31da480447a92d","url":"img/hosted-app/self-test-hosted-app.png"},{"revision":"7c9739a003426d55f650f948235a6b59","url":"img/hosted-app/shortcut_2.png"},{"revision":"5f2662100ce5f645bc9f7e58f130458d","url":"img/hosted-app/software_key.png"},{"revision":"1dceffd936cd899d4f552b0ebecf9148","url":"img/hosted-app/volume.png"},{"revision":"727fab71ce9f30d66780fbdbea79f007","url":"img/hosted-app/webpage_in_hosted_app_2.png"},{"revision":"4e29d5417534710d96de99afd79078aa","url":"img/hosted-app/webpage_in_hosted_app.png"},{"revision":"2d5b55d5cdc5464bca6214f57baa8dce","url":"img/introduction/developer-people.png"},{"revision":"144ab0231fd5c16fcde732afc759f79a","url":"img/introduction/kaios_architecture.jpg"},{"revision":"4712befdda663e981e8b73de25c80d28","url":"img/introduction/next_architecture.png"},{"revision":"020452336cb923bccf12449eac7eec88","url":"img/introduction/RIL-2.5.png"},{"revision":"0786f5b79a32e57453d2c375bd857a42","url":"img/introduction/RIL-3.0.png"},{"revision":"e73ae4b484c64a42422929ff8bdd13bb","url":"img/key/back_clear_end_power.png"},{"revision":"ff914def6b1b41a5255984c7b02ef01b","url":"img/key/back_clear.png"},{"revision":"e94db0319f57d52409c1c26b5ea5469c","url":"img/key/overview.png"},{"revision":"c28029fd2b8b23545a8ad1b5589c9d34","url":"img/key/softkey.png"},{"revision":"f3524f3b42942828a73d6fc640dab081","url":"img/launcher-icon/all_apps_grid_view.png"},{"revision":"540494c9096c0d115fff26f8f16935fd","url":"img/launcher-icon/all_apps_list_view.png"},{"revision":"25aaf3c7be78b6cdb7aea783a41277b6","url":"img/launcher-icon/all_apps_single_view.png"},{"revision":"9a1167748d597dfff42163cf6b9e9188","url":"img/launcher-icon/all_icons_view.png"},{"revision":"3852a89e264bea2f62d50cc854e8d85d","url":"img/launcher-icon/concise_icon.png"},{"revision":"9981e3e6ec6d1bceb764fb9fef4d1967","url":"img/launcher-icon/focus_do.png"},{"revision":"a9fa15c68b7841c05a7159309498020b","url":"img/launcher-icon/focus_dont.png"},{"revision":"72f8905086297a65c193346b5d8c3256","url":"img/launcher-icon/focus_state.png"},{"revision":"d90a41b10fe4a49e46c7c6749d107be9","url":"img/launcher-icon/icon_size_do.png"},{"revision":"919033adb9781841e7f3c61f616bb65c","url":"img/launcher-icon/icon_size_dont.png"},{"revision":"3b3340b768773f2e5798614b31bff655","url":"img/launcher-icon/icons.png"},{"revision":"cf25b333037a68a5c808fd2cffe7edf6","url":"img/launcher-icon/kaios_store.png"},{"revision":"dd4e98471d2cb3df4fb01b8fedd39834","url":"img/launcher-icon/launch_screen.png"},{"revision":"de1163f19a830d5faa44ea357504e860","url":"img/launcher-icon/notices.png"},{"revision":"40b2b866ab4960305c94625d23fbbe59","url":"img/launcher-icon/round_shape_drop_shadow.png"},{"revision":"20ff8410081524b91959ae0d7ed03ca1","url":"img/launcher-icon/round_shape.png"},{"revision":"0738ab964c095209055f7a19632abf98","url":"img/launcher-icon/square_shape_radius.png"},{"revision":"7943520e7c10fef9383f4dea80e40780","url":"img/launcher-icon/square_shape.png"},{"revision":"21deee173af9c5ed9a67ed198b3c15a1","url":"img/launcher-icon/transparency_icon.png"},{"revision":"3aa9b312129e752094ca4e709895e75f","url":"img/logo.svg"},{"revision":"7dd1e8338da5567a6edeead0e1a37a30","url":"img/manifest/featurephone.png"},{"revision":"10a395d22ab20b068ab3b4d8b1457e0d","url":"img/marketing-banner/marketing_banner.png"},{"revision":"e0ff41abd7963f36920c8927f92c114f","url":"img/marketing-banner/size_store.png"},{"revision":"f7a49b9ee1d9ef3356d19b2a034e8b87","url":"img/marketing-banner/size.png"},{"revision":"b2a5a78865e98dccdcd45750f465bd1a","url":"img/marketing-banner/theme_color.png"},{"revision":"a8b80c99686e09083b7a672eb500fdf7","url":"img/marketing-banner/usage.png"},{"revision":"27cd36fb077d247461bd4a54376a2c83","url":"img/packaged-or-hosted/WhichAppTypeChoose.png"},{"revision":"5ca16f279ae334bf4ccd80dede6a54bb","url":"img/run-and-debug/firefox_about_memory_report.png"},{"revision":"cbaca0b9da47bd8cd63faa82893292fc","url":"img/run-and-debug/firefox_about_memory.png"},{"revision":"9a517c4aab75e2768d2b6e3d0f775e5b","url":"img/run-and-debug/webide-inspector.png"},{"revision":"d2cee8a14a3b4d5d660e272215d834bb","url":"img/run-and-debug/webide.png"},{"revision":"9edafb6f3cd52e13c5dd16dbd9597568","url":"img/security-access/securityframework.png"},{"revision":"4117f288b447c57eb9b2f540ffa3078a","url":"img/simulator/debug_app.png"},{"revision":"678ed06fb65929bb7aed639a020c6306","url":"img/simulator/install_and_run_1.png"},{"revision":"75e6091cad40c1dc4184d6a5d2f0989d","url":"img/simulator/install_and_run_2.png"},{"revision":"55691666e37da1fee5eb7bdbaf389c91","url":"img/simulator/kaiosrt_logo.png"},{"revision":"2c1693ff0a15b2c86c69376103fb03ca","url":"img/simulator/menu.png"},{"revision":"2d2965e69af2a57bb269161e14be8634","url":"img/simulator/new_app.png"},{"revision":"b05fd6f2ff7c2292ee0667c5b494cb25","url":"img/simulator/simulator.png"},{"revision":"b76702d7ebff3c02fc6bd6df2cf2a40f","url":"img/submit-to-kaistore/app_name.png"},{"revision":"b41d4e896d4a790d12057c33282fae94","url":"img/submit-to-kaistore/app_status_website.png"},{"revision":"35d98ef307de30a857d14efe4fe9b110","url":"img/submit-to-kaistore/app_status.png"},{"revision":"b904785f1f1393ddf9d9462e62a0780c","url":"img/submit-to-kaistore/description.png"},{"revision":"4e2b05c89d014756b7c4b82bbf8d28f7","url":"img/submit-to-kaistore/downloading_tag.png"},{"revision":"3f9ce4345610dde6d1f0a58bcb4f16f6","url":"img/submit-to-kaistore/enable_tag_website.png"},{"revision":"f34611e1a655d4a6395f5f28f644e059","url":"img/submit-to-kaistore/enabled_tag.png"},{"revision":"22f0ea8325e03c609ffd872d5443ec13","url":"img/submit-to-kaistore/free_tag.png"},{"revision":"1525498439d6756ec880e458810c86b8","url":"img/submit-to-kaistore/icon.png"},{"revision":"10a395d22ab20b068ab3b4d8b1457e0d","url":"img/submit-to-kaistore/marketing_banner.png"},{"revision":"4f2d95c06580b3fbd2afe78ea003f472","url":"img/submit-to-kaistore/pin_tag.png"},{"revision":"496fd689e52d12940b64826df338ddad","url":"img/submit-to-kaistore/presentation.png"},{"revision":"789797e6ba724c91c07bdd7c706fdaa6","url":"img/submit-to-kaistore/price_tag.png"},{"revision":"5e676b57e401025249b05c3a27c6eac5","url":"img/submit-to-kaistore/subtitle.png"},{"revision":"f2ca873ff35c5841ef11ae6b255fa708","url":"img/submit-to-kaistore/theme_color.png"},{"revision":"0eba5eee309f1c09ac4876db918a4f7f","url":"img/submit-to-kaistore/update_tag.png"},{"revision":"3b8fbcd7a37d4f91906c6b1a8245525b","url":"img/test-your-app/remotedebugger1.png"},{"revision":"d7956b510f107be9c05310b7367a4643","url":"img/test-your-app/remotedebugger2.png"},{"revision":"f3109d7fde5c0ace71137dc3bc515a5a","url":"img/test-your-app/remotedebugger3.png"},{"revision":"8e76ceda238af5b7dfd65f214d908852","url":"img/test-your-app/remotedebugger4.png"},{"revision":"30c4e8897b4856aeb7a03a3310da3b2b","url":"img/test-your-app/remotedebugger5.png"},{"revision":"4933b89a1fd9591de20acfbf955a100c","url":"img/test-your-app/remotedebugger6.png"},{"revision":"9002f41ad0f22b74484579bf60663f39","url":"img/test-your-app/simulator-package.png"},{"revision":"fbc75d5bad6f5d465ec64891afca3377","url":"img/test-your-app/simulator-play.gif"},{"revision":"9733a24f0733c0a512f68e12bd3829fd","url":"img/test-your-app/simulator-play.png"},{"revision":"a2d567d1a88f2f96e80cb59483d1c578","url":"img/test-your-app/simulator-project.png"},{"revision":"6b8f1500aaf2bc59dac50bd0a3931458","url":"img/test-your-app/simulator-simulator.png"},{"revision":"b05fd6f2ff7c2292ee0667c5b494cb25","url":"img/test-your-app/simulator.png"},{"revision":"7911e824db0d6354e3873e7265a73d9b","url":"img/test-your-app/webide-remote-runtime-debug.png"},{"revision":"64374b6b0457730748138b4887823851","url":"img/test-your-app/webide-remote-runtime-debugging.png"},{"revision":"b87e2ec09b880e5fc7713798613d112f","url":"img/test-your-app/webide-remote-runtime-package.png"},{"revision":"f6a0e8ffe873b129f410b6297fb460ca","url":"img/test-your-app/webide-remote-runtime-play.png"},{"revision":"60d6dc84d8fa10742f692adb8b360d9c","url":"img/test-your-app/webide-remote-runtime-port.png"},{"revision":"7515012878bbac1ded645a95cf620089","url":"img/test-your-app/webide-remote-runtime-project.png"},{"revision":"10e80d4b739f91998d326177983f6875","url":"img/test-your-app/webide-remote-runtime.png"},{"revision":"de05a60b4e06523f63d020cafda86907","url":"img/typography/font_sizes.png"},{"revision":"f0f43f9ab2c5d4d2ebdb38dc22d4eb0d","url":"img/ui-component/button_2.png"},{"revision":"17d5386ef49ded7c8b00ccd2bfcfc6f5","url":"img/ui-component/button.png"},{"revision":"d1e622b1bd4391c5033e1212edef8fbb","url":"img/ui-component/capitalization_2.png"},{"revision":"8247fa7c66bf46c4061ad48a2c41f165","url":"img/ui-component/capitalization_3.png"},{"revision":"4726948893aae16c7bd4ae74c895d30b","url":"img/ui-component/capitalization.png"},{"revision":"c259978fde0d3054bd910af424177737","url":"img/ui-component/controls_2.png"},{"revision":"ec84ccf3a2112fa1cd57b17ef54c1b37","url":"img/ui-component/controls.png"},{"revision":"64f548623c755f839765df20dfdfacd4","url":"img/ui-component/date_value_selector.png"},{"revision":"d23356841b325a09ccda4e89151151bb","url":"img/ui-component/dialog_2.png"},{"revision":"1530f78ddad641862521b2cccfe2d1ab","url":"img/ui-component/dialog.png"},{"revision":"9eda141a555ac830fae47a3957454231","url":"img/ui-component/header_1.png"},{"revision":"09e7df31abf99aca89919c4f9876ff69","url":"img/ui-component/header_2.png"},{"revision":"f7c309fd383ec8ce582e9d1027ea2894","url":"img/ui-component/input_2.png"},{"revision":"5a4dbc95589d413706daf3f25014240c","url":"img/ui-component/input.png"},{"revision":"9310060e5aac5521da3cb796b918375b","url":"img/ui-component/list_2.png"},{"revision":"5c7d36ba5f86b32eb99c86879c4897b1","url":"img/ui-component/list.png"},{"revision":"b0af653fda49a33a2b53549082b00852","url":"img/ui-component/multiple_select.png"},{"revision":"71f4e9b202d97448247d05d090e45fff","url":"img/ui-component/notice_2.png"},{"revision":"90784c64274a47f35ab37dfe2b9ae517","url":"img/ui-component/notice.png"},{"revision":"d8a3376017743dd75ac2d6cd51676abb","url":"img/ui-component/option_menu_2.png"},{"revision":"9499fb07039cd3336bf630a996955dba","url":"img/ui-component/option_menu.png"},{"revision":"d874b6e506c609f9df6c309897437001","url":"img/ui-component/progress_2.png"},{"revision":"7a9cd19249f4177c1197f658485b5e93","url":"img/ui-component/progress.png"},{"revision":"136966562a973bc4d67355eee1b670fe","url":"img/ui-component/separator_2.png"},{"revision":"99b8a754f7cf111d175cce631d47d2aa","url":"img/ui-component/separator.png"},{"revision":"338f75d4d9aae0cab56178866954c222","url":"img/ui-component/single_select.png"},{"revision":"732b7f315eb7164c4ce410c32f3471b2","url":"img/ui-component/slider_2.png"},{"revision":"b413df2b4a051734390151d63df74172","url":"img/ui-component/slider.png"},{"revision":"2eefc4785f6638c4de06cd6644294105","url":"img/ui-component/software_key_2.png"},{"revision":"d71f3a2f250d9370bb4fe82f95fbead6","url":"img/ui-component/software_key.png"},{"revision":"ed4a5ac60371027e3ae15377e75efb0b","url":"img/ui-component/tab_2.png"},{"revision":"2274ba3f1b36a44bc3818e7a72b6b911","url":"img/ui-component/tab.png"},{"revision":"80ee86a890256488fbc3548d827db349","url":"img/ui-component/time_value_selector.png"},{"revision":"1609818338c7c63de0801745b64b9229","url":"img/ui-component/toast_2.png"},{"revision":"b237941cb93771a175d9113999ef38a3","url":"img/ui-component/toast.png"},{"revision":"2ff105573e51c027650b9d6444933261","url":"img/ui-component/ui_component.png"},{"revision":"8d04d316f4d1777793ee773fcbf16cea","url":"img/undraw_docusaurus_mountain.svg"},{"revision":"3d3d63efa464a74e2befd1569465ed21","url":"img/undraw_docusaurus_react.svg"},{"revision":"932b535fc71feb29877bc4b9d708b1d0","url":"img/undraw_docusaurus_tree.svg"}];
  const controller = new workbox_precaching__WEBPACK_IMPORTED_MODULE_0__["PrecacheController"]();

  if (params.offlineMode) {
    controller.addToCacheList(precacheManifest);
  }

  await runSWCustomCode(params);

  self.addEventListener('install', (event) => {
    event.waitUntil(controller.install());
  });

  self.addEventListener('activate', (event) => {
    event.waitUntil(controller.activate());
  });

  self.addEventListener('fetch', async (event) => {
    if (params.offlineMode) {
      const requestURL = event.request.url;
      const possibleURLs = getPossibleURLs(requestURL);
      for (let i = 0; i < possibleURLs.length; i += 1) {
        const possibleURL = possibleURLs[i];
        const cacheKey = controller.getCacheKeyForURL(possibleURL);
        if (cacheKey) {
          if (params.debug) {
            console.log('[Docusaurus-PWA][SW]: serving cached asset', {
              requestURL,
              possibleURL,
              possibleURLs,
              cacheKey,
            });
          }
          event.respondWith(caches.match(cacheKey));
          break;
        }
      }
    }
  });

  self.addEventListener('message', async (event) => {
    const type = event.data && event.data.type;

    if (type === 'SKIP_WAITING') {
      self.skipWaiting();
    }
  });
})();


/***/ }),

/***/ "./node_modules/workbox-core/_private/WorkboxError.js":
/*!************************************************************!*\
  !*** ./node_modules/workbox-core/_private/WorkboxError.js ***!
  \************************************************************/
/*! exports provided: WorkboxError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkboxError", function() { return WorkboxError; });
/* harmony import */ var _models_messages_messageGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/messages/messageGenerator.js */ "./node_modules/workbox-core/models/messages/messageGenerator.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Workbox errors should be thrown with this class.
 * This allows use to ensure the type easily in tests,
 * helps developers identify errors from workbox
 * easily and allows use to optimise error
 * messages correctly.
 *
 * @private
 */
class WorkboxError extends Error {
    /**
     *
     * @param {string} errorCode The error code that
     * identifies this particular error.
     * @param {Object=} details Any relevant arguments
     * that will help developers identify issues should
     * be added as a key on the context object.
     */
    constructor(errorCode, details) {
        const message = Object(_models_messages_messageGenerator_js__WEBPACK_IMPORTED_MODULE_0__["messageGenerator"])(errorCode, details);
        super(message);
        this.name = errorCode;
        this.details = details;
    }
}



/***/ }),

/***/ "./node_modules/workbox-core/_private/assert.js":
/*!******************************************************!*\
  !*** ./node_modules/workbox-core/_private/assert.js ***!
  \******************************************************/
/*! exports provided: assert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assert", function() { return finalAssertExports; });
/* harmony import */ var _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/*
 * This method throws if the supplied value is not an array.
 * The destructed values are required to produce a meaningful error for users.
 * The destructed and restructured object is so it's clear what is
 * needed.
 */
const isArray = (value, details) => {
    if (!Array.isArray(value)) {
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__["WorkboxError"]('not-an-array', details);
    }
};
const hasMethod = (object, expectedMethod, details) => {
    const type = typeof object[expectedMethod];
    if (type !== 'function') {
        details['expectedMethod'] = expectedMethod;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__["WorkboxError"]('missing-a-method', details);
    }
};
const isType = (object, expectedType, details) => {
    if (typeof object !== expectedType) {
        details['expectedType'] = expectedType;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__["WorkboxError"]('incorrect-type', details);
    }
};
const isInstance = (object, expectedClass, details) => {
    if (!(object instanceof expectedClass)) {
        details['expectedClass'] = expectedClass;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__["WorkboxError"]('incorrect-class', details);
    }
};
const isOneOf = (value, validValues, details) => {
    if (!validValues.includes(value)) {
        details['validValueDescription'] =
            `Valid values are ${JSON.stringify(validValues)}.`;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__["WorkboxError"]('invalid-value', details);
    }
};
const isArrayOfClass = (value, expectedClass, details) => {
    const error = new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__["WorkboxError"]('not-array-of-class', details);
    if (!Array.isArray(value)) {
        throw error;
    }
    for (const item of value) {
        if (!(item instanceof expectedClass)) {
            throw error;
        }
    }
};
const finalAssertExports =  false ? undefined : {
    hasMethod,
    isArray,
    isInstance,
    isOneOf,
    isType,
    isArrayOfClass,
};



/***/ }),

/***/ "./node_modules/workbox-core/_private/cacheNames.js":
/*!**********************************************************!*\
  !*** ./node_modules/workbox-core/_private/cacheNames.js ***!
  \**********************************************************/
/*! exports provided: cacheNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cacheNames", function() { return cacheNames; });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const _cacheNameDetails = {
    googleAnalytics: 'googleAnalytics',
    precache: 'precache-v2',
    prefix: 'workbox',
    runtime: 'runtime',
    suffix: typeof registration !== 'undefined' ? registration.scope : '',
};
const _createCacheName = (cacheName) => {
    return [_cacheNameDetails.prefix, cacheName, _cacheNameDetails.suffix]
        .filter((value) => value && value.length > 0)
        .join('-');
};
const eachCacheNameDetail = (fn) => {
    for (const key of Object.keys(_cacheNameDetails)) {
        fn(key);
    }
};
const cacheNames = {
    updateDetails: (details) => {
        eachCacheNameDetail((key) => {
            if (typeof details[key] === 'string') {
                _cacheNameDetails[key] = details[key];
            }
        });
    },
    getGoogleAnalyticsName: (userCacheName) => {
        return userCacheName || _createCacheName(_cacheNameDetails.googleAnalytics);
    },
    getPrecacheName: (userCacheName) => {
        return userCacheName || _createCacheName(_cacheNameDetails.precache);
    },
    getPrefix: () => {
        return _cacheNameDetails.prefix;
    },
    getRuntimeName: (userCacheName) => {
        return userCacheName || _createCacheName(_cacheNameDetails.runtime);
    },
    getSuffix: () => {
        return _cacheNameDetails.suffix;
    },
};


/***/ }),

/***/ "./node_modules/workbox-core/_private/cacheWrapper.js":
/*!************************************************************!*\
  !*** ./node_modules/workbox-core/_private/cacheWrapper.js ***!
  \************************************************************/
/*! exports provided: cacheWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cacheWrapper", function() { return cacheWrapper; });
/* harmony import */ var _assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var _executeQuotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./executeQuotaErrorCallbacks.js */ "./node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js");
/* harmony import */ var _getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getFriendlyURL.js */ "./node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _utils_pluginUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/pluginUtils.js */ "./node_modules/workbox-core/utils/pluginUtils.js");
/* harmony import */ var _WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_6__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/







/**
 * Checks the list of plugins for the cacheKeyWillBeUsed callback, and
 * executes any of those callbacks found in sequence. The final `Request` object
 * returned by the last plugin is treated as the cache key for cache reads
 * and/or writes.
 *
 * @param {Object} options
 * @param {Request} options.request
 * @param {string} options.mode
 * @param {Array<Object>} [options.plugins=[]]
 * @return {Promise<Request>}
 *
 * @private
 * @memberof module:workbox-core
 */
const _getEffectiveRequest = async ({ request, mode, plugins = [], }) => {
    const cacheKeyWillBeUsedPlugins = _utils_pluginUtils_js__WEBPACK_IMPORTED_MODULE_4__["pluginUtils"].filter(plugins, "cacheKeyWillBeUsed" /* CACHE_KEY_WILL_BE_USED */);
    let effectiveRequest = request;
    for (const plugin of cacheKeyWillBeUsedPlugins) {
        effectiveRequest = await plugin["cacheKeyWillBeUsed" /* CACHE_KEY_WILL_BE_USED */].call(plugin, { mode, request: effectiveRequest });
        if (typeof effectiveRequest === 'string') {
            effectiveRequest = new Request(effectiveRequest);
        }
        if (true) {
            _assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].isInstance(effectiveRequest, Request, {
                moduleName: 'Plugin',
                funcName: "cacheKeyWillBeUsed" /* CACHE_KEY_WILL_BE_USED */,
                isReturnValueProblem: true,
            });
        }
    }
    return effectiveRequest;
};
/**
 * This method will call cacheWillUpdate on the available plugins (or use
 * status === 200) to determine if the Response is safe and valid to cache.
 *
 * @param {Object} options
 * @param {Request} options.request
 * @param {Response} options.response
 * @param {Event} [options.event]
 * @param {Array<Object>} [options.plugins=[]]
 * @return {Promise<Response>}
 *
 * @private
 * @memberof module:workbox-core
 */
const _isResponseSafeToCache = async ({ request, response, event, plugins = [], }) => {
    let responseToCache = response;
    let pluginsUsed = false;
    for (const plugin of plugins) {
        if ("cacheWillUpdate" /* CACHE_WILL_UPDATE */ in plugin) {
            pluginsUsed = true;
            const pluginMethod = plugin["cacheWillUpdate" /* CACHE_WILL_UPDATE */];
            responseToCache = await pluginMethod.call(plugin, {
                request,
                response: responseToCache,
                event,
            });
            if (true) {
                if (responseToCache) {
                    _assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].isInstance(responseToCache, Response, {
                        moduleName: 'Plugin',
                        funcName: "cacheWillUpdate" /* CACHE_WILL_UPDATE */,
                        isReturnValueProblem: true,
                    });
                }
            }
            if (!responseToCache) {
                break;
            }
        }
    }
    if (!pluginsUsed) {
        if (true) {
            if (responseToCache) {
                if (responseToCache.status !== 200) {
                    if (responseToCache.status === 0) {
                        _logger_js__WEBPACK_IMPORTED_MODULE_3__["logger"].warn(`The response for '${request.url}' is an opaque ` +
                            `response. The caching strategy that you're using will not ` +
                            `cache opaque responses by default.`);
                    }
                    else {
                        _logger_js__WEBPACK_IMPORTED_MODULE_3__["logger"].debug(`The response for '${request.url}' returned ` +
                            `a status code of '${response.status}' and won't be cached as a ` +
                            `result.`);
                    }
                }
            }
        }
        responseToCache = responseToCache && responseToCache.status === 200 ?
            responseToCache : undefined;
    }
    return responseToCache ? responseToCache : null;
};
/**
 * This is a wrapper around cache.match().
 *
 * @param {Object} options
 * @param {string} options.cacheName Name of the cache to match against.
 * @param {Request} options.request The Request that will be used to look up
 *     cache entries.
 * @param {Event} [options.event] The event that prompted the action.
 * @param {Object} [options.matchOptions] Options passed to cache.match().
 * @param {Array<Object>} [options.plugins=[]] Array of plugins.
 * @return {Response} A cached response if available.
 *
 * @private
 * @memberof module:workbox-core
 */
const matchWrapper = async ({ cacheName, request, event, matchOptions, plugins = [], }) => {
    const cache = await self.caches.open(cacheName);
    const effectiveRequest = await _getEffectiveRequest({
        plugins, request, mode: 'read'
    });
    let cachedResponse = await cache.match(effectiveRequest, matchOptions);
    if (true) {
        if (cachedResponse) {
            _logger_js__WEBPACK_IMPORTED_MODULE_3__["logger"].debug(`Found a cached response in '${cacheName}'.`);
        }
        else {
            _logger_js__WEBPACK_IMPORTED_MODULE_3__["logger"].debug(`No cached response found in '${cacheName}'.`);
        }
    }
    for (const plugin of plugins) {
        if ("cachedResponseWillBeUsed" /* CACHED_RESPONSE_WILL_BE_USED */ in plugin) {
            const pluginMethod = plugin["cachedResponseWillBeUsed" /* CACHED_RESPONSE_WILL_BE_USED */];
            cachedResponse = await pluginMethod.call(plugin, {
                cacheName,
                event,
                matchOptions,
                cachedResponse,
                request: effectiveRequest,
            });
            if (true) {
                if (cachedResponse) {
                    _assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].isInstance(cachedResponse, Response, {
                        moduleName: 'Plugin',
                        funcName: "cachedResponseWillBeUsed" /* CACHED_RESPONSE_WILL_BE_USED */,
                        isReturnValueProblem: true,
                    });
                }
            }
        }
    }
    return cachedResponse;
};
/**
 * Wrapper around cache.put().
 *
 * Will call `cacheDidUpdate` on plugins if the cache was updated, using
 * `matchOptions` when determining what the old entry is.
 *
 * @param {Object} options
 * @param {string} options.cacheName
 * @param {Request} options.request
 * @param {Response} options.response
 * @param {Event} [options.event]
 * @param {Array<Object>} [options.plugins=[]]
 * @param {Object} [options.matchOptions]
 *
 * @private
 * @memberof module:workbox-core
 */
const putWrapper = async ({ cacheName, request, response, event, plugins = [], matchOptions, }) => {
    if (true) {
        if (request.method && request.method !== 'GET') {
            throw new _WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__["WorkboxError"]('attempt-to-cache-non-get-request', {
                url: Object(_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__["getFriendlyURL"])(request.url),
                method: request.method,
            });
        }
    }
    const effectiveRequest = await _getEffectiveRequest({
        plugins, request, mode: 'write'
    });
    if (!response) {
        if (true) {
            _logger_js__WEBPACK_IMPORTED_MODULE_3__["logger"].error(`Cannot cache non-existent response for ` +
                `'${Object(_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__["getFriendlyURL"])(effectiveRequest.url)}'.`);
        }
        throw new _WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__["WorkboxError"]('cache-put-with-no-response', {
            url: Object(_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__["getFriendlyURL"])(effectiveRequest.url),
        });
    }
    const responseToCache = await _isResponseSafeToCache({
        event,
        plugins,
        response,
        request: effectiveRequest,
    });
    if (!responseToCache) {
        if (true) {
            _logger_js__WEBPACK_IMPORTED_MODULE_3__["logger"].debug(`Response '${Object(_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__["getFriendlyURL"])(effectiveRequest.url)}' will ` +
                `not be cached.`, responseToCache);
        }
        return;
    }
    const cache = await self.caches.open(cacheName);
    const updatePlugins = _utils_pluginUtils_js__WEBPACK_IMPORTED_MODULE_4__["pluginUtils"].filter(plugins, "cacheDidUpdate" /* CACHE_DID_UPDATE */);
    const oldResponse = updatePlugins.length > 0 ?
        await matchWrapper({ cacheName, matchOptions, request: effectiveRequest }) :
        null;
    if (true) {
        _logger_js__WEBPACK_IMPORTED_MODULE_3__["logger"].debug(`Updating the '${cacheName}' cache with a new Response for ` +
            `${Object(_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__["getFriendlyURL"])(effectiveRequest.url)}.`);
    }
    try {
        await cache.put(effectiveRequest, responseToCache);
    }
    catch (error) {
        // See https://developer.mozilla.org/en-US/docs/Web/API/DOMException#exception-QuotaExceededError
        if (error.name === 'QuotaExceededError') {
            await Object(_executeQuotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__["executeQuotaErrorCallbacks"])();
        }
        throw error;
    }
    for (const plugin of updatePlugins) {
        await plugin["cacheDidUpdate" /* CACHE_DID_UPDATE */].call(plugin, {
            cacheName,
            event,
            oldResponse,
            newResponse: responseToCache,
            request: effectiveRequest,
        });
    }
};
const cacheWrapper = {
    put: putWrapper,
    match: matchWrapper,
};


/***/ }),

/***/ "./node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js ***!
  \**********************************************************************************/
/*! exports provided: canConstructResponseFromBodyStream */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canConstructResponseFromBodyStream", function() { return canConstructResponseFromBodyStream; });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

let supportStatus;
/**
 * A utility function that determines whether the current browser supports
 * constructing a new `Response` from a `response.body` stream.
 *
 * @return {boolean} `true`, if the current browser can successfully
 *     construct a `Response` from a `response.body` stream, `false` otherwise.
 *
 * @private
 */
function canConstructResponseFromBodyStream() {
    if (supportStatus === undefined) {
        const testResponse = new Response('');
        if ('body' in testResponse) {
            try {
                new Response(testResponse.body);
                supportStatus = true;
            }
            catch (error) {
                supportStatus = false;
            }
        }
        supportStatus = false;
    }
    return supportStatus;
}



/***/ }),

/***/ "./node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js":
/*!**************************************************************************!*\
  !*** ./node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js ***!
  \**************************************************************************/
/*! exports provided: executeQuotaErrorCallbacks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "executeQuotaErrorCallbacks", function() { return executeQuotaErrorCallbacks; });
/* harmony import */ var _private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/quotaErrorCallbacks.js */ "./node_modules/workbox-core/models/quotaErrorCallbacks.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * Runs all of the callback functions, one at a time sequentially, in the order
 * in which they were registered.
 *
 * @memberof module:workbox-core
 * @private
 */
async function executeQuotaErrorCallbacks() {
    if (true) {
        _private_logger_js__WEBPACK_IMPORTED_MODULE_0__["logger"].log(`About to run ${_models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__["quotaErrorCallbacks"].size} ` +
            `callbacks to clean up caches.`);
    }
    for (const callback of _models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__["quotaErrorCallbacks"]) {
        await callback();
        if (true) {
            _private_logger_js__WEBPACK_IMPORTED_MODULE_0__["logger"].log(callback, 'is complete.');
        }
    }
    if (true) {
        _private_logger_js__WEBPACK_IMPORTED_MODULE_0__["logger"].log('Finished running callbacks.');
    }
}



/***/ }),

/***/ "./node_modules/workbox-core/_private/fetchWrapper.js":
/*!************************************************************!*\
  !*** ./node_modules/workbox-core/_private/fetchWrapper.js ***!
  \************************************************************/
/*! exports provided: fetchWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchWrapper", function() { return fetchWrapper; });
/* harmony import */ var _WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _assert_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var _private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_private/getFriendlyURL.js */ "./node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var _utils_pluginUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/pluginUtils.js */ "./node_modules/workbox-core/utils/pluginUtils.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_5__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/






/**
 * Wrapper around the fetch API.
 *
 * Will call requestWillFetch on available plugins.
 *
 * @param {Object} options
 * @param {Request|string} options.request
 * @param {Object} [options.fetchOptions]
 * @param {ExtendableEvent} [options.event]
 * @param {Array<Object>} [options.plugins=[]]
 * @return {Promise<Response>}
 *
 * @private
 * @memberof module:workbox-core
 */
const wrappedFetch = async ({ request, fetchOptions, event, plugins = [], }) => {
    if (typeof request === 'string') {
        request = new Request(request);
    }
    // We *should* be able to call `await event.preloadResponse` even if it's
    // undefined, but for some reason, doing so leads to errors in our Node unit
    // tests. To work around that, explicitly check preloadResponse's value first.
    if (event instanceof FetchEvent && event.preloadResponse) {
        const possiblePreloadResponse = await event.preloadResponse;
        if (possiblePreloadResponse) {
            if (true) {
                _logger_js__WEBPACK_IMPORTED_MODULE_1__["logger"].log(`Using a preloaded navigation response for ` +
                    `'${Object(_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_3__["getFriendlyURL"])(request.url)}'`);
            }
            return possiblePreloadResponse;
        }
    }
    if (true) {
        _assert_js__WEBPACK_IMPORTED_MODULE_2__["assert"].isInstance(request, Request, {
            paramName: 'request',
            expectedClass: Request,
            moduleName: 'workbox-core',
            className: 'fetchWrapper',
            funcName: 'wrappedFetch',
        });
    }
    const failedFetchPlugins = _utils_pluginUtils_js__WEBPACK_IMPORTED_MODULE_4__["pluginUtils"].filter(plugins, "fetchDidFail" /* FETCH_DID_FAIL */);
    // If there is a fetchDidFail plugin, we need to save a clone of the
    // original request before it's either modified by a requestWillFetch
    // plugin or before the original request's body is consumed via fetch().
    const originalRequest = failedFetchPlugins.length > 0 ?
        request.clone() : null;
    try {
        for (const plugin of plugins) {
            if ("requestWillFetch" /* REQUEST_WILL_FETCH */ in plugin) {
                const pluginMethod = plugin["requestWillFetch" /* REQUEST_WILL_FETCH */];
                const requestClone = request.clone();
                request = await pluginMethod.call(plugin, {
                    request: requestClone,
                    event,
                });
                if (true) {
                    if (request) {
                        _assert_js__WEBPACK_IMPORTED_MODULE_2__["assert"].isInstance(request, Request, {
                            moduleName: 'Plugin',
                            funcName: "cachedResponseWillBeUsed" /* CACHED_RESPONSE_WILL_BE_USED */,
                            isReturnValueProblem: true,
                        });
                    }
                }
            }
        }
    }
    catch (err) {
        throw new _WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__["WorkboxError"]('plugin-error-request-will-fetch', {
            thrownError: err,
        });
    }
    // The request can be altered by plugins with `requestWillFetch` making
    // the original request (Most likely from a `fetch` event) to be different
    // to the Request we make. Pass both to `fetchDidFail` to aid debugging.
    const pluginFilteredRequest = request.clone();
    try {
        let fetchResponse;
        // See https://github.com/GoogleChrome/workbox/issues/1796
        if (request.mode === 'navigate') {
            fetchResponse = await fetch(request);
        }
        else {
            fetchResponse = await fetch(request, fetchOptions);
        }
        if (true) {
            _logger_js__WEBPACK_IMPORTED_MODULE_1__["logger"].debug(`Network request for ` +
                `'${Object(_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_3__["getFriendlyURL"])(request.url)}' returned a response with ` +
                `status '${fetchResponse.status}'.`);
        }
        for (const plugin of plugins) {
            if ("fetchDidSucceed" /* FETCH_DID_SUCCEED */ in plugin) {
                fetchResponse = await plugin["fetchDidSucceed" /* FETCH_DID_SUCCEED */]
                    .call(plugin, {
                    event,
                    request: pluginFilteredRequest,
                    response: fetchResponse,
                });
                if (true) {
                    if (fetchResponse) {
                        _assert_js__WEBPACK_IMPORTED_MODULE_2__["assert"].isInstance(fetchResponse, Response, {
                            moduleName: 'Plugin',
                            funcName: "fetchDidSucceed" /* FETCH_DID_SUCCEED */,
                            isReturnValueProblem: true,
                        });
                    }
                }
            }
        }
        return fetchResponse;
    }
    catch (error) {
        if (true) {
            _logger_js__WEBPACK_IMPORTED_MODULE_1__["logger"].error(`Network request for ` +
                `'${Object(_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_3__["getFriendlyURL"])(request.url)}' threw an error.`, error);
        }
        for (const plugin of failedFetchPlugins) {
            await plugin["fetchDidFail" /* FETCH_DID_FAIL */].call(plugin, {
                error,
                event,
                originalRequest: originalRequest.clone(),
                request: pluginFilteredRequest.clone(),
            });
        }
        throw error;
    }
};
const fetchWrapper = {
    fetch: wrappedFetch,
};



/***/ }),

/***/ "./node_modules/workbox-core/_private/getFriendlyURL.js":
/*!**************************************************************!*\
  !*** ./node_modules/workbox-core/_private/getFriendlyURL.js ***!
  \**************************************************************/
/*! exports provided: getFriendlyURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFriendlyURL", function() { return getFriendlyURL; });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const getFriendlyURL = (url) => {
    const urlObj = new URL(String(url), location.href);
    // See https://github.com/GoogleChrome/workbox/issues/2323
    // We want to include everything, except for the origin if it's same-origin.
    return urlObj.href.replace(new RegExp(`^${location.origin}`), '');
};



/***/ }),

/***/ "./node_modules/workbox-core/_private/logger.js":
/*!******************************************************!*\
  !*** ./node_modules/workbox-core/_private/logger.js ***!
  \******************************************************/
/*! exports provided: logger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logger", function() { return logger; });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const logger = ( false ? undefined : (() => {
    // Don't overwrite this value if it's already set.
    // See https://github.com/GoogleChrome/workbox/pull/2284#issuecomment-560470923
    if (!('__WB_DISABLE_DEV_LOGS' in self)) {
        self.__WB_DISABLE_DEV_LOGS = false;
    }
    let inGroup = false;
    const methodToColorMap = {
        debug: `#7f8c8d`,
        log: `#2ecc71`,
        warn: `#f39c12`,
        error: `#c0392b`,
        groupCollapsed: `#3498db`,
        groupEnd: null,
    };
    const print = function (method, args) {
        if (self.__WB_DISABLE_DEV_LOGS) {
            return;
        }
        if (method === 'groupCollapsed') {
            // Safari doesn't print all console.groupCollapsed() arguments:
            // https://bugs.webkit.org/show_bug.cgi?id=182754
            if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
                console[method](...args);
                return;
            }
        }
        const styles = [
            `background: ${methodToColorMap[method]}`,
            `border-radius: 0.5em`,
            `color: white`,
            `font-weight: bold`,
            `padding: 2px 0.5em`,
        ];
        // When in a group, the workbox prefix is not displayed.
        const logPrefix = inGroup ? [] : ['%cworkbox', styles.join(';')];
        console[method](...logPrefix, ...args);
        if (method === 'groupCollapsed') {
            inGroup = true;
        }
        if (method === 'groupEnd') {
            inGroup = false;
        }
    };
    const api = {};
    const loggerMethods = Object.keys(methodToColorMap);
    for (const key of loggerMethods) {
        const method = key;
        api[method] = (...args) => {
            print(method, args);
        };
    }
    return api;
})());



/***/ }),

/***/ "./node_modules/workbox-core/_version.js":
/*!***********************************************!*\
  !*** ./node_modules/workbox-core/_version.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// @ts-ignore
try {
    self['workbox:core:5.1.4'] && _();
}
catch (e) { }


/***/ }),

/***/ "./node_modules/workbox-core/copyResponse.js":
/*!***************************************************!*\
  !*** ./node_modules/workbox-core/copyResponse.js ***!
  \***************************************************/
/*! exports provided: copyResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyResponse", function() { return copyResponse; });
/* harmony import */ var _private_canConstructResponseFromBodyStream_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_private/canConstructResponseFromBodyStream.js */ "./node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Allows developers to copy a response and modify its `headers`, `status`,
 * or `statusText` values (the values settable via a
 * [`ResponseInit`]{@link https://developer.mozilla.org/en-US/docs/Web/API/Response/Response#Syntax}
 * object in the constructor).
 * To modify these values, pass a function as the second argument. That
 * function will be invoked with a single object with the response properties
 * `{headers, status, statusText}`. The return value of this function will
 * be used as the `ResponseInit` for the new `Response`. To change the values
 * either modify the passed parameter(s) and return it, or return a totally
 * new object.
 *
 * @param {Response} response
 * @param {Function} modifier
 * @memberof module:workbox-core
 */
async function copyResponse(response, modifier) {
    const clonedResponse = response.clone();
    // Create a fresh `ResponseInit` object by cloning the headers.
    const responseInit = {
        headers: new Headers(clonedResponse.headers),
        status: clonedResponse.status,
        statusText: clonedResponse.statusText,
    };
    // Apply any user modifications.
    const modifiedResponseInit = modifier ? modifier(responseInit) : responseInit;
    // Create the new response from the body stream and `ResponseInit`
    // modifications. Note: not all browsers support the Response.body stream,
    // so fall back to reading the entire body into memory as a blob.
    const body = Object(_private_canConstructResponseFromBodyStream_js__WEBPACK_IMPORTED_MODULE_0__["canConstructResponseFromBodyStream"])() ?
        clonedResponse.body : await clonedResponse.blob();
    return new Response(body, modifiedResponseInit);
}



/***/ }),

/***/ "./node_modules/workbox-core/models/messages/messageGenerator.js":
/*!***********************************************************************!*\
  !*** ./node_modules/workbox-core/models/messages/messageGenerator.js ***!
  \***********************************************************************/
/*! exports provided: messageGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "messageGenerator", function() { return messageGenerator; });
/* harmony import */ var _messages_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages.js */ "./node_modules/workbox-core/models/messages/messages.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


const fallback = (code, ...args) => {
    let msg = code;
    if (args.length > 0) {
        msg += ` :: ${JSON.stringify(args)}`;
    }
    return msg;
};
const generatorFunction = (code, details = {}) => {
    const message = _messages_js__WEBPACK_IMPORTED_MODULE_0__["messages"][code];
    if (!message) {
        throw new Error(`Unable to find message for code '${code}'.`);
    }
    return message(details);
};
const messageGenerator = ( false) ?
    undefined : generatorFunction;


/***/ }),

/***/ "./node_modules/workbox-core/models/messages/messages.js":
/*!***************************************************************!*\
  !*** ./node_modules/workbox-core/models/messages/messages.js ***!
  \***************************************************************/
/*! exports provided: messages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "messages", function() { return messages; });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const messages = {
    'invalid-value': ({ paramName, validValueDescription, value }) => {
        if (!paramName || !validValueDescription) {
            throw new Error(`Unexpected input to 'invalid-value' error.`);
        }
        return `The '${paramName}' parameter was given a value with an ` +
            `unexpected value. ${validValueDescription} Received a value of ` +
            `${JSON.stringify(value)}.`;
    },
    'not-an-array': ({ moduleName, className, funcName, paramName }) => {
        if (!moduleName || !className || !funcName || !paramName) {
            throw new Error(`Unexpected input to 'not-an-array' error.`);
        }
        return `The parameter '${paramName}' passed into ` +
            `'${moduleName}.${className}.${funcName}()' must be an array.`;
    },
    'incorrect-type': ({ expectedType, paramName, moduleName, className, funcName }) => {
        if (!expectedType || !paramName || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'incorrect-type' error.`);
        }
        return `The parameter '${paramName}' passed into ` +
            `'${moduleName}.${className ? (className + '.') : ''}` +
            `${funcName}()' must be of type ${expectedType}.`;
    },
    'incorrect-class': ({ expectedClass, paramName, moduleName, className, funcName, isReturnValueProblem }) => {
        if (!expectedClass || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'incorrect-class' error.`);
        }
        if (isReturnValueProblem) {
            return `The return value from ` +
                `'${moduleName}.${className ? (className + '.') : ''}${funcName}()' ` +
                `must be an instance of class ${expectedClass.name}.`;
        }
        return `The parameter '${paramName}' passed into ` +
            `'${moduleName}.${className ? (className + '.') : ''}${funcName}()' ` +
            `must be an instance of class ${expectedClass.name}.`;
    },
    'missing-a-method': ({ expectedMethod, paramName, moduleName, className, funcName }) => {
        if (!expectedMethod || !paramName || !moduleName || !className
            || !funcName) {
            throw new Error(`Unexpected input to 'missing-a-method' error.`);
        }
        return `${moduleName}.${className}.${funcName}() expected the ` +
            `'${paramName}' parameter to expose a '${expectedMethod}' method.`;
    },
    'add-to-cache-list-unexpected-type': ({ entry }) => {
        return `An unexpected entry was passed to ` +
            `'workbox-precaching.PrecacheController.addToCacheList()' The entry ` +
            `'${JSON.stringify(entry)}' isn't supported. You must supply an array of ` +
            `strings with one or more characters, objects with a url property or ` +
            `Request objects.`;
    },
    'add-to-cache-list-conflicting-entries': ({ firstEntry, secondEntry }) => {
        if (!firstEntry || !secondEntry) {
            throw new Error(`Unexpected input to ` +
                `'add-to-cache-list-duplicate-entries' error.`);
        }
        return `Two of the entries passed to ` +
            `'workbox-precaching.PrecacheController.addToCacheList()' had the URL ` +
            `${firstEntry._entryId} but different revision details. Workbox is ` +
            `unable to cache and version the asset correctly. Please remove one ` +
            `of the entries.`;
    },
    'plugin-error-request-will-fetch': ({ thrownError }) => {
        if (!thrownError) {
            throw new Error(`Unexpected input to ` +
                `'plugin-error-request-will-fetch', error.`);
        }
        return `An error was thrown by a plugins 'requestWillFetch()' method. ` +
            `The thrown error message was: '${thrownError.message}'.`;
    },
    'invalid-cache-name': ({ cacheNameId, value }) => {
        if (!cacheNameId) {
            throw new Error(`Expected a 'cacheNameId' for error 'invalid-cache-name'`);
        }
        return `You must provide a name containing at least one character for ` +
            `setCacheDetails({${cacheNameId}: '...'}). Received a value of ` +
            `'${JSON.stringify(value)}'`;
    },
    'unregister-route-but-not-found-with-method': ({ method }) => {
        if (!method) {
            throw new Error(`Unexpected input to ` +
                `'unregister-route-but-not-found-with-method' error.`);
        }
        return `The route you're trying to unregister was not  previously ` +
            `registered for the method type '${method}'.`;
    },
    'unregister-route-route-not-registered': () => {
        return `The route you're trying to unregister was not previously ` +
            `registered.`;
    },
    'queue-replay-failed': ({ name }) => {
        return `Replaying the background sync queue '${name}' failed.`;
    },
    'duplicate-queue-name': ({ name }) => {
        return `The Queue name '${name}' is already being used. ` +
            `All instances of backgroundSync.Queue must be given unique names.`;
    },
    'expired-test-without-max-age': ({ methodName, paramName }) => {
        return `The '${methodName}()' method can only be used when the ` +
            `'${paramName}' is used in the constructor.`;
    },
    'unsupported-route-type': ({ moduleName, className, funcName, paramName }) => {
        return `The supplied '${paramName}' parameter was an unsupported type. ` +
            `Please check the docs for ${moduleName}.${className}.${funcName} for ` +
            `valid input types.`;
    },
    'not-array-of-class': ({ value, expectedClass, moduleName, className, funcName, paramName }) => {
        return `The supplied '${paramName}' parameter must be an array of ` +
            `'${expectedClass}' objects. Received '${JSON.stringify(value)},'. ` +
            `Please check the call to ${moduleName}.${className}.${funcName}() ` +
            `to fix the issue.`;
    },
    'max-entries-or-age-required': ({ moduleName, className, funcName }) => {
        return `You must define either config.maxEntries or config.maxAgeSeconds` +
            `in ${moduleName}.${className}.${funcName}`;
    },
    'statuses-or-headers-required': ({ moduleName, className, funcName }) => {
        return `You must define either config.statuses or config.headers` +
            `in ${moduleName}.${className}.${funcName}`;
    },
    'invalid-string': ({ moduleName, funcName, paramName }) => {
        if (!paramName || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'invalid-string' error.`);
        }
        return `When using strings, the '${paramName}' parameter must start with ` +
            `'http' (for cross-origin matches) or '/' (for same-origin matches). ` +
            `Please see the docs for ${moduleName}.${funcName}() for ` +
            `more info.`;
    },
    'channel-name-required': () => {
        return `You must provide a channelName to construct a ` +
            `BroadcastCacheUpdate instance.`;
    },
    'invalid-responses-are-same-args': () => {
        return `The arguments passed into responsesAreSame() appear to be ` +
            `invalid. Please ensure valid Responses are used.`;
    },
    'expire-custom-caches-only': () => {
        return `You must provide a 'cacheName' property when using the ` +
            `expiration plugin with a runtime caching strategy.`;
    },
    'unit-must-be-bytes': ({ normalizedRangeHeader }) => {
        if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'unit-must-be-bytes' error.`);
        }
        return `The 'unit' portion of the Range header must be set to 'bytes'. ` +
            `The Range header provided was "${normalizedRangeHeader}"`;
    },
    'single-range-only': ({ normalizedRangeHeader }) => {
        if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'single-range-only' error.`);
        }
        return `Multiple ranges are not supported. Please use a  single start ` +
            `value, and optional end value. The Range header provided was ` +
            `"${normalizedRangeHeader}"`;
    },
    'invalid-range-values': ({ normalizedRangeHeader }) => {
        if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'invalid-range-values' error.`);
        }
        return `The Range header is missing both start and end values. At least ` +
            `one of those values is needed. The Range header provided was ` +
            `"${normalizedRangeHeader}"`;
    },
    'no-range-header': () => {
        return `No Range header was found in the Request provided.`;
    },
    'range-not-satisfiable': ({ size, start, end }) => {
        return `The start (${start}) and end (${end}) values in the Range are ` +
            `not satisfiable by the cached response, which is ${size} bytes.`;
    },
    'attempt-to-cache-non-get-request': ({ url, method }) => {
        return `Unable to cache '${url}' because it is a '${method}' request and ` +
            `only 'GET' requests can be cached.`;
    },
    'cache-put-with-no-response': ({ url }) => {
        return `There was an attempt to cache '${url}' but the response was not ` +
            `defined.`;
    },
    'no-response': ({ url, error }) => {
        let message = `The strategy could not generate a response for '${url}'.`;
        if (error) {
            message += ` The underlying error is ${error}.`;
        }
        return message;
    },
    'bad-precaching-response': ({ url, status }) => {
        return `The precaching request for '${url}' failed with an HTTP ` +
            `status of ${status}.`;
    },
    'non-precached-url': ({ url }) => {
        return `createHandlerBoundToURL('${url}') was called, but that URL is ` +
            `not precached. Please pass in a URL that is precached instead.`;
    },
    'add-to-cache-list-conflicting-integrities': ({ url }) => {
        return `Two of the entries passed to ` +
            `'workbox-precaching.PrecacheController.addToCacheList()' had the URL ` +
            `${url} with different integrity values. Please remove one of them.`;
    },
    'missing-precache-entry': ({ cacheName, url }) => {
        return `Unable to find a precached response in ${cacheName} for ${url}.`;
    },
};


/***/ }),

/***/ "./node_modules/workbox-core/models/quotaErrorCallbacks.js":
/*!*****************************************************************!*\
  !*** ./node_modules/workbox-core/models/quotaErrorCallbacks.js ***!
  \*****************************************************************/
/*! exports provided: quotaErrorCallbacks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quotaErrorCallbacks", function() { return quotaErrorCallbacks; });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

// Callbacks to be executed whenever there's a quota error.
const quotaErrorCallbacks = new Set();



/***/ }),

/***/ "./node_modules/workbox-core/utils/pluginUtils.js":
/*!********************************************************!*\
  !*** ./node_modules/workbox-core/utils/pluginUtils.js ***!
  \********************************************************/
/*! exports provided: pluginUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pluginUtils", function() { return pluginUtils; });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const pluginUtils = {
    filter: (plugins, callbackName) => {
        return plugins.filter((plugin) => callbackName in plugin);
    },
};


/***/ }),

/***/ "./node_modules/workbox-precaching/PrecacheController.js":
/*!***************************************************************!*\
  !*** ./node_modules/workbox-precaching/PrecacheController.js ***!
  \***************************************************************/
/*! exports provided: PrecacheController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrecacheController", function() { return PrecacheController; });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_cacheWrapper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/cacheWrapper.js */ "./node_modules/workbox-core/_private/cacheWrapper.js");
/* harmony import */ var workbox_core_private_fetchWrapper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/fetchWrapper.js */ "./node_modules/workbox-core/_private/fetchWrapper.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var workbox_core_copyResponse_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! workbox-core/copyResponse.js */ "./node_modules/workbox-core/copyResponse.js");
/* harmony import */ var _utils_createCacheKey_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/createCacheKey.js */ "./node_modules/workbox-precaching/utils/createCacheKey.js");
/* harmony import */ var _utils_printCleanupDetails_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/printCleanupDetails.js */ "./node_modules/workbox-precaching/utils/printCleanupDetails.js");
/* harmony import */ var _utils_printInstallDetails_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/printInstallDetails.js */ "./node_modules/workbox-precaching/utils/printInstallDetails.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_10__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/











/**
 * Performs efficient precaching of assets.
 *
 * @memberof module:workbox-precaching
 */
class PrecacheController {
    /**
     * Create a new PrecacheController.
     *
     * @param {string} [cacheName] An optional name for the cache, to override
     * the default precache name.
     */
    constructor(cacheName) {
        this._cacheName = workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__["cacheNames"].getPrecacheName(cacheName);
        this._urlsToCacheKeys = new Map();
        this._urlsToCacheModes = new Map();
        this._cacheKeysToIntegrities = new Map();
    }
    /**
     * This method will add items to the precache list, removing duplicates
     * and ensuring the information is valid.
     *
     * @param {
     * Array<module:workbox-precaching.PrecacheController.PrecacheEntry|string>
     * } entries Array of entries to precache.
     */
    addToCacheList(entries) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].isArray(entries, {
                moduleName: 'workbox-precaching',
                className: 'PrecacheController',
                funcName: 'addToCacheList',
                paramName: 'entries',
            });
        }
        const urlsToWarnAbout = [];
        for (const entry of entries) {
            // See https://github.com/GoogleChrome/workbox/issues/2259
            if (typeof entry === 'string') {
                urlsToWarnAbout.push(entry);
            }
            else if (entry && entry.revision === undefined) {
                urlsToWarnAbout.push(entry.url);
            }
            const { cacheKey, url } = Object(_utils_createCacheKey_js__WEBPACK_IMPORTED_MODULE_7__["createCacheKey"])(entry);
            const cacheMode = (typeof entry !== 'string' && entry.revision) ?
                'reload' : 'default';
            if (this._urlsToCacheKeys.has(url) &&
                this._urlsToCacheKeys.get(url) !== cacheKey) {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__["WorkboxError"]('add-to-cache-list-conflicting-entries', {
                    firstEntry: this._urlsToCacheKeys.get(url),
                    secondEntry: cacheKey,
                });
            }
            if (typeof entry !== 'string' && entry.integrity) {
                if (this._cacheKeysToIntegrities.has(cacheKey) &&
                    this._cacheKeysToIntegrities.get(cacheKey) !== entry.integrity) {
                    throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__["WorkboxError"]('add-to-cache-list-conflicting-integrities', {
                        url,
                    });
                }
                this._cacheKeysToIntegrities.set(cacheKey, entry.integrity);
            }
            this._urlsToCacheKeys.set(url, cacheKey);
            this._urlsToCacheModes.set(url, cacheMode);
            if (urlsToWarnAbout.length > 0) {
                const warningMessage = `Workbox is precaching URLs without revision ` +
                    `info: ${urlsToWarnAbout.join(', ')}\nThis is generally NOT safe. ` +
                    `Learn more at https://bit.ly/wb-precache`;
                if (false) {}
                else {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_4__["logger"].warn(warningMessage);
                }
            }
        }
    }
    /**
     * Precaches new and updated assets. Call this method from the service worker
     * install event.
     *
     * @param {Object} options
     * @param {Event} [options.event] The install event (if needed).
     * @param {Array<Object>} [options.plugins] Plugins to be used for fetching
     * and caching during install.
     * @return {Promise<module:workbox-precaching.InstallResult>}
     */
    async install({ event, plugins } = {}) {
        if (true) {
            if (plugins) {
                workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__["assert"].isArray(plugins, {
                    moduleName: 'workbox-precaching',
                    className: 'PrecacheController',
                    funcName: 'install',
                    paramName: 'plugins',
                });
            }
        }
        const toBePrecached = [];
        const alreadyPrecached = [];
        const cache = await self.caches.open(this._cacheName);
        const alreadyCachedRequests = await cache.keys();
        const existingCacheKeys = new Set(alreadyCachedRequests.map((request) => request.url));
        for (const [url, cacheKey] of this._urlsToCacheKeys) {
            if (existingCacheKeys.has(cacheKey)) {
                alreadyPrecached.push(url);
            }
            else {
                toBePrecached.push({ cacheKey, url });
            }
        }
        const precacheRequests = toBePrecached.map(({ cacheKey, url }) => {
            const integrity = this._cacheKeysToIntegrities.get(cacheKey);
            const cacheMode = this._urlsToCacheModes.get(url);
            return this._addURLToCache({
                cacheKey,
                cacheMode,
                event,
                integrity,
                plugins,
                url,
            });
        });
        await Promise.all(precacheRequests);
        const updatedURLs = toBePrecached.map((item) => item.url);
        if (true) {
            Object(_utils_printInstallDetails_js__WEBPACK_IMPORTED_MODULE_9__["printInstallDetails"])(updatedURLs, alreadyPrecached);
        }
        return {
            updatedURLs,
            notUpdatedURLs: alreadyPrecached,
        };
    }
    /**
     * Deletes assets that are no longer present in the current precache manifest.
     * Call this method from the service worker activate event.
     *
     * @return {Promise<module:workbox-precaching.CleanupResult>}
     */
    async activate() {
        const cache = await self.caches.open(this._cacheName);
        const currentlyCachedRequests = await cache.keys();
        const expectedCacheKeys = new Set(this._urlsToCacheKeys.values());
        const deletedURLs = [];
        for (const request of currentlyCachedRequests) {
            if (!expectedCacheKeys.has(request.url)) {
                await cache.delete(request);
                deletedURLs.push(request.url);
            }
        }
        if (true) {
            Object(_utils_printCleanupDetails_js__WEBPACK_IMPORTED_MODULE_8__["printCleanupDetails"])(deletedURLs);
        }
        return { deletedURLs };
    }
    /**
     * Requests the entry and saves it to the cache if the response is valid.
     * By default, any response with a status code of less than 400 (including
     * opaque responses) is considered valid.
     *
     * If you need to use custom criteria to determine what's valid and what
     * isn't, then pass in an item in `options.plugins` that implements the
     * `cacheWillUpdate()` lifecycle event.
     *
     * @private
     * @param {Object} options
     * @param {string} options.cacheKey The string to use a cache key.
     * @param {string} options.url The URL to fetch and cache.
     * @param {string} [options.cacheMode] The cache mode for the network request.
     * @param {Event} [options.event] The install event (if passed).
     * @param {Array<Object>} [options.plugins] An array of plugins to apply to
     * fetch and caching.
     * @param {string} [options.integrity] The value to use for the `integrity`
     * field when making the request.
     */
    async _addURLToCache({ cacheKey, url, cacheMode, event, plugins, integrity }) {
        const request = new Request(url, {
            integrity,
            cache: cacheMode,
            credentials: 'same-origin',
        });
        let response = await workbox_core_private_fetchWrapper_js__WEBPACK_IMPORTED_MODULE_3__["fetchWrapper"].fetch({
            event,
            plugins,
            request,
        });
        // Allow developers to override the default logic about what is and isn't
        // valid by passing in a plugin implementing cacheWillUpdate(), e.g.
        // a `CacheableResponsePlugin` instance.
        let cacheWillUpdatePlugin;
        for (const plugin of (plugins || [])) {
            if ('cacheWillUpdate' in plugin) {
                cacheWillUpdatePlugin = plugin;
            }
        }
        const isValidResponse = cacheWillUpdatePlugin ?
            // Use a callback if provided. It returns a truthy value if valid.
            // NOTE: invoke the method on the plugin instance so the `this` context
            // is correct.
            await cacheWillUpdatePlugin.cacheWillUpdate({ event, request, response }) :
            // Otherwise, default to considering any response status under 400 valid.
            // This includes, by default, considering opaque responses valid.
            response.status < 400;
        // Consider this a failure, leading to the `install` handler failing, if
        // we get back an invalid response.
        if (!isValidResponse) {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__["WorkboxError"]('bad-precaching-response', {
                url,
                status: response.status,
            });
        }
        // Redirected responses cannot be used to satisfy a navigation request, so
        // any redirected response must be "copied" rather than cloned, so the new
        // response doesn't contain the `redirected` flag. See:
        // https://bugs.chromium.org/p/chromium/issues/detail?id=669363&desc=2#c1
        if (response.redirected) {
            response = await Object(workbox_core_copyResponse_js__WEBPACK_IMPORTED_MODULE_6__["copyResponse"])(response);
        }
        await workbox_core_private_cacheWrapper_js__WEBPACK_IMPORTED_MODULE_2__["cacheWrapper"].put({
            event,
            plugins,
            response,
            // `request` already uses `url`. We may be able to reuse it.
            request: cacheKey === url ? request : new Request(cacheKey),
            cacheName: this._cacheName,
            matchOptions: {
                ignoreSearch: true,
            },
        });
    }
    /**
     * Returns a mapping of a precached URL to the corresponding cache key, taking
     * into account the revision information for the URL.
     *
     * @return {Map<string, string>} A URL to cache key mapping.
     */
    getURLsToCacheKeys() {
        return this._urlsToCacheKeys;
    }
    /**
     * Returns a list of all the URLs that have been precached by the current
     * service worker.
     *
     * @return {Array<string>} The precached URLs.
     */
    getCachedURLs() {
        return [...this._urlsToCacheKeys.keys()];
    }
    /**
     * Returns the cache key used for storing a given URL. If that URL is
     * unversioned, like `/index.html', then the cache key will be the original
     * URL with a search parameter appended to it.
     *
     * @param {string} url A URL whose cache key you want to look up.
     * @return {string} The versioned URL that corresponds to a cache key
     * for the original URL, or undefined if that URL isn't precached.
     */
    getCacheKeyForURL(url) {
        const urlObject = new URL(url, location.href);
        return this._urlsToCacheKeys.get(urlObject.href);
    }
    /**
     * This acts as a drop-in replacement for [`cache.match()`](https://developer.mozilla.org/en-US/docs/Web/API/Cache/match)
     * with the following differences:
     *
     * - It knows what the name of the precache is, and only checks in that cache.
     * - It allows you to pass in an "original" URL without versioning parameters,
     * and it will automatically look up the correct cache key for the currently
     * active revision of that URL.
     *
     * E.g., `matchPrecache('index.html')` will find the correct precached
     * response for the currently active service worker, even if the actual cache
     * key is `'/index.html?__WB_REVISION__=1234abcd'`.
     *
     * @param {string|Request} request The key (without revisioning parameters)
     * to look up in the precache.
     * @return {Promise<Response|undefined>}
     */
    async matchPrecache(request) {
        const url = request instanceof Request ? request.url : request;
        const cacheKey = this.getCacheKeyForURL(url);
        if (cacheKey) {
            const cache = await self.caches.open(this._cacheName);
            return cache.match(cacheKey);
        }
        return undefined;
    }
    /**
     * Returns a function that can be used within a
     * {@link module:workbox-routing.Route} that will find a response for the
     * incoming request against the precache.
     *
     * If for an unexpected reason there is a cache miss for the request,
     * this will fall back to retrieving the `Response` via `fetch()` when
     * `fallbackToNetwork` is `true`.
     *
     * @param {boolean} [fallbackToNetwork=true] Whether to attempt to get the
     * response from the network if there's a precache miss.
     * @return {module:workbox-routing~handlerCallback}
     */
    createHandler(fallbackToNetwork = true) {
        return async ({ request }) => {
            try {
                const response = await this.matchPrecache(request);
                if (response) {
                    return response;
                }
                // This shouldn't normally happen, but there are edge cases:
                // https://github.com/GoogleChrome/workbox/issues/1441
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__["WorkboxError"]('missing-precache-entry', {
                    cacheName: this._cacheName,
                    url: request instanceof Request ? request.url : request,
                });
            }
            catch (error) {
                if (fallbackToNetwork) {
                    if (true) {
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_4__["logger"].debug(`Unable to respond with precached response. ` +
                            `Falling back to network.`, error);
                    }
                    return fetch(request);
                }
                throw error;
            }
        };
    }
    /**
     * Returns a function that looks up `url` in the precache (taking into
     * account revision information), and returns the corresponding `Response`.
     *
     * If for an unexpected reason there is a cache miss when looking up `url`,
     * this will fall back to retrieving the `Response` via `fetch()` when
     * `fallbackToNetwork` is `true`.
     *
     * @param {string} url The precached URL which will be used to lookup the
     * `Response`.
     * @param {boolean} [fallbackToNetwork=true] Whether to attempt to get the
     * response from the network if there's a precache miss.
     * @return {module:workbox-routing~handlerCallback}
     */
    createHandlerBoundToURL(url, fallbackToNetwork = true) {
        const cacheKey = this.getCacheKeyForURL(url);
        if (!cacheKey) {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__["WorkboxError"]('non-precached-url', { url });
        }
        const handler = this.createHandler(fallbackToNetwork);
        const request = new Request(url);
        return () => handler({ request });
    }
}



/***/ }),

/***/ "./node_modules/workbox-precaching/_version.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-precaching/_version.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// @ts-ignore
try {
    self['workbox:precaching:5.1.4'] && _();
}
catch (e) { }


/***/ }),

/***/ "./node_modules/workbox-precaching/addPlugins.js":
/*!*******************************************************!*\
  !*** ./node_modules/workbox-precaching/addPlugins.js ***!
  \*******************************************************/
/*! exports provided: addPlugins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPlugins", function() { return addPlugins; });
/* harmony import */ var _utils_precachePlugins_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/precachePlugins.js */ "./node_modules/workbox-precaching/utils/precachePlugins.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Adds plugins to precaching.
 *
 * @param {Array<Object>} newPlugins
 *
 * @memberof module:workbox-precaching
 */
function addPlugins(newPlugins) {
    _utils_precachePlugins_js__WEBPACK_IMPORTED_MODULE_0__["precachePlugins"].add(newPlugins);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/addRoute.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-precaching/addRoute.js ***!
  \*****************************************************/
/*! exports provided: addRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addRoute", function() { return addRoute; });
/* harmony import */ var _utils_addFetchListener_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/addFetchListener.js */ "./node_modules/workbox-precaching/utils/addFetchListener.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


let listenerAdded = false;
/**
 * Add a `fetch` listener to the service worker that will
 * respond to
 * [network requests]{@link https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers#Custom_responses_to_requests}
 * with precached assets.
 *
 * Requests for assets that aren't precached, the `FetchEvent` will not be
 * responded to, allowing the event to fall through to other `fetch` event
 * listeners.
 *
 * @param {Object} [options]
 * @param {string} [options.directoryIndex=index.html] The `directoryIndex` will
 * check cache entries for a URLs ending with '/' to see if there is a hit when
 * appending the `directoryIndex` value.
 * @param {Array<RegExp>} [options.ignoreURLParametersMatching=[/^utm_/]] An
 * array of regex's to remove search params when looking for a cache match.
 * @param {boolean} [options.cleanURLs=true] The `cleanURLs` option will
 * check the cache for the URL with a `.html` added to the end of the end.
 * @param {module:workbox-precaching~urlManipulation} [options.urlManipulation]
 * This is a function that should take a URL and return an array of
 * alternative URLs that should be checked for precache matches.
 *
 * @memberof module:workbox-precaching
 */
function addRoute(options) {
    if (!listenerAdded) {
        Object(_utils_addFetchListener_js__WEBPACK_IMPORTED_MODULE_0__["addFetchListener"])(options);
        listenerAdded = true;
    }
}



/***/ }),

/***/ "./node_modules/workbox-precaching/cleanupOutdatedCaches.js":
/*!******************************************************************!*\
  !*** ./node_modules/workbox-precaching/cleanupOutdatedCaches.js ***!
  \******************************************************************/
/*! exports provided: cleanupOutdatedCaches */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanupOutdatedCaches", function() { return cleanupOutdatedCaches; });
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _utils_deleteOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/deleteOutdatedCaches.js */ "./node_modules/workbox-precaching/utils/deleteOutdatedCaches.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * Adds an `activate` event listener which will clean up incompatible
 * precaches that were created by older versions of Workbox.
 *
 * @memberof module:workbox-precaching
 */
function cleanupOutdatedCaches() {
    // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
    self.addEventListener('activate', ((event) => {
        const cacheName = workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__["cacheNames"].getPrecacheName();
        event.waitUntil(Object(_utils_deleteOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__["deleteOutdatedCaches"])(cacheName).then((cachesDeleted) => {
            if (true) {
                if (cachesDeleted.length > 0) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__["logger"].log(`The following out-of-date precaches were cleaned up ` +
                        `automatically:`, cachesDeleted);
                }
            }
        }));
    }));
}



/***/ }),

/***/ "./node_modules/workbox-precaching/createHandler.js":
/*!**********************************************************!*\
  !*** ./node_modules/workbox-precaching/createHandler.js ***!
  \**********************************************************/
/*! exports provided: createHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createHandler", function() { return createHandler; });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Helper function that calls
 * {@link PrecacheController#createHandler} on the default
 * {@link PrecacheController} instance.
 *
 * If you are creating your own {@link PrecacheController}, then call the
 * {@link PrecacheController#createHandler} on that instance,
 * instead of using this function.
 *
 * @param {boolean} [fallbackToNetwork=true] Whether to attempt to get the
 * response from the network if there's a precache miss.
 * @return {module:workbox-routing~handlerCallback}
 *
 * @memberof module:workbox-precaching
 */
function createHandler(fallbackToNetwork = true) {
    const precacheController = Object(_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__["getOrCreatePrecacheController"])();
    return precacheController.createHandler(fallbackToNetwork);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/createHandlerBoundToURL.js":
/*!********************************************************************!*\
  !*** ./node_modules/workbox-precaching/createHandlerBoundToURL.js ***!
  \********************************************************************/
/*! exports provided: createHandlerBoundToURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createHandlerBoundToURL", function() { return createHandlerBoundToURL; });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Helper function that calls
 * {@link PrecacheController#createHandlerBoundToURL} on the default
 * {@link PrecacheController} instance.
 *
 * If you are creating your own {@link PrecacheController}, then call the
 * {@link PrecacheController#createHandlerBoundToURL} on that instance,
 * instead of using this function.
 *
 * @param {string} url The precached URL which will be used to lookup the
 * `Response`.
 * @param {boolean} [fallbackToNetwork=true] Whether to attempt to get the
 * response from the network if there's a precache miss.
 * @return {module:workbox-routing~handlerCallback}
 *
 * @memberof module:workbox-precaching
 */
function createHandlerBoundToURL(url) {
    const precacheController = Object(_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__["getOrCreatePrecacheController"])();
    return precacheController.createHandlerBoundToURL(url);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/getCacheKeyForURL.js":
/*!**************************************************************!*\
  !*** ./node_modules/workbox-precaching/getCacheKeyForURL.js ***!
  \**************************************************************/
/*! exports provided: getCacheKeyForURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCacheKeyForURL", function() { return getCacheKeyForURL; });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Takes in a URL, and returns the corresponding URL that could be used to
 * lookup the entry in the precache.
 *
 * If a relative URL is provided, the location of the service worker file will
 * be used as the base.
 *
 * For precached entries without revision information, the cache key will be the
 * same as the original URL.
 *
 * For precached entries with revision information, the cache key will be the
 * original URL with the addition of a query parameter used for keeping track of
 * the revision info.
 *
 * @param {string} url The URL whose cache key to look up.
 * @return {string} The cache key that corresponds to that URL.
 *
 * @memberof module:workbox-precaching
 */
function getCacheKeyForURL(url) {
    const precacheController = Object(_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__["getOrCreatePrecacheController"])();
    return precacheController.getCacheKeyForURL(url);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/index.js":
/*!**************************************************!*\
  !*** ./node_modules/workbox-precaching/index.js ***!
  \**************************************************/
/*! exports provided: addPlugins, addRoute, cleanupOutdatedCaches, createHandler, createHandlerBoundToURL, getCacheKeyForURL, matchPrecache, precache, precacheAndRoute, PrecacheController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addPlugins_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addPlugins.js */ "./node_modules/workbox-precaching/addPlugins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addPlugins", function() { return _addPlugins_js__WEBPACK_IMPORTED_MODULE_0__["addPlugins"]; });

/* harmony import */ var _addRoute_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addRoute.js */ "./node_modules/workbox-precaching/addRoute.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addRoute", function() { return _addRoute_js__WEBPACK_IMPORTED_MODULE_1__["addRoute"]; });

/* harmony import */ var _cleanupOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cleanupOutdatedCaches.js */ "./node_modules/workbox-precaching/cleanupOutdatedCaches.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cleanupOutdatedCaches", function() { return _cleanupOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__["cleanupOutdatedCaches"]; });

/* harmony import */ var _createHandler_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createHandler.js */ "./node_modules/workbox-precaching/createHandler.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createHandler", function() { return _createHandler_js__WEBPACK_IMPORTED_MODULE_3__["createHandler"]; });

/* harmony import */ var _createHandlerBoundToURL_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createHandlerBoundToURL.js */ "./node_modules/workbox-precaching/createHandlerBoundToURL.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createHandlerBoundToURL", function() { return _createHandlerBoundToURL_js__WEBPACK_IMPORTED_MODULE_4__["createHandlerBoundToURL"]; });

/* harmony import */ var _getCacheKeyForURL_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getCacheKeyForURL.js */ "./node_modules/workbox-precaching/getCacheKeyForURL.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCacheKeyForURL", function() { return _getCacheKeyForURL_js__WEBPACK_IMPORTED_MODULE_5__["getCacheKeyForURL"]; });

/* harmony import */ var _matchPrecache_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./matchPrecache.js */ "./node_modules/workbox-precaching/matchPrecache.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matchPrecache", function() { return _matchPrecache_js__WEBPACK_IMPORTED_MODULE_6__["matchPrecache"]; });

/* harmony import */ var _precache_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./precache.js */ "./node_modules/workbox-precaching/precache.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "precache", function() { return _precache_js__WEBPACK_IMPORTED_MODULE_7__["precache"]; });

/* harmony import */ var _precacheAndRoute_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./precacheAndRoute.js */ "./node_modules/workbox-precaching/precacheAndRoute.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "precacheAndRoute", function() { return _precacheAndRoute_js__WEBPACK_IMPORTED_MODULE_8__["precacheAndRoute"]; });

/* harmony import */ var _PrecacheController_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PrecacheController.js */ "./node_modules/workbox-precaching/PrecacheController.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PrecacheController", function() { return _PrecacheController_js__WEBPACK_IMPORTED_MODULE_9__["PrecacheController"]; });

/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_10__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/











/**
 * Most consumers of this module will want to use the
 * [precacheAndRoute()]{@link module:workbox-precaching.precacheAndRoute}
 * method to add assets to the Cache and respond to network requests with these
 * cached assets.
 *
 * If you require finer grained control, you can use the
 * [PrecacheController]{@link module:workbox-precaching.PrecacheController}
 * to determine when performed.
 *
 * @module workbox-precaching
 */



/***/ }),

/***/ "./node_modules/workbox-precaching/index.mjs":
/*!***************************************************!*\
  !*** ./node_modules/workbox-precaching/index.mjs ***!
  \***************************************************/
/*! exports provided: addPlugins, addRoute, cleanupOutdatedCaches, createHandler, createHandlerBoundToURL, getCacheKeyForURL, matchPrecache, precache, precacheAndRoute, PrecacheController */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/workbox-precaching/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addPlugins", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["addPlugins"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addRoute", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["addRoute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cleanupOutdatedCaches", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["cleanupOutdatedCaches"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createHandler", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["createHandler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createHandlerBoundToURL", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["createHandlerBoundToURL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCacheKeyForURL", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["getCacheKeyForURL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matchPrecache", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["matchPrecache"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "precache", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["precache"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "precacheAndRoute", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["precacheAndRoute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PrecacheController", function() { return _index_js__WEBPACK_IMPORTED_MODULE_0__["PrecacheController"]; });



/***/ }),

/***/ "./node_modules/workbox-precaching/matchPrecache.js":
/*!**********************************************************!*\
  !*** ./node_modules/workbox-precaching/matchPrecache.js ***!
  \**********************************************************/
/*! exports provided: matchPrecache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchPrecache", function() { return matchPrecache; });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Helper function that calls
 * {@link PrecacheController#matchPrecache} on the default
 * {@link PrecacheController} instance.
 *
 * If you are creating your own {@link PrecacheController}, then call
 * {@link PrecacheController#matchPrecache} on that instance,
 * instead of using this function.
 *
 * @param {string|Request} request The key (without revisioning parameters)
 * to look up in the precache.
 * @return {Promise<Response|undefined>}
 *
 * @memberof module:workbox-precaching
 */
function matchPrecache(request) {
    const precacheController = Object(_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__["getOrCreatePrecacheController"])();
    return precacheController.matchPrecache(request);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/precache.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-precaching/precache.js ***!
  \*****************************************************/
/*! exports provided: precache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "precache", function() { return precache; });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _utils_precachePlugins_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/precachePlugins.js */ "./node_modules/workbox-precaching/utils/precachePlugins.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




const installListener = (event) => {
    const precacheController = Object(_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_1__["getOrCreatePrecacheController"])();
    const plugins = _utils_precachePlugins_js__WEBPACK_IMPORTED_MODULE_2__["precachePlugins"].get();
    event.waitUntil(precacheController.install({ event, plugins })
        .catch((error) => {
        if (true) {
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__["logger"].error(`Service worker installation failed. It will ` +
                `be retried automatically during the next navigation.`);
        }
        // Re-throw the error to ensure installation fails.
        throw error;
    }));
};
const activateListener = (event) => {
    const precacheController = Object(_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_1__["getOrCreatePrecacheController"])();
    event.waitUntil(precacheController.activate());
};
/**
 * Adds items to the precache list, removing any duplicates and
 * stores the files in the
 * ["precache cache"]{@link module:workbox-core.cacheNames} when the service
 * worker installs.
 *
 * This method can be called multiple times.
 *
 * Please note: This method **will not** serve any of the cached files for you.
 * It only precaches files. To respond to a network request you call
 * [addRoute()]{@link module:workbox-precaching.addRoute}.
 *
 * If you have a single array of files to precache, you can just call
 * [precacheAndRoute()]{@link module:workbox-precaching.precacheAndRoute}.
 *
 * @param {Array<Object|string>} [entries=[]] Array of entries to precache.
 *
 * @memberof module:workbox-precaching
 */
function precache(entries) {
    const precacheController = Object(_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_1__["getOrCreatePrecacheController"])();
    precacheController.addToCacheList(entries);
    if (entries.length > 0) {
        // NOTE: these listeners will only be added once (even if the `precache()`
        // method is called multiple times) because event listeners are implemented
        // as a set, where each listener must be unique.
        // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
        self.addEventListener('install', installListener);
        self.addEventListener('activate', activateListener);
    }
}



/***/ }),

/***/ "./node_modules/workbox-precaching/precacheAndRoute.js":
/*!*************************************************************!*\
  !*** ./node_modules/workbox-precaching/precacheAndRoute.js ***!
  \*************************************************************/
/*! exports provided: precacheAndRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "precacheAndRoute", function() { return precacheAndRoute; });
/* harmony import */ var _addRoute_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addRoute.js */ "./node_modules/workbox-precaching/addRoute.js");
/* harmony import */ var _precache_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./precache.js */ "./node_modules/workbox-precaching/precache.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * This method will add entries to the precache list and add a route to
 * respond to fetch events.
 *
 * This is a convenience method that will call
 * [precache()]{@link module:workbox-precaching.precache} and
 * [addRoute()]{@link module:workbox-precaching.addRoute} in a single call.
 *
 * @param {Array<Object|string>} entries Array of entries to precache.
 * @param {Object} [options] See
 * [addRoute() options]{@link module:workbox-precaching.addRoute}.
 *
 * @memberof module:workbox-precaching
 */
function precacheAndRoute(entries, options) {
    Object(_precache_js__WEBPACK_IMPORTED_MODULE_1__["precache"])(entries);
    Object(_addRoute_js__WEBPACK_IMPORTED_MODULE_0__["addRoute"])(options);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/utils/addFetchListener.js":
/*!*******************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/addFetchListener.js ***!
  \*******************************************************************/
/*! exports provided: addFetchListener */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addFetchListener", function() { return addFetchListener; });
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _getCacheKeyForURL_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getCacheKeyForURL.js */ "./node_modules/workbox-precaching/utils/getCacheKeyForURL.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_4__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/





/**
 * Adds a `fetch` listener to the service worker that will
 * respond to
 * [network requests]{@link https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers#Custom_responses_to_requests}
 * with precached assets.
 *
 * Requests for assets that aren't precached, the `FetchEvent` will not be
 * responded to, allowing the event to fall through to other `fetch` event
 * listeners.
 *
 * NOTE: when called more than once this method will replace the previously set
 * configuration options. Calling it more than once is not recommended outside
 * of tests.
 *
 * @private
 * @param {Object} [options]
 * @param {string} [options.directoryIndex=index.html] The `directoryIndex` will
 * check cache entries for a URLs ending with '/' to see if there is a hit when
 * appending the `directoryIndex` value.
 * @param {Array<RegExp>} [options.ignoreURLParametersMatching=[/^utm_/]] An
 * array of regex's to remove search params when looking for a cache match.
 * @param {boolean} [options.cleanURLs=true] The `cleanURLs` option will
 * check the cache for the URL with a `.html` added to the end of the end.
 * @param {workbox.precaching~urlManipulation} [options.urlManipulation]
 * This is a function that should take a URL and return an array of
 * alternative URLs that should be checked for precache matches.
 */
const addFetchListener = ({ ignoreURLParametersMatching = [/^utm_/], directoryIndex = 'index.html', cleanURLs = true, urlManipulation, } = {}) => {
    const cacheName = workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__["cacheNames"].getPrecacheName();
    // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
    self.addEventListener('fetch', ((event) => {
        const precachedURL = Object(_getCacheKeyForURL_js__WEBPACK_IMPORTED_MODULE_3__["getCacheKeyForURL"])(event.request.url, {
            cleanURLs,
            directoryIndex,
            ignoreURLParametersMatching,
            urlManipulation,
        });
        if (!precachedURL) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__["logger"].debug(`Precaching did not find a match for ` +
                    Object(workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__["getFriendlyURL"])(event.request.url));
            }
            return;
        }
        let responsePromise = self.caches.open(cacheName).then((cache) => {
            return cache.match(precachedURL);
        }).then((cachedResponse) => {
            if (cachedResponse) {
                return cachedResponse;
            }
            // Fall back to the network if we don't have a cached response
            // (perhaps due to manual cache cleanup).
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__["logger"].warn(`The precached response for ` +
                    `${Object(workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__["getFriendlyURL"])(precachedURL)} in ${cacheName} was not found. ` +
                    `Falling back to the network instead.`);
            }
            return fetch(precachedURL);
        });
        if (true) {
            responsePromise = responsePromise.then((response) => {
                // Workbox is going to handle the route.
                // print the routing details to the console.
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__["logger"].groupCollapsed(`Precaching is responding to: ` +
                    Object(workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__["getFriendlyURL"])(event.request.url));
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__["logger"].log(`Serving the precached url: ${precachedURL}`);
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__["logger"].groupCollapsed(`View request details here.`);
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__["logger"].log(event.request);
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__["logger"].groupEnd();
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__["logger"].groupCollapsed(`View response details here.`);
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__["logger"].log(response);
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__["logger"].groupEnd();
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__["logger"].groupEnd();
                return response;
            });
        }
        event.respondWith(responsePromise);
    }));
};


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/createCacheKey.js":
/*!*****************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/createCacheKey.js ***!
  \*****************************************************************/
/*! exports provided: createCacheKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCacheKey", function() { return createCacheKey; });
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


// Name of the search parameter used to store revision info.
const REVISION_SEARCH_PARAM = '__WB_REVISION__';
/**
 * Converts a manifest entry into a versioned URL suitable for precaching.
 *
 * @param {Object|string} entry
 * @return {string} A URL with versioning info.
 *
 * @private
 * @memberof module:workbox-precaching
 */
function createCacheKey(entry) {
    if (!entry) {
        throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__["WorkboxError"]('add-to-cache-list-unexpected-type', { entry });
    }
    // If a precache manifest entry is a string, it's assumed to be a versioned
    // URL, like '/app.abcd1234.js'. Return as-is.
    if (typeof entry === 'string') {
        const urlObject = new URL(entry, location.href);
        return {
            cacheKey: urlObject.href,
            url: urlObject.href,
        };
    }
    const { revision, url } = entry;
    if (!url) {
        throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__["WorkboxError"]('add-to-cache-list-unexpected-type', { entry });
    }
    // If there's just a URL and no revision, then it's also assumed to be a
    // versioned URL.
    if (!revision) {
        const urlObject = new URL(url, location.href);
        return {
            cacheKey: urlObject.href,
            url: urlObject.href,
        };
    }
    // Otherwise, construct a properly versioned URL using the custom Workbox
    // search parameter along with the revision info.
    const cacheKeyURL = new URL(url, location.href);
    const originalURL = new URL(url, location.href);
    cacheKeyURL.searchParams.set(REVISION_SEARCH_PARAM, revision);
    return {
        cacheKey: cacheKeyURL.href,
        url: originalURL.href,
    };
}


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/deleteOutdatedCaches.js":
/*!***********************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/deleteOutdatedCaches.js ***!
  \***********************************************************************/
/*! exports provided: deleteOutdatedCaches */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteOutdatedCaches", function() { return deleteOutdatedCaches; });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const SUBSTRING_TO_FIND = '-precache-';
/**
 * Cleans up incompatible precaches that were created by older versions of
 * Workbox, by a service worker registered under the current scope.
 *
 * This is meant to be called as part of the `activate` event.
 *
 * This should be safe to use as long as you don't include `substringToFind`
 * (defaulting to `-precache-`) in your non-precache cache names.
 *
 * @param {string} currentPrecacheName The cache name currently in use for
 * precaching. This cache won't be deleted.
 * @param {string} [substringToFind='-precache-'] Cache names which include this
 * substring will be deleted (excluding `currentPrecacheName`).
 * @return {Array<string>} A list of all the cache names that were deleted.
 *
 * @private
 * @memberof module:workbox-precaching
 */
const deleteOutdatedCaches = async (currentPrecacheName, substringToFind = SUBSTRING_TO_FIND) => {
    const cacheNames = await self.caches.keys();
    const cacheNamesToDelete = cacheNames.filter((cacheName) => {
        return cacheName.includes(substringToFind) &&
            cacheName.includes(self.registration.scope) &&
            cacheName !== currentPrecacheName;
    });
    await Promise.all(cacheNamesToDelete.map((cacheName) => self.caches.delete(cacheName)));
    return cacheNamesToDelete;
};



/***/ }),

/***/ "./node_modules/workbox-precaching/utils/generateURLVariations.js":
/*!************************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/generateURLVariations.js ***!
  \************************************************************************/
/*! exports provided: generateURLVariations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateURLVariations", function() { return generateURLVariations; });
/* harmony import */ var _removeIgnoredSearchParams_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./removeIgnoredSearchParams.js */ "./node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Generator function that yields possible variations on the original URL to
 * check, one at a time.
 *
 * @param {string} url
 * @param {Object} options
 *
 * @private
 * @memberof module:workbox-precaching
 */
function* generateURLVariations(url, { ignoreURLParametersMatching, directoryIndex, cleanURLs, urlManipulation, } = {}) {
    const urlObject = new URL(url, location.href);
    urlObject.hash = '';
    yield urlObject.href;
    const urlWithoutIgnoredParams = Object(_removeIgnoredSearchParams_js__WEBPACK_IMPORTED_MODULE_0__["removeIgnoredSearchParams"])(urlObject, ignoreURLParametersMatching);
    yield urlWithoutIgnoredParams.href;
    if (directoryIndex && urlWithoutIgnoredParams.pathname.endsWith('/')) {
        const directoryURL = new URL(urlWithoutIgnoredParams.href);
        directoryURL.pathname += directoryIndex;
        yield directoryURL.href;
    }
    if (cleanURLs) {
        const cleanURL = new URL(urlWithoutIgnoredParams.href);
        cleanURL.pathname += '.html';
        yield cleanURL.href;
    }
    if (urlManipulation) {
        const additionalURLs = urlManipulation({ url: urlObject });
        for (const urlToAttempt of additionalURLs) {
            yield urlToAttempt.href;
        }
    }
}


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/getCacheKeyForURL.js":
/*!********************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/getCacheKeyForURL.js ***!
  \********************************************************************/
/*! exports provided: getCacheKeyForURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCacheKeyForURL", function() { return getCacheKeyForURL; });
/* harmony import */ var _getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _generateURLVariations_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generateURLVariations.js */ "./node_modules/workbox-precaching/utils/generateURLVariations.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * This function will take the request URL and manipulate it based on the
 * configuration options.
 *
 * @param {string} url
 * @param {Object} options
 * @return {string} Returns the URL in the cache that matches the request,
 * if possible.
 *
 * @private
 */
const getCacheKeyForURL = (url, options) => {
    const precacheController = Object(_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__["getOrCreatePrecacheController"])();
    const urlsToCacheKeys = precacheController.getURLsToCacheKeys();
    for (const possibleURL of Object(_generateURLVariations_js__WEBPACK_IMPORTED_MODULE_1__["generateURLVariations"])(url, options)) {
        const possibleCacheKey = urlsToCacheKeys.get(possibleURL);
        if (possibleCacheKey) {
            return possibleCacheKey;
        }
    }
};


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js":
/*!********************************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js ***!
  \********************************************************************************/
/*! exports provided: getOrCreatePrecacheController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrCreatePrecacheController", function() { return getOrCreatePrecacheController; });
/* harmony import */ var _PrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../PrecacheController.js */ "./node_modules/workbox-precaching/PrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


let precacheController;
/**
 * @return {PrecacheController}
 * @private
 */
const getOrCreatePrecacheController = () => {
    if (!precacheController) {
        precacheController = new _PrecacheController_js__WEBPACK_IMPORTED_MODULE_0__["PrecacheController"]();
    }
    return precacheController;
};


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/precachePlugins.js":
/*!******************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/precachePlugins.js ***!
  \******************************************************************/
/*! exports provided: precachePlugins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "precachePlugins", function() { return precachePlugins; });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const plugins = [];
const precachePlugins = {
    /*
     * @return {Array}
     * @private
     */
    get() {
        return plugins;
    },
    /*
     * @param {Array} newPlugins
     * @private
     */
    add(newPlugins) {
        plugins.push(...newPlugins);
    },
};


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/printCleanupDetails.js":
/*!**********************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/printCleanupDetails.js ***!
  \**********************************************************************/
/*! exports provided: printCleanupDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printCleanupDetails", function() { return printCleanupDetails; });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * @param {string} groupTitle
 * @param {Array<string>} deletedURLs
 *
 * @private
 */
const logGroup = (groupTitle, deletedURLs) => {
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__["logger"].groupCollapsed(groupTitle);
    for (const url of deletedURLs) {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__["logger"].log(url);
    }
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__["logger"].groupEnd();
};
/**
 * @param {Array<string>} deletedURLs
 *
 * @private
 * @memberof module:workbox-precaching
 */
function printCleanupDetails(deletedURLs) {
    const deletionCount = deletedURLs.length;
    if (deletionCount > 0) {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__["logger"].groupCollapsed(`During precaching cleanup, ` +
            `${deletionCount} cached ` +
            `request${deletionCount === 1 ? ' was' : 's were'} deleted.`);
        logGroup('Deleted Cache Requests', deletedURLs);
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__["logger"].groupEnd();
    }
}


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/printInstallDetails.js":
/*!**********************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/printInstallDetails.js ***!
  \**********************************************************************/
/*! exports provided: printInstallDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printInstallDetails", function() { return printInstallDetails; });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * @param {string} groupTitle
 * @param {Array<string>} urls
 *
 * @private
 */
function _nestedGroup(groupTitle, urls) {
    if (urls.length === 0) {
        return;
    }
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__["logger"].groupCollapsed(groupTitle);
    for (const url of urls) {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__["logger"].log(url);
    }
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__["logger"].groupEnd();
}
/**
 * @param {Array<string>} urlsToPrecache
 * @param {Array<string>} urlsAlreadyPrecached
 *
 * @private
 * @memberof module:workbox-precaching
 */
function printInstallDetails(urlsToPrecache, urlsAlreadyPrecached) {
    const precachedCount = urlsToPrecache.length;
    const alreadyPrecachedCount = urlsAlreadyPrecached.length;
    if (precachedCount || alreadyPrecachedCount) {
        let message = `Precaching ${precachedCount} file${precachedCount === 1 ? '' : 's'}.`;
        if (alreadyPrecachedCount > 0) {
            message += ` ${alreadyPrecachedCount} ` +
                `file${alreadyPrecachedCount === 1 ? ' is' : 's are'} already cached.`;
        }
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__["logger"].groupCollapsed(message);
        _nestedGroup(`View newly precached URLs.`, urlsToPrecache);
        _nestedGroup(`View previously precached URLs.`, urlsAlreadyPrecached);
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__["logger"].groupEnd();
    }
}


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js":
/*!****************************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js ***!
  \****************************************************************************/
/*! exports provided: removeIgnoredSearchParams */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeIgnoredSearchParams", function() { return removeIgnoredSearchParams; });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * Removes any URL search parameters that should be ignored.
 *
 * @param {URL} urlObject The original URL.
 * @param {Array<RegExp>} ignoreURLParametersMatching RegExps to test against
 * each search parameter name. Matches mean that the search parameter should be
 * ignored.
 * @return {URL} The URL with any ignored search parameters removed.
 *
 * @private
 * @memberof module:workbox-precaching
 */
function removeIgnoredSearchParams(urlObject, ignoreURLParametersMatching = []) {
    // Convert the iterable into an array at the start of the loop to make sure
    // deletion doesn't mess up iteration.
    for (const paramName of [...urlObject.searchParams.keys()]) {
        if (ignoreURLParametersMatching.some((regExp) => regExp.test(paramName))) {
            urlObject.searchParams.delete(paramName);
        }
    }
    return urlObject;
}


/***/ })

/******/ });
//# sourceMappingURL=sw.js.map