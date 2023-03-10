"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Hero.css");
var _Image = _interopRequireDefault(require("../../modules/Image"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Hero = function Hero(_ref) {
  var headline = _ref.headline,
    description = _ref.description,
    image = _ref.image;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "mc-hero"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "mc-hero__headline"
  }, headline), /*#__PURE__*/_react.default.createElement("div", {
    className: "mc-hero__description"
  }, description), /*#__PURE__*/_react.default.createElement(_Image.default, {
    url: image.url,
    altText: image.altText
  }));
};
var _default = Hero;
exports.default = _default;