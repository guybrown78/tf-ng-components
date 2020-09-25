import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tf-ng-product-initials',
  templateUrl: './tf-ng-product-initials.component.html',
  styleUrls: ['./tf-ng-product-initials.component.css']
})
export class TfNgProductInitialsComponent implements OnInit {
	@Input('size') size: string = "default";
	@Input('colour') colour: string = "default";
	// @Input('code') code: string;

	private _code: string;
    
	@Input("code") set code(value: string) {
		this._code = value;
		this.clientCode = this.getClientInitials(this._code)
	}

	get code(): string {
		return this._code;
	}
	clientCode:string;
  constructor() { }

  ngOnInit() {
		this.clientCode = this.getClientInitials(this._code)
  }

	getClientInitials(code:string){
		if(!code){
			return null;
		}
		switch(code.toLowerCase()){
			case 'bi':
			case 'cm':
			case 'el':
			case 'fb':
			case 'lm':
			case 'mp':
			case 'r3':
			case 'rp':
			case 'si':
			case 'sm':
			case 't':
			case 'tm':
			case 'vl':
			case 'vr':
				return code.toLowerCase();
			case '':
			default:
				return "unknown";
		}
	}
}
