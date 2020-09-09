import { Component, OnInit, Input, Output, EventEmitter   } from '@angular/core';

@Component({
  selector: 'tf-ng-ph-overview-card',
  templateUrl: './tf-ng-ph-overview-card.component.html',
  styleUrls: ['./tf-ng-ph-overview-card.component.css']
})
export class TfNgPhOverviewCardComponent implements OnInit {

	@Input("card-title") cardTitle:string = "Software Module";
	@Input("product-id") productId:string;
	@Input("product-code") productCode:string;
	@Input("product-title") productTitle:string;
	@Input("is-active") isActive:boolean = false;
	@Input("product-description") productDescription:string;
	@Input("product-cta") productCTA:string = 'Find out more ask your Account Manager';
	@Input("marketing-cta-as-button") marketingCtaAsButton:boolean = false;

	@Output('button-clicked') buttonClicked = new EventEmitter<any>();
	@Output('cta-clicked') ctaClicked = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
	}
	onProductButtonClicked(){
		this.buttonClicked.emit({
			productCode:this.productCode,
			productId:this.productId,
			productTitle:this.productTitle,
		});
	}
	onProductFindOutMoreClicked(){
		this.ctaClicked.emit({
			productCode:this.productCode,
			productId:this.productId,
			productTitle:this.productTitle,
		});
	}
}
