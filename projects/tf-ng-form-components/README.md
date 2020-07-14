# tf-ng-form-components

Angular interfaces for https://www.npmjs.com/package/tf-core-components components, enabling the data to flow both ways between Transform form components and angular forms.

Out of the box, we can not use the angular formControl or ngModel directive directly on a transform 'form' component like we do with native form elements.

This package provides a wrapper for each tf form component. These wrappers should be installed once you install the tf-core-components and contain the following selectors;

`tf-ng-input`

`tf-ng-textarea`

`tf-ng-select`

`tf-ng-checkbox`

`tf-ng-radio-group`


## Install

`npm i tf-ng-form-components`

## Add to your Angular Application

Once installed, we just add the TfNgFormComponentsModule to the `app.module` like any other additional module (for example FormsModule);

`import { TfNgFormComponentsModule } from 'tf-ng-form-components'`

and add the `TfNgFormComponentsModule` to the imports;

`imports: [
		TfNgFormComponentsModule,
		...
  ]`

## Using the components

using the TfNgFormComponentsModule is as simple as just accessing the `tf-ng-input` component instead of `tf-input` in our ngForms