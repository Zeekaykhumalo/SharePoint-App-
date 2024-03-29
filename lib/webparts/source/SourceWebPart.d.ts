import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { IDynamicDataPropertyDefinition, IDynamicDataCallables } from '@microsoft/sp-dynamic-data';
import { IPreferences } from '../../common/Preferences';
export interface ISourceWebPartProps {
}
export default class SourceWebPart extends BaseClientSideWebPart<ISourceWebPartProps> implements IDynamicDataCallables {
    private _firstName;
    private _lastName;
    private _preferences;
    protected onInit(): Promise<void>;
    render(): void;
    private _firstNameChanged;
    private _lastNameChanged;
    private _preferencesChanged;
    protected onDispose(): void;
    protected get dataVersion(): Version;
    getPropertyDefinitions(): ReadonlyArray<IDynamicDataPropertyDefinition>;
    getPropertyValue(propertyId: string): string | IPreferences;
}
//# sourceMappingURL=SourceWebPart.d.ts.map