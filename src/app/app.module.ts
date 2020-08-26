import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TfNgCoreModule } from '../../projects/tf-ng-core/src/public-api';
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './header/header.component'
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeaderComponent
  ],
  imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		TfNgCoreModule
  ],
  providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
