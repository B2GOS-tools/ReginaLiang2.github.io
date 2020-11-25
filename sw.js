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

  const precacheManifest = [{"revision":"e01c39dc2325fd46677d53d7dad98eaf","url":"006938fa.7e8dad21.js"},{"revision":"22226ad60603a93be434a9c56e77f3c7","url":"006cb2a8.8ea20752.js"},{"revision":"ea960d0e9f226462722665094941d0eb","url":"01f540dc.3d2547de.js"},{"revision":"6e6d21530f3bc5e639f60388f6eb2392","url":"024f96b7.117704a0.js"},{"revision":"a9d4317806ceac650996d26f1a3c1504","url":"032f740a.9d62da4c.js"},{"revision":"17b1d736a05c55e83942cc71b057d779","url":"038ecd74.4d872b77.js"},{"revision":"8a976d3f910c1c6db440e39103dd4683","url":"05e7d4cd.2c8cdae3.js"},{"revision":"a78f6179349651c8807cfd892fbbc071","url":"06171450.d0fc44ab.js"},{"revision":"9620b1695696c615e6799d250968511f","url":"08328c53.9dec03d0.js"},{"revision":"975eeb37ab011472c133f8670de08dbb","url":"0b1fef00.e5db0fb9.js"},{"revision":"f658a9ba896b65dbff0eca14a83d298f","url":"0c49fe93.639d2c4f.js"},{"revision":"e7c5adfd8ff6fd0c75d552cf4feed015","url":"0cececf4.ad140a6d.js"},{"revision":"9f09ce4cd08527e86c0d29a0a2d1399b","url":"0df5f748.29e0a18b.js"},{"revision":"6fec16e2a2a66fc89926f28464451fc3","url":"0ed8e504.184019d5.js"},{"revision":"64c56659e3687d7c461d891a56087dd5","url":"0f02e8c0.0ba77b60.js"},{"revision":"92c5f09a8b550cc89306784d4bf8f358","url":"0f1c7f51.a894108b.js"},{"revision":"963dbf08ebae05890fac0ba589557283","url":"1.11d849af.js"},{"revision":"806986e6250583e4fcf2885fbe10b6f7","url":"10b3a75b.8b907edc.js"},{"revision":"962efb76f87a5549be1820e63a4e9f3a","url":"11ca7273.b122357c.js"},{"revision":"747727d206f660be2fadd9f43ab5c4a2","url":"1269a946.7dff912b.js"},{"revision":"0b79315d32573b4c6e951543d9c81f21","url":"132cca51.a6993550.js"},{"revision":"afd540b097584d9d0b041582b183afe5","url":"136a7a5d.858bdba8.js"},{"revision":"924b670eaa287e0aa8de1a9bc7c8e4da","url":"15b4f9dc.9965f147.js"},{"revision":"968a134777980ff26a6fb76d02604f99","url":"166b1c46.5cbb70db.js"},{"revision":"bca960e717b58583c9e0e5d7925463cb","url":"166f7129.d3b6d386.js"},{"revision":"e31f25e0e71193d244ace38e1fd623ee","url":"1682066b.14ca5aeb.js"},{"revision":"61d9973f480281b592c9740d19bb636d","url":"16a57243.55303c19.js"},{"revision":"70c38cef9c313f5e1b211b68f22988f3","url":"16e74e9f.5beecd9f.js"},{"revision":"ff0b41282eeff3abca166782764b9381","url":"178dc82f.892f0154.js"},{"revision":"dc732d21f5d9230679c29512070d61e4","url":"17998b9e.80570a20.js"},{"revision":"877c06de86c55b5c143b3f5bc98e62c9","url":"17b5c2ab.204da655.js"},{"revision":"9c90c3a5576a1b2331ca57478758c0b6","url":"18417816.e46eab67.js"},{"revision":"7556fb4aebe71cc74f4977e74485fbf3","url":"1865c518.62270cdc.js"},{"revision":"0edb2dbb20be75bb0317d90b9b70c6ef","url":"18b93cb3.76ef29a1.js"},{"revision":"b6d47549bb1651419b9a04feed7ef421","url":"19555ca7.944e7e4f.js"},{"revision":"500210247b3b007b6de32a20354325c5","url":"19c27bae.ffa33e95.js"},{"revision":"875f6793d4f3b67a51652bfed9c5a20c","url":"1a24dc05.b63cd7b7.js"},{"revision":"8d4b13bf86f84e97031340966e7e0dde","url":"1a467cdf.49fedfa3.js"},{"revision":"e4bcd707dc3c1d91e494598e85d8a83a","url":"1b0cd48c.5bda10a8.js"},{"revision":"414e1a8e84a4dc52884502087a8d695a","url":"1be78505.ee1832d8.js"},{"revision":"785660b023d9e89c5e7e3fce3f041a1c","url":"1c203882.835e432c.js"},{"revision":"a7800a75998a166be0b6446c82555c95","url":"1c9783fa.7f7b5ec4.js"},{"revision":"f9d97b2a267c27920eae8167105d8ba3","url":"1de7428a.fa14dccf.js"},{"revision":"658088699dd81f4a6a3c69318afb0284","url":"1fa608a3.f93e3c77.js"},{"revision":"ad62138927f37d6eb2aaac4bd7be97de","url":"1fd073e6.efdbf49d.js"},{"revision":"91c67781ab84be3849fa9a7770ef2f9d","url":"222a2418.155daa8d.js"},{"revision":"d964831769459c87bbe2c2a94f8c6f0e","url":"24d4b0dc.49e0c4e1.js"},{"revision":"150dc9c2d501334cc01a6f4c78ba9bb0","url":"24f8b738.c8cfc3d7.js"},{"revision":"8217c7eaf63bc857da2b5a47f88ecb67","url":"2520b6ad.5a959e55.js"},{"revision":"75b7c16c67b523443024e4937ea54634","url":"25fe8ad9.b9f7c17b.js"},{"revision":"bc5c0a08bff00e84411e1d0bfee72a8d","url":"260092ab.c71338ca.js"},{"revision":"15012600b80b082ccc6227fbb762eda3","url":"275b5fbb.0d0bddac.js"},{"revision":"21733965c752b95a16b03cef58887fd2","url":"28694c8d.f040246b.js"},{"revision":"6e8fd64de642ccb6e38bcd7afc379ea0","url":"2877424d.8b0836a3.js"},{"revision":"22e89a1cb1df2b4e73f64bca4a5093d5","url":"28bde5f6.7d7e8dfb.js"},{"revision":"72e5e50dbb4d3da3ce02c2835edb0a17","url":"28e90a7c.ac8eaf71.js"},{"revision":"69752198e5f8c14b75940f2a5d993bf0","url":"294f9121.6e4ebc45.js"},{"revision":"0c7290b170db572e0a492c38ae480485","url":"2c361ab1.e7be04c2.js"},{"revision":"4b2962032d6960dd55cc455e390de40e","url":"2d1c4cdb.03ee8624.js"},{"revision":"b3416c66919a9c50d9594eae8f9df500","url":"2e09ce54.1b214564.js"},{"revision":"78681acfe99c96a7231a0245d799aab3","url":"2f205efa.8f227a77.js"},{"revision":"87bf0798fe9387f43c6bfd7cd07b9e50","url":"302e2efe.4ce10a19.js"},{"revision":"b7b6d0843ed00594002848b819ac6761","url":"3032986c.e1283144.js"},{"revision":"b729b226a8d3f740ec1151cae4c63d26","url":"317.bde06806.js"},{"revision":"4c7e631ca179a9f1fb36a106491e2aed","url":"318.deb9aaac.js"},{"revision":"880a12b56a88d930321d6eeec478f576","url":"319.53011765.js"},{"revision":"7a4394c10b3414a01108311f4cee87c7","url":"320.73e4ad79.js"},{"revision":"254ea41a13f290e7377933453a7a6a6d","url":"321.112f6163.js"},{"revision":"fba7e83ca69f3d95b84232631cef7fc3","url":"322.e444369e.js"},{"revision":"9f1f777b43966e8e9ff5a456587ba138","url":"3221a44f.dc0555bc.js"},{"revision":"8838eff65aab3e6a2c67f023a8a7c206","url":"323.2c5e8f99.js"},{"revision":"2c480afbb0acf04760e98778fb0ae14b","url":"323fdaff.b21f8bc5.js"},{"revision":"efc30bc34a4c0f3c4e3c654622fc3bca","url":"324.1cce3a19.js"},{"revision":"b71bb3244a09499d242acfb338b374d6","url":"325.de68c33e.js"},{"revision":"9bbe932023ddfe3703ef6647d8798ce8","url":"32a821b3.8d9e547b.js"},{"revision":"fbca2d394d403becdb5fe3e39007ae41","url":"334b1a27.4c66a6bc.js"},{"revision":"86f8a72ce1e321b2136d2ffc2bab8588","url":"339b49aa.49d13b52.js"},{"revision":"770bee70b846bd338800bf814bdc63b3","url":"33acb1b6.800ed8a0.js"},{"revision":"3583a76a93c4f4e6ff09ff1a84a26de9","url":"3573e4be.a1a40865.js"},{"revision":"6e2b84b080fd13ad5fa25adeb2041683","url":"36485d10.3d7160fa.js"},{"revision":"a3f6d2aaa97df531f36c068ff95d7a1c","url":"36581281.4e837f76.js"},{"revision":"2b025487f156661dc2c5d1b7e3d99a11","url":"37d4253f.9f5a5917.js"},{"revision":"62eaa7d70045494fb06edcae6b73dc86","url":"393e417f.c3ff86d2.js"},{"revision":"53378ebe385fc9fd5cf1e4ddf7932058","url":"3a209a0e.2b97ec42.js"},{"revision":"6890a964301db7c35aaf8edb09bb71f2","url":"3b980387.4f9cad46.js"},{"revision":"33ffdd2b79be8fdee17b1248b8f9542c","url":"3be5dd2d.fbd2633f.js"},{"revision":"ad19455678989b5688ac584539f18aae","url":"3c66f024.e7c5cd6d.js"},{"revision":"bbc75e24401433ed54ef08363e1a0550","url":"3cc07bc0.472d55cc.js"},{"revision":"fd38faa56869aa3038e3bb7afba24a47","url":"3e9acd80.4cbbfc28.js"},{"revision":"f499fec4fbcaa29c490eeb4c93beca2b","url":"3f7b49ea.c9190f58.js"},{"revision":"43075fea31245de4499ae7f5ef9a9d30","url":"404.html"},{"revision":"2a94922bfd359ddb45b20e4be1d05c4c","url":"4060e46a.53673760.js"},{"revision":"8035f28743bd4deb1a30f6e574b0297b","url":"42bfc762.381bd0d4.js"},{"revision":"450385af2c22768d520214aeacadd859","url":"42f4a713.2acbd553.js"},{"revision":"bfea167e16b83b8be5593b83fec74267","url":"433b2dd2.bba41206.js"},{"revision":"d60fa6f9cf3943a41736804598e715d3","url":"435b4761.45aa78cf.js"},{"revision":"42d8b1928d568731cf852203baf54a47","url":"437d1f30.8d625dc8.js"},{"revision":"61b5b06cb04c27a64b1220e7e2f09547","url":"444a4b6d.de2c7122.js"},{"revision":"01362e45ba10be894526951082fc8b33","url":"451d40a5.9c92f151.js"},{"revision":"391c89eb781fff6f4d7280dc30337257","url":"455e9b06.0c82a585.js"},{"revision":"a853c868c6b757ccecf50540d714ae04","url":"45e5dbb5.d66ac3de.js"},{"revision":"3ce323f8add47ce0cc25ce6c14794661","url":"462c9967.6188b122.js"},{"revision":"42117e19a02a83c74e10c76a17ba891f","url":"47ab3d60.0804551f.js"},{"revision":"0b5f0e874232fc9de7713b8cb17b966b","url":"4be5a77a.136ebdd3.js"},{"revision":"4df163a0bc2dd9ff035dd764fcdc5fce","url":"4c97a590.4e9a70a7.js"},{"revision":"42e78eb59f0cf078349df3916dfc5b3f","url":"4d86a565.0bb19b43.js"},{"revision":"5b035881ee8fe2b94e3fa3ffea7e007d","url":"4e84ad53.c13b81ad.js"},{"revision":"c7415fbc0e4626e9d289c1d975679bd9","url":"4e8bb889.c178229f.js"},{"revision":"b2e9fe85cb3c393e00940ca7025bf44e","url":"4e9dc0eb.27852afe.js"},{"revision":"c28bd922777e4203126051479853e268","url":"4ecbed19.fe6a968b.js"},{"revision":"26299fbb3b7531b437d4988486a9c591","url":"4ecdb638.1cc431b1.js"},{"revision":"465a79ed81140714a43132574a7127be","url":"4fb8e227.acc897e7.js"},{"revision":"8aceb5e774bd1e4ef5ee9afc9eef7ddb","url":"505e94d3.fdfce746.js"},{"revision":"5159a82f7f3f55319cb013ca7be06c95","url":"509f25ab.b814d17c.js"},{"revision":"f06ace46bd69c8c8365e647b26ad086a","url":"51b1f1d6.e6ffc386.js"},{"revision":"28eef3003772d1c0f562053bf47bb09d","url":"51d48bbf.6a5ad806.js"},{"revision":"7021581e8cd6a055e9086e9537f0c9c0","url":"51e1f865.4eabe667.js"},{"revision":"7c91542b0ef5c5cf6edff8dce6cdd2a7","url":"5291ce87.5ad61bcb.js"},{"revision":"83bddec15c51cb0039c7fe024b9a9755","url":"53f52407.ae283659.js"},{"revision":"e2a2304db4573be002fdd48c7a91150a","url":"54250d4d.ae8947bb.js"},{"revision":"cc3854315f7c373a0220b690c447bad1","url":"5484bcf5.da079e09.js"},{"revision":"9fbbfb472f34107aa8c06a7a39ebffbf","url":"55e8683d.0e061a55.js"},{"revision":"d64ea3a56a3abe17752a678271ec1364","url":"5712438b.365b7da2.js"},{"revision":"b0fd3abf023a9423129cb2d836a6fa2d","url":"5761b0a3.1d3c9e6f.js"},{"revision":"229cb0e09a617d1b99241b1cdc7138ee","url":"579fad5a.5fb74aeb.js"},{"revision":"b9164cda75a4bf7b56438d0ec924ee96","url":"5955e0b6.41f211a3.js"},{"revision":"ac0a3d3b670696a501a241dce43718cf","url":"5aa87ad2.72522dac.js"},{"revision":"f38d2a487456608138432a08eea08d89","url":"5ca32b86.16b932b6.js"},{"revision":"609a314a02b478dbf4c53dc26de8c5da","url":"5cfdd9a4.697062d4.js"},{"revision":"2ae2a8fa1d2db3c7eb39f0af52eab608","url":"5d051fb4.a63b5683.js"},{"revision":"df6f60676a84963b08079fc8b061b2ea","url":"5d6ae8e6.7bba8fde.js"},{"revision":"11dbe3608b1608fa7b4b39583eb4608e","url":"5e934855.9e1ca14a.js"},{"revision":"c78b8b9d92db840de1c76ea67c920011","url":"60628d4f.c1331e0b.js"},{"revision":"847813776e9aa25c538715c8807e803a","url":"607c901f.535077e2.js"},{"revision":"62d26c36fa9843e2c16fccbc4e27b05e","url":"6137f5fb.d4ea8a99.js"},{"revision":"9d9f0c3510c5348c99b4eb10a29ac213","url":"628947d4.543e9fd6.js"},{"revision":"b4c4f4f642e188312229a8e6267c9169","url":"62b4331c.4a4770a0.js"},{"revision":"a55fc076916c949d74c3be5fbc395831","url":"6414d337.43fdd2ce.js"},{"revision":"1a0a515dfed2e751bb036e6e5059ee76","url":"654e214e.ec1ad110.js"},{"revision":"682bdd55bf000ba0260f8a748c8c23c6","url":"659d8883.2fdae6ee.js"},{"revision":"ff917c4a1daa305474a45443feb83c71","url":"65cdc18d.8541f9eb.js"},{"revision":"cda120cffbcf8de2dbe0f2d31b43b3cb","url":"669eb163.2fca257e.js"},{"revision":"6d948e5f26c60662c79f330e47c29adc","url":"67b6d43f.d76c004e.js"},{"revision":"df150c1c3378484c49e1dc7be9269b6d","url":"6ad20620.b21c8564.js"},{"revision":"16a0dcba4713327cfa109f9db67f015f","url":"6ead7d9e.ac282c14.js"},{"revision":"707f61b8ba9da172f09324199469488c","url":"6fa2e0d3.1bba8e59.js"},{"revision":"6dad4da940ec2f11a719019a957900e6","url":"7041b36e.d6ed2dba.js"},{"revision":"6469e6cad24796809560291794e3ee3c","url":"7134b72c.a02385ed.js"},{"revision":"2c976afe7f6011ae986f7488fa3a7539","url":"71b56dd2.ac6feed1.js"},{"revision":"3c725a5d4a2b1e9d5cee885727063080","url":"71ea0185.e884cbfe.js"},{"revision":"6e50b3ed957ccc23a4b9bd90bac4e418","url":"72a44d47.0fa7aa96.js"},{"revision":"3b8e0900c864360478b64f6958c9301d","url":"73a10da1.713de341.js"},{"revision":"58c83ba3387d3af7150a608768b14563","url":"743d4cab.9aa133b0.js"},{"revision":"fa5512fefaa3487f92b608c05cc6c299","url":"74fa4497.25cfdfff.js"},{"revision":"22a50d2cff99694897ad6d07defa287b","url":"75260993.2650a225.js"},{"revision":"e3fba117aeb58cf4dccc4d49984e06ee","url":"759f9c8a.f9e8cd89.js"},{"revision":"63ce255d902ffd0ba5aa654badb04926","url":"7620d40c.cc0e719c.js"},{"revision":"73122964b5564990a12f180b92da454d","url":"768f72cc.cfb818c8.js"},{"revision":"8171f12df76774d50253119aeec9813c","url":"76ac18e7.a63ad8cd.js"},{"revision":"ed307d374c7aa5258841e38312500873","url":"78a2ab2b.03c7944c.js"},{"revision":"dbc468dcd92f82f719460573254b95c0","url":"792bcde8.c22f6f84.js"},{"revision":"5c3a6b314a3cd6f828c430b03335e2d4","url":"7a6aa70e.f69ec044.js"},{"revision":"e0152c0b80055342d9538ee93c301af5","url":"7b80dbc9.decc0d10.js"},{"revision":"606ed8056abc6ba99f52d3469745a792","url":"7cbc181c.05a76043.js"},{"revision":"cb905f5ef09d58d6d4572ea3c3cde141","url":"7d2e3e28.db30766b.js"},{"revision":"24a0b747daae37876bf2cbda1e1d9cff","url":"7d517e30.88466764.js"},{"revision":"592a7860ecfd9f1cdc6e3f474c5eba95","url":"7d8a996a.7f40c873.js"},{"revision":"377efa743835cfef8bbfe7fc7b027b27","url":"7d977d41.6b2362fb.js"},{"revision":"83cbe93810ef27d656bd3a2ed6654557","url":"7eb20fae.8df126f9.js"},{"revision":"4aeec8572290881492200822310e6193","url":"7ee0f70c.3bec70e9.js"},{"revision":"94a8ee852c715585113d824e7e9e2ad9","url":"7f250459.cd806504.js"},{"revision":"51b090af0337dcef8a0a62349d94ebff","url":"7f27be82.207f3f9c.js"},{"revision":"4cd84d5e6384e4d77ca247051bebb1ac","url":"7fd3c70e.09bada00.js"},{"revision":"f9557190a54e6c48d19a419d58f60d50","url":"8040ab6f.04d521b8.js"},{"revision":"f5eb92eb5d1c8a707c80b52abd9af44b","url":"81849d11.4a45b346.js"},{"revision":"8762d50152c2c4899e06101ed0882817","url":"825191db.222fb6a1.js"},{"revision":"a7605c0855553635f07b854df793799c","url":"83373783.5d8351c5.js"},{"revision":"74c36856a41ee42bb0c5e0ddae99a3e5","url":"834416f3.bcad4408.js"},{"revision":"1a929e9d1b6888c5aecd5388fcf48868","url":"83e112b9.5f2353ae.js"},{"revision":"69f35fb6383c090f5c95b660f09a4aa4","url":"83e91371.3c0c43b0.js"},{"revision":"a4f6e961184739ffd6b01820e980976a","url":"8430369a.a7a3fd3e.js"},{"revision":"784533898bd9f07d0a8af5b90484f320","url":"8595625c.66b10bb7.js"},{"revision":"bf294f362da6d95f4db30c00113afc8d","url":"861ababf.b0cf926d.js"},{"revision":"8efb119e153e582d9dd23778a8fc6f67","url":"8725f69e.02d33da5.js"},{"revision":"88e1465d749b8f2c4306938f2903b284","url":"879f2319.905e7b49.js"},{"revision":"8e4d411e5a660e2382f8d15835ecb893","url":"87b27bf6.33c74502.js"},{"revision":"103d19b1f91c5be87e43b63a32e78948","url":"87e29058.2bf89cca.js"},{"revision":"22ac3b9049f52a9fdecbd96b4d4b6a2a","url":"87f4f442.25adbb61.js"},{"revision":"72fc321e316a4c0542ef740289ce40c0","url":"88b2b791.2eab1f39.js"},{"revision":"3b368cd0a69e44cbde349d38e7bb768b","url":"89584298.4daa9df3.js"},{"revision":"05f10cbb3852ed5e0eeba89dd9a6adf5","url":"8a19da18.0c296471.js"},{"revision":"81164e77c6a041b66c1ccd01b5e89571","url":"8cf7af7c.addccc96.js"},{"revision":"36d7334494133210be39d0139d2bbaa3","url":"8d01b13b.a8b0e394.js"},{"revision":"dbad071a08754a55c7af89eaa111e176","url":"8d114fbb.ae23b68a.js"},{"revision":"2f691118247bac0e96fb459663672a4a","url":"8df00363.83174a42.js"},{"revision":"594286ec63cca1f6dfe492cb1a14ca45","url":"8f27653e.030efb01.js"},{"revision":"a70403b797a6be7d6aee1263d852ec18","url":"8f43e3ea.f8ef62ae.js"},{"revision":"545498172913ffff634c9edc92d4918a","url":"8f480895.74a88a1a.js"},{"revision":"71100818868209fbd304f8682c473e19","url":"92403fa2.ae73150d.js"},{"revision":"4636d1488c29d62239cfb1ef57cbc726","url":"9261bb02.acfcdda9.js"},{"revision":"1378c4937f4e225306ab53e5cf363862","url":"935f2afb.232a5219.js"},{"revision":"c5f26b09e437b93a4e3c97bae55fac83","url":"943f69c0.fb1574f3.js"},{"revision":"6152896d1a6c0316a991ce80695c134b","url":"951ed4a6.9721a0ea.js"},{"revision":"3f40d11ab50a3502303220ae22167cbb","url":"958d803e.2032005b.js"},{"revision":"4b394fe4bcf8fdc40bf1804dbc4fd6cf","url":"965e3580.889470a6.js"},{"revision":"39f3af25618df8fecbcc9d84865246a8","url":"9680d6f0.75902757.js"},{"revision":"de552d5ff61b78474ba0c3581713088c","url":"9be183bd.5dca8b2c.js"},{"revision":"08fb93a980ec40eb7521b5218976e04a","url":"9c261e19.66b6ad49.js"},{"revision":"8c27e9d2bf2ef996ccc75d1af13df85a","url":"9cca358d.16ace802.js"},{"revision":"028194a0356b004a7c70d9b1040a0b97","url":"9e3226a7.b2880c55.js"},{"revision":"c84eca5feb8b8fc3e2a960929f99e0f7","url":"9e5a5f0c.19e30296.js"},{"revision":"b09d2a4a57c3138801658ea38c90c5a9","url":"9ee95b98.9542c66f.js"},{"revision":"3938cd34a6b4ea046e54cb06ed89970a","url":"9f968440.f2be44d1.js"},{"revision":"53046a4782c1fb4baf51f7ff5a21ee4d","url":"a01c19f0.5f4bd25c.js"},{"revision":"0e13cec738b75124ee9a8e4a8fc0f0c5","url":"a072fbc1.e1cd35e2.js"},{"revision":"d14acc39e362ef5fd1076f968ffe5cb5","url":"a1bf5f6b.1a635ac8.js"},{"revision":"3cf52a2e66de049519ebb036352302a5","url":"a1cd342c.bae94f38.js"},{"revision":"740d567f1acf3e2aae7d8929cf098e9f","url":"a243809d.089235c1.js"},{"revision":"e04208c5f602475882ca50ece7aff3b7","url":"a7143e1d.aa0fc5ed.js"},{"revision":"aed99c19e6101e00f421cfa7f7972b4d","url":"a7af4bb1.c418aaa6.js"},{"revision":"28ba8b2a877a2f1ade25558899d2ce4a","url":"a997e6c1.defa8c07.js"},{"revision":"caa57b5e85af05542104baa4980f8c65","url":"aa5a8f7e.a81a0a1f.js"},{"revision":"cb59419c30cd2c7a0c259531c1eeb8c4","url":"aad31e6c.5e57829f.js"},{"revision":"e08e125493eb66f8daa176e621f294fe","url":"abd20303.60d47486.js"},{"revision":"4dd4c8975c74318d3b45b8c8e4d07459","url":"ac50af83.ca67437e.js"},{"revision":"f774b52903793516030bcf8a4e896c69","url":"acd581f1.b7a388c1.js"},{"revision":"15c023dde9a472a36da514ccc8578ff7","url":"ae873307.cbb788c8.js"},{"revision":"b1a999f7a1268091ef2dfdfa3b9b4ede","url":"af0ba617.fdf3eacb.js"},{"revision":"465fec7eb371a402497494a3245b08de","url":"af1dbbeb.82105143.js"},{"revision":"6c35010f5c79f4206230e1ddb5a148aa","url":"algolia.6a89ed7d.js"},{"revision":"dab65d25dc18094e5a8bd076d2e264b5","url":"algolia.ac26a670.css"},{"revision":"50ee0300bba5be4ccb7ad68521a130b2","url":"algolia.f9f53405.js"},{"revision":"5fa7ff45db20b296b88774354fba7588","url":"apis/index.html"},{"revision":"731e4ffa3914a4f1562893433e0ee4ab","url":"b34af260.e5262508.js"},{"revision":"f4752de5afd076bbac5baaee8b140426","url":"b45c2ba5.a13b0b45.js"},{"revision":"6c2238c0c8711206a0e3707ae6194b3a","url":"b4f36c32.1069941b.js"},{"revision":"fc9894dffaf5ffe711b2990f3c8dcefd","url":"b59dc080.4315d909.js"},{"revision":"2df132e54216ad38389b997aad44b80b","url":"b755a579.c452c87e.js"},{"revision":"6316d08468e59eab5f2b7bc1004df94d","url":"b7c8240d.affbdbd5.js"},{"revision":"db4a99999dadeeeb0785c090005c0265","url":"b7da9610.c44e1db0.js"},{"revision":"182148a496fe01afef413757a6ab9515","url":"bb0f61f8.06e622ec.js"},{"revision":"098dcdf88c16f710d3cfb784da891498","url":"bd0f4eea.f40a80a7.js"},{"revision":"919b2f58c4aba0e87e6a73093c9b8d7d","url":"bd362a96.09c5ad83.js"},{"revision":"c1ae676d90dc41433b23b5ea7052ffa5","url":"bdb4e8d0.f4295e1a.js"},{"revision":"70df7313e12668bf1916eaba887dba19","url":"bdb5c4d6.25784a39.js"},{"revision":"84df96366e438465ea14835b6b2aa5a5","url":"be6d2e70.01e349a6.js"},{"revision":"f1b8b1a736ae1d712147724b905f7d95","url":"bf873832.20d89b10.js"},{"revision":"3837fe0b4173caf94a0a3a2bf619bfaa","url":"c3d2d74e.ba69b76e.js"},{"revision":"6cbfdb65ba137b1a2889b5bdbedc8202","url":"c3e25d8b.db558256.js"},{"revision":"ad7a21b6dcab3bc9479bbc2ff40970a1","url":"c4f5d8e4.bb274a0c.js"},{"revision":"3882095d8f05d2a4b241be2437c32399","url":"c61f8ce1.52912241.js"},{"revision":"e806ce7bc37bf5633fcda5530f7cf096","url":"c6c8a2d5.66b84e13.js"},{"revision":"71cd5c7fa1b263e6920af19cb23fc7fc","url":"c6e39e53.1128caf4.js"},{"revision":"ab74f5d711c08e8b7b43df303321535c","url":"c7cac574.ceb5a1ab.js"},{"revision":"e283215d70b680386f4c8411c70ed53d","url":"c7cb9327.2c7216d4.js"},{"revision":"fc44eab3e03f90cc10d1634dfa9ace0b","url":"c7e01f08.00e6926a.js"},{"revision":"b3b2433ca82903abc924d05da5612fe8","url":"c805690c.b8809969.js"},{"revision":"21ef839a6a2c532c616d316371fc41af","url":"c89572b6.2ca55b9f.js"},{"revision":"74da14222f77291bcc9ad5d909a068bf","url":"c8a4923a.3782f804.js"},{"revision":"293804d75d881d5ddf9c6add61ec2e9e","url":"ca089b43.55dd7241.js"},{"revision":"a7a14472dca27c8649f028604d7a688e","url":"ca3d8cc2.68da5033.js"},{"revision":"626055fa7ff9571e8b22fd47f6fba6dc","url":"cb23facc.e072e998.js"},{"revision":"59b65a52d50622289ec871b60a57148b","url":"cc04f164.813a0942.js"},{"revision":"3b342fd2873e5232fcaa581f193f5bd9","url":"cd77a548.6a6aafdd.js"},{"revision":"90bce137742c40746e3bc84a7dc55349","url":"cdaffefa.7724e36d.js"},{"revision":"22c1ed8bc50bec1769b7d69f1c70fdc0","url":"cdfb8226.ad6d8912.js"},{"revision":"47c441c7c3e2ba7703a81d6e8890516e","url":"d156d349.ae136281.js"},{"revision":"f678f42079c9d79ffa7c3f188e1f41a0","url":"d29a201c.75b2989e.js"},{"revision":"97ed0450ce26a35bf580fd51cff460d9","url":"d2c8a737.cd672b2b.js"},{"revision":"77dd0451341725d008c27a7d94f383bc","url":"d3c175ee.b33d31dd.js"},{"revision":"223418e4d03c08b2dd969fd2f76757fe","url":"d45d7b50.67f4a715.js"},{"revision":"fad5b86e38dba1e622adb793f0e44a87","url":"d5207480.f6a67bf3.js"},{"revision":"33b7fbe6c0e00735365b88b793c446c8","url":"d52e2001.e254e75a.js"},{"revision":"37516076ac7af686c0f83642fc8287d1","url":"d556866d.01acb1c7.js"},{"revision":"cc7c2b1141d055ac31b030da614d8163","url":"d6a1d581.6b9606a8.js"},{"revision":"a2ba48a49c3304eb50e1ae44379dce76","url":"d809f4e8.30fec4d6.js"},{"revision":"3196edb2431f8c149ffc9c0a37183ee8","url":"d822d9a1.e0c2aeef.js"},{"revision":"d39774fe5afffb8bf3bc75301b2c6f2f","url":"d88905f8.5958803d.js"},{"revision":"da9dba54c28a891e7bc820dbff4b6cd5","url":"d8d64ed0.bffb2e32.js"},{"revision":"11c4d94273b675e9d3260afdcfe4b0c8","url":"d94d767c.abe5b56b.js"},{"revision":"9b9246a67c96738e44854aefde152a13","url":"d9bc6954.c95d1220.js"},{"revision":"fafb5929c30949b8eed5b1e9253b6efc","url":"d9e29860.1411fedc.js"},{"revision":"61c6eefe2f071ccf5c1d4c40ad29bd83","url":"dc836790.c53ee2a8.js"},{"revision":"1aaf5410cfd2d860c546184f93661453","url":"dcc372b8.032c1b8f.js"},{"revision":"881f9d8afbe944e8b26f8db7e93b7efb","url":"dd3dfd22.33d5757b.js"},{"revision":"c810d06cba68991da5d606eeb45e7a66","url":"docs/01.introduction/history/index.html"},{"revision":"5dfe6eba752b9ef5a96eb19de855f2dc","url":"docs/01.introduction/technologies/index.html"},{"revision":"46f1bf451a90ccb92fedc0fd68bffe9e","url":"docs/02.getting-started/01.env-setup/development-env/index.html"},{"revision":"05d2ec243a16b2a9219ad06a6f7af216","url":"docs/02.getting-started/01.env-setup/os-env-setup/index.html"},{"revision":"a661e23e9ae6b8595057555ea7cf00c1","url":"docs/02.getting-started/01.env-setup/simulator/index.html"},{"revision":"d9e5e5400b4f14048a638cbbe168387f","url":"docs/02.getting-started/02.main-concepts/manifest/index.html"},{"revision":"6f7bc70c9c5e33068e41ad3de34c0bb8","url":"docs/02.getting-started/02.main-concepts/security-access-level/index.html"},{"revision":"97855561ee3a330aefb8df9e5feff372","url":"docs/02.getting-started/03.build-your-first-package-app/building-with-web-technologies/index.html"},{"revision":"b33e1778d9ad58c8e11ffa180853f43d","url":"docs/02.getting-started/03.build-your-first-package-app/sample-code/index.html"},{"revision":"befa11cb45e839a124714e9471072a5e","url":"docs/02.getting-started/03.build-your-first-package-app/test-your-apps/index.html"},{"revision":"fadff87e3438fe20bd0af6d0722e7008","url":"docs/02.getting-started/04.build-your-first-hosted-app/packaged-or-hosted/index.html"},{"revision":"7e19798f918f49612dc1fae3e02359ea","url":"docs/02.getting-started/04.build-your-first-hosted-app/pwa-to-hosted-app/index.html"},{"revision":"22b325382c19e64ea5121c792efa2495","url":"docs/02.getting-started/04.build-your-first-hosted-app/your-first-hosted-app/index.html"},{"revision":"1f885205af6ca37c3dc265a06c3d29c9","url":"docs/03.core-developer-topics/caching/index.html"},{"revision":"a52a7b1ad03a00395c233eda0ffc3609","url":"docs/03.core-developer-topics/dpad-navigation/index.html"},{"revision":"3f9bbcb484d9e7ed6e5f7a26eb2baa51","url":"docs/03.core-developer-topics/emulated-cursor/index.html"},{"revision":"be5ef3ebda91cbdb06c67f7b282eb0e8","url":"docs/03.core-developer-topics/network-state-changes/index.html"},{"revision":"82aa9194ef25aedb58eb05e60a5ee08a","url":"docs/03.core-developer-topics/permissions/index.html"},{"revision":"458aa010add6a8214f66ed530995f329","url":"docs/03.core-developer-topics/softkeys/index.html"},{"revision":"30707dbb1afd46a6d2858719fb01849a","url":"docs/03.core-developer-topics/storage/index.html"},{"revision":"68a9e2cf3a04431cfabeac7d2206c7aa","url":"docs/03.core-developer-topics/supporting-multiple/index.html"},{"revision":"7eb31ed7579388b7e392560eb9ebb2c0","url":"docs/03.core-developer-topics/using-push-notifications/index.html"},{"revision":"8f1c18a10ec7faf1e5bf89b633275b87","url":"docs/04.design-guide/action-icon/index.html"},{"revision":"e3d9bad100bc7abef02191535fd0076d","url":"docs/04.design-guide/basic-navigation/index.html"},{"revision":"04bd6464f6c8d7ffd16885a964da1ff5","url":"docs/04.design-guide/hosted-app/index.html"},{"revision":"6c82cb83d00fe74db82bc377ddf41ccd","url":"docs/04.design-guide/key/index.html"},{"revision":"f200057c4204759b29f86006c064562c","url":"docs/04.design-guide/launcher-icon/index.html"},{"revision":"8d0ccc7122c5436585b56943d7bbe8c9","url":"docs/04.design-guide/marketing-banner/index.html"},{"revision":"81357dc06278774f8a620ef5fb5412db","url":"docs/04.design-guide/typography/index.html"},{"revision":"b821c776911048ecd0414b14f343507f","url":"docs/04.design-guide/ui-component/index.html"},{"revision":"6425d14688d6a1bbb0d15830cc704e04","url":"docs/05.run-and-debug/index.html"},{"revision":"ef6499d84243c2c67a6e26e814e2b030","url":"docs/06.api/other-apis/index.html"},{"revision":"b07b5512417cbc1cf1190f493e099c81","url":"docs/06.api/web-apis/alarm/alarm/index.html"},{"revision":"c3b0c9335d458f715a8fd8bd2fcd19ca","url":"docs/06.api/web-apis/alarm/mozAlarms/index.html"},{"revision":"24455433dbe714242f37329995992ffb","url":"docs/06.api/web-apis/alarm/mozAlarmsManager/add/index.html"},{"revision":"774830e53aa58e2bb37d62d30e137293","url":"docs/06.api/web-apis/alarm/mozAlarmsManager/getAll/index.html"},{"revision":"020dd0c06bc7f95ce1e65f73a93a593a","url":"docs/06.api/web-apis/alarm/mozAlarmsManager/index.html"},{"revision":"53150a7e1b01438d9a593222d743bc10","url":"docs/06.api/web-apis/alarm/mozAlarmsManager/remove/index.html"},{"revision":"436045680560c034179cb48043e6fd04","url":"docs/06.api/web-apis/audiocontext/audiocontext/index.html"},{"revision":"9c4439d804e9a55979467030052a220a","url":"docs/06.api/web-apis/batterymanager/batterymanager/index.html"},{"revision":"910846c6f29acbd1374681b447dd5db7","url":"docs/06.api/web-apis/batterymanager/charging/index.html"},{"revision":"17e87c5dce1b2f862aa6c110d9ffd3cb","url":"docs/06.api/web-apis/batterymanager/chargingtime/index.html"},{"revision":"2fdb7426e4a02ba1acf431347f2c9b86","url":"docs/06.api/web-apis/batterymanager/dischargingtime/index.html"},{"revision":"82df90a7a89a123c8d5f85748f1a22f2","url":"docs/06.api/web-apis/batterymanager/health/index.html"},{"revision":"1f53228a6eee95c65f0bf9509834a7e6","url":"docs/06.api/web-apis/batterymanager/level/index.html"},{"revision":"3c70e58d9b08b36964f35a14a66d2411","url":"docs/06.api/web-apis/batterymanager/onbatteryhealthchange/index.html"},{"revision":"dc216adbed62d72fe6fe84b0981c5d58","url":"docs/06.api/web-apis/batterymanager/onchargingchange/index.html"},{"revision":"89d6118bf02f060d9ebf80e3821f2bf1","url":"docs/06.api/web-apis/batterymanager/onchargingtimechange/index.html"},{"revision":"36c65f60737f1ac1745b584a5e96796b","url":"docs/06.api/web-apis/batterymanager/ondischargingtimechange/index.html"},{"revision":"e2648129aff9a6d2bc796c6321a9c142","url":"docs/06.api/web-apis/batterymanager/onlevelchange/index.html"},{"revision":"3520eded13011bb911e784905ad44334","url":"docs/06.api/web-apis/batterymanager/present/index.html"},{"revision":"0a556ff59d75fa0a3f11b837cd94a111","url":"docs/06.api/web-apis/batterymanager/temperature/index.html"},{"revision":"ac2f90e1caf14368228073080dbac945","url":"docs/06.api/web-apis/bluetooth/bluetooth/index.html"},{"revision":"b5354b5e650394fbf260f9a48f83da6f","url":"docs/06.api/web-apis/bluetooth/bluetoothadapter/04.discoverable/index.html"},{"revision":"efbdc880b086c0723a829f562730eb89","url":"docs/06.api/web-apis/bluetooth/bluetoothadapter/05.discovering/index.html"},{"revision":"32843c4945e12ddc27feeb96499a01f4","url":"docs/06.api/web-apis/bluetooth/bluetoothadapter/06.name/index.html"},{"revision":"a231cdf1962273400320f13da8bafbb0","url":"docs/06.api/web-apis/bluetooth/bluetoothadapter/10.ona2dpstatuschanged/index.html"},{"revision":"e06dc6daba96061b96e96dde71df8507","url":"docs/06.api/web-apis/bluetooth/bluetoothadapter/12.onhfpstatuschanged/index.html"},{"revision":"7572b1ed2ac49108b3f5dd06ade7c1c2","url":"docs/06.api/web-apis/bluetooth/bluetoothadapter/14.onrequestmediaplaystatus/index.html"},{"revision":"c187cebc5f9dc8faa71badbcba127c1b","url":"docs/06.api/web-apis/bluetooth/bluetoothadapter/15.onscostatuschanged/index.html"},{"revision":"657e47778ccfa4e839674618ed5ce0dc","url":"docs/06.api/web-apis/bluetooth/bluetoothadapter/16.getpaireddevices/index.html"},{"revision":"130cf6fad8132cb95343b4a1f33c280e","url":"docs/06.api/web-apis/bluetooth/bluetoothadapter/17.pair/index.html"},{"revision":"c33f79fa55566ab73244d36ab334c0cf","url":"docs/06.api/web-apis/bluetooth/bluetoothadapter/18.setdiscoverable/index.html"},{"revision":"817a729a92fe58eaca679adfb3e52ec1","url":"docs/06.api/web-apis/bluetooth/bluetoothadapter/19.startdiscovery/index.html"},{"revision":"fd8716beeff6a21789d44178b10cddfd","url":"docs/06.api/web-apis/bluetooth/bluetoothadapter/21.stopdiscovery/index.html"},{"revision":"c75463d91b25de64ad3b8ca20320a5bf","url":"docs/06.api/web-apis/bluetooth/bluetoothadapter/22.unpair/index.html"},{"revision":"52356fb8e98c09c644b4fc29de5fde99","url":"docs/06.api/web-apis/bluetooth/bluetoothadapter/index.html"},{"revision":"72b9cfa6663ad78b3802a01929516143","url":"docs/06.api/web-apis/bluetooth/bluetoothadapterevent/index.html"},{"revision":"152b8d8f3f9edaa1a09aa7d726db2248","url":"docs/06.api/web-apis/bluetooth/bluetoothattributeevent/index.html"},{"revision":"bd92cc79023605ba933331fbc0c190cc","url":"docs/06.api/web-apis/bluetooth/bluetoothclassofdevice/index.html"},{"revision":"5d9168899f6dae0662719d1fbdb92938","url":"docs/06.api/web-apis/bluetooth/bluetoothconnectionhandle/index.html"},{"revision":"7e8cc1079ac09b0c6ea15ee351f8f816","url":"docs/06.api/web-apis/bluetooth/bluetoothdevice/01.address/index.html"},{"revision":"364619b0f6d3ee69eba2aa32fed12587","url":"docs/06.api/web-apis/bluetooth/bluetoothdevice/02.cod/index.html"},{"revision":"c77c776efa2e20bd3d8973286d66faff","url":"docs/06.api/web-apis/bluetooth/bluetoothdevice/03.name/index.html"},{"revision":"fb93e1ef868dc74ed6fb972a7824cd82","url":"docs/06.api/web-apis/bluetooth/bluetoothdevice/07.paired/index.html"},{"revision":"5eb2ae1700814546b4f60af02f933b3b","url":"docs/06.api/web-apis/bluetooth/bluetoothdevice/09.uuids/index.html"},{"revision":"8d254abc2b298e88ab3ccc6ad10c0202","url":"docs/06.api/web-apis/bluetooth/bluetoothdevice/10.gatt/index.html"},{"revision":"89f34c70b4d7d875fb33cbc5b4fe3213","url":"docs/06.api/web-apis/bluetooth/bluetoothdevice/11.onattributechanged/index.html"},{"revision":"5b76a758f37bb18e9ee336bc5254e0c4","url":"docs/06.api/web-apis/bluetooth/bluetoothdevice/12.fetchuuids/index.html"},{"revision":"fbd122607e10471be95759ec1bba920c","url":"docs/06.api/web-apis/bluetooth/bluetoothdevice/index.html"},{"revision":"c86a036156dd75fdc6ca108ab0ca376c","url":"docs/06.api/web-apis/bluetooth/bluetoothdeviceevent/index.html"},{"revision":"d525b2da03a567a939c88be729d75be3","url":"docs/06.api/web-apis/bluetooth/bluetoothdiscoveryhandle/index.html"},{"revision":"ed10c409992ad96f48fc7674b04a33f5","url":"docs/06.api/web-apis/bluetooth/bluetoothgatt/index.html"},{"revision":"c858241d39eafc57afbf15b10d949530","url":"docs/06.api/web-apis/bluetooth/bluetoothgattcharacteristic/index.html"},{"revision":"c3310b5866a25e633c59b20dc97ece06","url":"docs/06.api/web-apis/bluetooth/bluetoothgattcharacteristicevent/index.html"},{"revision":"0c9b326d1653c8c70e782d5b31de3aa9","url":"docs/06.api/web-apis/bluetooth/bluetoothgattdescriptor/index.html"},{"revision":"4e56d14c4ae7ea55b76a4040baa6f8f3","url":"docs/06.api/web-apis/bluetooth/bluetoothgattserver/index.html"},{"revision":"89e29bbb9c1b98e82006d19c04d601f2","url":"docs/06.api/web-apis/bluetooth/bluetoothgattservice/index.html"},{"revision":"eed1709d5acbce3949d977ae1df0d759","url":"docs/06.api/web-apis/bluetooth/bluetoothledeviceevent/index.html"},{"revision":"79231f4cc773cefc5ce17718fb3e6f90","url":"docs/06.api/web-apis/bluetooth/bluetoothmanager/03.onadapteradded/index.html"},{"revision":"3e03a8bf7167684e1d240cfb30b80234","url":"docs/06.api/web-apis/bluetooth/bluetoothmanager/index.html"},{"revision":"8fc246718d8588e79c4c1de6fd1e4328","url":"docs/06.api/web-apis/bluetooth/bluetoothstatuschangedevent/index.html"},{"revision":"0ceb996592d27d43d63134ef3e8726af","url":"docs/06.api/web-apis/clients/01.openapp/index.html"},{"revision":"c3c453ee98cfcb0570e0da7d977dcdb4","url":"docs/06.api/web-apis/clients/clients/index.html"},{"revision":"bf784cf25dd3362b5f7ce88b4a7165c1","url":"docs/06.api/web-apis/dataStore/data-store/index.html"},{"revision":"5848648a1a623f2de93063b15760d2af","url":"docs/06.api/web-apis/dataStore/datastore/01.name/index.html"},{"revision":"70c423206a26be93e1af5680f005922d","url":"docs/06.api/web-apis/dataStore/datastore/02.owner/index.html"},{"revision":"81ba11cd6ad806178b7c114deca9d8ae","url":"docs/06.api/web-apis/dataStore/datastore/03.readonly/index.html"},{"revision":"f873824c85d8934c4496a00c7dae0363","url":"docs/06.api/web-apis/dataStore/datastore/04.revisionid/index.html"},{"revision":"671bbc158721365336dfe94a3905f65b","url":"docs/06.api/web-apis/dataStore/datastore/05.onchange/index.html"},{"revision":"81ed268f183c0f24307905a6b251c6ba","url":"docs/06.api/web-apis/dataStore/datastore/06.get/index.html"},{"revision":"20d680d6a6fdede7c156d558b4fc82a0","url":"docs/06.api/web-apis/dataStore/datastore/07.add/index.html"},{"revision":"d0134a02de5666d194268fcfc62656d1","url":"docs/06.api/web-apis/dataStore/datastore/08.put/index.html"},{"revision":"3a0849be8e8641e735590ae1dde513c5","url":"docs/06.api/web-apis/dataStore/datastore/09.remove/index.html"},{"revision":"21887314a569a5af96ab7e49720a6847","url":"docs/06.api/web-apis/dataStore/datastore/10.clear/index.html"},{"revision":"674104ecdebe6c83aac7b3fbfc7f5c19","url":"docs/06.api/web-apis/dataStore/datastore/11.getlength/index.html"},{"revision":"7b608fd875d187a0c74d7f3b5afa141e","url":"docs/06.api/web-apis/dataStore/datastore/12.sync/index.html"},{"revision":"2bc6cf09395a7d7eae8beef42a1bdfcf","url":"docs/06.api/web-apis/dataStore/datastore/index.html"},{"revision":"7cf30263b80b373b287879f85e2beb52","url":"docs/06.api/web-apis/dataStore/datastorechangeevent/id/index.html"},{"revision":"ea43c1f7d6134e7f275b11c2a465fcf6","url":"docs/06.api/web-apis/dataStore/datastorechangeevent/index.html"},{"revision":"4ff4d2065e90575b11f201003d3f7b77","url":"docs/06.api/web-apis/dataStore/datastorechangeevent/operation/index.html"},{"revision":"b0ae77f92507ec591de327197b121e14","url":"docs/06.api/web-apis/dataStore/datastorechangeevent/owner/index.html"},{"revision":"d58bbb8b719c1ea35697f5412978de57","url":"docs/06.api/web-apis/dataStore/datastorechangeevent/revisionid/index.html"},{"revision":"750a682fe176cb63a9064ef936092ebc","url":"docs/06.api/web-apis/dataStore/datastorecursor/close/index.html"},{"revision":"98bb6293f41f7b636d18032f39077634","url":"docs/06.api/web-apis/dataStore/datastorecursor/index.html"},{"revision":"71267f7c5d59a55827c8ebaf22dcb66a","url":"docs/06.api/web-apis/dataStore/datastorecursor/next/index.html"},{"revision":"839cfe3f2dce8c1a875667b07dbe1197","url":"docs/06.api/web-apis/dataStore/datastorecursor/store/index.html"},{"revision":"512fd9b3e3255ee938be001ea17617ee","url":"docs/06.api/web-apis/dataStore/datastoretask/data/index.html"},{"revision":"9438d4ad19691369f28680a39daffde8","url":"docs/06.api/web-apis/dataStore/datastoretask/id/index.html"},{"revision":"2de29ac3f7fe61b69f991b312c97d31a","url":"docs/06.api/web-apis/dataStore/datastoretask/index.html"},{"revision":"358328c3eafe6922046afab0deb8c4fe","url":"docs/06.api/web-apis/dataStore/datastoretask/operation/index.html"},{"revision":"1a0061bb47399ef1308c632cd58c698a","url":"docs/06.api/web-apis/dataStore/datastoretask/revisionid/index.html"},{"revision":"df845371341ed6643e6b8a9d59aafe4a","url":"docs/06.api/web-apis/deviceStorage/01.devicestorage/01.default/index.html"},{"revision":"4e8dcc7f653afbb90b604f69e7136cf9","url":"docs/06.api/web-apis/deviceStorage/01.devicestorage/02.lowdiskspace/index.html"},{"revision":"79c924f52fb1ee578ad39267682f7b63","url":"docs/06.api/web-apis/deviceStorage/01.devicestorage/03.storagename/index.html"},{"revision":"a613375bf35d71590c1f89809e1ab352","url":"docs/06.api/web-apis/deviceStorage/01.devicestorage/04.onchange/index.html"},{"revision":"0187c0eff24a8544a43c8d4b93f078e5","url":"docs/06.api/web-apis/deviceStorage/01.devicestorage/05.add/index.html"},{"revision":"bcf89e25c1e634e98db4e9f09f221b6b","url":"docs/06.api/web-apis/deviceStorage/01.devicestorage/06.addnamed/index.html"},{"revision":"ecba898d688b5d9f9941f3fd40d43fbd","url":"docs/06.api/web-apis/deviceStorage/01.devicestorage/07.available/index.html"},{"revision":"cf4be5cf7ca7fd03c818358c76f7e210","url":"docs/06.api/web-apis/deviceStorage/01.devicestorage/08.delete/index.html"},{"revision":"75705fb3a18990eb23985d642df606af","url":"docs/06.api/web-apis/deviceStorage/01.devicestorage/09.enumerate/index.html"},{"revision":"52fcce5b84ec03e270c2acb909c19d1a","url":"docs/06.api/web-apis/deviceStorage/01.devicestorage/10.enumerateeditable/index.html"},{"revision":"4de434db862efde18394a16276e25984","url":"docs/06.api/web-apis/deviceStorage/01.devicestorage/11.freespace/index.html"},{"revision":"c4f1b9e7cde1a423331e19a47711169e","url":"docs/06.api/web-apis/deviceStorage/01.devicestorage/12.get/index.html"},{"revision":"978156175f110458a780b57d34ba4b4d","url":"docs/06.api/web-apis/deviceStorage/01.devicestorage/13.geteditable/index.html"},{"revision":"aa1fe1f99d15029062392537fd6ed46b","url":"docs/06.api/web-apis/deviceStorage/01.devicestorage/14.usedspace/index.html"},{"revision":"bd6be77ca4afa710461f1188d34f6aa8","url":"docs/06.api/web-apis/deviceStorage/01.devicestorage/index.html"},{"revision":"7d7617134f94625e585c24484c776b7a","url":"docs/06.api/web-apis/deviceStorage/02.devicestoragechangeevent/01.path/index.html"},{"revision":"eec8cd41dfde14fbb2def0aa6801a7b5","url":"docs/06.api/web-apis/deviceStorage/02.devicestoragechangeevent/02.reason/index.html"},{"revision":"4a21e429787160017b6e3ae1542f05a1","url":"docs/06.api/web-apis/deviceStorage/02.devicestoragechangeevent/index.html"},{"revision":"07c8792fc765d23a4a554478a57bba2f","url":"docs/06.api/web-apis/deviceStorage/device-storage/index.html"},{"revision":"f5e412b886b80eb831eaf2eee9848538","url":"docs/06.api/web-apis/geolocation/01.clearwatch/index.html"},{"revision":"42c1bd3bee2309ef3c69fdc5e2ecec80","url":"docs/06.api/web-apis/geolocation/02.getposition/index.html"},{"revision":"d5d3a62b5941b7e0afb2a2c92bb73a86","url":"docs/06.api/web-apis/geolocation/03.watchposition/index.html"},{"revision":"20d02e2c6de713e2fc91a122c91d683c","url":"docs/06.api/web-apis/geolocation/geolocation/index.html"},{"revision":"a7f94137737111cd9edad3cb1d1f6270","url":"docs/06.api/web-apis/index.html"},{"revision":"121a75235a660ffcb1d59456425684af","url":"docs/06.api/web-apis/largetext/largetext/index.html"},{"revision":"4f0aa97e88dd051e2f395cc0cfa61a3a","url":"docs/06.api/web-apis/mediasource/mediasource/index.html"},{"revision":"4e49d05943f4a9184d27f160af367bec","url":"docs/06.api/web-apis/mozhaspendingmessage/mozhaspendingmessage/index.html"},{"revision":"ffafa44ade490d23ccb30ac2a819d5c6","url":"docs/06.api/web-apis/mozsetmessagehandler/mozsetmessagehandler/index.html"},{"revision":"02ba23619f32c6dabd593471f8f969dc","url":"docs/06.api/web-apis/networkStats/moznetworkstats/01.connectiontype/index.html"},{"revision":"912f1eb7328bc2f5979946e8504f8612","url":"docs/06.api/web-apis/networkStats/moznetworkstats/02.data/index.html"},{"revision":"e721f8cbaf6d5eade34eb8c40d1b3269","url":"docs/06.api/web-apis/networkStats/moznetworkstats/03.start/index.html"},{"revision":"8efd70c665e5ecb4163c0d74ad2008cc","url":"docs/06.api/web-apis/networkStats/moznetworkstats/04.end/index.html"},{"revision":"ce2b09cf949cc281ed1dd0caea4f3a2d","url":"docs/06.api/web-apis/networkStats/moznetworkstats/index.html"},{"revision":"5a5e287de07cbea2370855bee0126d49","url":"docs/06.api/web-apis/networkStats/moznetworkstatsdata/date/index.html"},{"revision":"156bf37a30f5772d77a178546e44169c","url":"docs/06.api/web-apis/networkStats/moznetworkstatsdata/index.html"},{"revision":"4815f8c5aa3de30262bbd4f5eedc66c0","url":"docs/06.api/web-apis/networkStats/moznetworkstatsdata/rxbytes/index.html"},{"revision":"16ec9e11cd13707868a745d2431a7281","url":"docs/06.api/web-apis/networkStats/moznetworkstatsdata/txbytes/index.html"},{"revision":"f9f494bc3820d0c730d5342825e4bc02","url":"docs/06.api/web-apis/networkStats/moznetworkstatsmanager/addalarm/index.html"},{"revision":"2c1e66a3ab014295ab74e9887a274ef1","url":"docs/06.api/web-apis/networkStats/moznetworkstatsmanager/clearallstats/index.html"},{"revision":"12c5922157ad886a641f4d284edfd618","url":"docs/06.api/web-apis/networkStats/moznetworkstatsmanager/clearstats/index.html"},{"revision":"0cac39310ed42fb510436ab57c31655c","url":"docs/06.api/web-apis/networkStats/moznetworkstatsmanager/getallalarms/index.html"},{"revision":"d69fff5ddbde0feb17b2f84632bc0063","url":"docs/06.api/web-apis/networkStats/moznetworkstatsmanager/getavailablenetworks/index.html"},{"revision":"be8ffd35383482cfa80d0c479a498875","url":"docs/06.api/web-apis/networkStats/moznetworkstatsmanager/getavailableservicetypes/index.html"},{"revision":"512afead1cea517e7d8bda71540c5b08","url":"docs/06.api/web-apis/networkStats/moznetworkstatsmanager/getsamples/index.html"},{"revision":"3d599fe7446ac96325c50b8e6aaaa939","url":"docs/06.api/web-apis/networkStats/moznetworkstatsmanager/index.html"},{"revision":"c2c2f44dffd1a20be8a8c75395ca2a3b","url":"docs/06.api/web-apis/networkStats/moznetworkstatsmanager/maxstorageage/index.html"},{"revision":"00879a36955e10d6ac5184fb6a73ca73","url":"docs/06.api/web-apis/networkStats/moznetworkstatsmanager/removealarms/index.html"},{"revision":"e392abe58b4e2ce88bf0869e969a9332","url":"docs/06.api/web-apis/networkStats/moznetworkstatsmanager/samplerate/index.html"},{"revision":"6e3d752a3a15a428c9709a64c1725b6d","url":"docs/06.api/web-apis/networkStats/network-stats/index.html"},{"revision":"5143b7614b563c2c5b56915ec9df46cf","url":"docs/06.api/web-apis/seChannel/sechannel/index.html"},{"revision":"81fde8cf0b9aa92fc036034d0effed04","url":"docs/06.api/web-apis/seManager/semanager/index.html"},{"revision":"6d4673a272534a5808f926e9ec4c183c","url":"docs/06.api/web-apis/seReader/sereader/index.html"},{"revision":"a579dc176bfc7a3fa274b789ff6bb6e9","url":"docs/06.api/web-apis/seresponse/seresponse/index.html"},{"revision":"70900e391d598e423389eede79a4c161","url":"docs/06.api/web-apis/seSession/sesession/index.html"},{"revision":"21cfab43e6b71059eec8c7cc72a765a0","url":"docs/06.api/web-apis/speeddial/speeddial/index.html"},{"revision":"e01c7021ebf321b14626cdef0f4fbf3f","url":"docs/06.api/web-apis/volumemanager/volumemanager/index.html"},{"revision":"90a092f1325bca8f9810bdd6e247c832","url":"docs/06.api/web-apis/wifiInformation/mozwificonnectioninfoevent/index.html"},{"revision":"cac08c2db2424c262af67917ddad35f2","url":"docs/06.api/web-apis/wifiInformation/mozwificonnectioninfoevent/ipaddress/index.html"},{"revision":"2ece06c717d3cd75d5b90465eaad615a","url":"docs/06.api/web-apis/wifiInformation/mozwificonnectioninfoevent/linkspeed/index.html"},{"revision":"86d960d45ef5d33390d85db38f7a936f","url":"docs/06.api/web-apis/wifiInformation/mozwificonnectioninfoevent/network/index.html"},{"revision":"9d3f099b8c277198f08d000d8b8a0d03","url":"docs/06.api/web-apis/wifiInformation/mozwificonnectioninfoevent/relsignalstrength/index.html"},{"revision":"fc57dfab4e63bacf697a18447981434a","url":"docs/06.api/web-apis/wifiInformation/mozwificonnectioninfoevent/signalstrength/index.html"},{"revision":"a011aef5e680fc7766e229a21cab9b66","url":"docs/06.api/web-apis/wifiInformation/mozwifistatuschangeevent/index.html"},{"revision":"b1ceda5764dd37af6dd2c687ac11641f","url":"docs/06.api/web-apis/wifiInformation/mozwifistatuschangeevent/network/index.html"},{"revision":"0cd2c27e75716487c18bf4afd61508ea","url":"docs/06.api/web-apis/wifiInformation/mozwifistatuschangeevent/status/index.html"},{"revision":"a18bdb8314750ceb7cf5134b487e4256","url":"docs/06.api/web-apis/wifiInformation/wifi-information/index.html"},{"revision":"32fff1f3dedaa382657e718a1867bd21","url":"docs/06.api/web-apis/wifiInformation/wifimanager/associate/index.html"},{"revision":"3fe11303ff4664032e23000c9a256b40","url":"docs/06.api/web-apis/wifiInformation/wifimanager/connection/index.html"},{"revision":"f3ddf569c016261fbbf50202b625f842","url":"docs/06.api/web-apis/wifiInformation/wifimanager/connectioninformation/index.html"},{"revision":"6529a560fc732a292913da20ab923fbf","url":"docs/06.api/web-apis/wifiInformation/wifimanager/enabled/index.html"},{"revision":"1f97666d659567dfbb9d4f96d041d915","url":"docs/06.api/web-apis/wifiInformation/wifimanager/forget/index.html"},{"revision":"ad9019b22524d1b3ff06231269f95f90","url":"docs/06.api/web-apis/wifiInformation/wifimanager/getknownnetworks/index.html"},{"revision":"d63544b409080ec7ca2116eb341f7f31","url":"docs/06.api/web-apis/wifiInformation/wifimanager/getnetworks/index.html"},{"revision":"01b1e067aac9c45dc27f54da903b367f","url":"docs/06.api/web-apis/wifiInformation/wifimanager/index.html"},{"revision":"15723f1375bb19ba17fa06cd859d3de8","url":"docs/06.api/web-apis/wifiInformation/wifimanager/macaddress/index.html"},{"revision":"84f69f7d2951bb83fcb40ab0e2369b8a","url":"docs/06.api/web-apis/wifiInformation/wifimanager/onconnectioninfoupdate/index.html"},{"revision":"b376d3644d3327fbf89106449736d581","url":"docs/06.api/web-apis/wifiInformation/wifimanager/ondisabled/index.html"},{"revision":"250343a0ca6d08edccd2d94038b9ea72","url":"docs/06.api/web-apis/wifiInformation/wifimanager/onenabled/index.html"},{"revision":"c935c31562cb76fec24157a48fe0faeb","url":"docs/06.api/web-apis/wifiInformation/wifimanager/onstatuschange/index.html"},{"revision":"0eaeb5a10bbe12d756643cb499cc3121","url":"docs/06.api/web-apis/wifiInformation/wifimanager/setpowersavingmode/index.html"},{"revision":"81408c8dbee5b46328f5faea8ea32806","url":"docs/06.api/web-apis/wifiInformation/wifimanager/setstaticipmode/index.html"},{"revision":"66ad29dd751ed79af1b20c4aeab667e0","url":"docs/06.api/web-apis/wifiInformation/wifimanager/wps/index.html"},{"revision":"de798cedf61ee72bbde7e494ef9892b2","url":"docs/07.submit-to-kaistore/index.html"},{"revision":"44ffa05d3d170ea9a3a98d289568cb69","url":"docs/08.contact-us/index.html"},{"revision":"d7c116b02b1c554e808c085ef67517bd","url":"docs/index.html"},{"revision":"8a8e4b2723d3d59d36b29196836238a8","url":"docs/sfp-3.0/01.introduction/history/index.html"},{"revision":"69865863a2ed6f60edf716f2cb27e2fe","url":"docs/sfp-3.0/01.introduction/overview/index.html"},{"revision":"07daf33dbce6d657f6d7d3a0fb74808f","url":"docs/sfp-3.0/01.introduction/technologies/index.html"},{"revision":"50a096a79a3683e57bbb6e1905ccc4a0","url":"docs/sfp-3.0/02.getting-started/01.env-setup/development-env/index.html"},{"revision":"7435fd905777297a59517b18af6041f9","url":"docs/sfp-3.0/02.getting-started/01.env-setup/os-env-setup/index.html"},{"revision":"3e38c92f46dbb42efb1b55260fa6de69","url":"docs/sfp-3.0/02.getting-started/01.env-setup/simulator/index.html"},{"revision":"b2213e641a3c5b9b7e97419d0d8aed4b","url":"docs/sfp-3.0/02.getting-started/02.main-concepts/manifest/index.html"},{"revision":"bb281f544959d8e6bf1f0c9238dd4ed9","url":"docs/sfp-3.0/02.getting-started/02.main-concepts/security-access-level/index.html"},{"revision":"991a4664d5a0da6ca7ebd1a85ff6fb09","url":"docs/sfp-3.0/02.getting-started/03.build-your-first-package-app/building-with-web-technologies/index.html"},{"revision":"88cc9425cb211b3ac9667590bd0b02b4","url":"docs/sfp-3.0/02.getting-started/03.build-your-first-package-app/sample-code/index.html"},{"revision":"e83063e01c16e69332e11fff2d1da8c9","url":"docs/sfp-3.0/02.getting-started/03.build-your-first-package-app/test-your-apps/index.html"},{"revision":"220fc5358ab542fa832510821e1943b8","url":"docs/sfp-3.0/02.getting-started/04.build-your-first-hosted-app/packaged-or-hosted/index.html"},{"revision":"f0359798d3d0b8b3aa0d83bcd3946d71","url":"docs/sfp-3.0/02.getting-started/04.build-your-first-hosted-app/pwa-to-hosted-app/index.html"},{"revision":"252d6fedcded53fa0ea7781215148005","url":"docs/sfp-3.0/02.getting-started/04.build-your-first-hosted-app/your-first-hosted-app/index.html"},{"revision":"93c7a0634bfb8b805e2b7aeb820f5dc7","url":"docs/sfp-3.0/03.core-developer-topics/caching/index.html"},{"revision":"675915f40b2434d304b76848dd25c1ca","url":"docs/sfp-3.0/03.core-developer-topics/dpad-navigation/index.html"},{"revision":"19d1f33084c33283d8fcfad570900705","url":"docs/sfp-3.0/03.core-developer-topics/emulated-cursor/index.html"},{"revision":"ad0f14b33f479c5f7e7f3a8c3c4c83fa","url":"docs/sfp-3.0/03.core-developer-topics/network-state-changes/index.html"},{"revision":"0475459781653561a09faa246a4a1c5c","url":"docs/sfp-3.0/03.core-developer-topics/permissions/index.html"},{"revision":"39ef4c14547be7d470708ef970dd032b","url":"docs/sfp-3.0/03.core-developer-topics/softkeys/index.html"},{"revision":"659ede58e7aa3a6767b316ac48586178","url":"docs/sfp-3.0/03.core-developer-topics/storage/index.html"},{"revision":"eb32c9a518a7720ed3ac923c40dcdb75","url":"docs/sfp-3.0/03.core-developer-topics/supporting-multiple/index.html"},{"revision":"494e2e05fb1683c5996af83f8f9a3074","url":"docs/sfp-3.0/03.core-developer-topics/using-push-notifications/index.html"},{"revision":"7bb6083aca388c052e0282730446d96e","url":"docs/sfp-3.0/04.design-guide/action-icon/index.html"},{"revision":"69138bdd3a6bd80cfaff7fbbdf189ffd","url":"docs/sfp-3.0/04.design-guide/basic-navigation/index.html"},{"revision":"759b60fa60ad9f79416643951188672c","url":"docs/sfp-3.0/04.design-guide/hosted-app/index.html"},{"revision":"97b746faed1c056b030f3628a63f98b4","url":"docs/sfp-3.0/04.design-guide/kai-designed/index.html"},{"revision":"43204f05a4cd17041eb5616c45e60d10","url":"docs/sfp-3.0/04.design-guide/key/index.html"},{"revision":"bc51e7cc4374023135e0285df941b748","url":"docs/sfp-3.0/04.design-guide/launcher-icon/index.html"},{"revision":"00e18263988e3ff67a2fa77c895d38d5","url":"docs/sfp-3.0/04.design-guide/marketing-banner/index.html"},{"revision":"57c295b21a0baace82358502b6da4c54","url":"docs/sfp-3.0/04.design-guide/typography/index.html"},{"revision":"beef8121a8d360d6f724b92ab5c50db4","url":"docs/sfp-3.0/04.design-guide/ui-component/index.html"},{"revision":"ad4503a2fb53d32b986aedfefd55e639","url":"docs/sfp-3.0/05.run-and-debug/index.html"},{"revision":"755b9c19cd4f206667150724325019cb","url":"docs/sfp-3.0/06.api/other-apis/index.html"},{"revision":"4f1d152daaa48e4400957955a9e642c9","url":"docs/sfp-3.0/06.api/web-apis/alarm/alarm/index.html"},{"revision":"e43374670e383c457a213a078e1d4ffd","url":"docs/sfp-3.0/06.api/web-apis/index.html"},{"revision":"16f58d5e81316cd558afe6c546c63118","url":"docs/sfp-3.0/07.submit-to-kaistore/index.html"},{"revision":"4329d371019a970d993b637698f2c091","url":"docs/sfp-3.0/08.contact-us/index.html"},{"revision":"a7373d5375bd0f2d895bcbf3ea963328","url":"docs/sfp-3.0/09.migration-from-2.5/api-change/index.html"},{"revision":"f9e23ebccb83535c1f892e1f46db25d4","url":"docs/sfp-3.0/09.migration-from-2.5/manifest-change/index.html"},{"revision":"69400e9f1fe45b5f9c06ca1f93593644","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/b2g/alarmManager/navigator-b2g-alarmManager/index.html"},{"revision":"e443b118b3df3927df7f37a1f4187bd4","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/b2g/audioChannelManager/navigator-b2g-audioChannelManager/index.html"},{"revision":"dae93ad2433378519808e96c1276891b","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/b2g/cameras/cameraManager/getCamera/index.html"},{"revision":"36f2398a781b80c1d53eb7a302a042ad","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/b2g/cameras/cameraManager/getListOfCameras/index.html"},{"revision":"facb6e5f5264086d762b399333c03405","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/b2g/cameras/cameraManager/index.html"},{"revision":"0c272478291282153dd868a59ff36439","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/b2g/cameras/navigator-b2g-cameras/index.html"},{"revision":"ad31480a3125190d47fa3a156d30ca9c","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/b2g/dataCallManager/navigator-b2g-dataCallManager/index.html"},{"revision":"f97477a1510134fccb3576acdac0f2c5","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/b2g/downloadManager/navigator-b2g-downloadManager/index.html"},{"revision":"2c4f7b2a2603120d74e4bc6923cbd4f8","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/b2g/externalapi/navigator-b2g-externalapi/index.html"},{"revision":"4fbb0dca774f483d13d82f4c2ffc2f6c","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/b2g/fmRadio/navigator-b2g-fmRadio/index.html"},{"revision":"6a20cc9173762370f945bf6d6c607aa6","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/b2g/getDeviceStorage/navigator-b2g-getDeviceStorage/index.html"},{"revision":"ef9741ac6dc979bf0588dd7b17f3cda6","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/b2g/inputMethod/navigator-b2g-inputMethod/index.html"},{"revision":"00abb22d93ca19d9ca7f6d849966dae3","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/b2g/mobileConnection/navigator-b2g-mobileConnection/index.html"},{"revision":"2b0b12a0c6bb1cdf395808b131a10687","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/b2g/mobileMessage/navigator-b2g-mobileMessage/index.html"},{"revision":"f13d469125e45297f6234b4d24c5e8c1","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/b2g/virtualCursor/navigator-b2g-virtualCursor/index.html"},{"revision":"ccce2f06d01435bf23fdedaa8c09a728","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/daemon-api/appmanager/daemon-api-appsmanager/index.html"},{"revision":"5011496c2a92313c6d00526e4e1421b1","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/daemon-api/audiovolumemanager/daemon-api-audiovolumemanager/index.html"},{"revision":"3481c7b9b6bd562044d3872c635ef162","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/daemon-api/contacts/daemon-api-contacts/index.html"},{"revision":"61d518624e45d55f4e612eff3887da5e","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/daemon-api/devicecapability/daemon-api-devicecapability/index.html"},{"revision":"54351e022649351cc82df535a68ad0db","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/daemon-api/powermanager/daemon-api-powermanager/index.html"},{"revision":"cb4acd6d45500d187dc1276b610b86a1","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/daemon-api/settings/daemon-api-settings/index.html"},{"revision":"9f7d64a0a6edda6671a5a488d6ffcaab","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/daemon-api/tcpsocket/daemon-api-tcpsocket/index.html"},{"revision":"be9f5f8b4b652339f8338486966f31c1","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/daemon-api/telephony/daemon-api-telephony/index.html"},{"revision":"20ac66d2a46259d829d7a7dc2ba3a7f6","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/daemon-api/timeservice/daemon-api-timeservices/index.html"},{"revision":"dab711c71eded459bac513c5ae575b47","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/navigator/geolocation/navigator-geolocation/index.html"},{"revision":"fdff95671aa1891b127c1afecbdc1736","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/navigator/getUserMediaDevices/navigator-getUserMediaDevices/index.html"},{"revision":"058b3ed9d967835531ccedf569ebd9b5","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/navigator/mozTCPSocket/navigator-mozTCPSocket/index.html"},{"revision":"e451824e43b188b9476ebfca98bb06a3","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/navigator/mozTCPSocket/tcpSocket/index.html"},{"revision":"b5a9930b6c467e6f29bd0cf47051235b","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/navigator/mozTCPSocket/tcpSocketAPI/index.html"},{"revision":"971e36ed321b7d5eb2b19e544f52f8ce","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/navigator/vibrate/navigator-vibrate/index.html"},{"revision":"85699d8dc9da3b656ff25914a82f05e3","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/others/AudioChannelClient/other-AudioChannelClient/index.html"},{"revision":"319f20c5b8bf554af10840b814ca4722","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/others/AudioContext/other-AudioContext/index.html"},{"revision":"dccf03ee764c962df4087ffb86f3550c","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/others/HTMLMediaElement/other-HTMLMediaElement/index.html"},{"revision":"4b58158c3f019e65e8aacb3c537c3a7b","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/others/notification/other-Notification/index.html"},{"revision":"1fa5756fa645255058a8a0553674ed76","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/others/ServiceWorker/other-ServiceWorker/index.html"},{"revision":"c116b7245c2c06e413458b656721e46d","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/others/speakerManager/other-SpeakerManager/index.html"},{"revision":"77b9b6752b7120c66a4c492c827b837b","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/others/XMLHttpRequest/other-XMLHttpRequest/index.html"},{"revision":"814132ac81a0292f03840ca46343dcb3","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/permissionAPIs/AudioChannels/permission-table-audiochannel/index.html"},{"revision":"713272a4e179ba27b3bfd8abf42f41cd","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/permissionAPIs/BlueTooth/bluetoothadapter/BluetoothAdapter/index.html"},{"revision":"5d68b53156291fa6bf0b2c328fb3e2fa","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/permissionAPIs/BlueTooth/bluetoothadapterevent/BluetoothAdapterEvent/index.html"},{"revision":"1bd1f79a8df491e70b341a726a88c374","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/permissionAPIs/BlueTooth/bluetoothattributeevent/BluetoothAttributeEvent/index.html"},{"revision":"3e9f5b742d04db88a99114940c27f6ed","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/permissionAPIs/BlueTooth/bluetoothclassofdevice/BluetoothClassOfDevice/index.html"},{"revision":"575a322354802c4a227c5e727ac4fe55","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/permissionAPIs/BlueTooth/bluetoothconnectionhandle/BluetoothConnectionHandle/index.html"},{"revision":"dc764f600b738c6367a016a0b137c0b0","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/permissionAPIs/BlueTooth/bluetoothdevice/BluetoothDevice/index.html"},{"revision":"1d30445250dc41eb75106f3845104437","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/permissionAPIs/BlueTooth/bluetoothdeviceevent/BluetoothDeviceEvent/index.html"},{"revision":"f688977fdaed8d3f36bc01f3d5809346","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/permissionAPIs/BlueTooth/bluetoothdiscoveryhandle/BluetoothDiscoveryHandle/index.html"},{"revision":"913df29d6cad49da6b320964df5c36cd","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/permissionAPIs/BlueTooth/bluetoothgatt/BluetoothGatt/index.html"},{"revision":"beb3b76e80076484351a1e3f1a9cbcae","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/permissionAPIs/BlueTooth/bluetoothgattcharacteristic/BluetoothGattCharacteristic/index.html"},{"revision":"010ce24cb9df5fa79c12dba79c8ddedc","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/permissionAPIs/BlueTooth/bluetoothgattcharacteristicevent/BluetoothGattCharacteristicEvent/index.html"},{"revision":"aa93291280243194d574033cf758f790","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/permissionAPIs/BlueTooth/bluetoothgattdescriptor/BluetoothGattDescriptor/index.html"},{"revision":"1378c23ba839c85cac0a193e5bcc51f1","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/permissionAPIs/BlueTooth/bluetoothgattserver/BluetoothGattServer/index.html"},{"revision":"987a211b6d24331b7e557e31b6e2e3d0","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/permissionAPIs/BlueTooth/bluetoothgattservice/BluetoothGattService/index.html"},{"revision":"a9882abbfe622790f6c727e9002dc714","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/permissionAPIs/BlueTooth/bluetoothledeviceevent/BluetoothLeDeviceEvent/index.html"},{"revision":"643434da58533a8ba76c3fafd1c7d49d","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/permissionAPIs/BlueTooth/bluetoothmanager/BluetoothManager/index.html"},{"revision":"4d1d95783e3cd98d53964b641d2f207c","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/permissionAPIs/BlueTooth/bluetoothstatuschangedevent/BluetoothStatusChangedEvent/index.html"},{"revision":"1aa704e157fcf30bd63ecb8c8200cb0c","url":"docs/sfp-3.0/09.migration-from-2.5/next-new-apis/permissionAPIs/BlueTooth/permission-table-bluetooth/index.html"},{"revision":"768fc9ea3dc65d0df8b0e886e2b6bc00","url":"docs/sfp-3.0/09.migration-from-2.5/permission-change/index.html"},{"revision":"4decd4938a32cc596e3c033c412bff4f","url":"docs/sfp-3.0/index.html"},{"revision":"b12bbd6ff89b0780ea86361ddd0fb624","url":"e03e333f.201ddb32.js"},{"revision":"ea27206ebecea0d9f44f1fcd81def4cd","url":"e04cd368.5ff20b79.js"},{"revision":"9832427f18070cca2ed6a4ef13b0dfe9","url":"e15894fd.7d9de3c7.js"},{"revision":"5ad3aed64d6ea9339ce406ac17db7786","url":"e1f487dd.91dfdb22.js"},{"revision":"6a39463a2a2f22c8a1e0210dbfb2c00b","url":"e29a3678.e92371fb.js"},{"revision":"9f8491ae7a841f912c41f828d35c1072","url":"e2d3c563.d8b7da65.js"},{"revision":"d5a3120cec9d8576beb1cc23ecaf095b","url":"e571c9ec.e80fc84f.js"},{"revision":"7eb0b32c5cd9642f14a72bcc9ef37815","url":"e5b12751.4cbc593b.js"},{"revision":"b7dd30efcbfd7efd6a2bdfed10b3f8b4","url":"e63499fd.57168e30.js"},{"revision":"b2b9ab119dd10c0069d9a9c3e1bf5e9c","url":"e7605af6.cef8e3a9.js"},{"revision":"9e2a8ca3421f1c094305271653d6f98c","url":"e83ab80a.09b4e55c.js"},{"revision":"c10aeb33b929900d8c68d5902df0d973","url":"e896f735.be77048c.js"},{"revision":"ad500d201fa80faa3db7488028e5fdf5","url":"e8d38d99.1480d620.js"},{"revision":"b2865fc11447e92150bab061cef7b9b0","url":"e9641d40.e722b25f.js"},{"revision":"46089993c0eec94eb6f92d1ec8399d09","url":"ead8dcef.9485b8ab.js"},{"revision":"d7a3cc5501c74de1015410a4d1b13caa","url":"eae0ba19.5d15dd95.js"},{"revision":"f9ca191b2a2d0169ebc3fb3d90f7a202","url":"eaf33bdf.d44e93cf.js"},{"revision":"002af622562ad564121b170c4c4e8ef7","url":"eb2cf5b8.c7b6569f.js"},{"revision":"c0ed54e0b063d2f7f0e30da835d7309f","url":"eb396f45.21eec578.js"},{"revision":"82a66d13113fbe8ee50729bd73932bf2","url":"ec84a8f2.34b97e1e.js"},{"revision":"ed988c8ec40b34a167beeaa4c73df2ca","url":"ece02ee3.69f77223.js"},{"revision":"d160a49c384ef7587aeb4f310fe760b4","url":"ee1e85fa.8fc697ac.js"},{"revision":"c1bd79e02349e25bdb8bf11523f30342","url":"eecbf1a7.593e158a.js"},{"revision":"5cd48a156be3ee6a4974e72a39cef85b","url":"ef51d256.f19ac9a5.js"},{"revision":"2a03ce2c808f7e619a5e7c67b32b5c34","url":"efea8de1.4d78008f.js"},{"revision":"5e42deff2af580cc34c23f87a72f0162","url":"f05d2e09.007f3a7e.js"},{"revision":"1f5adddc020b97876ed38242ae997e31","url":"f09dd44d.f6ae8350.js"},{"revision":"1718c09ad5fe3743fc6cfc5a35498ab8","url":"f0d21e25.80242175.js"},{"revision":"9a5061645e1bfd35434bbcafd7b4866e","url":"f1615df7.14b5a7fa.js"},{"revision":"4eb4da95fd937ba34ad03ea2ebf56667","url":"f1980bbd.f6436f06.js"},{"revision":"91d7676d488fab70fb53b3fd80c89418","url":"f314bcd3.9427f0a5.js"},{"revision":"c9ca023172bab6979aafc9d44e43663f","url":"f3cee438.26aaf925.js"},{"revision":"7faaf3070f102a02ec164bc294c72158","url":"f4326478.02d45e26.js"},{"revision":"9f7601f06b674780d0360ae180f4b404","url":"f47c3fa9.05dd0613.js"},{"revision":"a36b036cfee4c3ddd0f4add22362e480","url":"f4be8a09.cab424b8.js"},{"revision":"61babf4af35cae392330ed79ffa8a303","url":"f71e9104.3549fd80.js"},{"revision":"d3c17c1dda364d7913d867a77e557445","url":"f7489ac7.3611586c.js"},{"revision":"5e0828d715a801dae2647210d119cfa4","url":"f7975823.603abbce.js"},{"revision":"fb6aebdb34bae014eab01de70beb287d","url":"f976e792.c0aeb691.js"},{"revision":"2cb8aad977a6eb6a17ed14d71473db0f","url":"fc8299ee.e6b562f8.js"},{"revision":"80aac211a9be9fd311eb084df3e34219","url":"fd96de28.10fad098.js"},{"revision":"b2c6a018a4b08fc4c3dc3bb99a709c29","url":"fdfbcd02.8833fb4c.js"},{"revision":"ade31f8c1b6923fa796c2456042aad12","url":"index.html"},{"revision":"8a6aad7e5ae7c9c984289cf8249ee52a","url":"main.09b1d833.js"},{"revision":"e5bcb7d7d9c467b49f4e392c1b8007f5","url":"manifest.json"},{"revision":"2052217b9e89d301a9cd60b218b8e7ce","url":"runtime~main.aa4c6411.js"},{"revision":"419c232a308862965fa81fc19872b4b0","url":"search/index.html"},{"revision":"f310cecf5293d73c6a81127208d6191f","url":"styles.5f67b2a1.js"},{"revision":"94e6286456d3736f7ad9bdb0e1a3c61e","url":"styles.dcdfb346.css"},{"revision":"01e883449ee198d78457ab4755aa7ee2","url":"versions/index.html"},{"revision":"6944adc75e18c3b6892eac5fb33e7876","url":"a60c0139b0872e020a78e7df478cd862.svg"},{"revision":"d81d6b71366fb0a6c431a4f97e9380d3","url":"assets/images/banner-apis-bb62d5fc3e3ff0bb4b2dd939e4c8d561.jpg"},{"revision":"6944adc75e18c3b6892eac5fb33e7876","url":"icons/arrow.svg"},{"revision":"a88e8d80f1f9bae15b6710e50f742940","url":"icons/todo112.png"},{"revision":"6b379feb6ffe269cd9f221d40bd04326","url":"icons/todo56.png"},{"revision":"78b6324b1be55e9473b2ab31652d2374","url":"icons/todo84.png"},{"revision":"e6ce79c8fb88a46fcfa745543215ad82","url":"img/action-icon/action_icon.png"},{"revision":"a22ba2d90717b55cdcae021b01f7cbf2","url":"img/action-icon/normal_focus_status_do.png"},{"revision":"048f889ffe6b0600965017a7e3a81aeb","url":"img/action-icon/normal_focus_status_dont.png"},{"revision":"3010755e386823f70dde19a91d270c43","url":"img/action-icon/shape.png"},{"revision":"4ee9c9ddde21b8d3c19ad210a0c67fb3","url":"img/action-icon/size_and_format_2.png"},{"revision":"69aa252ef60d8d0e9943193518f3daee","url":"img/action-icon/size_and_format.png"},{"revision":"7e28fdb4f8cd0b6192ee650c91c0a565","url":"img/action-icon/style.png"},{"revision":"d81d6b71366fb0a6c431a4f97e9380d3","url":"img/api/banner-apis.jpg"},{"revision":"823964ce39fb67fdbdf31009ae7a5b9c","url":"img/basic-navigation/grid_view_2.png"},{"revision":"c806be6d7f91cac382849a57284a18ab","url":"img/basic-navigation/grid_view_3.png"},{"revision":"b86cfb5444780a659c39b482930be6a9","url":"img/basic-navigation/grid_view.png"},{"revision":"bf00bf67bc22852851c3887319c99667","url":"img/basic-navigation/list_view_2.png"},{"revision":"6b5624e164af886bab52f929bf450113","url":"img/basic-navigation/list_view.png"},{"revision":"17dbdff5c9d7ee8c0c2c530a25d9aa7f","url":"img/basic-navigation/tab_view.png"},{"revision":"37f0a147d00b3f38958e3f0845a2412a","url":"img/env-setup/adb-windows.png"},{"revision":"991f6366463e9b88a0156825b2818e5d","url":"img/env-setup/debugger.png"},{"revision":"375424568ff825331707b468f04a6fbf","url":"img/env-setup/settings-device.png"},{"revision":"293a0667f9bd17a38e0da9ec28cb17b7","url":"img/env-setup/webide-windows-app.png"},{"revision":"1e62845f33f77580c1021c2a18477973","url":"img/env-setup/win-firefox-config.png"},{"revision":"459b4dfc575b3b34be041db25bf8950e","url":"img/favicon.png"},{"revision":"c38e0a71c1c376f547c6b2ce8e40cc8a","url":"img/first-hosted-app/first-hosted-app-install.png"},{"revision":"33e8116455a41bdfd36fa0b14aed7562","url":"img/footer-logo.svg"},{"revision":"386a1e0c266f69b7502b18c95a7224e6","url":"img/home-center/_architecture/architecture.png"},{"revision":"0e87617c19d1cf1b76b88c63bb00a9e7","url":"img/home-center/_architecture/architecture@2x.png"},{"revision":"ab1895dbb806912af642794934efe039","url":"img/home-center/_architecture/architecture@3x.png"},{"revision":"c6af9835d2eb0b079bf652c952127794","url":"img/home-center/_architecture/banner.jpg"},{"revision":"c6af9835d2eb0b079bf652c952127794","url":"img/home-center/_kaistore/banner.jpg"},{"revision":"4e1f266b1f9f0655aa96fd8959bbecb6","url":"img/home-center/_kaistore/kaistore.png"},{"revision":"21508ca8295ae6599bd816ff3f58e129","url":"img/home-center/_presentation/banner.jpg"},{"revision":"56396a91e1138e8b59e10969a4e53fb3","url":"img/home-center/_presentation/kaios.png"},{"revision":"c5cca6b286b11077b3424c62d11113dd","url":"img/home-center/_presentation/kaios@2x.png"},{"revision":"407cf576aaec5ff559b42ae16a87dbef","url":"img/home-center/_presentation/kaios@3x.png"},{"revision":"ce4c414b86af90e13e6a4eb9f60c2f85","url":"img/home-center/_technologies/tehnologies-feature-phone.png"},{"revision":"65326763eab365bd81dbea570389bcf9","url":"img/home-center/_technologies/tehnologies-feature-phone@2x.png"},{"revision":"95882c0273bda5ecdace076c9bf8bc37","url":"img/home-center/_technologies/tehnologies-feature-phone@3x.png"},{"revision":"d7f0bc43cd67a5bf314e6258f30b4d1e","url":"img/hosted-app/address_bar.png"},{"revision":"185d8d0b1e2c40d06ec495f082925dc0","url":"img/hosted-app/cursor_off.png"},{"revision":"76ba51830c5d9cb46a38ca6526b8e75c","url":"img/hosted-app/cursor_on.png"},{"revision":"997852b344aa4b1c793855c11bd92e48","url":"img/hosted-app/error_handling.png"},{"revision":"c68d11b4a8117172e1d22d08e06f9fc1","url":"img/hosted-app/full-screen.png"},{"revision":"3a565b6ab8fab6847dedaef823096943","url":"img/hosted-app/fullscreen_off.png"},{"revision":"ec24e6cbaef56ef4e6d60aead38942aa","url":"img/hosted-app/fullscreen_on.png"},{"revision":"a14ffb58bbfdb33e865af4199d116422","url":"img/hosted-app/input.png"},{"revision":"7e6a8e2a511b618d60d5dafa905bb814","url":"img/hosted-app/loading_off.png"},{"revision":"7263907b0688ae97e4eb30f4bdb89f25","url":"img/hosted-app/loading_on.png"},{"revision":"f97263c8679e3b63bc31da480447a92d","url":"img/hosted-app/self-test-hosted-app.png"},{"revision":"7c9739a003426d55f650f948235a6b59","url":"img/hosted-app/shortcut_2.png"},{"revision":"5f2662100ce5f645bc9f7e58f130458d","url":"img/hosted-app/software_key.png"},{"revision":"1dceffd936cd899d4f552b0ebecf9148","url":"img/hosted-app/volume.png"},{"revision":"727fab71ce9f30d66780fbdbea79f007","url":"img/hosted-app/webpage_in_hosted_app_2.png"},{"revision":"4e29d5417534710d96de99afd79078aa","url":"img/hosted-app/webpage_in_hosted_app.png"},{"revision":"2d5b55d5cdc5464bca6214f57baa8dce","url":"img/introduction/developer-people.png"},{"revision":"144ab0231fd5c16fcde732afc759f79a","url":"img/introduction/kaios_architecture.jpg"},{"revision":"4712befdda663e981e8b73de25c80d28","url":"img/introduction/next_architecture.png"},{"revision":"020452336cb923bccf12449eac7eec88","url":"img/introduction/RIL-2.5.png"},{"revision":"0786f5b79a32e57453d2c375bd857a42","url":"img/introduction/RIL-3.0.png"},{"revision":"e73ae4b484c64a42422929ff8bdd13bb","url":"img/key/back_clear_end_power.png"},{"revision":"ff914def6b1b41a5255984c7b02ef01b","url":"img/key/back_clear.png"},{"revision":"e94db0319f57d52409c1c26b5ea5469c","url":"img/key/overview.png"},{"revision":"c28029fd2b8b23545a8ad1b5589c9d34","url":"img/key/softkey.png"},{"revision":"f3524f3b42942828a73d6fc640dab081","url":"img/launcher-icon/all_apps_grid_view.png"},{"revision":"540494c9096c0d115fff26f8f16935fd","url":"img/launcher-icon/all_apps_list_view.png"},{"revision":"25aaf3c7be78b6cdb7aea783a41277b6","url":"img/launcher-icon/all_apps_single_view.png"},{"revision":"9a1167748d597dfff42163cf6b9e9188","url":"img/launcher-icon/all_icons_view.png"},{"revision":"3852a89e264bea2f62d50cc854e8d85d","url":"img/launcher-icon/concise_icon.png"},{"revision":"9981e3e6ec6d1bceb764fb9fef4d1967","url":"img/launcher-icon/focus_do.png"},{"revision":"a9fa15c68b7841c05a7159309498020b","url":"img/launcher-icon/focus_dont.png"},{"revision":"72f8905086297a65c193346b5d8c3256","url":"img/launcher-icon/focus_state.png"},{"revision":"d90a41b10fe4a49e46c7c6749d107be9","url":"img/launcher-icon/icon_size_do.png"},{"revision":"919033adb9781841e7f3c61f616bb65c","url":"img/launcher-icon/icon_size_dont.png"},{"revision":"3b3340b768773f2e5798614b31bff655","url":"img/launcher-icon/icons.png"},{"revision":"cf25b333037a68a5c808fd2cffe7edf6","url":"img/launcher-icon/kaios_store.png"},{"revision":"dd4e98471d2cb3df4fb01b8fedd39834","url":"img/launcher-icon/launch_screen.png"},{"revision":"de1163f19a830d5faa44ea357504e860","url":"img/launcher-icon/notices.png"},{"revision":"40b2b866ab4960305c94625d23fbbe59","url":"img/launcher-icon/round_shape_drop_shadow.png"},{"revision":"20ff8410081524b91959ae0d7ed03ca1","url":"img/launcher-icon/round_shape.png"},{"revision":"0738ab964c095209055f7a19632abf98","url":"img/launcher-icon/square_shape_radius.png"},{"revision":"7943520e7c10fef9383f4dea80e40780","url":"img/launcher-icon/square_shape.png"},{"revision":"21deee173af9c5ed9a67ed198b3c15a1","url":"img/launcher-icon/transparency_icon.png"},{"revision":"3aa9b312129e752094ca4e709895e75f","url":"img/logo.svg"},{"revision":"7dd1e8338da5567a6edeead0e1a37a30","url":"img/manifest/featurephone.png"},{"revision":"10a395d22ab20b068ab3b4d8b1457e0d","url":"img/marketing-banner/marketing_banner.png"},{"revision":"e0ff41abd7963f36920c8927f92c114f","url":"img/marketing-banner/size_store.png"},{"revision":"f7a49b9ee1d9ef3356d19b2a034e8b87","url":"img/marketing-banner/size.png"},{"revision":"b2a5a78865e98dccdcd45750f465bd1a","url":"img/marketing-banner/theme_color.png"},{"revision":"a8b80c99686e09083b7a672eb500fdf7","url":"img/marketing-banner/usage.png"},{"revision":"27cd36fb077d247461bd4a54376a2c83","url":"img/packaged-or-hosted/WhichAppTypeChoose.png"},{"revision":"5ca16f279ae334bf4ccd80dede6a54bb","url":"img/run-and-debug/firefox_about_memory_report.png"},{"revision":"cbaca0b9da47bd8cd63faa82893292fc","url":"img/run-and-debug/firefox_about_memory.png"},{"revision":"9a517c4aab75e2768d2b6e3d0f775e5b","url":"img/run-and-debug/webide-inspector.png"},{"revision":"d2cee8a14a3b4d5d660e272215d834bb","url":"img/run-and-debug/webide.png"},{"revision":"9edafb6f3cd52e13c5dd16dbd9597568","url":"img/security-access/securityframework.png"},{"revision":"4117f288b447c57eb9b2f540ffa3078a","url":"img/simulator/debug_app.png"},{"revision":"678ed06fb65929bb7aed639a020c6306","url":"img/simulator/install_and_run_1.png"},{"revision":"75e6091cad40c1dc4184d6a5d2f0989d","url":"img/simulator/install_and_run_2.png"},{"revision":"55691666e37da1fee5eb7bdbaf389c91","url":"img/simulator/kaiosrt_logo.png"},{"revision":"2c1693ff0a15b2c86c69376103fb03ca","url":"img/simulator/menu.png"},{"revision":"2d2965e69af2a57bb269161e14be8634","url":"img/simulator/new_app.png"},{"revision":"b05fd6f2ff7c2292ee0667c5b494cb25","url":"img/simulator/simulator.png"},{"revision":"b76702d7ebff3c02fc6bd6df2cf2a40f","url":"img/submit-to-kaistore/app_name.png"},{"revision":"b41d4e896d4a790d12057c33282fae94","url":"img/submit-to-kaistore/app_status_website.png"},{"revision":"35d98ef307de30a857d14efe4fe9b110","url":"img/submit-to-kaistore/app_status.png"},{"revision":"b904785f1f1393ddf9d9462e62a0780c","url":"img/submit-to-kaistore/description.png"},{"revision":"4e2b05c89d014756b7c4b82bbf8d28f7","url":"img/submit-to-kaistore/downloading_tag.png"},{"revision":"3f9ce4345610dde6d1f0a58bcb4f16f6","url":"img/submit-to-kaistore/enable_tag_website.png"},{"revision":"f34611e1a655d4a6395f5f28f644e059","url":"img/submit-to-kaistore/enabled_tag.png"},{"revision":"22f0ea8325e03c609ffd872d5443ec13","url":"img/submit-to-kaistore/free_tag.png"},{"revision":"1525498439d6756ec880e458810c86b8","url":"img/submit-to-kaistore/icon.png"},{"revision":"10a395d22ab20b068ab3b4d8b1457e0d","url":"img/submit-to-kaistore/marketing_banner.png"},{"revision":"4f2d95c06580b3fbd2afe78ea003f472","url":"img/submit-to-kaistore/pin_tag.png"},{"revision":"496fd689e52d12940b64826df338ddad","url":"img/submit-to-kaistore/presentation.png"},{"revision":"789797e6ba724c91c07bdd7c706fdaa6","url":"img/submit-to-kaistore/price_tag.png"},{"revision":"5e676b57e401025249b05c3a27c6eac5","url":"img/submit-to-kaistore/subtitle.png"},{"revision":"f2ca873ff35c5841ef11ae6b255fa708","url":"img/submit-to-kaistore/theme_color.png"},{"revision":"0eba5eee309f1c09ac4876db918a4f7f","url":"img/submit-to-kaistore/update_tag.png"},{"revision":"3b8fbcd7a37d4f91906c6b1a8245525b","url":"img/test-your-app/remotedebugger1.png"},{"revision":"d7956b510f107be9c05310b7367a4643","url":"img/test-your-app/remotedebugger2.png"},{"revision":"f3109d7fde5c0ace71137dc3bc515a5a","url":"img/test-your-app/remotedebugger3.png"},{"revision":"8e76ceda238af5b7dfd65f214d908852","url":"img/test-your-app/remotedebugger4.png"},{"revision":"30c4e8897b4856aeb7a03a3310da3b2b","url":"img/test-your-app/remotedebugger5.png"},{"revision":"4933b89a1fd9591de20acfbf955a100c","url":"img/test-your-app/remotedebugger6.png"},{"revision":"9002f41ad0f22b74484579bf60663f39","url":"img/test-your-app/simulator-package.png"},{"revision":"fbc75d5bad6f5d465ec64891afca3377","url":"img/test-your-app/simulator-play.gif"},{"revision":"9733a24f0733c0a512f68e12bd3829fd","url":"img/test-your-app/simulator-play.png"},{"revision":"a2d567d1a88f2f96e80cb59483d1c578","url":"img/test-your-app/simulator-project.png"},{"revision":"6b8f1500aaf2bc59dac50bd0a3931458","url":"img/test-your-app/simulator-simulator.png"},{"revision":"b05fd6f2ff7c2292ee0667c5b494cb25","url":"img/test-your-app/simulator.png"},{"revision":"7911e824db0d6354e3873e7265a73d9b","url":"img/test-your-app/webide-remote-runtime-debug.png"},{"revision":"64374b6b0457730748138b4887823851","url":"img/test-your-app/webide-remote-runtime-debugging.png"},{"revision":"b87e2ec09b880e5fc7713798613d112f","url":"img/test-your-app/webide-remote-runtime-package.png"},{"revision":"f6a0e8ffe873b129f410b6297fb460ca","url":"img/test-your-app/webide-remote-runtime-play.png"},{"revision":"60d6dc84d8fa10742f692adb8b360d9c","url":"img/test-your-app/webide-remote-runtime-port.png"},{"revision":"7515012878bbac1ded645a95cf620089","url":"img/test-your-app/webide-remote-runtime-project.png"},{"revision":"10e80d4b739f91998d326177983f6875","url":"img/test-your-app/webide-remote-runtime.png"},{"revision":"de05a60b4e06523f63d020cafda86907","url":"img/typography/font_sizes.png"},{"revision":"f0f43f9ab2c5d4d2ebdb38dc22d4eb0d","url":"img/ui-component/button_2.png"},{"revision":"17d5386ef49ded7c8b00ccd2bfcfc6f5","url":"img/ui-component/button.png"},{"revision":"d1e622b1bd4391c5033e1212edef8fbb","url":"img/ui-component/capitalization_2.png"},{"revision":"8247fa7c66bf46c4061ad48a2c41f165","url":"img/ui-component/capitalization_3.png"},{"revision":"4726948893aae16c7bd4ae74c895d30b","url":"img/ui-component/capitalization.png"},{"revision":"c259978fde0d3054bd910af424177737","url":"img/ui-component/controls_2.png"},{"revision":"ec84ccf3a2112fa1cd57b17ef54c1b37","url":"img/ui-component/controls.png"},{"revision":"64f548623c755f839765df20dfdfacd4","url":"img/ui-component/date_value_selector.png"},{"revision":"d23356841b325a09ccda4e89151151bb","url":"img/ui-component/dialog_2.png"},{"revision":"1530f78ddad641862521b2cccfe2d1ab","url":"img/ui-component/dialog.png"},{"revision":"9eda141a555ac830fae47a3957454231","url":"img/ui-component/header_1.png"},{"revision":"09e7df31abf99aca89919c4f9876ff69","url":"img/ui-component/header_2.png"},{"revision":"f7c309fd383ec8ce582e9d1027ea2894","url":"img/ui-component/input_2.png"},{"revision":"5a4dbc95589d413706daf3f25014240c","url":"img/ui-component/input.png"},{"revision":"9310060e5aac5521da3cb796b918375b","url":"img/ui-component/list_2.png"},{"revision":"5c7d36ba5f86b32eb99c86879c4897b1","url":"img/ui-component/list.png"},{"revision":"b0af653fda49a33a2b53549082b00852","url":"img/ui-component/multiple_select.png"},{"revision":"71f4e9b202d97448247d05d090e45fff","url":"img/ui-component/notice_2.png"},{"revision":"90784c64274a47f35ab37dfe2b9ae517","url":"img/ui-component/notice.png"},{"revision":"d8a3376017743dd75ac2d6cd51676abb","url":"img/ui-component/option_menu_2.png"},{"revision":"9499fb07039cd3336bf630a996955dba","url":"img/ui-component/option_menu.png"},{"revision":"d874b6e506c609f9df6c309897437001","url":"img/ui-component/progress_2.png"},{"revision":"7a9cd19249f4177c1197f658485b5e93","url":"img/ui-component/progress.png"},{"revision":"136966562a973bc4d67355eee1b670fe","url":"img/ui-component/separator_2.png"},{"revision":"99b8a754f7cf111d175cce631d47d2aa","url":"img/ui-component/separator.png"},{"revision":"338f75d4d9aae0cab56178866954c222","url":"img/ui-component/single_select.png"},{"revision":"732b7f315eb7164c4ce410c32f3471b2","url":"img/ui-component/slider_2.png"},{"revision":"b413df2b4a051734390151d63df74172","url":"img/ui-component/slider.png"},{"revision":"2eefc4785f6638c4de06cd6644294105","url":"img/ui-component/software_key_2.png"},{"revision":"d71f3a2f250d9370bb4fe82f95fbead6","url":"img/ui-component/software_key.png"},{"revision":"ed4a5ac60371027e3ae15377e75efb0b","url":"img/ui-component/tab_2.png"},{"revision":"2274ba3f1b36a44bc3818e7a72b6b911","url":"img/ui-component/tab.png"},{"revision":"80ee86a890256488fbc3548d827db349","url":"img/ui-component/time_value_selector.png"},{"revision":"1609818338c7c63de0801745b64b9229","url":"img/ui-component/toast_2.png"},{"revision":"b237941cb93771a175d9113999ef38a3","url":"img/ui-component/toast.png"},{"revision":"2ff105573e51c027650b9d6444933261","url":"img/ui-component/ui_component.png"},{"revision":"8d04d316f4d1777793ee773fcbf16cea","url":"img/undraw_docusaurus_mountain.svg"},{"revision":"3d3d63efa464a74e2befd1569465ed21","url":"img/undraw_docusaurus_react.svg"},{"revision":"932b535fc71feb29877bc4b9d708b1d0","url":"img/undraw_docusaurus_tree.svg"}];
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