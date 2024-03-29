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
import { ISourceProps } from './components/ISourceProps';

import {
	IDynamicDataPropertyDefinition,
	IDynamicDataCallables,
} from '@microsoft/sp-dynamic-data';

import Constants from '../../common/Constants';
import { IPreferences } from '../../common/Preferences';

export interface ISourceWebPartProps {}

export default class SourceWebPart
	extends BaseClientSideWebPart<ISourceWebPartProps>
	implements IDynamicDataCallables
{
	private _firstName: string;
	private _lastName: string;
	private _preferences: IPreferences;

	protected async onInit(): Promise<void> {
		this.context.dynamicDataSourceManager.initializeSource(this);
	}

	public render(): void {
		const element: React.ReactElement<ISourceProps> = React.createElement(
			Source,
			{
				onFirstNameChanged: this._firstNameChanged,
				onLastNameChanged: this._lastNameChanged,
				onPreferencesChanged: this._preferencesChanged,
				// getTime: this._getTime,
				context: this.context,
				httpClient: this.context.httpClient,
				description: '', //this.properties.description,
				spcontext: this.context,
				// httpClient: this.context.httpClient,
				// onSubmitClick: this._onSubmitClick,
			}
		);

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
	}

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

	private _firstNameChanged = (firstName: string): void => {
		this._firstName = firstName;
		// notify subscribers that the first name has changed
		this.context.dynamicDataSourceManager.notifyPropertyChanged(
			Constants.FirstNamePropertyId
		);
	};

	private _lastNameChanged = (lastName: string): void => {
		this._lastName = lastName;
		// notify subscribers that the last name has changed
		this.context.dynamicDataSourceManager.notifyPropertyChanged(
			Constants.LastNamePropertyId
		);
	};

	private _preferencesChanged = (preferences: IPreferences): void => {
		this._preferences = preferences;
		// notify subscribers that the last name has changed
		this.context.dynamicDataSourceManager.notifyPropertyChanged(
			Constants.PreferencesPropertyId
		);
	};

	// private _onSubmitClick = (): void => {
	// 	this._preferences = preferences;
	// 	// notify subscribers that the last name has changed
	// 	this.context.dynamicDataSourceManager.notifyPropertyChanged(
	// 		Constants.PreferencesPropertyId
	// 	);
	// };

	protected onDispose(): void {
		ReactDom.unmountComponentAtNode(this.domElement);
	}

	protected get dataVersion(): Version {
		return Version.parse('1.0');
	}

	/*
  IDynamicDataCallables implementation
  */
	public getPropertyDefinitions(): ReadonlyArray<IDynamicDataPropertyDefinition> {
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
	}

	public getPropertyValue(propertyId: string): string | IPreferences {
		switch (propertyId) {
			case Constants.FirstNamePropertyId:
				return this._firstName;
			case Constants.LastNamePropertyId:
				return this._lastName;
			case Constants.PreferencesPropertyId:
				return this._preferences;
		}

		throw new Error(strings.BadPropertyId);
	}

	/*
  End of IDynamicDataCallables implementation
  */
}
