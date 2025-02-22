/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";var __webpack_modules__={"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/scss/main.scss":(module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/*\n* Animacion para el effecto de scroll en horizontal del marquee\n*/\n@keyframes marquee-scroll {\n  from {\n    transform: translateX(0%);\n  }\n  to {\n    transform: translateX(-50%);\n  }\n}\n/**\n\n*/\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: #131314;\n  position: relative;\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden;\n}\nbody::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-image: url("https://grainy-gradients.vercel.app/noise.svg");\n  opacity: 0.2;\n  pointer-events: none;\n}\n\nh1 {\n  color: #fff;\n  font-weight: bolder;\n  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\n}\n\nbody {\n  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\n  font-size: 16px;\n}\n\n.container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 16px;\n  display: flex;\n  flex-direction: column;\n}\n@media (min-width: 748px) {\n  .container {\n    max-width: 648px;\n  }\n}\n@media (min-width: 900px) {\n  .container {\n    max-width: 850px;\n  }\n}\n@media (min-width: 1200px) {\n  .container {\n    max-width: 1100px;\n  }\n}\n@media (min-width: 1800px) {\n  .container {\n    max-width: 1140px;\n  }\n}\n@media (min-width: 900px) {\n  .container--wide {\n    max-width: 1400px;\n  }\n}\n@media (min-width: 900px) {\n  .container--narrow {\n    max-width: 800px;\n  }\n}\n.container--center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.u-container-padding-x {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n@media (min-width: 748px) {\n  .u-container-padding-x {\n    padding-left: 24px;\n    padding-right: 24px;\n  }\n}\n@media (min-width: 900px) {\n  .u-container-padding-x {\n    padding-left: 32px;\n    padding-right: 32px;\n  }\n}\n@media (min-width: 1200px) {\n  .u-container-padding-x {\n    padding-left: 48px;\n    padding-right: 48px;\n  }\n}\n@media (min-width: 1800px) {\n  .u-container-padding-x {\n    padding-left: 64px;\n    padding-right: 64px;\n  }\n}\n\n.header {\n  position: sticky;\n  top: 0;\n  background-color: #1d1d1f;\n  z-index: 9999;\n}\n.header__content {\n  height: 4rem;\n  border: none;\n  place-content: center;\n  transition: all 0.2s ease-in;\n  display: grid;\n  gap: 20px;\n  grid-template-columns: repeat(2, 1fr);\n}\n@media (min-width: 768px) {\n  .header__content {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n.header__content--sticky {\n  background: rgba(19, 19, 20, 0.6);\n  backdrop-filter: blur(10px);\n}\n.header__nav {\n  display: none;\n}\n@media (min-width: 768px) {\n  .header__nav {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n}\n.header__logo {\n  display: flex;\n  align-items: center;\n  gap: 0;\n}\n.header__logo img {\n  width: 1.5rem;\n  height: 1.5rem;\n}\n@media (min-width: 748px) {\n  .header__logo {\n    gap: 5px;\n  }\n}\n.header__logo h1 {\n  display: none;\n}\n@media (min-width: 748px) {\n  .header__logo h1 {\n    display: block;\n  }\n}\n.header__left {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n}\n.header__left .menu-icon {\n  display: flex;\n}\n@media (min-width: 768px) {\n  .header__left .menu-icon {\n    display: none;\n  }\n}\n.header__store {\n  display: flex;\n  align-items: center;\n  height: 100%;\n}\n.header__store--separator {\n  width: 3px;\n  height: 30%;\n  background-color: #762bfb;\n}\n.header__right {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n.header__right button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 2.5rem;\n  height: 2.5rem;\n}\n@media (min-width: 900px) {\n  .header__right button {\n    width: 3.5rem;\n    height: 2.5rem;\n    padding: 14px;\n  }\n}\n.header__right a {\n  display: none;\n}\n@media (min-width: 768px) {\n  .header__right a {\n    display: block;\n    color: #fff;\n    text-decoration: none;\n  }\n}\n\n.hero-banner {\n  width: 100%;\n  height: auto;\n  display: flex;\n  flex-direction: column;\n  transition: all 0.2s ease-out;\n}\n.hero-banner__content {\n  width: 100%;\n  height: 30rem;\n  position: relative;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.hero-banner__content img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.hero-banner__content button {\n  position: absolute;\n  bottom: 1rem;\n  left: 1rem;\n  font-weight: bolder;\n  border-radius: 4px;\n  overflow: hidden;\n  font-weight: 900;\n  display: none;\n}\n@media (min-width: 900px) {\n  .hero-banner__content button {\n    display: block;\n  }\n}\n\n.featured-products {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: auto;\n}\n.featured-products__container {\n  width: 100%;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n}\n@media (min-width: 900px) {\n  .featured-products__container {\n    padding: 0 16px;\n    max-width: 850px;\n  }\n}\n@media (min-width: 1200px) {\n  .featured-products__container {\n    max-width: 1100px;\n  }\n}\n\n.app-container {\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n}\n\n.button {\n  border-radius: 8px;\n  border: none;\n  cursor: pointer;\n  border-style: none;\n  padding: 8px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.button--primary {\n  background: #131314;\n  color: white;\n}\n.button--secondary {\n  background: #762bfb;\n  color: white;\n}\n\n.top-bar {\n  width: 100%;\n  height: 2rem;\n}\n.top-bar__text {\n  font-size: 12px;\n  font-weight: 900;\n  color: #fff;\n}\n.top-bar__separator {\n  fill: #9984fe;\n  width: 2rem;\n  height: 1.5rem;\n}\n\n.menu-icon {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 7px;\n  width: 30px;\n  height: 30px;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n}\n.menu-icon__bar {\n  width: 100%;\n  height: 2px;\n  background-color: #762bfb;\n  transition: all 0.3s ease;\n  transition: transform 0.3s ease, opacity 0.3s ease;\n}\n.menu-icon--open .menu-icon__bar:nth-child(1) {\n  transform: translateY(8px) rotate(45deg);\n}\n.menu-icon--open .menu-icon__bar:nth-child(2) {\n  opacity: 0;\n}\n.menu-icon--open .menu-icon__bar:nth-child(3) {\n  transform: translateY(-8px) rotate(-45deg);\n}\n\n.icon {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 7px;\n  width: 30px;\n  height: 30px;\n  background: transparent;\n  border: none;\n  stroke: currentColor;\n  stroke-width: 40;\n}\n\n/**\n * Estilos para el componente \\`.marquee\\`\n * Este componente crea un efecto de desplazamiento continuo (marquee) con variantes de color.\n */\n.marquee {\n  position: relative;\n  white-space: nowrap;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n  text-transform: uppercase;\n}\n.marquee--primary {\n  background-color: transparent;\n}\n.marquee--primary::before {\n  content: "";\n  position: absolute;\n  z-index: 100;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(to right, #131314, transparent 15%, transparent 75%, #131314);\n  pointer-events: none;\n}\n.marquee--secondary {\n  background-color: #762bfb;\n}\n.marquee--secondary::before {\n  content: "";\n  position: absolute;\n  z-index: 100;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(to right, #762bfb, transparent 15%, transparent 75%, #762bfb);\n  pointer-events: none;\n}\n.marquee__content {\n  display: flex;\n  flex-shrink: 0;\n  align-items: center;\n  gap: 2px;\n  min-width: 200%;\n  animation: marquee-scroll 50s linear infinite;\n}\n.marquee__content--slow {\n  animation: marquee-scroll 80s linear infinite;\n}\n\n.hero-banner-marquee {\n  width: 100%;\n  height: 4rem;\n}\n.hero-banner-marquee__text {\n  font-size: 30px;\n  font-weight: 900;\n  color: #fff;\n}\n.hero-banner-marquee__separator {\n  fill: #9984fe;\n  width: 3rem;\n  height: 3rem;\n}\n\n.coins-supported {\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #1d1d1f;\n  border: 1px solid #762bfb;\n  border-radius: 20px;\n  overflow: hidden;\n  gap: 8px;\n}\n.coins-supported__label {\n  color: white;\n}\n.coins-supported__content {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.coins-supported__span {\n  width: 1.5rem;\n  height: 1.5rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0.3rem;\n  border-radius: 9999px;\n  overflow: hidden;\n}\n.coins-supported__span--bitcoin {\n  background-color: #f7931a;\n  transform: rotate(20deg);\n}\n.coins-supported__span--ethereumcoin {\n  background-color: #505050;\n  padding: 0.5rem;\n}\n.coins-supported__span--litecoin {\n  background-color: #BEBEBE;\n  padding: 0.5rem;\n}\n.coins-supported__span--dogecoin {\n  background-color: #c2a632;\n}\n.coins-supported__span--stablecoin {\n  background-color: #2775ca;\n}\n\n.product-list {\n  width: 100%;\n  padding-left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.product-list__row {\n  width: 100%;\n  display: flex;\n  flex-wrap: nowrap;\n  overflow-x: auto;\n  scroll-snap-type: x mandatory;\n  padding-bottom: 10px;\n}\n@media (min-width: 900px) {\n  .product-list__row {\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    gap: 16px;\n    width: 100%;\n  }\n}\n\n.product-card {\n  flex: 0 0 auto;\n  min-width: 80vw;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 14rem;\n  height: 24rem;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n@media (min-width: 900px) {\n  .product-card {\n    min-width: 40vw;\n  }\n}\n@media (min-width: 1200px) {\n  .product-card {\n    min-width: 100%;\n    margin-left: 0px;\n    margin-right: 0px;\n  }\n}\n.product-card__image {\n  width: 100%;\n  height: 20rem;\n  border: 3px solid #762bfb;\n  border-radius: 7px;\n  overflow: hidden;\n  transition: all 0.2s ease-in-out;\n}\n.product-card__image img {\n  object-fit: cover;\n  width: 100%;\n  height: 100%;\n  transition: transform 0.5s ease-in-out;\n}\n.product-card__image:hover img {\n  transform: scale(1.1);\n  object-position: center;\n}\n.product-card__title, .product-card__price {\n  color: #fff;\n  font-size: 0.8rem;\n}\n.product-card__title {\n  font-weight: lighter;\n}\n.product-card__price {\n  font-weight: bolder;\n}\n.product-card__info {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.product-card__info button .icon {\n  width: 20px;\n  height: 20px;\n}\n@media (min-width: 900px) {\n  .product-card__info button .icon {\n    width: 30px;\n    height: 30px;\n  }\n}\n\n.tag {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 5px;\n  list-style: none;\n}\n\n.badge {\n  padding: 2px 10px 2px 10px;\n  background-color: #1d1d1f;\n  border-radius: 10px;\n  overflow: hidden;\n  color: white;\n  font-weight: bold;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.badge--secondary {\n  background-color: #762bfb;\n}\n\n.px-0 {\n  padding-left: 0px;\n  padding-right: 0px;\n}\n\n.py-0 {\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n\n.p-0 {\n  padding: 0px;\n}\n\n.pt-0 {\n  padding-top: 0px;\n}\n\n.pb-0 {\n  padding-bottom: 0px;\n}\n\n.px-1 {\n  padding-left: 4px;\n  padding-right: 4px;\n}\n\n.py-1 {\n  padding-top: 4px;\n  padding-bottom: 4px;\n}\n\n.p-1 {\n  padding: 4px;\n}\n\n.pt-1 {\n  padding-top: 4px;\n}\n\n.pb-1 {\n  padding-bottom: 4px;\n}\n\n.px-2 {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n\n.py-2 {\n  padding-top: 8px;\n  padding-bottom: 8px;\n}\n\n.p-2 {\n  padding: 8px;\n}\n\n.pt-2 {\n  padding-top: 8px;\n}\n\n.pb-2 {\n  padding-bottom: 8px;\n}\n\n.px-3 {\n  padding-left: 12px;\n  padding-right: 12px;\n}\n\n.py-3 {\n  padding-top: 12px;\n  padding-bottom: 12px;\n}\n\n.p-3 {\n  padding: 12px;\n}\n\n.pt-3 {\n  padding-top: 12px;\n}\n\n.pb-3 {\n  padding-bottom: 12px;\n}\n\n.px-4 {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\n.py-4 {\n  padding-top: 16px;\n  padding-bottom: 16px;\n}\n\n.p-4 {\n  padding: 16px;\n}\n\n.pt-4 {\n  padding-top: 16px;\n}\n\n.pb-4 {\n  padding-bottom: 16px;\n}\n\n.px-5 {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.py-5 {\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n\n.p-5 {\n  padding: 20px;\n}\n\n.pt-5 {\n  padding-top: 20px;\n}\n\n.pb-5 {\n  padding-bottom: 20px;\n}\n\n.gap-0 {\n  gap: 0px;\n}\n\n.gap-1 {\n  gap: 4px;\n}\n\n.gap-2 {\n  gap: 8px;\n}\n\n.gap-3 {\n  gap: 12px;\n}\n\n.gap-4 {\n  gap: 16px;\n}\n\n.gap-5 {\n  gap: 20px;\n}\n\n.letter-spacing-none {\n  letter-spacing: 0;\n}\n.letter-spacing-extratight {\n  letter-spacing: -3.5px;\n}\n.letter-spacing-tight {\n  letter-spacing: -0.5px;\n}\n.letter-spacing-normal {\n  letter-spacing: normal;\n}\n.letter-spacing-wide {\n  letter-spacing: 1px;\n}\n.letter-spacing-wider {\n  letter-spacing: 2px;\n}\n\n.text-2xs {\n  font-size: 0.75rem;\n}\n.text-xs {\n  font-size: 1rem;\n}\n.text-normal {\n  font-size: 1.2rem;\n}\n.text-md {\n  font-size: 1.75rem;\n}\n.text-lg {\n  font-size: 2rem;\n}\n.text-xl {\n  font-size: 2.5rem;\n}\n\n.font-bold {\n  font-weight: bold;\n}\n.font-bolder {\n  font-weight: bolder;\n}\n.font-extrabolder {\n  font-weight: 900;\n}\n\n.hidden {\n  display: none;\n}\n\n.rounded-full {\n  border-radius: 9999px;\n}`, ""]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://shopify-simulator/./src/scss/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B0%5D.use%5B2%5D')},"./node_modules/css-loader/dist/runtime/api.js":module=>{eval('\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = "";\n      var needLayer = typeof item[5] !== "undefined";\n      if (item[4]) {\n        content += "@supports (".concat(item[4], ") {");\n      }\n      if (item[2]) {\n        content += "@media ".concat(item[2], " {");\n      }\n      if (needLayer) {\n        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += "}";\n      }\n      if (item[2]) {\n        content += "}";\n      }\n      if (item[4]) {\n        content += "}";\n      }\n      return content;\n    }).join("");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === "string") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== "undefined") {\n        if (typeof item[5] === "undefined") {\n          item[5] = layer;\n        } else {\n          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = "".concat(supports);\n        } else {\n          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://shopify-simulator/./node_modules/css-loader/dist/runtime/api.js?')},"./node_modules/css-loader/dist/runtime/noSourceMaps.js":module=>{eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://shopify-simulator/./node_modules/css-loader/dist/runtime/noSourceMaps.js?")},"./src/scss/main.scss":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/scss/main.scss");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);\n\n\n//# sourceURL=webpack://shopify-simulator/./src/scss/main.scss?')},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{eval('\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = "".concat(id, " ").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://shopify-simulator/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?')},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{eval('\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === "undefined") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error("Couldn\'t find a style target. This probably means that the value for the \'insert\' parameter is invalid.");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://shopify-simulator/./node_modules/style-loader/dist/runtime/insertBySelector.js?')},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{eval('\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement("style");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://shopify-simulator/./node_modules/style-loader/dist/runtime/insertStyleElement.js?')},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{eval('\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute("nonce", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://shopify-simulator/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?')},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{eval('\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = "";\n  if (obj.supports) {\n    css += "@supports (".concat(obj.supports, ") {");\n  }\n  if (obj.media) {\n    css += "@media ".concat(obj.media, " {");\n  }\n  var needLayer = typeof obj.layer !== "undefined";\n  if (needLayer) {\n    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += "}";\n  }\n  if (obj.media) {\n    css += "}";\n  }\n  if (obj.supports) {\n    css += "}";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== "undefined") {\n    css += "\\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === "undefined") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://shopify-simulator/./node_modules/style-loader/dist/runtime/styleDomAPI.js?')},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://shopify-simulator/./node_modules/style-loader/dist/runtime/styleTagTransform.js?")},"./src/app.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/main.scss */ "./src/scss/main.scss");\n\r\nconsole.log("✅ SASS está funcionando correctamente");\r\nconsole.log("Gradiweb is online!!!");\r\n\n\n//# sourceURL=webpack://shopify-simulator/./src/app.js?')}},__webpack_module_cache__={};function __webpack_require__(n){var e=__webpack_module_cache__[n];if(void 0!==e)return e.exports;var t=__webpack_module_cache__[n]={id:n,exports:{}};return __webpack_modules__[n](t,t.exports,__webpack_require__),t.exports}__webpack_require__.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return __webpack_require__.d(e,{a:e}),e},__webpack_require__.d=(n,e)=>{for(var t in e)__webpack_require__.o(e,t)&&!__webpack_require__.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},__webpack_require__.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),__webpack_require__.r=n=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},__webpack_require__.nc=void 0;var __webpack_exports__=__webpack_require__("./src/app.js")})();