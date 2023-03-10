"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Image.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Hero = function Hero(_ref) {
  var url = _ref.url,
    altText = _ref.altText;
  return /*#__PURE__*/_react.default.createElement("img", {
    className: "mc-hero",
    src: url,
    alt: altText
  });
};
var _default = Hero;
exports.default = _default;