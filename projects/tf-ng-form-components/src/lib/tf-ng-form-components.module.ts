import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { TfNgFormComponentsComponent } from './tf-ng-form-components.component';
import { TfNgInputComponent } from './tf-ng-input/tf-ng-input.component';

import { TfNgCheckboxComponent } from './tf-ng-checkbox/tf-ng-checkbox.component';
import { TfNgRadioComponent } from './tf-ng-radio/tf-ng-radio.component';
import { TfNgRadioGroupComponent } from './tf-ng-radio-group/tf-ng-radio-group.component';
import { TfNgSelectComponent } from './tf-ng-select/tf-ng-select.component';
import { TfNgTextareaComponent } from './tf-ng-textarea/tf-ng-textarea.component';
import { TfNgFileSelectComponent } from './tf-ng-file-select/tf-ng-file-select.component';


@NgModule({
  declarations: [
		TfNgFormComponentsComponent, 
		TfNgInputComponent,
		TfNgCheckboxComponent, 
		TfNgRadioComponent, 
		TfNgRadioGroupComponent, 
		TfNgSelectComponent, 
		TfNgTextareaComponent, 
		TfNgFileSelectComponent
	],
  imports: [
  ],
	exports: [
		TfNgFormComponentsComponent, 
		TfNgInputComponent,
		TfNgCheckboxComponent, 
		TfNgRadioComponent, 
		TfNgRadioGroupComponent, 
		TfNgSelectComponent, 
		TfNgTextareaComponent,
		TfNgFileSelectComponent
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TfNgFormComponentsModule { }
