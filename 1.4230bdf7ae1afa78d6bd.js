(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// Imports
var getUrl = __webpack_require__(44);
var ___CSS_LOADER_URL___0___ = getUrl(__webpack_require__(101));
// Module
exports.push([module.i, ".Header__header {\n  position: relative;\n  display: flex;\n  overflow: hidden;\n  align-items: center;\n  flex-flow: column wrap; }\n  .Header__header .Header__dynamic-background {\n    position: absolute;\n    top: 0;\n    left: -100px;\n    width: calc(100% + 200px);\n    height: 100%;\n    transition: all 0.25s ease-out 0s;\n    background: url(" + ___CSS_LOADER_URL___0___ + ") no-repeat center;\n    background-size: cover; }\n  .Header__header .Header__content {\n    z-index: 1;\n    display: flex;\n    align-items: center;\n    flex-flow: row wrap; }\n    .Header__header .Header__content .Header__introduction {\n      flex: 1; }\n      @media (min-width: 1000px) {\n        .Header__header .Header__content .Header__introduction .Header__name {\n          text-transform: uppercase;\n          color: #32333c;\n          font-family: inherit;\n          font-size: 60px;\n          font-weight: 600; } }\n      @media (max-width: 1000px) {\n        .Header__header .Header__content .Header__introduction .Header__name {\n          text-transform: uppercase;\n          color: #32333c;\n          font-family: inherit;\n          font-size: 38px;\n          font-weight: 600; } }\n      @media (min-width: 1000px) {\n        .Header__header .Header__content .Header__introduction .Header__greeting {\n          text-transform: uppercase;\n          color: #754ef9;\n          font-family: inherit;\n          font-size: 30px;\n          font-weight: 600; } }\n      @media (max-width: 1000px) {\n        .Header__header .Header__content .Header__introduction .Header__greeting {\n          text-transform: uppercase;\n          color: #754ef9;\n          font-family: inherit;\n          font-size: 24px;\n          font-weight: 600; } }\n      .Header__header .Header__content .Header__introduction .Header__description {\n        padding-bottom: 30px; }\n    @media (min-width: 1000px) {\n      .Header__header .Header__content {\n        width: 1000px;\n        padding-top: 150px; }\n        .Header__header .Header__content .Header__avatar {\n          position: relative;\n          display: flex;\n          flex: 1;\n          flex-flow: row wrap;\n          justify-content: center; }\n          .Header__header .Header__content .Header__avatar img {\n            position: relative;\n            width: 300px;\n            height: 450px; }\n          .Header__header .Header__content .Header__avatar::before {\n            position: absolute;\n            top: 60px;\n            width: 265px;\n            height: 350px;\n            content: '';\n            border: 20px solid #754ef9; }\n          .Header__header .Header__content .Header__avatar::after {\n            position: absolute;\n            bottom: 0;\n            width: 305px;\n            height: 20px;\n            content: '';\n            background-color: #754ef9; } }\n    @media (max-width: 1000px) {\n      .Header__header .Header__content {\n        width: auto;\n        padding-top: 200px; }\n        .Header__header .Header__content .Header__avatar {\n          display: none; } }\n  .Header__header .Header__social-networks {\n    position: relative;\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: flex-start; }\n    .Header__header .Header__social-networks::before {\n      position: absolute;\n      top: 50%;\n      left: -100%;\n      width: 100%;\n      height: 2px;\n      content: '';\n      transform: translateY(-50%);\n      background-color: #754ef9; }\n    @media (min-width: 1000px) {\n      .Header__header .Header__social-networks {\n        width: 1000px;\n        margin-top: 0;\n        padding: 0; } }\n    @media (max-width: 1000px) {\n      .Header__header .Header__social-networks {\n        width: calc(100% - 30px);\n        margin-top: 50px; } }\n", "",{"version":3,"sources":["Header.scss"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,aAAa;EACb,gBAAgB;EAChB,mBAAmB;EACnB,sBAAsB,EAAE;EACxB;IACE,kBAAkB;IAClB,MAAM;IACN,YAAY;IACZ,yBAAyB;IACzB,YAAY;IACZ,iCAAiC;IACjC,0DAAgF;IAChF,sBAAsB,EAAE;EAC1B;IACE,UAAU;IACV,aAAa;IACb,mBAAmB;IACnB,mBAAmB,EAAE;IACrB;MACE,OAAO,EAAE;MACT;QACE;UACE,yBAAyB;UACzB,cAAc;UACd,oBAAoB;UACpB,eAAe;UACf,gBAAgB,EAAE,EAAE;MACxB;QACE;UACE,yBAAyB;UACzB,cAAc;UACd,oBAAoB;UACpB,eAAe;UACf,gBAAgB,EAAE,EAAE;MACxB;QACE;UACE,yBAAyB;UACzB,cAAc;UACd,oBAAoB;UACpB,eAAe;UACf,gBAAgB,EAAE,EAAE;MACxB;QACE;UACE,yBAAyB;UACzB,cAAc;UACd,oBAAoB;UACpB,eAAe;UACf,gBAAgB,EAAE,EAAE;MACxB;QACE,oBAAoB,EAAE;IAC1B;MACE;QACE,aAAa;QACb,kBAAkB,EAAE;QACpB;UACE,kBAAkB;UAClB,aAAa;UACb,OAAO;UACP,mBAAmB;UACnB,uBAAuB,EAAE;UACzB;YACE,kBAAkB;YAClB,YAAY;YACZ,aAAa,EAAE;UACjB;YACE,kBAAkB;YAClB,SAAS;YACT,YAAY;YACZ,aAAa;YACb,WAAW;YACX,0BAA0B,EAAE;UAC9B;YACE,kBAAkB;YAClB,SAAS;YACT,YAAY;YACZ,YAAY;YACZ,WAAW;YACX,yBAAyB,EAAE,EAAE;IACrC;MACE;QACE,WAAW;QACX,kBAAkB,EAAE;QACpB;UACE,aAAa,EAAE,EAAE;EACzB;IACE,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,2BAA2B,EAAE;IAC7B;MACE,kBAAkB;MAClB,QAAQ;MACR,WAAW;MACX,WAAW;MACX,WAAW;MACX,WAAW;MACX,2BAA2B;MAC3B,yBAAyB,EAAE;IAC7B;MACE;QACE,aAAa;QACb,aAAa;QACb,UAAU,EAAE,EAAE;IAClB;MACE;QACE,wBAAwB;QACxB,gBAAgB,EAAE,EAAE","file":"Header.scss","sourcesContent":[".header {\n  position: relative;\n  display: flex;\n  overflow: hidden;\n  align-items: center;\n  flex-flow: column wrap; }\n  .header .dynamic-background {\n    position: absolute;\n    top: 0;\n    left: -100px;\n    width: calc(100% + 200px);\n    height: 100%;\n    transition: all 0.25s ease-out 0s;\n    background: url(\"../../../assets/images/techology-network.png\") no-repeat center;\n    background-size: cover; }\n  .header .content {\n    z-index: 1;\n    display: flex;\n    align-items: center;\n    flex-flow: row wrap; }\n    .header .content .introduction {\n      flex: 1; }\n      @media (min-width: 1000px) {\n        .header .content .introduction .name {\n          text-transform: uppercase;\n          color: #32333c;\n          font-family: inherit;\n          font-size: 60px;\n          font-weight: 600; } }\n      @media (max-width: 1000px) {\n        .header .content .introduction .name {\n          text-transform: uppercase;\n          color: #32333c;\n          font-family: inherit;\n          font-size: 38px;\n          font-weight: 600; } }\n      @media (min-width: 1000px) {\n        .header .content .introduction .greeting {\n          text-transform: uppercase;\n          color: #754ef9;\n          font-family: inherit;\n          font-size: 30px;\n          font-weight: 600; } }\n      @media (max-width: 1000px) {\n        .header .content .introduction .greeting {\n          text-transform: uppercase;\n          color: #754ef9;\n          font-family: inherit;\n          font-size: 24px;\n          font-weight: 600; } }\n      .header .content .introduction .description {\n        padding-bottom: 30px; }\n    @media (min-width: 1000px) {\n      .header .content {\n        width: 1000px;\n        padding-top: 150px; }\n        .header .content .avatar {\n          position: relative;\n          display: flex;\n          flex: 1;\n          flex-flow: row wrap;\n          justify-content: center; }\n          .header .content .avatar img {\n            position: relative;\n            width: 300px;\n            height: 450px; }\n          .header .content .avatar::before {\n            position: absolute;\n            top: 60px;\n            width: 265px;\n            height: 350px;\n            content: '';\n            border: 20px solid #754ef9; }\n          .header .content .avatar::after {\n            position: absolute;\n            bottom: 0;\n            width: 305px;\n            height: 20px;\n            content: '';\n            background-color: #754ef9; } }\n    @media (max-width: 1000px) {\n      .header .content {\n        width: auto;\n        padding-top: 200px; }\n        .header .content .avatar {\n          display: none; } }\n  .header .social-networks {\n    position: relative;\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: flex-start; }\n    .header .social-networks::before {\n      position: absolute;\n      top: 50%;\n      left: -100%;\n      width: 100%;\n      height: 2px;\n      content: '';\n      transform: translateY(-50%);\n      background-color: #754ef9; }\n    @media (min-width: 1000px) {\n      .header .social-networks {\n        width: 1000px;\n        margin-top: 0;\n        padding: 0; } }\n    @media (max-width: 1000px) {\n      .header .social-networks {\n        width: calc(100% - 30px);\n        margin-top: 50px; } }\n"]}]);
// Exports
exports.locals = {
	"header": "Header__header",
	"dynamic-background": "Header__dynamic-background",
	"content": "Header__content",
	"introduction": "Header__introduction",
	"name": "Header__name",
	"greeting": "Header__greeting",
	"description": "Header__description",
	"avatar": "Header__avatar",
	"social-networks": "Header__social-networks"
};

/***/ }),

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/e77bcc04ccec2db3565e66ce9b8e436d.png";

/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// Module
exports.push([module.i, ".Footer__footer {\n  display: flex;\n  background-color: #152136;\n  flex-flow: column wrap; }\n  .Footer__footer .Footer__content {\n    display: flex;\n    padding: 30px 15px;\n    align-items: center;\n    flex-flow: column wrap; }\n    .Footer__footer .Footer__content .Footer__brand {\n      margin-bottom: 15px;\n      margin-left: -95px; }\n    .Footer__footer .Footer__content .Footer__slogan {\n      text-transform: inherit;\n      color: #ffffff;\n      font-family: inherit;\n      font-size: inherit;\n      font-weight: inherit;\n      margin-bottom: 20px; }\n  .Footer__footer .Footer__copyright {\n    text-transform: inherit;\n    color: #ffffff;\n    font-family: inherit;\n    font-size: inherit;\n    font-weight: inherit;\n    padding: 20px;\n    text-align: center;\n    background-color: #1c2940; }\n", "",{"version":3,"sources":["Footer.scss"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,yBAAyB;EACzB,sBAAsB,EAAE;EACxB;IACE,aAAa;IACb,kBAAkB;IAClB,mBAAmB;IACnB,sBAAsB,EAAE;IACxB;MACE,mBAAmB;MACnB,kBAAkB,EAAE;IACtB;MACE,uBAAuB;MACvB,cAAc;MACd,oBAAoB;MACpB,kBAAkB;MAClB,oBAAoB;MACpB,mBAAmB,EAAE;EACzB;IACE,uBAAuB;IACvB,cAAc;IACd,oBAAoB;IACpB,kBAAkB;IAClB,oBAAoB;IACpB,aAAa;IACb,kBAAkB;IAClB,yBAAyB,EAAE","file":"Footer.scss","sourcesContent":[".footer {\n  display: flex;\n  background-color: #152136;\n  flex-flow: column wrap; }\n  .footer .content {\n    display: flex;\n    padding: 30px 15px;\n    align-items: center;\n    flex-flow: column wrap; }\n    .footer .content .brand {\n      margin-bottom: 15px;\n      margin-left: -95px; }\n    .footer .content .slogan {\n      text-transform: inherit;\n      color: #ffffff;\n      font-family: inherit;\n      font-size: inherit;\n      font-weight: inherit;\n      margin-bottom: 20px; }\n  .footer .copyright {\n    text-transform: inherit;\n    color: #ffffff;\n    font-family: inherit;\n    font-size: inherit;\n    font-weight: inherit;\n    padding: 20px;\n    text-align: center;\n    background-color: #1c2940; }\n"]}]);
// Exports
exports.locals = {
	"footer": "Footer__footer",
	"content": "Footer__content",
	"brand": "Footer__brand",
	"slogan": "Footer__slogan",
	"copyright": "Footer__copyright"
};

/***/ }),

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// Module
exports.push([module.i, ".AboutMe__background {\n  background-color: #ffffff; }\n  .AboutMe__background .AboutMe__container {\n    display: flex;\n    padding: 100px 0;\n    background-color: #ffffff;\n    align-items: center;\n    flex-flow: column wrap; }\n    .AboutMe__background .AboutMe__container .AboutMe__title {\n      padding-bottom: 25px; }\n      @media (min-width: 1000px) {\n        .AboutMe__background .AboutMe__container .AboutMe__title {\n          text-transform: inherit;\n          color: #32333c;\n          font-family: inherit;\n          font-size: 45px;\n          font-weight: 700; } }\n      @media (max-width: 1000px) {\n        .AboutMe__background .AboutMe__container .AboutMe__title {\n          text-transform: inherit;\n          color: #32333c;\n          font-family: inherit;\n          font-size: 35px;\n          font-weight: 600; } }\n    @media (min-width: 1000px) {\n      .AboutMe__background .AboutMe__container .AboutMe__content {\n        width: 1000px; } }\n    @media (max-width: 1000px) {\n      .AboutMe__background .AboutMe__container .AboutMe__content {\n        width: calc(100% - 30px); } }\n\n.AboutMe__content {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between; }\n  .AboutMe__content .AboutMe__introduction {\n    display: flex;\n    padding: 25px 0;\n    align-items: flex-start;\n    flex-flow: column wrap; }\n    .AboutMe__content .AboutMe__introduction .AboutMe__greeting {\n      text-transform: inherit;\n      color: #32333c;\n      font-family: inherit;\n      font-size: 18px;\n      font-weight: 500;\n      padding-bottom: 15px; }\n    @media (min-width: 1000px) {\n      .AboutMe__content .AboutMe__introduction {\n        flex: 0.45; } }\n    @media (max-width: 1000px) {\n      .AboutMe__content .AboutMe__introduction {\n        flex: auto; } }\n  .AboutMe__content .AboutMe__skills {\n    display: flex;\n    padding: 25px 0;\n    align-items: flex-end;\n    flex-flow: column wrap; }\n    @media (min-width: 1000px) {\n      .AboutMe__content .AboutMe__skills {\n        flex: 0.45; } }\n    @media (max-width: 1000px) {\n      .AboutMe__content .AboutMe__skills {\n        flex: auto; } }\n", "",{"version":3,"sources":["AboutMe.scss"],"names":[],"mappings":"AAAA;EACE,yBAAyB,EAAE;EAC3B;IACE,aAAa;IACb,gBAAgB;IAChB,yBAAyB;IACzB,mBAAmB;IACnB,sBAAsB,EAAE;IACxB;MACE,oBAAoB,EAAE;MACtB;QACE;UACE,uBAAuB;UACvB,cAAc;UACd,oBAAoB;UACpB,eAAe;UACf,gBAAgB,EAAE,EAAE;MACxB;QACE;UACE,uBAAuB;UACvB,cAAc;UACd,oBAAoB;UACpB,eAAe;UACf,gBAAgB,EAAE,EAAE;IAC1B;MACE;QACE,aAAa,EAAE,EAAE;IACrB;MACE;QACE,wBAAwB,EAAE,EAAE;;AAEpC;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B,EAAE;EAChC;IACE,aAAa;IACb,eAAe;IACf,uBAAuB;IACvB,sBAAsB,EAAE;IACxB;MACE,uBAAuB;MACvB,cAAc;MACd,oBAAoB;MACpB,eAAe;MACf,gBAAgB;MAChB,oBAAoB,EAAE;IACxB;MACE;QACE,UAAU,EAAE,EAAE;IAClB;MACE;QACE,UAAU,EAAE,EAAE;EACpB;IACE,aAAa;IACb,eAAe;IACf,qBAAqB;IACrB,sBAAsB,EAAE;IACxB;MACE;QACE,UAAU,EAAE,EAAE;IAClB;MACE;QACE,UAAU,EAAE,EAAE","file":"AboutMe.scss","sourcesContent":[".background {\n  background-color: #ffffff; }\n  .background .container {\n    display: flex;\n    padding: 100px 0;\n    background-color: #ffffff;\n    align-items: center;\n    flex-flow: column wrap; }\n    .background .container .title {\n      padding-bottom: 25px; }\n      @media (min-width: 1000px) {\n        .background .container .title {\n          text-transform: inherit;\n          color: #32333c;\n          font-family: inherit;\n          font-size: 45px;\n          font-weight: 700; } }\n      @media (max-width: 1000px) {\n        .background .container .title {\n          text-transform: inherit;\n          color: #32333c;\n          font-family: inherit;\n          font-size: 35px;\n          font-weight: 600; } }\n    @media (min-width: 1000px) {\n      .background .container .content {\n        width: 1000px; } }\n    @media (max-width: 1000px) {\n      .background .container .content {\n        width: calc(100% - 30px); } }\n\n.content {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between; }\n  .content .introduction {\n    display: flex;\n    padding: 25px 0;\n    align-items: flex-start;\n    flex-flow: column wrap; }\n    .content .introduction .greeting {\n      text-transform: inherit;\n      color: #32333c;\n      font-family: inherit;\n      font-size: 18px;\n      font-weight: 500;\n      padding-bottom: 15px; }\n    @media (min-width: 1000px) {\n      .content .introduction {\n        flex: 0.45; } }\n    @media (max-width: 1000px) {\n      .content .introduction {\n        flex: auto; } }\n  .content .skills {\n    display: flex;\n    padding: 25px 0;\n    align-items: flex-end;\n    flex-flow: column wrap; }\n    @media (min-width: 1000px) {\n      .content .skills {\n        flex: 0.45; } }\n    @media (max-width: 1000px) {\n      .content .skills {\n        flex: auto; } }\n"]}]);
// Exports
exports.locals = {
	"background": "AboutMe__background",
	"container": "AboutMe__container",
	"title": "AboutMe__title",
	"content": "AboutMe__content",
	"introduction": "AboutMe__introduction",
	"greeting": "AboutMe__greeting",
	"skills": "AboutMe__skills"
};

/***/ }),

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// Module
exports.push([module.i, ".BasicInformation__basic-info {\n  display: flex;\n  flex-flow: column wrap; }\n", "",{"version":3,"sources":["BasicInformation.scss"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,sBAAsB,EAAE","file":"BasicInformation.scss","sourcesContent":[".basic-info {\n  display: flex;\n  flex-flow: column wrap; }\n"]}]);
// Exports
exports.locals = {
	"basic-info": "BasicInformation__basic-info"
};

/***/ }),

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// Module
exports.push([module.i, ".BasicInformationItem__basic-info-item {\n  display: flex;\n  margin-top: 5px;\n  align-items: center;\n  flex-flow: row wrap; }\n  .BasicInformationItem__basic-info-item .BasicInformationItem__icon {\n    color: #754ef9; }\n  .BasicInformationItem__basic-info-item .BasicInformationItem__text {\n    padding-left: 10px; }\n    .BasicInformationItem__basic-info-item .BasicInformationItem__text span:first-child {\n      color: #32333c; }\n", "",{"version":3,"sources":["BasicInformationItem.scss"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,eAAe;EACf,mBAAmB;EACnB,mBAAmB,EAAE;EACrB;IACE,cAAc,EAAE;EAClB;IACE,kBAAkB,EAAE;IACpB;MACE,cAAc,EAAE","file":"BasicInformationItem.scss","sourcesContent":[".basic-info-item {\n  display: flex;\n  margin-top: 5px;\n  align-items: center;\n  flex-flow: row wrap; }\n  .basic-info-item .icon {\n    color: #754ef9; }\n  .basic-info-item .text {\n    padding-left: 10px; }\n    .basic-info-item .text span:first-child {\n      color: #32333c; }\n"]}]);
// Exports
exports.locals = {
	"basic-info-item": "BasicInformationItem__basic-info-item",
	"icon": "BasicInformationItem__icon",
	"text": "BasicInformationItem__text"
};

/***/ }),

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// Module
exports.push([module.i, ".Experiences__background {\n  background-color: #fbfbfb; }\n  .Experiences__background .Experiences__container {\n    display: flex;\n    padding: 100px 0;\n    background-color: #fbfbfb;\n    align-items: center;\n    flex-flow: column wrap; }\n    .Experiences__background .Experiences__container .Experiences__title {\n      padding-bottom: 25px; }\n      @media (min-width: 1000px) {\n        .Experiences__background .Experiences__container .Experiences__title {\n          text-transform: inherit;\n          color: #32333c;\n          font-family: inherit;\n          font-size: 45px;\n          font-weight: 700; } }\n      @media (max-width: 1000px) {\n        .Experiences__background .Experiences__container .Experiences__title {\n          text-transform: inherit;\n          color: #32333c;\n          font-family: inherit;\n          font-size: 35px;\n          font-weight: 600; } }\n    @media (min-width: 1000px) {\n      .Experiences__background .Experiences__container .Experiences__content {\n        width: 1000px; } }\n    @media (max-width: 1000px) {\n      .Experiences__background .Experiences__container .Experiences__content {\n        width: calc(100% - 30px); } }\n", "",{"version":3,"sources":["Experiences.scss"],"names":[],"mappings":"AAAA;EACE,yBAAyB,EAAE;EAC3B;IACE,aAAa;IACb,gBAAgB;IAChB,yBAAyB;IACzB,mBAAmB;IACnB,sBAAsB,EAAE;IACxB;MACE,oBAAoB,EAAE;MACtB;QACE;UACE,uBAAuB;UACvB,cAAc;UACd,oBAAoB;UACpB,eAAe;UACf,gBAAgB,EAAE,EAAE;MACxB;QACE;UACE,uBAAuB;UACvB,cAAc;UACd,oBAAoB;UACpB,eAAe;UACf,gBAAgB,EAAE,EAAE;IAC1B;MACE;QACE,aAAa,EAAE,EAAE;IACrB;MACE;QACE,wBAAwB,EAAE,EAAE","file":"Experiences.scss","sourcesContent":[".background {\n  background-color: #fbfbfb; }\n  .background .container {\n    display: flex;\n    padding: 100px 0;\n    background-color: #fbfbfb;\n    align-items: center;\n    flex-flow: column wrap; }\n    .background .container .title {\n      padding-bottom: 25px; }\n      @media (min-width: 1000px) {\n        .background .container .title {\n          text-transform: inherit;\n          color: #32333c;\n          font-family: inherit;\n          font-size: 45px;\n          font-weight: 700; } }\n      @media (max-width: 1000px) {\n        .background .container .title {\n          text-transform: inherit;\n          color: #32333c;\n          font-family: inherit;\n          font-size: 35px;\n          font-weight: 600; } }\n    @media (min-width: 1000px) {\n      .background .container .content {\n        width: 1000px; } }\n    @media (max-width: 1000px) {\n      .background .container .content {\n        width: calc(100% - 30px); } }\n"]}]);
// Exports
exports.locals = {
	"background": "Experiences__background",
	"container": "Experiences__container",
	"title": "Experiences__title",
	"content": "Experiences__content"
};

/***/ }),

/***/ 107:
/***/ (function(module, exports) {



/***/ }),

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// Module
exports.push([module.i, ".Educations__background {\n  background-color: #fbfbfb; }\n  .Educations__background .Educations__container {\n    display: flex;\n    padding: 100px 0;\n    background-color: #fbfbfb;\n    align-items: center;\n    flex-flow: column wrap; }\n    .Educations__background .Educations__container .Educations__title {\n      padding-bottom: 25px; }\n      @media (min-width: 1000px) {\n        .Educations__background .Educations__container .Educations__title {\n          text-transform: inherit;\n          color: #32333c;\n          font-family: inherit;\n          font-size: 45px;\n          font-weight: 700; } }\n      @media (max-width: 1000px) {\n        .Educations__background .Educations__container .Educations__title {\n          text-transform: inherit;\n          color: #32333c;\n          font-family: inherit;\n          font-size: 35px;\n          font-weight: 600; } }\n    @media (min-width: 1000px) {\n      .Educations__background .Educations__container .Educations__content {\n        width: 1000px; } }\n    @media (max-width: 1000px) {\n      .Educations__background .Educations__container .Educations__content {\n        width: calc(100% - 30px); } }\n", "",{"version":3,"sources":["Educations.scss"],"names":[],"mappings":"AAAA;EACE,yBAAyB,EAAE;EAC3B;IACE,aAAa;IACb,gBAAgB;IAChB,yBAAyB;IACzB,mBAAmB;IACnB,sBAAsB,EAAE;IACxB;MACE,oBAAoB,EAAE;MACtB;QACE;UACE,uBAAuB;UACvB,cAAc;UACd,oBAAoB;UACpB,eAAe;UACf,gBAAgB,EAAE,EAAE;MACxB;QACE;UACE,uBAAuB;UACvB,cAAc;UACd,oBAAoB;UACpB,eAAe;UACf,gBAAgB,EAAE,EAAE;IAC1B;MACE;QACE,aAAa,EAAE,EAAE;IACrB;MACE;QACE,wBAAwB,EAAE,EAAE","file":"Educations.scss","sourcesContent":[".background {\n  background-color: #fbfbfb; }\n  .background .container {\n    display: flex;\n    padding: 100px 0;\n    background-color: #fbfbfb;\n    align-items: center;\n    flex-flow: column wrap; }\n    .background .container .title {\n      padding-bottom: 25px; }\n      @media (min-width: 1000px) {\n        .background .container .title {\n          text-transform: inherit;\n          color: #32333c;\n          font-family: inherit;\n          font-size: 45px;\n          font-weight: 700; } }\n      @media (max-width: 1000px) {\n        .background .container .title {\n          text-transform: inherit;\n          color: #32333c;\n          font-family: inherit;\n          font-size: 35px;\n          font-weight: 600; } }\n    @media (min-width: 1000px) {\n      .background .container .content {\n        width: 1000px; } }\n    @media (max-width: 1000px) {\n      .background .container .content {\n        width: calc(100% - 30px); } }\n"]}]);
// Exports
exports.locals = {
	"background": "Educations__background",
	"container": "Educations__container",
	"title": "Educations__title",
	"content": "Educations__content"
};

/***/ }),

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// Module
exports.push([module.i, ".Projects__background {\n  background-color: #ffffff; }\n  .Projects__background .Projects__container {\n    display: flex;\n    padding: 100px 0;\n    background-color: #ffffff;\n    align-items: center;\n    flex-flow: column wrap; }\n    .Projects__background .Projects__container .Projects__title {\n      padding-bottom: 25px; }\n      @media (min-width: 1000px) {\n        .Projects__background .Projects__container .Projects__title {\n          text-transform: inherit;\n          color: #32333c;\n          font-family: inherit;\n          font-size: 45px;\n          font-weight: 700; } }\n      @media (max-width: 1000px) {\n        .Projects__background .Projects__container .Projects__title {\n          text-transform: inherit;\n          color: #32333c;\n          font-family: inherit;\n          font-size: 35px;\n          font-weight: 600; } }\n    @media (min-width: 1000px) {\n      .Projects__background .Projects__container .Projects__content {\n        width: 1000px; } }\n    @media (max-width: 1000px) {\n      .Projects__background .Projects__container .Projects__content {\n        width: calc(100% - 30px); } }\n", "",{"version":3,"sources":["Projects.scss"],"names":[],"mappings":"AAAA;EACE,yBAAyB,EAAE;EAC3B;IACE,aAAa;IACb,gBAAgB;IAChB,yBAAyB;IACzB,mBAAmB;IACnB,sBAAsB,EAAE;IACxB;MACE,oBAAoB,EAAE;MACtB;QACE;UACE,uBAAuB;UACvB,cAAc;UACd,oBAAoB;UACpB,eAAe;UACf,gBAAgB,EAAE,EAAE;MACxB;QACE;UACE,uBAAuB;UACvB,cAAc;UACd,oBAAoB;UACpB,eAAe;UACf,gBAAgB,EAAE,EAAE;IAC1B;MACE;QACE,aAAa,EAAE,EAAE;IACrB;MACE;QACE,wBAAwB,EAAE,EAAE","file":"Projects.scss","sourcesContent":[".background {\n  background-color: #ffffff; }\n  .background .container {\n    display: flex;\n    padding: 100px 0;\n    background-color: #ffffff;\n    align-items: center;\n    flex-flow: column wrap; }\n    .background .container .title {\n      padding-bottom: 25px; }\n      @media (min-width: 1000px) {\n        .background .container .title {\n          text-transform: inherit;\n          color: #32333c;\n          font-family: inherit;\n          font-size: 45px;\n          font-weight: 700; } }\n      @media (max-width: 1000px) {\n        .background .container .title {\n          text-transform: inherit;\n          color: #32333c;\n          font-family: inherit;\n          font-size: 35px;\n          font-weight: 600; } }\n    @media (min-width: 1000px) {\n      .background .container .content {\n        width: 1000px; } }\n    @media (max-width: 1000px) {\n      .background .container .content {\n        width: calc(100% - 30px); } }\n"]}]);
// Exports
exports.locals = {
	"background": "Projects__background",
	"container": "Projects__container",
	"title": "Projects__title",
	"content": "Projects__content"
};

/***/ }),

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// Module
exports.push([module.i, ".RelevantProjects__relevant-projects {\n  display: flex;\n  flex-flow: column wrap;\n  justify-content: center; }\n", "",{"version":3,"sources":["RelevantProjects.scss"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB,EAAE","file":"RelevantProjects.scss","sourcesContent":[".relevant-projects {\n  display: flex;\n  flex-flow: column wrap;\n  justify-content: center; }\n"]}]);
// Exports
exports.locals = {
	"relevant-projects": "RelevantProjects__relevant-projects"
};

/***/ }),

/***/ 111:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// Imports
var getUrl = __webpack_require__(44);
var ___CSS_LOADER_URL___0___ = getUrl(__webpack_require__(112));
// Module
exports.push([module.i, ".RelevantProjectItem__relevant-project-item {\n  display: flex;\n  margin-bottom: 50px;\n  align-items: flex-start;\n  flex-flow: row wrap; }\n  .RelevantProjectItem__relevant-project-item .RelevantProjectItem__name {\n    position: relative;\n    display: flex;\n    width: 120px;\n    height: 72px;\n    align-items: center;\n    flex-flow: row wrap;\n    justify-content: center;\n    text-transform: inherit;\n    color: #32333c;\n    font-family: inherit;\n    font-size: 14px;\n    font-weight: 500; }\n    .RelevantProjectItem__relevant-project-item .RelevantProjectItem__name::after {\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 120px;\n      height: 72px;\n      content: '';\n      background: url(" + ___CSS_LOADER_URL___0___ + ") no-repeat center;\n      background-size: cover; }\n  .RelevantProjectItem__relevant-project-item .RelevantProjectItem__summary {\n    flex: 1;\n    padding-left: 20px; }\n    .RelevantProjectItem__relevant-project-item .RelevantProjectItem__summary .RelevantProjectItem__description {\n      padding-bottom: 5px; }\n    .RelevantProjectItem__relevant-project-item .RelevantProjectItem__summary .RelevantProjectItem__role {\n      text-transform: inherit;\n      color: #32333c;\n      font-family: inherit;\n      font-size: 14px;\n      font-weight: 500;\n      padding-bottom: 10px; }\n    .RelevantProjectItem__relevant-project-item .RelevantProjectItem__summary .RelevantProjectItem__duration {\n      text-transform: inherit;\n      color: inherit;\n      font-family: \"Poppins\", sans-serif;\n      font-size: 14px;\n      font-weight: 100; }\n", "",{"version":3,"sources":["RelevantProjectItem.scss"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB,EAAE;EACrB;IACE,kBAAkB;IAClB,aAAa;IACb,YAAY;IACZ,YAAY;IACZ,mBAAmB;IACnB,mBAAmB;IACnB,uBAAuB;IACvB,uBAAuB;IACvB,cAAc;IACd,oBAAoB;IACpB,eAAe;IACf,gBAAgB,EAAE;IAClB;MACE,kBAAkB;MAClB,MAAM;MACN,OAAO;MACP,YAAY;MACZ,YAAY;MACZ,WAAW;MACX,0DAA4E;MAC5E,sBAAsB,EAAE;EAC5B;IACE,OAAO;IACP,kBAAkB,EAAE;IACpB;MACE,mBAAmB,EAAE;IACvB;MACE,uBAAuB;MACvB,cAAc;MACd,oBAAoB;MACpB,eAAe;MACf,gBAAgB;MAChB,oBAAoB,EAAE;IACxB;MACE,uBAAuB;MACvB,cAAc;MACd,kCAAkC;MAClC,eAAe;MACf,gBAAgB,EAAE","file":"RelevantProjectItem.scss","sourcesContent":[".relevant-project-item {\n  display: flex;\n  margin-bottom: 50px;\n  align-items: flex-start;\n  flex-flow: row wrap; }\n  .relevant-project-item .name {\n    position: relative;\n    display: flex;\n    width: 120px;\n    height: 72px;\n    align-items: center;\n    flex-flow: row wrap;\n    justify-content: center;\n    text-transform: inherit;\n    color: #32333c;\n    font-family: inherit;\n    font-size: 14px;\n    font-weight: 500; }\n    .relevant-project-item .name::after {\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 120px;\n      height: 72px;\n      content: '';\n      background: url(\"../../../../../assets/images/macbook.png\") no-repeat center;\n      background-size: cover; }\n  .relevant-project-item .summary {\n    flex: 1;\n    padding-left: 20px; }\n    .relevant-project-item .summary .description {\n      padding-bottom: 5px; }\n    .relevant-project-item .summary .role {\n      text-transform: inherit;\n      color: #32333c;\n      font-family: inherit;\n      font-size: 14px;\n      font-weight: 500;\n      padding-bottom: 10px; }\n    .relevant-project-item .summary .duration {\n      text-transform: inherit;\n      color: inherit;\n      font-family: \"Poppins\", sans-serif;\n      font-size: 14px;\n      font-weight: 100; }\n"]}]);
// Exports
exports.locals = {
	"relevant-project-item": "RelevantProjectItem__relevant-project-item",
	"name": "RelevantProjectItem__name",
	"summary": "RelevantProjectItem__summary",
	"description": "RelevantProjectItem__description",
	"role": "RelevantProjectItem__role",
	"duration": "RelevantProjectItem__duration"
};

/***/ }),

/***/ 112:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/7886681fd780cfb5686c41545073b18f.png";

/***/ }),

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// Module
exports.push([module.i, ".Achievements__background {\n  background-color: #ffffff; }\n  .Achievements__background .Achievements__container {\n    display: flex;\n    padding: 100px 0;\n    background-color: #ffffff;\n    align-items: center;\n    flex-flow: column wrap; }\n    .Achievements__background .Achievements__container .Achievements__title {\n      padding-bottom: 25px; }\n      @media (min-width: 1000px) {\n        .Achievements__background .Achievements__container .Achievements__title {\n          text-transform: inherit;\n          color: #32333c;\n          font-family: inherit;\n          font-size: 45px;\n          font-weight: 700; } }\n      @media (max-width: 1000px) {\n        .Achievements__background .Achievements__container .Achievements__title {\n          text-transform: inherit;\n          color: #32333c;\n          font-family: inherit;\n          font-size: 35px;\n          font-weight: 600; } }\n    @media (min-width: 1000px) {\n      .Achievements__background .Achievements__container .Achievements__content {\n        width: 1000px; } }\n    @media (max-width: 1000px) {\n      .Achievements__background .Achievements__container .Achievements__content {\n        width: calc(100% - 30px); } }\n", "",{"version":3,"sources":["Achievements.scss"],"names":[],"mappings":"AAAA;EACE,yBAAyB,EAAE;EAC3B;IACE,aAAa;IACb,gBAAgB;IAChB,yBAAyB;IACzB,mBAAmB;IACnB,sBAAsB,EAAE;IACxB;MACE,oBAAoB,EAAE;MACtB;QACE;UACE,uBAAuB;UACvB,cAAc;UACd,oBAAoB;UACpB,eAAe;UACf,gBAAgB,EAAE,EAAE;MACxB;QACE;UACE,uBAAuB;UACvB,cAAc;UACd,oBAAoB;UACpB,eAAe;UACf,gBAAgB,EAAE,EAAE;IAC1B;MACE;QACE,aAAa,EAAE,EAAE;IACrB;MACE;QACE,wBAAwB,EAAE,EAAE","file":"Achievements.scss","sourcesContent":[".background {\n  background-color: #ffffff; }\n  .background .container {\n    display: flex;\n    padding: 100px 0;\n    background-color: #ffffff;\n    align-items: center;\n    flex-flow: column wrap; }\n    .background .container .title {\n      padding-bottom: 25px; }\n      @media (min-width: 1000px) {\n        .background .container .title {\n          text-transform: inherit;\n          color: #32333c;\n          font-family: inherit;\n          font-size: 45px;\n          font-weight: 700; } }\n      @media (max-width: 1000px) {\n        .background .container .title {\n          text-transform: inherit;\n          color: #32333c;\n          font-family: inherit;\n          font-size: 35px;\n          font-weight: 600; } }\n    @media (min-width: 1000px) {\n      .background .container .content {\n        width: 1000px; } }\n    @media (max-width: 1000px) {\n      .background .container .content {\n        width: calc(100% - 30px); } }\n"]}]);
// Exports
exports.locals = {
	"background": "Achievements__background",
	"container": "Achievements__container",
	"title": "Achievements__title",
	"content": "Achievements__content"
};

/***/ }),

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(96);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(4)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/redux/es/redux.js
var redux = __webpack_require__(14);

// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 25 modules
var es = __webpack_require__(33);

// EXTERNAL MODULE: ./src/constants/index.js + 10 modules
var constants = __webpack_require__(13);

// CONCATENATED MODULE: ./src/actions/index.js

const {
  actions: {
    ACTIVATE_NAVIGATION_ITEM,
    OPEN_NAVIGATION_MENU
  }
} = constants["a" /* default */];
const actions_activateNavigationItem = index => ({
  type: ACTIVATE_NAVIGATION_ITEM,
  payload: {
    index
  }
});
const actions_openNavigationMenu = () => ({
  type: OPEN_NAVIGATION_MENU
});
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-css-modules/dist/index.js
var dist = __webpack_require__(1);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);

// EXTERNAL MODULE: ./src/components/forms/Navbar/Navbar.scss
var Navbar = __webpack_require__(45);
var Navbar_default = /*#__PURE__*/__webpack_require__.n(Navbar);

// EXTERNAL MODULE: ./src/components/commons/index.js + 17 modules
var commons = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(18);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./src/components/forms/Navbar/components/NavbarMenu/NavbarMenu.scss
var NavbarMenu = __webpack_require__(17);
var NavbarMenu_default = /*#__PURE__*/__webpack_require__.n(NavbarMenu);

// EXTERNAL MODULE: ./node_modules/zenscroll/zenscroll.js
var zenscroll = __webpack_require__(46);
var zenscroll_default = /*#__PURE__*/__webpack_require__.n(zenscroll);

// EXTERNAL MODULE: ./src/components/forms/Navbar/components/NavbarItem/NavbarItem.scss
var NavbarItem = __webpack_require__(32);
var NavbarItem_default = /*#__PURE__*/__webpack_require__.n(NavbarItem);

// CONCATENATED MODULE: ./src/components/forms/Navbar/components/NavbarItem/NavbarItem.jsx






const getStyleClass = (index, activatedIndex) => index === activatedIndex ? NavbarItem_default.a['is-active'] : '';

const activate = (activateNavigationItem, index, openNavigationMenu, itemId) => () => {
  const element = document.getElementById(itemId);

  if (element) {
    zenscroll_default.a.to(element);
  }

  activateNavigationItem(index);
  openNavigationMenu();
};

const NavbarItem_NavbarItem = props => {
  const {
    index,
    itemId,
    name,
    url,
    activateNavigationItem,
    activatedIndex,
    openNavigationMenu
  } = props;
  return react_default.a.createElement("li", {
    className: classnames_default()(NavbarItem_default.a['nav-item'], getStyleClass(index, activatedIndex))
  }, react_default.a.createElement("a", {
    styleName: "content",
    href: url,
    onClick: activate(activateNavigationItem, index, openNavigationMenu, itemId)
  }, name));
};

/* harmony default export */ var components_NavbarItem_NavbarItem = (Object(react["memo"])(dist_default()(NavbarItem_NavbarItem, NavbarItem_default.a)));
// CONCATENATED MODULE: ./src/components/forms/Navbar/components/NavbarItem/index.js

/* harmony default export */ var components_NavbarItem = (components_NavbarItem_NavbarItem);
// CONCATENATED MODULE: ./src/components/forms/Navbar/components/NavbarMenu/NavbarMenu.jsx
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







const NavbarMenu_getStyleClass = isVisible => isVisible ? NavbarMenu_default.a['is-visible'] : NavbarMenu_default.a['is-invisible'];

const NavbarMenu_NavbarMenu = props => {
  const {
    items,
    activatedIndex,
    isVisible,
    activateNavigationItem,
    openNavigationMenu
  } = props;
  return react_default.a.createElement("div", {
    styleName: "nav-menu"
  }, react_default.a.createElement("ul", {
    className: classnames_default()(NavbarMenu_default.a.content, NavbarMenu_getStyleClass(isVisible))
  }, items.map((item, index) => react_default.a.createElement(components_NavbarItem, _extends({
    key: item.name,
    index: index,
    activatedIndex: activatedIndex,
    activateNavigationItem: activateNavigationItem,
    openNavigationMenu: openNavigationMenu
  }, item)))));
};

/* harmony default export */ var components_NavbarMenu_NavbarMenu = (Object(react["memo"])(dist_default()(NavbarMenu_NavbarMenu, NavbarMenu_default.a)));
// CONCATENATED MODULE: ./src/components/forms/Navbar/components/NavbarMenu/index.js

/* harmony default export */ var components_NavbarMenu = (components_NavbarMenu_NavbarMenu);
// EXTERNAL MODULE: ./src/components/forms/Navbar/components/HamburgerButton/HamburgerButton.scss
var HamburgerButton = __webpack_require__(47);
var HamburgerButton_default = /*#__PURE__*/__webpack_require__.n(HamburgerButton);

// EXTERNAL MODULE: ./src/components/forms/Navbar/components/HamburgerButton/type.js
var type = __webpack_require__(99);

// CONCATENATED MODULE: ./src/components/forms/Navbar/components/HamburgerButton/HamburgerButton.jsx





const getMenuIconUrl = (isVisible, closeIconUrl, hamburgerIconUrl) => isVisible ? closeIconUrl : hamburgerIconUrl;

const HamburgerButton_HamburgerButton = props => {
  const {
    isVisible,
    closeIconUrl,
    hamburgerIconUrl,
    openNavigationMenu
  } = props;
  return react_default.a.createElement("img", {
    styleName: "hamburger-btn",
    src: getMenuIconUrl(isVisible, closeIconUrl, hamburgerIconUrl),
    alt: "",
    onClick: openNavigationMenu
  });
};

/* harmony default export */ var components_HamburgerButton_HamburgerButton = (Object(react["memo"])(dist_default()(HamburgerButton_HamburgerButton, HamburgerButton_default.a)));
// CONCATENATED MODULE: ./src/components/forms/Navbar/components/HamburgerButton/index.js

/* harmony default export */ var components_HamburgerButton = (components_HamburgerButton_HamburgerButton);
// CONCATENATED MODULE: ./src/components/forms/Navbar/Navbar.jsx







const Navbar_Navbar = props => {
  const {
    items,
    logoUrl,
    hamburgerIconUrl,
    closeIconUrl,
    activatedIndex,
    isVisible,
    activateNavigationItem,
    openNavigationMenu
  } = props;
  return react_default.a.createElement("div", {
    styleName: "nav"
  }, react_default.a.createElement("div", {
    styleName: "content"
  }, react_default.a.createElement(commons["a" /* Brand */], {
    logoUrl: logoUrl
  }), react_default.a.createElement(components_NavbarMenu, {
    isVisible: isVisible,
    items: items,
    activatedIndex: activatedIndex,
    activateNavigationItem: activateNavigationItem,
    openNavigationMenu: openNavigationMenu
  }), react_default.a.createElement(components_HamburgerButton, {
    isVisible: isVisible,
    closeIconUrl: closeIconUrl,
    hamburgerIconUrl: hamburgerIconUrl,
    openNavigationMenu: openNavigationMenu
  })));
};

/* harmony default export */ var forms_Navbar_Navbar = (Object(react["memo"])(dist_default()(Navbar_Navbar, Navbar_default.a)));
// CONCATENATED MODULE: ./src/components/forms/Navbar/index.js

/* harmony default export */ var forms_Navbar = (forms_Navbar_Navbar);
// EXTERNAL MODULE: ./src/components/forms/Header/Header.scss
var Header = __webpack_require__(48);
var Header_default = /*#__PURE__*/__webpack_require__.n(Header);

// CONCATENATED MODULE: ./src/components/forms/Header/Header.jsx





const handleMouseMoveEvent = event => {
  const element = document.getElementById('dynamic-background');

  if (element) {
    const {
      clientX,
      clientY
    } = event;
    const {
      style
    } = element;
    style.setProperty('transform', `translate3d(${clientX * 0.04}px, ${clientY * 0.08}px, 0)`);
  }
};

const handleMouseOutEvent = () => {
  const element = document.getElementById('dynamic-background');

  if (element) {
    const {
      style
    } = element;
    style.setProperty('transform', 'translate3d(0, 0, 0)');
  }
};

const Header_Header = props => {
  const {
    name,
    description,
    avatarUrl,
    btnTxt,
    socialNetworks
  } = props;
  return react_default.a.createElement("div", {
    id: "header",
    styleName: "header",
    onMouseMove: handleMouseMoveEvent,
    onMouseOut: handleMouseOutEvent
  }, react_default.a.createElement("div", {
    id: "dynamic-background",
    styleName: "dynamic-background"
  }), react_default.a.createElement("div", {
    styleName: "content"
  }, react_default.a.createElement("div", {
    styleName: "introduction"
  }, react_default.a.createElement("div", {
    styleName: "greeting"
  }, "HELLO, I'M"), react_default.a.createElement("div", {
    styleName: "name"
  }, name), react_default.a.createElement("div", {
    styleName: "description"
  }, description), react_default.a.createElement(commons["b" /* Button */], {
    text: btnTxt,
    handleClickEvent: () => null
  })), react_default.a.createElement("div", {
    styleName: "avatar"
  }, react_default.a.createElement("img", {
    src: avatarUrl,
    alt: ""
  }))), react_default.a.createElement("div", {
    styleName: "social-networks"
  }, react_default.a.createElement(commons["d" /* SocialNetworks */], {
    items: socialNetworks
  })));
};

/* harmony default export */ var forms_Header_Header = (Object(react["memo"])(dist_default()(Header_Header, Header_default.a)));
// CONCATENATED MODULE: ./src/components/forms/Header/index.js

/* harmony default export */ var forms_Header = (forms_Header_Header);
// EXTERNAL MODULE: ./src/components/forms/Footer/Footer.scss
var Footer = __webpack_require__(49);
var Footer_default = /*#__PURE__*/__webpack_require__.n(Footer);

// EXTERNAL MODULE: ./src/components/commons/Brand/index.js + 1 modules
var Brand = __webpack_require__(30);

// CONCATENATED MODULE: ./src/components/forms/Footer/Footer.jsx






const Footer_Footer = props => {
  const {
    copyright,
    slogan,
    socialNetworks,
    logoUrl
  } = props;
  return react_default.a.createElement("div", {
    id: "footer",
    styleName: "footer"
  }, react_default.a.createElement("div", {
    styleName: "content"
  }, react_default.a.createElement("div", {
    styleName: "brand"
  }, react_default.a.createElement(Brand["a" /* default */], {
    logoUrl: logoUrl
  })), react_default.a.createElement("div", {
    styleName: "slogan"
  }, slogan), react_default.a.createElement(commons["d" /* SocialNetworks */], {
    items: socialNetworks
  })), react_default.a.createElement("div", {
    styleName: "copyright"
  }, copyright));
};

/* harmony default export */ var forms_Footer_Footer = (Object(react["memo"])(dist_default()(Footer_Footer, Footer_default.a)));
// CONCATENATED MODULE: ./src/components/forms/Footer/index.js

/* harmony default export */ var forms_Footer = (forms_Footer_Footer);
// EXTERNAL MODULE: ./src/components/forms/AboutMe/AboutMe.scss
var AboutMe = __webpack_require__(50);
var AboutMe_default = /*#__PURE__*/__webpack_require__.n(AboutMe);

// EXTERNAL MODULE: ./src/components/forms/AboutMe/components/BasicInformation/BasicInformation.scss
var BasicInformation = __webpack_require__(51);
var BasicInformation_default = /*#__PURE__*/__webpack_require__.n(BasicInformation);

// EXTERNAL MODULE: ./src/components/forms/AboutMe/components/BasicInformationItem/BasicInformationItem.scss
var BasicInformationItem = __webpack_require__(52);
var BasicInformationItem_default = /*#__PURE__*/__webpack_require__.n(BasicInformationItem);

// CONCATENATED MODULE: ./src/components/forms/AboutMe/components/BasicInformationItem/BasicInformationItem.jsx




const BasicInformationItem_BasicInformationItem = props => {
  const {
    iconClassName,
    name,
    value
  } = props;
  return react_default.a.createElement("li", {
    key: name,
    styleName: "basic-info-item"
  }, react_default.a.createElement("i", {
    styleName: "icon",
    className: iconClassName
  }), react_default.a.createElement("div", {
    styleName: "text"
  }, react_default.a.createElement("span", null, name, ":"), react_default.a.createElement("span", null, "\xA0", value)));
};

/* harmony default export */ var components_BasicInformationItem_BasicInformationItem = (Object(react["memo"])(dist_default()(BasicInformationItem_BasicInformationItem, BasicInformationItem_default.a)));
// CONCATENATED MODULE: ./src/components/forms/AboutMe/components/BasicInformationItem/index.js

/* harmony default export */ var components_BasicInformationItem = (components_BasicInformationItem_BasicInformationItem);
// CONCATENATED MODULE: ./src/components/forms/AboutMe/components/BasicInformation/BasicInformation.jsx
function BasicInformation_extends() { BasicInformation_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return BasicInformation_extends.apply(this, arguments); }






const BasicInformation_BasicInformation = props => {
  const {
    items
  } = props;
  return react_default.a.createElement("ul", {
    styleName: "basic-info"
  }, items.map(item => react_default.a.createElement(components_BasicInformationItem, BasicInformation_extends({
    key: item.name
  }, item))));
};

/* harmony default export */ var components_BasicInformation_BasicInformation = (Object(react["memo"])(dist_default()(BasicInformation_BasicInformation, BasicInformation_default.a)));
// CONCATENATED MODULE: ./src/components/forms/AboutMe/components/BasicInformation/index.js

/* harmony default export */ var components_BasicInformation = (components_BasicInformation_BasicInformation);
// CONCATENATED MODULE: ./src/components/forms/AboutMe/AboutMe.jsx






const AboutMe_AboutMe = props => {
  const {
    title,
    greeting,
    summary,
    basicInfo,
    skills
  } = props;
  return react_default.a.createElement("div", {
    id: "about-me",
    styleName: "background"
  }, react_default.a.createElement("div", {
    styleName: "container",
    "data-aos": "fade-right",
    "data-aos-duration": "2000"
  }, react_default.a.createElement("div", {
    styleName: "title"
  }, title), react_default.a.createElement("div", {
    styleName: "content"
  }, react_default.a.createElement("div", {
    styleName: "introduction"
  }, react_default.a.createElement("div", {
    styleName: "greeting"
  }, greeting), react_default.a.createElement("div", null, summary), react_default.a.createElement(components_BasicInformation, {
    items: basicInfo
  })), react_default.a.createElement("div", {
    styleName: "skills"
  }, react_default.a.createElement(commons["c" /* ProgressBars */], {
    items: skills
  })))));
};

/* harmony default export */ var forms_AboutMe_AboutMe = (Object(react["memo"])(dist_default()(AboutMe_AboutMe, AboutMe_default.a)));
// CONCATENATED MODULE: ./src/components/forms/AboutMe/index.js

/* harmony default export */ var forms_AboutMe = (forms_AboutMe_AboutMe);
// EXTERNAL MODULE: ./src/components/forms/Experiences/Experiences.scss
var Experiences = __webpack_require__(53);
var Experiences_default = /*#__PURE__*/__webpack_require__.n(Experiences);

// EXTERNAL MODULE: ./src/components/forms/Experiences/type.js
var Experiences_type = __webpack_require__(107);

// CONCATENATED MODULE: ./src/components/forms/Experiences/Experiences.jsx






const Experiences_Experiences = props => {
  const {
    title,
    timeline
  } = props;
  return react_default.a.createElement("div", {
    id: "work-experiences",
    styleName: "background"
  }, react_default.a.createElement("div", {
    styleName: "container",
    "data-aos": "fade-right",
    "data-aos-duration": "2000"
  }, react_default.a.createElement("div", {
    styleName: "title"
  }, title), react_default.a.createElement("div", {
    styleName: "content"
  }, react_default.a.createElement(commons["f" /* TimeLine */], timeline))));
};

/* harmony default export */ var forms_Experiences_Experiences = (Object(react["memo"])(dist_default()(Experiences_Experiences, Experiences_default.a)));
// CONCATENATED MODULE: ./src/components/forms/Experiences/index.js

/* harmony default export */ var forms_Experiences = (forms_Experiences_Experiences);
// EXTERNAL MODULE: ./src/components/forms/Educations/Educations.scss
var Educations = __webpack_require__(54);
var Educations_default = /*#__PURE__*/__webpack_require__.n(Educations);

// CONCATENATED MODULE: ./src/components/forms/Educations/Educations.jsx





const Educations_Educations = props => {
  const {
    title,
    timeline
  } = props;
  return react_default.a.createElement("div", {
    id: "my-educations",
    styleName: "background"
  }, react_default.a.createElement("div", {
    styleName: "container",
    "data-aos": "fade-right",
    "data-aos-duration": "2000"
  }, react_default.a.createElement("div", {
    styleName: "title"
  }, title), react_default.a.createElement("div", {
    styleName: "content"
  }, react_default.a.createElement(commons["f" /* TimeLine */], timeline))));
};

/* harmony default export */ var forms_Educations_Educations = (Object(react["memo"])(dist_default()(Educations_Educations, Educations_default.a)));
// CONCATENATED MODULE: ./src/components/forms/Educations/index.js

/* harmony default export */ var forms_Educations = (forms_Educations_Educations);
// EXTERNAL MODULE: ./src/components/forms/Projects/Projects.scss
var Projects = __webpack_require__(55);
var Projects_default = /*#__PURE__*/__webpack_require__.n(Projects);

// EXTERNAL MODULE: ./src/components/forms/Projects/components/RelevantProjects/RelevantProjects.scss
var RelevantProjects = __webpack_require__(56);
var RelevantProjects_default = /*#__PURE__*/__webpack_require__.n(RelevantProjects);

// EXTERNAL MODULE: ./src/components/forms/Projects/components/RelevantProjectItem/RelevantProjectItem.scss
var RelevantProjectItem = __webpack_require__(57);
var RelevantProjectItem_default = /*#__PURE__*/__webpack_require__.n(RelevantProjectItem);

// EXTERNAL MODULE: ./src/utils/index.js + 1 modules
var utils = __webpack_require__(34);

// CONCATENATED MODULE: ./src/components/forms/Projects/components/RelevantProjectItem/RelevantProjectItem.jsx





const RelevantProjectItem_RelevantProjectItem = props => {
  const {
    name,
    role,
    description,
    startDate,
    endDate
  } = props;
  const {
    date: {
      getDuration
    }
  } = utils["a" /* default */];
  const duration = getDuration(startDate, endDate);
  return react_default.a.createElement("li", {
    styleName: "relevant-project-item"
  }, react_default.a.createElement("div", {
    "data-aos": "zoom-in",
    "data-aos-duration": "2000",
    "data-aos-offset": "100",
    styleName: "name"
  }, name), react_default.a.createElement("div", {
    "data-aos": "zoom-in",
    "data-aos-duration": "2000",
    "data-aos-offset": "100",
    styleName: "summary"
  }, react_default.a.createElement("div", {
    styleName: "description"
  }, description), react_default.a.createElement("div", {
    styleName: "role"
  }, role), react_default.a.createElement("div", {
    styleName: "duration"
  }, react_default.a.createElement("i", {
    className: "lni-calendar"
  }), "\xA0\xA0", duration)));
};

/* harmony default export */ var components_RelevantProjectItem_RelevantProjectItem = (Object(react["memo"])(dist_default()(RelevantProjectItem_RelevantProjectItem, RelevantProjectItem_default.a)));
// CONCATENATED MODULE: ./src/components/forms/Projects/components/RelevantProjectItem/index.js

/* harmony default export */ var components_RelevantProjectItem = (components_RelevantProjectItem_RelevantProjectItem);
// CONCATENATED MODULE: ./src/components/forms/Projects/components/RelevantProjects/RelevantProjects.jsx
function RelevantProjects_extends() { RelevantProjects_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return RelevantProjects_extends.apply(this, arguments); }






const RelevantProjects_RelevantProjects = props => {
  const {
    items
  } = props;
  return react_default.a.createElement("ul", {
    styleName: "relevant-projects"
  }, items.map(item => react_default.a.createElement(components_RelevantProjectItem, RelevantProjects_extends({
    key: item.name
  }, item))));
};

/* harmony default export */ var components_RelevantProjects_RelevantProjects = (Object(react["memo"])(dist_default()(RelevantProjects_RelevantProjects, RelevantProjects_default.a)));
// CONCATENATED MODULE: ./src/components/forms/Projects/components/RelevantProjects/index.js

/* harmony default export */ var components_RelevantProjects = (components_RelevantProjects_RelevantProjects);
// CONCATENATED MODULE: ./src/components/forms/Projects/Projects.jsx





const Projects_Projects = props => {
  const {
    title,
    items
  } = props;
  return react_default.a.createElement("div", {
    id: "relevant-projects",
    styleName: "background"
  }, react_default.a.createElement("div", {
    styleName: "container",
    "data-aos": "fade-right",
    "data-aos-duration": "2000"
  }, react_default.a.createElement("div", {
    styleName: "title"
  }, title), react_default.a.createElement("div", {
    styleName: "content"
  }, react_default.a.createElement(components_RelevantProjects, {
    items: items
  }))));
};

/* harmony default export */ var forms_Projects_Projects = (Object(react["memo"])(dist_default()(Projects_Projects, Projects_default.a)));
// CONCATENATED MODULE: ./src/components/forms/Projects/index.js

/* harmony default export */ var forms_Projects = (forms_Projects_Projects);
// EXTERNAL MODULE: ./src/components/forms/Achievements/Achievements.scss
var Achievements = __webpack_require__(58);
var Achievements_default = /*#__PURE__*/__webpack_require__.n(Achievements);

// CONCATENATED MODULE: ./src/components/forms/Achievements/Achievements.jsx





const Achievements_Achievements = props => {
  const {
    title,
    timeline
  } = props;
  return react_default.a.createElement("div", {
    id: "my-achievements",
    styleName: "background"
  }, react_default.a.createElement("div", {
    styleName: "container",
    "data-aos": "fade-right",
    "data-aos-duration": "2000"
  }, react_default.a.createElement("div", {
    styleName: "title"
  }, title), react_default.a.createElement("div", {
    styleName: "content"
  }, react_default.a.createElement(commons["f" /* TimeLine */], timeline))));
};

/* harmony default export */ var forms_Achievements_Achievements = (Object(react["memo"])(dist_default()(Achievements_Achievements, Achievements_default.a)));
// CONCATENATED MODULE: ./src/components/forms/Achievements/index.js

/* harmony default export */ var forms_Achievements = (forms_Achievements_Achievements);
// CONCATENATED MODULE: ./src/components/forms/index.js








/* harmony default export */ var components_forms = ({
  Navbar: forms_Navbar,
  Header: forms_Header,
  Footer: forms_Footer,
  AboutMe: forms_AboutMe,
  Experiences: forms_Experiences,
  Educations: forms_Educations,
  Projects: forms_Projects,
  Achievements: forms_Achievements
});
// CONCATENATED MODULE: ./src/containers/App/App.jsx
function App_extends() { App_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return App_extends.apply(this, arguments); }




const {
  header,
  footer,
  aboutMe,
  app,
  navbar,
  experiences,
  educations,
  projects,
  achievements
} = constants["a" /* default */];
const {
  Navbar: App_Navbar,
  Header: App_Header,
  Footer: App_Footer,
  AboutMe: App_AboutMe,
  Experiences: App_Experiences,
  Educations: App_Educations,
  Projects: App_Projects,
  Achievements: App_Achievements
} = components_forms;

const App = props => react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement(App_Navbar, App_extends({
  items: navbar.items,
  hamburgerIconUrl: navbar.hamburgerIconUrl,
  closeIconUrl: navbar.closeIconUrl,
  logoUrl: app.logoUrl
}, props)), react_default.a.createElement(App_Header, {
  name: header.NAME,
  description: header.DESCRIPTION,
  btnTxt: header.BUTTON_TEXT,
  avatarUrl: header.avatarUrl,
  socialNetworks: app.socialNetworks
}), react_default.a.createElement(App_AboutMe, {
  title: aboutMe.TITLE,
  greeting: aboutMe.GREETING,
  summary: aboutMe.SUMMARY,
  basicInfo: aboutMe.basicInfo,
  skills: aboutMe.skills
}), react_default.a.createElement(App_Experiences, {
  title: experiences.TITLE,
  timeline: experiences.timeline
}), react_default.a.createElement(App_Projects, {
  title: projects.TITLE,
  items: projects.items
}), react_default.a.createElement(App_Educations, {
  title: educations.TITLE,
  timeline: educations.timeline
}), react_default.a.createElement(App_Achievements, {
  title: achievements.TITLE,
  timeline: achievements.timeline
}), react_default.a.createElement(App_Footer, {
  slogan: footer.SLOGAN,
  copyright: footer.COPYRIGHT,
  socialNetworks: app.socialNetworks,
  logoUrl: app.logoUrl
}));

/* harmony default export */ var App_App = (Object(react["memo"])(App));
// CONCATENATED MODULE: ./src/containers/App/container.js





const mapStateToProps = state => ({
  activatedIndex: state.activatedIndex,
  isVisible: state.isVisible
});

const mapDispatchToProps = dispatch => Object(redux["a" /* bindActionCreators */])({
  activateNavigationItem: actions_activateNavigationItem,
  openNavigationMenu: actions_openNavigationMenu
}, dispatch);

/* harmony default export */ var container = (Object(es["b" /* connect */])(mapStateToProps, mapDispatchToProps)(App_App));
// CONCATENATED MODULE: ./src/containers/App/index.js

/* harmony default export */ var containers_App = __webpack_exports__["default"] = (container);

/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(97);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(4)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, needQuotes) {
  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(95);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(4)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Zenscroll 4.0.2
 * https://github.com/zengabor/zenscroll/
 *
 * Copyright 2015–2018 Gabor Lenard
 *
 * This is free and unencumbered software released into the public domain.
 * 
 * Anyone is free to copy, modify, publish, use, compile, sell, or
 * distribute this software, either in source code form or as a compiled
 * binary, for any purpose, commercial or non-commercial, and by any
 * means.
 * 
 * In jurisdictions that recognize copyright laws, the author or authors
 * of this software dedicate any and all copyright interest in the
 * software to the public domain. We make this dedication for the benefit
 * of the public at large and to the detriment of our heirs and
 * successors. We intend this dedication to be an overt act of
 * relinquishment in perpetuity of all present and future rights to this
 * software under copyright law.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
 * OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 * 
 * For more information, please refer to <http://unlicense.org>
 * 
 */

/*jshint devel:true, asi:true */

/*global define, module */


(function (root, factory) {
	if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory()),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
	} else {}
}(this, function () {
	"use strict"


	// Detect if the browser already supports native smooth scrolling (e.g., Firefox 36+ and Chrome 49+) and it is enabled:
	var isNativeSmoothScrollEnabledOn = function (elem) {
		return elem && "getComputedStyle" in window &&
			window.getComputedStyle(elem)["scroll-behavior"] === "smooth"
	}


	// Exit if it’s not a browser environment:
	if (typeof window === "undefined" || !("document" in window)) {
		return {}
	}


	var makeScroller = function (container, defaultDuration, edgeOffset) {

		// Use defaults if not provided
		defaultDuration = defaultDuration || 999 //ms
		if (!edgeOffset && edgeOffset !== 0) {
			// When scrolling, this amount of distance is kept from the edges of the container:
			edgeOffset = 9 //px
		}

		// Handling the life-cycle of the scroller
		var scrollTimeoutId
		var setScrollTimeoutId = function (newValue) {
			scrollTimeoutId = newValue
		}

		/**
		 * Stop the current smooth scroll operation immediately
		 */
		var stopScroll = function () {
			clearTimeout(scrollTimeoutId)
			setScrollTimeoutId(0)
		}

		var getTopWithEdgeOffset = function (elem) {
			return Math.max(0, container.getTopOf(elem) - edgeOffset)
		}

		/**
		 * Scrolls to a specific vertical position in the document.
		 *
		 * @param {targetY} The vertical position within the document.
		 * @param {duration} Optionally the duration of the scroll operation.
		 *        If not provided the default duration is used.
		 * @param {onDone} An optional callback function to be invoked once the scroll finished.
		 */
		var scrollToY = function (targetY, duration, onDone) {
			stopScroll()
			if (duration === 0 || (duration && duration < 0) || isNativeSmoothScrollEnabledOn(container.body)) {
				container.toY(targetY)
				if (onDone) {
					onDone()
				}
			} else {
				var startY = container.getY()
				var distance = Math.max(0, targetY) - startY
				var startTime = new Date().getTime()
				duration = duration || Math.min(Math.abs(distance), defaultDuration);
				(function loopScroll() {
					setScrollTimeoutId(setTimeout(function () {
						// Calculate percentage:
						var p = Math.min(1, (new Date().getTime() - startTime) / duration)
						// Calculate the absolute vertical position:
						var y = Math.max(0, Math.floor(startY + distance*(p < 0.5 ? 2*p*p : p*(4 - p*2)-1)))
						container.toY(y)
						if (p < 1 && (container.getHeight() + y) < container.body.scrollHeight) {
							loopScroll()
						} else {
							setTimeout(stopScroll, 99) // with cooldown time
							if (onDone) {
								onDone()
							}
						}
					}, 9))
				})()
			}
		}

		/**
		 * Scrolls to the top of a specific element.
		 *
		 * @param {elem} The element to scroll to.
		 * @param {duration} Optionally the duration of the scroll operation.
		 * @param {onDone} An optional callback function to be invoked once the scroll finished.
		 */
		var scrollToElem = function (elem, duration, onDone) {
			scrollToY(getTopWithEdgeOffset(elem), duration, onDone)
		}

		/**
		 * Scrolls an element into view if necessary.
		 *
		 * @param {elem} The element.
		 * @param {duration} Optionally the duration of the scroll operation.
		 * @param {onDone} An optional callback function to be invoked once the scroll finished.
		 */
		var scrollIntoView = function (elem, duration, onDone) {
			var elemHeight = elem.getBoundingClientRect().height
			var elemBottom = container.getTopOf(elem) + elemHeight
			var containerHeight = container.getHeight()
			var y = container.getY()
			var containerBottom = y + containerHeight
			if (getTopWithEdgeOffset(elem) < y || (elemHeight + edgeOffset) > containerHeight) {
				// Element is clipped at top or is higher than screen.
				scrollToElem(elem, duration, onDone)
			} else if ((elemBottom + edgeOffset) > containerBottom) {
				// Element is clipped at the bottom.
				scrollToY(elemBottom - containerHeight + edgeOffset, duration, onDone)
			} else if (onDone) {
				onDone()
			}
		}

		/**
		 * Scrolls to the center of an element.
		 *
		 * @param {elem} The element.
		 * @param {duration} Optionally the duration of the scroll operation.
		 * @param {offset} Optionally the offset of the top of the element from the center of the screen.
		 *        A value of 0 is ignored.
		 * @param {onDone} An optional callback function to be invoked once the scroll finished.
		 */
		var scrollToCenterOf = function (elem, duration, offset, onDone) {
			scrollToY(Math.max(0, container.getTopOf(elem) - container.getHeight()/2 + (offset || elem.getBoundingClientRect().height/2)), duration, onDone)
		}

		/**
		 * Changes default settings for this scroller.
		 *
		 * @param {newDefaultDuration} Optionally a new value for default duration, used for each scroll method by default.
		 *        Ignored if null or undefined.
		 * @param {newEdgeOffset} Optionally a new value for the edge offset, used by each scroll method by default. Ignored if null or undefined.
		 * @returns An object with the current values.
		 */
		var setup = function (newDefaultDuration, newEdgeOffset) {
			if (newDefaultDuration === 0 || newDefaultDuration) {
				defaultDuration = newDefaultDuration
			}
			if (newEdgeOffset === 0 || newEdgeOffset) {
				edgeOffset = newEdgeOffset
			}
			return {
				defaultDuration: defaultDuration,
				edgeOffset: edgeOffset
			}
		}

		return {
			setup: setup,
			to: scrollToElem,
			toY: scrollToY,
			intoView: scrollIntoView,
			center: scrollToCenterOf,
			stop: stopScroll,
			moving: function () { return !!scrollTimeoutId },
			getY: container.getY,
			getTopOf: container.getTopOf
		}

	}


	var docElem = document.documentElement
	var getDocY = function () { return window.scrollY || docElem.scrollTop }

	// Create a scroller for the document:
	var zenscroll = makeScroller({
		body: document.scrollingElement || document.body,
		toY: function (y) { window.scrollTo(0, y) },
		getY: getDocY,
		getHeight: function () { return window.innerHeight || docElem.clientHeight },
		getTopOf: function (elem) { return elem.getBoundingClientRect().top + getDocY() - docElem.offsetTop }
	})


	/**
	 * Creates a scroller from the provided container element (e.g., a DIV)
	 *
	 * @param {scrollContainer} The vertical position within the document.
	 * @param {defaultDuration} Optionally a value for default duration, used for each scroll method by default.
	 *        Ignored if 0 or null or undefined.
	 * @param {edgeOffset} Optionally a value for the edge offset, used by each scroll method by default. 
	 *        Ignored if null or undefined.
	 * @returns A scroller object, similar to `zenscroll` but controlling the provided element.
	 */
	zenscroll.createScroller = function (scrollContainer, defaultDuration, edgeOffset) {
		return makeScroller({
			body: scrollContainer,
			toY: function (y) { scrollContainer.scrollTop = y },
			getY: function () { return scrollContainer.scrollTop },
			getHeight: function () { return Math.min(scrollContainer.clientHeight, window.innerHeight || docElem.clientHeight) },
			getTopOf: function (elem) { return elem.offsetTop }
		}, defaultDuration, edgeOffset)
	}


	// Automatic link-smoothing on achors
	// Exclude IE8- or when native is enabled or Zenscroll auto- is disabled
	if ("addEventListener" in window && !window.noZensmooth && !isNativeSmoothScrollEnabledOn(document.body)) {

		var isHistorySupported = "history" in window && "pushState" in history
		var isScrollRestorationSupported = isHistorySupported && "scrollRestoration" in history

		// On first load & refresh make sure the browser restores the position first
		if (isScrollRestorationSupported) {
			history.scrollRestoration = "auto"
		}

		window.addEventListener("load", function () {

			if (isScrollRestorationSupported) {
				// Set it to manual
				setTimeout(function () { history.scrollRestoration = "manual" }, 9)
				window.addEventListener("popstate", function (event) {
					if (event.state && "zenscrollY" in event.state) {
						zenscroll.toY(event.state.zenscrollY)
					}
				}, false)
			}

			// Add edge offset on first load if necessary
			// This may not work on IE (or older computer?) as it requires more timeout, around 100 ms
			if (window.location.hash) {
				setTimeout(function () {
					// Adjustment is only needed if there is an edge offset:
					var edgeOffset = zenscroll.setup().edgeOffset
					if (edgeOffset) {
						var targetElem = document.getElementById(window.location.href.split("#")[1])
						if (targetElem) {
							var targetY = Math.max(0, zenscroll.getTopOf(targetElem) - edgeOffset)
							var diff = zenscroll.getY() - targetY
							// Only do the adjustment if the browser is very close to the element:
							if (0 <= diff && diff < 9 ) {
								window.scrollTo(0, targetY)
							}
						}
					}
				}, 9)
			}

		}, false)

		// Handling clicks on anchors
		var RE_noZensmooth = new RegExp("(^|\\s)noZensmooth(\\s|$)")
		window.addEventListener("click", function (event) {
			var anchor = event.target
			while (anchor && anchor.tagName !== "A") {
				anchor = anchor.parentNode
			}
			// Let the browser handle the click if it wasn't with the primary button, or with some modifier keys:
			if (!anchor || event.which !== 1 || event.shiftKey || event.metaKey || event.ctrlKey || event.altKey) {
				return
			}
			// Save the current scrolling position so it can be used for scroll restoration:
			if (isScrollRestorationSupported) {
				var historyState = history.state && typeof history.state === "object" ? history.state : {}
				historyState.zenscrollY = zenscroll.getY()
				try {
					history.replaceState(historyState, "")
				} catch (e) {
					// Avoid the Chrome Security exception on file protocol, e.g., file://index.html
				}
			}
			// Find the referenced ID:
			var href = anchor.getAttribute("href") || ""
			if (href.indexOf("#") === 0 && !RE_noZensmooth.test(anchor.className)) {
				var targetY = 0
				var targetElem = document.getElementById(href.substring(1))
				if (href !== "#") {
					if (!targetElem) {
						// Let the browser handle the click if the target ID is not found.
						return
					}
					targetY = zenscroll.getTopOf(targetElem)
				}
				event.preventDefault()
				// By default trigger the browser's `hashchange` event...
				var onDone = function () { window.location = href }
				// ...unless there is an edge offset specified
				var edgeOffset = zenscroll.setup().edgeOffset
				if (edgeOffset) {
					targetY = Math.max(0, targetY - edgeOffset)
					if (isHistorySupported) {
						onDone = function () { history.pushState({}, "", href) }
					}
				}
				zenscroll.toY(targetY, null, onDone)
			}
		}, false)

	}


	return zenscroll


}));


/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(98);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(4)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(100);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(4)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(102);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(4)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(103);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(4)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(104);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(4)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(105);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(4)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(106);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(4)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(108);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(4)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(109);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(4)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(110);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(4)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(111);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(4)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(113);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(4)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// Module
exports.push([module.i, ".Navbar__nav {\n  position: fixed;\n  z-index: 2;\n  display: flex;\n  width: 100%;\n  padding: 30px 0;\n  background-color: #ffffff;\n  box-shadow: 0 0 30px 0 #868686;\n  flex-flow: row wrap;\n  justify-content: center; }\n  .Navbar__nav .Navbar__content {\n    position: relative;\n    display: flex;\n    width: 1000px;\n    padding: 0 15px;\n    align-items: center;\n    flex-flow: row wrap;\n    justify-content: space-between; }\n", "",{"version":3,"sources":["Navbar.scss"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,UAAU;EACV,aAAa;EACb,WAAW;EACX,eAAe;EACf,yBAAyB;EACzB,8BAA8B;EAC9B,mBAAmB;EACnB,uBAAuB,EAAE;EACzB;IACE,kBAAkB;IAClB,aAAa;IACb,aAAa;IACb,eAAe;IACf,mBAAmB;IACnB,mBAAmB;IACnB,8BAA8B,EAAE","file":"Navbar.scss","sourcesContent":[".nav {\n  position: fixed;\n  z-index: 2;\n  display: flex;\n  width: 100%;\n  padding: 30px 0;\n  background-color: #ffffff;\n  box-shadow: 0 0 30px 0 #868686;\n  flex-flow: row wrap;\n  justify-content: center; }\n  .nav .content {\n    position: relative;\n    display: flex;\n    width: 1000px;\n    padding: 0 15px;\n    align-items: center;\n    flex-flow: row wrap;\n    justify-content: space-between; }\n"]}]);
// Exports
exports.locals = {
	"nav": "Navbar__nav",
	"content": "Navbar__content"
};

/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// Module
exports.push([module.i, "@media (min-width: 1000px) {\n  .NavbarMenu__nav-menu .NavbarMenu__content {\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: flex-end; } }\n\n@media (max-width: 1000px) {\n  .NavbarMenu__nav-menu {\n    position: absolute;\n    top: 95px;\n    left: 0;\n    width: 100%;\n    margin: 0;\n    padding: 0; }\n    .NavbarMenu__nav-menu .NavbarMenu__content {\n      display: flex;\n      overflow: hidden;\n      flex-direction: column;\n      margin: 0 15px;\n      transition: max-height 0.3s ease-out 0s;\n      background-color: #ffffff;\n      box-shadow: 0 10px 15px 0 #868686; }\n      .NavbarMenu__nav-menu .NavbarMenu__content.NavbarMenu__is-visible {\n        max-height: 200px;\n        padding: 3px 12px; }\n      .NavbarMenu__nav-menu .NavbarMenu__content.NavbarMenu__is-invisible {\n        max-height: 0;\n        padding: 0 12px; } }\n", "",{"version":3,"sources":["NavbarMenu.scss"],"names":[],"mappings":"AAAA;EACE;IACE,aAAa;IACb,mBAAmB;IACnB,yBAAyB,EAAE,EAAE;;AAEjC;EACE;IACE,kBAAkB;IAClB,SAAS;IACT,OAAO;IACP,WAAW;IACX,SAAS;IACT,UAAU,EAAE;IACZ;MACE,aAAa;MACb,gBAAgB;MAChB,sBAAsB;MACtB,cAAc;MACd,uCAAuC;MACvC,yBAAyB;MACzB,iCAAiC,EAAE;MACnC;QACE,iBAAiB;QACjB,iBAAiB,EAAE;MACrB;QACE,aAAa;QACb,eAAe,EAAE,EAAE","file":"NavbarMenu.scss","sourcesContent":["@media (min-width: 1000px) {\n  .nav-menu .content {\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: flex-end; } }\n\n@media (max-width: 1000px) {\n  .nav-menu {\n    position: absolute;\n    top: 95px;\n    left: 0;\n    width: 100%;\n    margin: 0;\n    padding: 0; }\n    .nav-menu .content {\n      display: flex;\n      overflow: hidden;\n      flex-direction: column;\n      margin: 0 15px;\n      transition: max-height 0.3s ease-out 0s;\n      background-color: #ffffff;\n      box-shadow: 0 10px 15px 0 #868686; }\n      .nav-menu .content.is-visible {\n        max-height: 200px;\n        padding: 3px 12px; }\n      .nav-menu .content.is-invisible {\n        max-height: 0;\n        padding: 0 12px; } }\n"]}]);
// Exports
exports.locals = {
	"nav-menu": "NavbarMenu__nav-menu",
	"content": "NavbarMenu__content",
	"is-visible": "NavbarMenu__is-visible",
	"is-invisible": "NavbarMenu__is-invisible"
};

/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// Module
exports.push([module.i, "@media (min-width: 1000px) {\n  .NavbarItem__nav-item {\n    position: relative; }\n    .NavbarItem__nav-item:hover a, .NavbarItem__nav-item.NavbarItem__is-active a {\n      color: #754ef9; }\n      .NavbarItem__nav-item:hover a::before, .NavbarItem__nav-item.NavbarItem__is-active a::before {\n        height: 45px; }\n    .NavbarItem__nav-item:not(:first-child) {\n      margin-left: 30px; }\n    .NavbarItem__nav-item a::before {\n      position: absolute;\n      top: -50px;\n      left: 50%;\n      width: 3px;\n      height: 0;\n      content: '';\n      transition: height 0.3s ease-out 0s;\n      background-color: #754ef9; } }\n\n@media (max-width: 1000px) {\n  .NavbarItem__nav-item {\n    margin: 4px 0; }\n    .NavbarItem__nav-item.NavbarItem__is-active a {\n      color: #754ef9; } }\n\n.NavbarItem__nav-item .NavbarItem__content {\n  text-transform: uppercase;\n  color: #8a8fa3;\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: 500; }\n", "",{"version":3,"sources":["NavbarItem.scss"],"names":[],"mappings":"AAAA;EACE;IACE,kBAAkB,EAAE;IACpB;MACE,cAAc,EAAE;MAChB;QACE,YAAY,EAAE;IAClB;MACE,iBAAiB,EAAE;IACrB;MACE,kBAAkB;MAClB,UAAU;MACV,SAAS;MACT,UAAU;MACV,SAAS;MACT,WAAW;MACX,mCAAmC;MACnC,yBAAyB,EAAE,EAAE;;AAEnC;EACE;IACE,aAAa,EAAE;IACf;MACE,cAAc,EAAE,EAAE;;AAExB;EACE,yBAAyB;EACzB,cAAc;EACd,oBAAoB;EACpB,kBAAkB;EAClB,gBAAgB,EAAE","file":"NavbarItem.scss","sourcesContent":["@media (min-width: 1000px) {\n  .nav-item {\n    position: relative; }\n    .nav-item:hover a, .nav-item.is-active a {\n      color: #754ef9; }\n      .nav-item:hover a::before, .nav-item.is-active a::before {\n        height: 45px; }\n    .nav-item:not(:first-child) {\n      margin-left: 30px; }\n    .nav-item a::before {\n      position: absolute;\n      top: -50px;\n      left: 50%;\n      width: 3px;\n      height: 0;\n      content: '';\n      transition: height 0.3s ease-out 0s;\n      background-color: #754ef9; } }\n\n@media (max-width: 1000px) {\n  .nav-item {\n    margin: 4px 0; }\n    .nav-item.is-active a {\n      color: #754ef9; } }\n\n.nav-item .content {\n  text-transform: uppercase;\n  color: #8a8fa3;\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: 500; }\n"]}]);
// Exports
exports.locals = {
	"nav-item": "NavbarItem__nav-item",
	"is-active": "NavbarItem__is-active",
	"content": "NavbarItem__content"
};

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// Module
exports.push([module.i, ".HamburgerButton__hamburger-btn {\n  width: 35px;\n  height: 35px; }\n  @media (min-width: 1000px) {\n    .HamburgerButton__hamburger-btn {\n      display: none; } }\n  @media (max-width: 1000px) {\n    .HamburgerButton__hamburger-btn {\n      display: flex; } }\n", "",{"version":3,"sources":["HamburgerButton.scss"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,YAAY,EAAE;EACd;IACE;MACE,aAAa,EAAE,EAAE;EACrB;IACE;MACE,aAAa,EAAE,EAAE","file":"HamburgerButton.scss","sourcesContent":[".hamburger-btn {\n  width: 35px;\n  height: 35px; }\n  @media (min-width: 1000px) {\n    .hamburger-btn {\n      display: none; } }\n  @media (max-width: 1000px) {\n    .hamburger-btn {\n      display: flex; } }\n"]}]);
// Exports
exports.locals = {
	"hamburger-btn": "HamburgerButton__hamburger-btn"
};

/***/ }),

/***/ 99:
/***/ (function(module, exports) {



/***/ })

}]);
//# sourceMappingURL=1.4230bdf7ae1afa78d6bd.js.map