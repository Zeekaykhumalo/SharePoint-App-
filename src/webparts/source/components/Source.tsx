/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import styles from './Source.module.scss';
import type { ISourceProps } from './ISourceProps';
import {
	Checkbox,
	DatePicker,
	DefaultButton,
	Dropdown,
	TextField,
	Toggle,
} from '@fluentui/react';
import * as strings from 'SourceWebPartStrings';
import { ISourceState } from './ISourceState';
import { IPreferences } from '../../../common/Preferences';
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
import {
	sp,
	IItemAddResult,
	// DateTimeFieldFormatType,
} from '@pnp/sp/presets/all';

//create state
// export interface ISampleDemoState {
// 	showmessageBar:boolean; //to show/hide message bar on success
// 	message:string; // what message to be displayed in message bar
// 	itemID:number; // current item ID after create new item is clicked
// }

export default class Source extends React.Component<
	ISourceProps,
	ISourceState
> {
	constructor(props: ISourceProps) {
		super(props);

		this.state = {
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
					questionText:
						'What does DVD stand for?',
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
			spfxContext: this.context,
			sp: {
				headers: {
					Accept: 'application/json;odata=verbose',
				},
				baseUrl: 'https://tranquilentropy.sharepoint.com',
			},
		});
	}

	public render(): React.ReactElement<ISourceProps> {
		const { onFirstNameChanged, onLastNameChanged } = this.props;

		const quizQuestions = [];
		for (const questionArrayElement of this.state.questions) {
			switch(questionArrayElement?.questionType) {
				case 'textfield':
					quizQuestions.push(
						<div>
							<TextField
								id={questionArrayElement?.id}
								label={questionArrayElement.questionText}
							/>
						</div>
					);
					break;
				case 'checkbox':
					quizQuestions.push(
						<div>
							<Checkbox
								id={questionArrayElement?.id}
								label={questionArrayElement.questionText}
							/>
						</div>
					);
					break;
				case 'radiobox':
					quizQuestions.push(
						<div>
							<Toggle
								id={questionArrayElement?.id}
								label={questionArrayElement.questionText}
								onChange={(e, checked) => this._onLikeChanged(checked)}
							/>
						</div>
					);
					break;
				case 'dropdown':
					quizQuestions.push(
						<div>
							<Dropdown
								id={questionArrayElement?.id}
								label={questionArrayElement.questionText}
								options={[]}
								onChange={(ev, option) => this._onColorChanged(option?.text)}
							/>
						</div>
					);
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

		return (
			<section className={styles.source}>
				<div className={styles.welcome}>
					<h2>{strings.Title}</h2>
				</div>
				<div>
					<TextField
						label={strings.FirstName}
						onChange={(ev, newValue) => onFirstNameChanged(newValue)}
					/>
					<TextField
						label={strings.LastName}
						onChange={(ev, newValue) => onLastNameChanged(newValue)}
					/>
				</div>
				<div>
					<Dropdown
						label={strings.Color}
						options={[
							{ key: strings.Red.toLowerCase(), text: strings.Red },
							{ key: strings.Green.toLowerCase(), text: strings.Green },
							{ key: strings.Blue.toLowerCase(), text: strings.Blue },
						]}
						onChange={(ev, option) => this._onColorChanged(option?.text)}
					/>
					<DatePicker
						label={strings.Date}
						onSelectDate={(date) => this._onDateChanged(date)}
					/>
					<Toggle
						label={strings.Like}
						onChange={(e, checked) => this._onLikeChanged(checked)}
					/>
				</div>

				<div style={{ marginTop: '50px' }}>
					{ quizQuestions }
				</div>

				<div>
					<DefaultButton onClick={() => this._createNewItem()}>
						Submit Button
					</DefaultButton>
				</div>
			</section>
		);
	}

	private async _getTime(): Promise<unknown> {
		return (
			fetch(
				encodeURI(
					'https://zagari.azurewebsites.net/api/httpTrigger1?name=azure'
				),
				{
					method: 'GET',
					mode: 'cors',
					headers: {
						'Content-Type': 'application/json',
						// 'Content-Type': 'text/plain;charset=UTF-8'
					},
				}
			)
				.then((response) => response.json())
				// .then(response => response.text())
				.then((data) => {
					console.log(data);
					return data;
				})
				.catch((error) => {
					console.error('Error:', error);
				})
		); //.finally();
	}

	// private _onCheckboxChanged = (like: boolean | undefined): void => {
	// 	const { preferences } = this.state;

	// 	preferences!.like = like;
	// 	this._updatePreferences(preferences!);
	// };

	// method to use pnp objects and create new item
	private async _createNewItem(): Promise<void> {
		// this.getLists()
		// 	.then((lst) => {
		// 		console.log('lists: ', lst);
		// 	})
		// 	.catch((err) => {
		// 		console.error(err);
		// 	});

		this._getTime()
			.then(async (timeData) => {
				console.log('>>>>>>>> timeData: ', timeData);
				const iar: IItemAddResult = await sp.web.lists
					.getByTitle('wlg-quiz')
					.items.add({
						Title: 'Title ' + new Date(),
						// Description: 'This is item created using PnP JS',
						candidate: 'Jane Doe',
						question: 'What is your favourite meal?',
						response: 'Spinach',
						apiresults: 'valid',
					});

				console.log('########### ', iar);

				this.setState({
					showmessageBar: true,
					message: 'Item Added Sucessfully',
					itemID: iar.data.Id,
				});
				return timeData;
			})
			.catch((err) => {
				console.error(err);
				return err;
			});
		// .finally((data: any) => {
		// });
	}

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

	private _onColorChanged = (color: string | undefined): void => {
		const { preferences } = this.state;

		preferences!.color = color;
		this._updatePreferences(preferences!);
	};

	private _onDateChanged = (date: Date | null | undefined): void => {
		const { preferences } = this.state;

		preferences!.date = date;
		this._updatePreferences(preferences!);
	};

	private _onLikeChanged = (like: boolean | undefined): void => {
		const { preferences } = this.state;

		preferences!.like = like;
		this._updatePreferences(preferences!);
	};

	/*
  Method to update the preferences in the state and to call the dynamic data source manager to update the value
  */
	private _updatePreferences = (preferences: IPreferences): void => {
		this.setState({
			preferences,
		});
		this.props.onPreferencesChanged(preferences);
	};
}
