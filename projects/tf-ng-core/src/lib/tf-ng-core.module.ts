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
import { TfNgIconCloseComponent } from './icons/tf-ng-icon-close/tf-ng-icon-close.component';
import { TfNgPageTitleBreadcrumbsComponent } from './tf-ng-page-title-breadcrumbs/tf-ng-page-title-breadcrumbs.component';
import { TfNgIconChevronLeftComponent } from './icons/tf-ng-icon-chevron-left/tf-ng-icon-chevron-left.component';
import { TfNgIconChevronRightComponent } from './icons/tf-ng-icon-chevron-right/tf-ng-icon-chevron-right.component';
import { TfNgIconChevronUpComponent } from './icons/tf-ng-icon-chevron-up/tf-ng-icon-chevron-up.component';
import { TfNgIconChevronDownComponent } from './icons/tf-ng-icon-chevron-down/tf-ng-icon-chevron-down.component';
import { TfNgIconAddComponent } from './icons/tf-ng-icon-add/tf-ng-icon-add.component';
import { TfNgClientLogoComponent } from './tf-ng-client-logo/tf-ng-client-logo.component';
import { TfNgFormCardComponent } from './tf-ng-form-card/tf-ng-form-card.component';
import { TfNgStatDataCardComponent } from './tf-ng-stat-data-card/tf-ng-stat-data-card.component';
import { TfNgStatusComponent } from './tf-ng-status/tf-ng-status.component';
import { TfNgPhOverviewCardComponent } from './tf-ng-ph-overview-card/tf-ng-ph-overview-card.component';
import { TfNgStatusBeaconComponent } from './tf-ng-status-beacon/tf-ng-status-beacon.component';
import { TfNgButtonComponent } from './tf-ng-button/tf-ng-button.component';
import { TfNgInfoPanelComponent } from './tf-ng-info-panel/tf-ng-info-panel.component';
import { TfNgInfoPanelItemContainerComponent } from './tf-ng-info-panel-item-container/tf-ng-info-panel-item-container.component';
import { TfNgIconUserComponent } from './icons/tf-ng-icon-user/tf-ng-icon-user.component';


@NgModule({
  declarations: [
		TfNgCoreComponent, 
		TfNgHeaderComponent, 
		TfNgMainContentComponent, 
		TfNgSideDrawerComponent, 
		TfNgHexagonComponent, 
		TfNgCardComponent, 
		TfNgProductInitialsComponent, 
		TfNgCardContentComponent, 
		TfNgIconCloseComponent, 
		TfNgPageTitleBreadcrumbsComponent, 
		TfNgIconChevronLeftComponent, 
		TfNgIconChevronRightComponent, 
		TfNgIconChevronUpComponent, 
		TfNgIconChevronDownComponent, 
		TfNgIconAddComponent, 
		TfNgClientLogoComponent, 
		TfNgFormCardComponent, 
		TfNgStatDataCardComponent, 
		TfNgStatusComponent, 
		TfNgPhOverviewCardComponent, 
		TfNgStatusBeaconComponent, 
		TfNgButtonComponent, 
		TfNgInfoPanelComponent, 
		TfNgInfoPanelItemContainerComponent, TfNgIconUserComponent,
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
		TfNgPageTitleBreadcrumbsComponent, 
		TfNgClientLogoComponent, 
		TfNgFormCardComponent,
		TfNgStatDataCardComponent, 
		TfNgStatusComponent, 
		TfNgPhOverviewCardComponent, 
		TfNgStatusBeaconComponent, 
		TfNgInfoPanelComponent, 
		TfNgInfoPanelItemContainerComponent, 
	],
	providers: [
		TfNgToggleDrawerService
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TfNgCoreModule { }
