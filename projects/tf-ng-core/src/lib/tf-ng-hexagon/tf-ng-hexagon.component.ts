import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'tf-ng-hexagon',
  templateUrl: './tf-ng-hexagon.component.html',
	styleUrls: ['./tf-ng-hexagon.component.css']
})
export class TfNgHexagonComponent implements OnInit {
	@Input('size') size: string = "default";
	// @Input('colour') colour: string = "default";
	private _colour: string = "default";
    
	@Input("colour") set colour(value: string) {
		this._colour = value;
		this.setFColour();
	}

	get colour(): string {
		return this._colour;
	}
	
	@Input('outline-colour') outlineColour: string;
	@Input('disabled') disabled: boolean = false;
	@Input('as-button') asButton: boolean = true;
	fColour:string = "currentColor";
  constructor() { 
		
	}

  ngOnInit() {
		this.setFColour();
	}

	setFColour(){
		this.fColour = this._colour === "gradient" ? "url(#grad)" : "currentColor";
	}
}
