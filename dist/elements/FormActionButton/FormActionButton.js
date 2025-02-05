"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _plus = require("../../images/plus.svg");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/*
Copyright 2019 Iguazio Systems Ltd.

Licensed under the Apache License, Version 2.0 (the "License") with
an addition restriction as set forth herein. You may not use this
file except in compliance with the License. You may obtain a copy of
the License at http://www.apache.org/licenses/LICENSE-2.0.

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
implied. See the License for the specific language governing
permissions and limitations under the License.

In addition, you may not use the software for any purposes that are
illegal under applicable law, and the grant of the foregoing license
under the Apache 2.0 license is conditioned upon your compliance with
such restriction.
*/

var FormActionButton = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var disabled = _ref.disabled,
    fields = _ref.fields,
    fieldsPath = _ref.fieldsPath,
    hidden = _ref.hidden,
    label = _ref.label,
    _onClick = _ref.onClick;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [!hidden && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "form-table__row form-table__action-row no-hover",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
        onClick: function onClick(event) {
          !disabled && _onClick(event, fields, fieldsPath);
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_plus.ReactComponent, {}), label]
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      ref: ref
    })]
  });
});
FormActionButton.defaultProps = {
  disabled: false,
  label: 'Add new item'
};
FormActionButton.propTypes = {
  disabled: _propTypes.default.bool,
  fields: _propTypes.default.shape({}).isRequired,
  fieldsPath: _propTypes.default.string.isRequired,
  label: _propTypes.default.string,
  onClick: _propTypes.default.func.isRequired
};
var _default = FormActionButton;
exports.default = _default;