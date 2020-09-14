import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

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

	@Input("show-user-account") showUserAccount:boolean = false;
	@Input("is-open") isOpen:boolean = false;
	@Output('is-open-clicked') isOpenClicked = new EventEmitter<boolean>();

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

	onToggle(){
		this.isOpen = !this.isOpen;
		this.isOpenClicked.emit(this.isOpen);
	}
}
