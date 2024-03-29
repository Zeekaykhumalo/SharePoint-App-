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
import styles from './Source.module.scss';
import { Checkbox, DatePicker, DefaultButton, Dropdown, TextField, Toggle, } from '@fluentui/react';
import * as strings from 'SourceWebPartStrings';
// import * as $ from 'jquery';
// import * as jQuery from 'jquery';
// import { useEffect } from 'react';
// import { HttpClient, HttpClientResponse } from '@microsoft/sp-http';
// import { useState, useEffect } from 'react';
// import { useEffect } from 'react';
/*import {
    IHttpClientOptions,
    HttpClient,
    // ISPLists,
    HttpClientResponse,
} from '@microsoft/sp-http';*/
// import axios from 'axios';
// import { useEffect } from 'react';
// import { escape } from '@microsoft/sp-lodash-subset';
//import library
// import {
// 	PrimaryButton,
// 	Stack,
// 	MessageBar,
// 	MessageBarType,
// } from 'office-ui-fabric-react';
import { sp,
// DateTimeFieldFormatType,
 } from '@pnp/sp/presets/all';
//create state
// export interface ISampleDemoState {
// 	showmessageBar:boolean; //to show/hide message bar on success
// 	message:string; // what message to be displayed in message bar
// 	itemID:number; // current item ID after create new item is clicked
// }
var Source = /** @class */ (function (_super) {
    __extends(Source, _super);
    function Source(props) {
        var _this = _super.call(this, props) || this;
        /*public getLists(): Promise<any[]> {
            return sp.web.lists.get();
        }
    
        // method to use pnp objects and get item by id, using item ID set from createNewItem method.
        private async getItem(): Promise<void> {
            // get a specific item by id
            // Lists/wlgquiz/AllItems.aspx
            const item: any = await sp.web.lists
                .getByTitle('wlgquiz')
                .items.getById(this.state.itemID)
                .get();
            console.log(item);
            this.setState({
                showmessageBar: true,
                message: 'Last Item Created Title:--> ' + item.Title,
            });
        }*/
        //
        _this._onColorChanged = function (color) {
            var preferences = _this.state.preferences;
            preferences.color = color;
            _this._updatePreferences(preferences);
        };
        _this._onDateChanged = function (date) {
            var preferences = _this.state.preferences;
            preferences.date = date;
            _this._updatePreferences(preferences);
        };
        _this._onLikeChanged = function (like) {
            var preferences = _this.state.preferences;
            preferences.like = like;
            _this._updatePreferences(preferences);
        };
        /*
      Method to update the preferences in the state and to call the dynamic data source manager to update the value
      */
        _this._updatePreferences = function (preferences) {
            _this.setState({
                preferences: preferences,
            });
            _this.props.onPreferencesChanged(preferences);
        };
        _this.state = {
            preferences: {},
            showmessageBar: false,
            message: '',
            description: '',
            itemID: 0,
            questions: [
                {
                    id: 'question-1',
                    questionText: 'What is the capital city of Hawaii?',
                    questionType: 'text',
                    possibleAnswers: ['Hana', 'Pahoa', 'Honolulu', 'Kapolei'],
                    value: null,
                },
                {
                    id: 'question-2',
                    questionText: 'What does DVD stand for?',
                    questionType: 'check',
                    possibleAnswers: [
                        'Dare Virtual Disc',
                        'Disc Vast Density',
                        'Digital Video Drill',
                        'Digital Video Disc',
                        'Digital Versatile Disc',
                    ],
                    value: null,
                },
                {
                    id: 'question-3',
                    questionText: 'What is your favourite meal?',
                    questionType: 'text',
                    possibleAnswers: null,
                    value: null,
                },
                {
                    id: 'question-4',
                    questionText: 'Where are the Microsoft headquarters?',
                    questionType: 'dropdown',
                    possibleAnswers: [
                        { id: 'question-4-a', answerText: 'Palo Alto' },
                        { id: 'question-4-b', answerText: 'Seattle' },
                        { id: 'question-4-c', answerText: 'Washington' },
                        { id: 'question-4-d', answerText: 'Somewhere underwater' },
                    ],
                    value: null,
                },
                {
                    id: 'question-5',
                    questionText: 'Who invented the computer mouse?',
                    questionType: 'radio',
                    possibleAnswers: [
                        'Tom, the cat',
                        'Albert Einstein',
                        'Douglas Engelbart',
                        'Bart Simpson',
                    ],
                    value: null,
                },
            ],
        };
        sp.setup({
            spfxContext: _this.context,
            sp: {
                headers: {
                    Accept: 'application/json;odata=verbose',
                },
                baseUrl: 'https://tranquilentropy.sharepoint.com',
            },
        });
        return _this;
    }
    Source.prototype.render = function () {
        var _this = this;
        var _a = this.props, onFirstNameChanged = _a.onFirstNameChanged, onLastNameChanged = _a.onLastNameChanged;
        var quizQuestions = [];
        for (var _i = 0, _b = this.state.questions; _i < _b.length; _i++) {
            var questionArrayElement = _b[_i];
            switch (questionArrayElement === null || questionArrayElement === void 0 ? void 0 : questionArrayElement.questionType) {
                case 'textfield':
                    quizQuestions.push(React.createElement("div", null,
                        React.createElement(TextField, { id: questionArrayElement === null || questionArrayElement === void 0 ? void 0 : questionArrayElement.id, label: questionArrayElement.questionText })));
                    break;
                case 'checkbox':
                    quizQuestions.push(React.createElement("div", null,
                        React.createElement(Checkbox, { id: questionArrayElement === null || questionArrayElement === void 0 ? void 0 : questionArrayElement.id, label: questionArrayElement.questionText })));
                    break;
                case 'radiobox':
                    quizQuestions.push(React.createElement("div", null,
                        React.createElement(Toggle, { id: questionArrayElement === null || questionArrayElement === void 0 ? void 0 : questionArrayElement.id, label: questionArrayElement.questionText, onChange: function (e, checked) { return _this._onLikeChanged(checked); } })));
                    break;
                case 'dropdown':
                    quizQuestions.push(React.createElement("div", null,
                        React.createElement(Dropdown, { id: questionArrayElement === null || questionArrayElement === void 0 ? void 0 : questionArrayElement.id, label: questionArrayElement.questionText, options: [], onChange: function (ev, option) { return _this._onColorChanged(option === null || option === void 0 ? void 0 : option.text); } })));
                    break;
                default:
                    break;
            }
        }
        // checkbox
        // value={value: false}}
        // dropdown
        // options={[
        // 	{ key: strings.Red.toLowerCase(), text: strings.Red },
        // 	{ key: strings.Green.toLowerCase(), text: strings.Green },
        // 	{ key: strings.Blue.toLowerCase(), text: strings.Blue },
        // ]}
        // onChange={(ev, option) => this._onColorChanged(option?.text)}
        return (React.createElement("section", { className: styles.source },
            React.createElement("div", { className: styles.welcome },
                React.createElement("h2", null, strings.Title)),
            React.createElement("div", null,
                React.createElement(TextField, { label: strings.FirstName, onChange: function (ev, newValue) { return onFirstNameChanged(newValue); } }),
                React.createElement(TextField, { label: strings.LastName, onChange: function (ev, newValue) { return onLastNameChanged(newValue); } })),
            React.createElement("div", null,
                React.createElement(Dropdown, { label: strings.Color, options: [
                        { key: strings.Red.toLowerCase(), text: strings.Red },
                        { key: strings.Green.toLowerCase(), text: strings.Green },
                        { key: strings.Blue.toLowerCase(), text: strings.Blue },
                    ], onChange: function (ev, option) { return _this._onColorChanged(option === null || option === void 0 ? void 0 : option.text); } }),
                React.createElement(DatePicker, { label: strings.Date, onSelectDate: function (date) { return _this._onDateChanged(date); } }),
                React.createElement(Toggle, { label: strings.Like, onChange: function (e, checked) { return _this._onLikeChanged(checked); } })),
            React.createElement("div", { style: { marginTop: '50px' } }, quizQuestions),
            React.createElement("div", null,
                React.createElement(DefaultButton, { onClick: function () { return _this._createNewItem(); } }, "Submit Button"))));
    };
    Source.prototype._getTime = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, (fetch(encodeURI('https://zagari.azurewebsites.net/api/httpTrigger1?name=azure'), {
                        method: 'GET',
                        mode: 'cors',
                        headers: {
                            'Content-Type': 'application/json',
                            // 'Content-Type': 'text/plain;charset=UTF-8'
                        },
                    })
                        .then(function (response) { return response.json(); })
                        // .then(response => response.text())
                        .then(function (data) {
                        console.log(data);
                        return data;
                    })
                        .catch(function (error) {
                        console.error('Error:', error);
                    }))]; //.finally();
            });
        });
    };
    // private _onCheckboxChanged = (like: boolean | undefined): void => {
    // 	const { preferences } = this.state;
    // 	preferences!.like = like;
    // 	this._updatePreferences(preferences!);
    // };
    // method to use pnp objects and create new item
    Source.prototype._createNewItem = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                // this.getLists()
                // 	.then((lst) => {
                // 		console.log('lists: ', lst);
                // 	})
                // 	.catch((err) => {
                // 		console.error(err);
                // 	});
                this._getTime()
                    .then(function (timeData) { return __awaiter(_this, void 0, void 0, function () {
                    var iar;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                console.log('>>>>>>>> timeData: ', timeData);
                                return [4 /*yield*/, sp.web.lists
                                        .getByTitle('wlg-quiz')
                                        .items.add({
                                        Title: 'Title ' + new Date(),
                                        // Description: 'This is item created using PnP JS',
                                        candidate: 'Jane Doe',
                                        question: 'What is your favourite meal?',
                                        response: 'Spinach',
                                        apiresults: 'valid',
                                    })];
                            case 1:
                                iar = _a.sent();
                                console.log('########### ', iar);
                                this.setState({
                                    showmessageBar: true,
                                    message: 'Item Added Sucessfully',
                                    itemID: iar.data.Id,
                                });
                                return [2 /*return*/, timeData];
                        }
                    });
                }); })
                    .catch(function (err) {
                    console.error(err);
                    return err;
                });
                return [2 /*return*/];
            });
        });
    };
    return Source;
}(React.Component));
export default Source;
//# sourceMappingURL=Source.js.map