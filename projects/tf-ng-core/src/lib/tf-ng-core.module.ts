import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TfNgCoreComponent } from './tf-ng-core.component';
import { TfNgHeaderComponent } from './tf-ng-header/tf-ng-header.component';
import { TfNgMainContentComponent } from './tf-ng-main-content/tf-ng-main-content.component';
import { TfNgSideDrawerComponent } from './tf-ng-side-drawer/tf-ng-side-drawer.component';
import { TfNgHexagonComponent } from './tf-ng-hexagon/tf-ng-hexagon.component';
//
import { TfNgToggleDrawerService } from './tf-ng-toggle-drawer.service';
import { TfNgCardComponent } from './tf-ng-card/tf-ng-card.component';
import { TfNgProductInitialsComponent } from './tf-ng-product-initials/tf-ng-product-initials.component';
import { TfNgCardContentComponent } from './tf-ng-card-content/tf-ng-card-content.component';
import { TfNgIconCloseComponent } from './icons/tf-ng-icon-close/tf-ng-icon-close.component'
@NgModule({
  declarations: [
		TfNgCoreComponent, 
		TfNgHeaderComponent, 
		TfNgMainContentComponent, 
		TfNgSideDrawerComponent, 
		TfNgHexagonComponent, 
		TfNgCardComponent, 
		TfNgProductInitialsComponent, 
		TfNgCardContentComponent, TfNgIconCloseComponent,
	],
  imports: [
		BrowserModule,
		CommonModule,
  ],
  exports: [
		TfNgCoreComponent,
		TfNgHeaderComponent,
		TfNgMainContentComponent,
		TfNgSideDrawerComponent,
		TfNgHexagonComponent, 
		TfNgCardComponent,
		TfNgProductInitialsComponent,
		TfNgCardContentComponent,
	],
	providers: [
		TfNgToggleDrawerService
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TfNgCoreModule { }
