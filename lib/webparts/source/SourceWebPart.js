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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
// import {
// 	IPropertyPaneConfiguration,
// 	PropertyPaneTextField,
// } from '@microsoft/sp-property-pane';
// import { HttpClient, HttpClientResponse } from '@microsoft/sp-http';
/*import {
    IHttpClientOptions,
    HttpClient,
    // ISPLists,
    HttpClientResponse,
} from '@microsoft/sp-http';*/
// import {
// 	HttpClient,
// 	// HttpClientConfiguration,
// 	HttpClientResponse,
// 	// ODataVersion,
// 	// IHttpClientConfiguration
// } from '@microsoft/sp-http';
import * as strings from 'SourceWebPartStrings';
import Source from './components/Source';
import Constants from '../../common/Constants';
var SourceWebPart = /** @class */ (function (_super) {
    __extends(SourceWebPart, _super);
    function SourceWebPart() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // private _getTime(): Promise<ISPLists> {
        /*private _getTime(): Promise<any> {
            const myOptions: IHttpClientOptions = {
                headers: new Headers(),
                method: 'GET',
                mode: 'no-cors',
                // defaultSameOriginCredentials: true,
            };
    
            return this.context.spHttpClient
                .get(
                    `https://timeapi.io/api/Time/current/zone?timeZone=Africa/Johannesburg`,
                    HttpClient.configurations.v1,
                    myOptions
                )
                .then((response: HttpClientResponse) => {
                    return response.json();
                })
                .catch((err) => {
                    console.error(err);
                });
        }*/
        /*private _getTime(): Promise<any> {
            const myOptions: IHttpClientOptions = {
                headers: new Headers(),
                method: 'GET',
                mode: 'no-cors',
                // defaultSameOriginCredentials: true,
            };
    
            return (
                this.context.httpClient
                // this.context.httpClient
                // this.context.spHttpClient
                    .get(
                        `https://timeapi.io/api/Time/current/zone?timeZone=Africa/Johannesburg`,
                        // HttpClient.configurations.v1
                        HttpClient.configurations.v1,
                        myOptions
                    )
                    // .then((response: HttpClientResponse) => response.text())
                    .then((response: HttpClientResponse) => response.json())
                    // .then((response: HttpClientResponse) => response.json())
                    .then((textResponse) => {
                        console.log('TimeIO res: ', textResponse);
                        return textResponse;
                    })
            ); // as Promise<any>;
        }*/
        _this._firstNameChanged = function (firstName) {
            _this._firstName = firstName;
            // notify subscribers that the first name has changed
            _this.context.dynamicDataSourceManager.notifyPropertyChanged(Constants.FirstNamePropertyId);
        };
        _this._lastNameChanged = function (lastName) {
            _this._lastName = lastName;
            // notify subscribers that the last name has changed
            _this.context.dynamicDataSourceManager.notifyPropertyChanged(Constants.LastNamePropertyId);
        };
        _this._preferencesChanged = function (preferences) {
            _this._preferences = preferences;
            // notify subscribers that the last name has changed
            _this.context.dynamicDataSourceManager.notifyPropertyChanged(Constants.PreferencesPropertyId);
        };
        return _this;
        /*
      End of IDynamicDataCallables implementation
      */
    }
    SourceWebPart.prototype.onInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.context.dynamicDataSourceManager.initializeSource(this);
                return [2 /*return*/];
            });
        });
    };
    SourceWebPart.prototype.render = function () {
        var element = React.createElement(Source, {
            onFirstNameChanged: this._firstNameChanged,
            onLastNameChanged: this._lastNameChanged,
            onPreferencesChanged: this._preferencesChanged,
            // getTime: this._getTime,
            context: this.context,
            httpClient: this.context.httpClient,
            description: '',
            spcontext: this.context,
            // httpClient: this.context.httpClient,
            // onSubmitClick: this._onSubmitClick,
        });
        ReactDom.render(element, this.domElement);
        /*if (!this.renderedOnce) {
            this._getTime()
                .then((response) => {
                    const element: React.ReactElement<ISourceProps> = React.createElement(
                        Source,
                        {
                            onFirstNameChanged: this._firstNameChanged,
                            onLastNameChanged: this._lastNameChanged,
                            onPreferencesChanged: this._preferencesChanged,
                            getTime: this._getTime,
                            // time: response,
                            httpClient: this.context.httpClient,
                            // onSubmitClick: this._onSubmitClick,
                        }
                    );

                    ReactDom.render(element, this.domElement);
                })
                .catch((err: any) => {
                    console.error(err);
                });
        }*/
    };
    // private _onSubmitClick = (): void => {
    // 	this._preferences = preferences;
    // 	// notify subscribers that the last name has changed
    // 	this.context.dynamicDataSourceManager.notifyPropertyChanged(
    // 		Constants.PreferencesPropertyId
    // 	);
    // };
    SourceWebPart.prototype.onDispose = function () {
        ReactDom.unmountComponentAtNode(this.domElement);
    };
    Object.defineProperty(SourceWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: false,
        configurable: true
    });
    /*
  IDynamicDataCallables implementation
  */
    SourceWebPart.prototype.getPropertyDefinitions = function () {
        return [
            {
                id: Constants.FirstNamePropertyId,
                title: strings.FirstName,
            },
            {
                id: Constants.LastNamePropertyId,
                title: strings.LastName,
            },
            {
                id: Constants.PreferencesPropertyId,
                title: strings.Preferences,
            },
        ];
    };
    SourceWebPart.prototype.getPropertyValue = function (propertyId) {
        switch (propertyId) {
            case Constants.FirstNamePropertyId:
                return this._firstName;
            case Constants.LastNamePropertyId:
                return this._lastName;
            case Constants.PreferencesPropertyId:
                return this._preferences;
        }
        throw new Error(strings.BadPropertyId);
    };
    return SourceWebPart;
}(BaseClientSideWebPart));
export default SourceWebPart;
//# sourceMappingURL=SourceWebPart.js.map