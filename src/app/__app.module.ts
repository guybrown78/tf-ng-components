import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TfNgFormComponentsModule } from '../../projects/tf-ng-form-components/src/public-api'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		TfNgFormComponentsModule
  ],
  providers: [],
	bootstrap: [AppComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
