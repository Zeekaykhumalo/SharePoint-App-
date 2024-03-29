var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import styles from './Target.module.scss';
import * as strings from 'TargetWebPartStrings';
var Target = /** @class */ (function (_super) {
    __extends(Target, _super);
    function Target() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Target.prototype.render = function () {
        var _a = this.props, firstName = _a.firstName, lastName = _a.lastName, preferences = _a.preferences, userName = _a.userName;
        // Get the value from the dynamic properties
        var firstNameValue = firstName === null || firstName === void 0 ? void 0 : firstName.tryGetValue();
        var lastNameValue = lastName === null || lastName === void 0 ? void 0 : lastName.tryGetValue();
        var preferencesValue = preferences === null || preferences === void 0 ? void 0 : preferences.tryGetValue();
        var userNameValue = userName === null || userName === void 0 ? void 0 : userName.tryGetValue();
        return (React.createElement("section", { className: styles.target },
            React.createElement("div", { className: styles.welcome },
                React.createElement("h2", null, strings.Title)),
            React.createElement("div", null,
                React.createElement("h4", null, strings.BasicGroupName),
                React.createElement("div", null,
                    React.createElement("b", null, strings.FirstName),
                    ": ",
                    (firstNameValue && firstNameValue.length > 0) ? firstNameValue : strings.NotSpecified),
                React.createElement("div", null,
                    React.createElement("b", null, strings.LastName),
                    ": ",
                    (lastNameValue && lastNameValue.length > 0) ? lastNameValue : strings.NotSpecified)),
            React.createElement("div", null,
                React.createElement("h4", null, strings.ComplexGroupName),
                React.createElement("div", null,
                    React.createElement("b", null, strings.Color),
                    ": ",
                    (preferencesValue && preferencesValue.color && preferencesValue.color.length > 0) ? preferencesValue.color : strings.NotSpecified),
                React.createElement("div", null,
                    React.createElement("b", null, strings.Date),
                    ": ",
                    (preferencesValue && preferencesValue.date && preferencesValue.date !== null) ? preferencesValue.date.toLocaleDateString() : strings.NotSpecified),
                React.createElement("div", null,
                    React.createElement("b", null, strings.Like),
                    ": ",
                    (preferencesValue && preferencesValue.like !== undefined) ? (preferencesValue.like === true ? strings.Yes : strings.No) : strings.NotSpecified)),
            React.createElement("div", null,
                React.createElement("h4", null, strings.PageEnvironmentGroupName),
                React.createElement("div", null,
                    React.createElement("b", null, strings.UserName),
                    ": ",
                    (userNameValue && userNameValue.length > 0) ? userNameValue : strings.NotSpecified))));
    };
    return Target;
}(React.Component));
export default Target;
//# sourceMappingURL=Target.js.map