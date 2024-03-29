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
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { PropertyPaneDynamicField } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import * as strings from 'TargetWebPartStrings';
import Target from './components/Target';
var TargetWebPart = /** @class */ (function (_super) {
    __extends(TargetWebPart, _super);
    function TargetWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TargetWebPart.prototype.render = function () {
        var element = React.createElement(Target, {
            firstName: this.properties.firstName,
            lastName: this.properties.lastName,
            preferences: this.properties.preferences,
            userName: this.properties.userName
        });
        ReactDom.render(element, this.domElement);
    };
    TargetWebPart.prototype.onDispose = function () {
        ReactDom.unmountComponentAtNode(this.domElement);
    };
    Object.defineProperty(TargetWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: false,
        configurable: true
    });
    TargetWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription,
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                PropertyPaneDynamicField("firstName", {
                                    label: strings.FirstName,
                                }),
                                PropertyPaneDynamicField("lastName", {
                                    label: strings.LastName,
                                }),
                            ],
                        },
                        {
                            groupName: strings.ComplexGroupName,
                            groupFields: [
                                PropertyPaneDynamicField("preferences", {
                                    label: strings.Preferences,
                                }),
                            ],
                        },
                        {
                            groupName: strings.PageEnvironmentGroupName,
                            groupFields: [
                                PropertyPaneDynamicField("userName", {
                                    label: strings.UserName,
                                }),
                            ],
                        },
                    ],
                },
            ],
        };
    };
    return TargetWebPart;
}(BaseClientSideWebPart));
export default TargetWebPart;
//# sourceMappingURL=TargetWebPart.js.map