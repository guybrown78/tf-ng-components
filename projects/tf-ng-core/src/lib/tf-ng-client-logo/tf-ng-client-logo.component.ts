import { Component, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'tf-ng-client-logo',
  templateUrl: './tf-ng-client-logo.component.html',
  styleUrls: ['./tf-ng-client-logo.component.css']
})
export class TfNgClientLogoComponent {
	logoImageClass: string = "evaluate";
	private _clientLogoSource: string;
    
	@Input("client-logo-source") set clientLogoSource(value: string) {
		this._clientLogoSource = value;
		this.initialiseImage();
	}

	get clientLogoSource(): string {
		return this._clientLogoSource;
	}

	@ViewChild('imgRef') imgRef: ElementRef;

	initialiseImage(){
		this.logoImageClass = "evaluate"
	}
	
	onClientLogoLoaded() {
		if(this.imgRef.nativeElement.width > this.imgRef.nativeElement.height){
			this.logoImageClass = "width-dom";
		}else{
			this.logoImageClass = "height-dom";
		}
	}
}
