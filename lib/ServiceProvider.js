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
/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpClient,
// HttpClientResponse,
 } from '@microsoft/sp-http';
// import { Constants } from './webparts/Constant';
var ServiceProvider = /** @class */ (function () {
    function ServiceProvider(context) {
        this.httpClientOptionsForGlobal = {
            // 93.119.11.74
            headers: new Headers({
                'Accept': 'application/json',
                'Accept-Encoding': 'gzip, deflate, br, zstd',
                'Accept-Language': 'en-US,en;q=0.9,en-ZA;q=0.8,es;q=0.7',
                'Connection': 'keep-alive',
                'Cache-Control': 'no-cache',
                'Dnt': '1',
                'Host': 'timeapi.io',
                'x-rapidapi-host': 'timeapi.io',
                'Referer': 'https://tranquilentropy.sharepoint.com/',
                'Sec-Ch-Ua': 'Google Chrome";v="123", "Not:A-Brand";v="8", "Chromium";v="123',
                'Sec-Ch-Ua-Mobile': '?0',
                'Sec-Ch-Ua-Platform': 'Windows',
                'Sec-Fetch-Dest': 'script',
                'Sec-Fetch-Mode': 'cors',
                'Sec-Fetch-Site': 'cross-site',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36',
                'Origin': 'https://tranquilentropy.sharepoint.com'
                // 'x-rapidapi-key': '<REPLACE WHIT WITH YOUR APIKEY>',
            }),
            method: 'GET',
            mode: 'cors',
        };
        this.wpcontext = context;
    }
    ServiceProvider.prototype.getJhbTime = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, responeJson;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.wpcontext.httpClient.get(
                        // 'https://timeapi.io/api/Time/current/zone?timeZone=Africa/Johannesburg',
                        'https://timeapi.io/api/TimeZone/AvailableTimeZones', HttpClient.configurations.v1, this.httpClientOptionsForGlobal)];
                    case 1:
                        response = _a.sent();
                        console.log(response);
                        return [4 /*yield*/, response.json()];
                    case 2:
                        responeJson = _a.sent();
                        return [2 /*return*/, responeJson];
                }
            });
        });
    };
    return ServiceProvider;
}());
export { ServiceProvider };
//# sourceMappingURL=ServiceProvider.js.map