"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Button.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Button = function Button(_ref) {
  var text = _ref.text,
    url = _ref.url,
    ariaLabel = _ref.ariaLabel;
  if (url) {
    return /*#__PURE__*/_react.default.createElement("a", {
      href: url,
      className: "mc-button mc-button--link",
      "aria-label": ariaLabel
    }, text);
  }
  return /*#__PURE__*/_react.default.createElement("button", {
    className: "mc-button"
  }, text);
};
var _default = Button;
exports.default = _default;