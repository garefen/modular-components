"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Button = _interopRequireDefault(require("../../modules/Button/Button"));
require("./Navbar.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Navbar = function Navbar(_ref) {
  var logo = _ref.logo,
    ctas = _ref.ctas;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "mc-navbar"
  }, logo, ctas.map(function (cta) {
    return /*#__PURE__*/_react.default.createElement(_Button.default, {
      text: cta.text,
      url: cta.url,
      ariaLabel: cta.ariaLabel
    });
  }));
};
var _default = Navbar;
exports.default = _default;