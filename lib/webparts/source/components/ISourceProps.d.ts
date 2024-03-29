import { IPreferences } from "../../../common/Preferences";
import { HttpClient } from "@microsoft/sp-http";
import { WebPartContext } from '@microsoft/sp-webpart-base';
export interface ISourceProps {
    onFirstNameChanged: (firstName: string | undefined) => void;
    onLastNameChanged: (lastName: string | undefined) => void;
    onPreferencesChanged: (preferences: IPreferences | undefined) => void;
    context: WebPartContext;
    httpClient: HttpClient;
    description: string;
    spcontext: WebPartContext;
}
export interface IQuestion {
    id: string;
    questionText: string;
    questionType: string;
    possibleAnswers: IAnswer[] | string[];
    value: any;
}
export interface IAnswer {
    id: string;
    answerText: string;
    answerType?: string;
    description?: string;
    marked?: boolean;
}
//# sourceMappingURL=ISourceProps.d.ts.map