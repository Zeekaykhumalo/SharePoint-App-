/* eslint-disable @typescript-eslint/no-explicit-any */
import {
	HttpClient,
	IHttpClientOptions,
	// HttpClientResponse,
} from '@microsoft/sp-http';
import { WebPartContext } from '@microsoft/sp-webpart-base';
// import { Constants } from './webparts/Constant';

export class ServiceProvider {
	private wpcontext: WebPartContext;
	public constructor(context: WebPartContext) {
		this.wpcontext = context;
	}
	private httpClientOptionsForGlobal: IHttpClientOptions = {
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
            'Sec-Fetch-Dest': 'script', //'empty',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Site': 'cross-site',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36',
            'Origin': 'https://tranquilentropy.sharepoint.com'
			// 'x-rapidapi-key': '<REPLACE WHIT WITH YOUR APIKEY>',
		}),
		method: 'GET',
		mode: 'cors',
	};

	public async getJhbTime(): Promise<any> {
		const response = await this.wpcontext.httpClient.get(
			// 'https://timeapi.io/api/Time/current/zone?timeZone=Africa/Johannesburg',
			'https://timeapi.io/api/TimeZone/AvailableTimeZones',
			HttpClient.configurations.v1,
			this.httpClientOptionsForGlobal
		);
		console.log(response);
		const responeJson: any = await response.json();
		return responeJson;
	}
}
