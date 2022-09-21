"use strict";
(() => {
var exports = {};
exports.id = 347;
exports.ids = [347];
exports.modules = {

/***/ 5879:
/***/ ((module) => {

module.exports = require("next-sanity");

/***/ }),

/***/ 5087:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5879);
/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_sanity__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sanity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9555);
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


const query = next_sanity__WEBPACK_IMPORTED_MODULE_0__.groq`
    *[_type == "experience"] {
      ...,
      technologies[]->
    }
`;
async function handler(req, res) {
    const experiences = await _sanity__WEBPACK_IMPORTED_MODULE_1__/* .sanityClient.fetch */ .i3.fetch(query);
    res.status(200).json({
        experiences
    });
};


/***/ }),

/***/ 9555:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "i3": () => (/* binding */ sanityClient)
});

// UNUSED EXPORTS: config, urlFor

// EXTERNAL MODULE: external "next-sanity"
var external_next_sanity_ = __webpack_require__(5879);
;// CONCATENATED MODULE: external "@sanity/image-url"
const image_url_namespaceObject = require("@sanity/image-url");
;// CONCATENATED MODULE: ./sanity.ts


const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: "ltuexkre",
    apiVersion: "2021-03-25",
    useCdn: "production" === "production"
};
const sanityClient = (0,external_next_sanity_.createClient)(config);
const urlFor = (source)=>createImageUrlBuilder(config).image(source);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5087));
module.exports = __webpack_exports__;

})();