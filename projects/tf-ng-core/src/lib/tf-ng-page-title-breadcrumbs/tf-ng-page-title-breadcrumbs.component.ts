import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tf-ng-page-title-breadcrumbs',
  templateUrl: './tf-ng-page-title-breadcrumbs.component.html',
  styleUrls: ['./tf-ng-page-title-breadcrumbs.component.css']
})
export class TfNgPageTitleBreadcrumbsComponent {
	@Input('show-back-button') showBackButton: boolean = true;
	@Output('back-button-clicked') backButtonClicked = new EventEmitter<any>();
	
	constructor() { }
	
	onBackButtonClicked(){
		this.backButtonClicked.emit({});
	}
}
