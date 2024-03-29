import { Version } from '@microsoft/sp-core-library';
import { type IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { DynamicProperty } from '@microsoft/sp-component-base';
import { IPreferences } from '../../common/Preferences';
export interface ITargetWebPartProps {
    firstName: DynamicProperty<string>;
    lastName: DynamicProperty<string>;
    preferences: DynamicProperty<IPreferences>;
    userName: DynamicProperty<string>;
}
export default class TargetWebPart extends BaseClientSideWebPart<ITargetWebPartProps> {
    render(): void;
    protected onDispose(): void;
    protected get dataVersion(): Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=TargetWebPart.d.ts.map