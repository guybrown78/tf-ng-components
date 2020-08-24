import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'tf-ng-hexagon',
  templateUrl: './tf-ng-hexagon.component.html',
	styleUrls: ['./tf-ng-hexagon.component.css']
})
export class TfNgHexagonComponent implements OnInit {
	@Input('size') size: string = "default";
	@Input('colour') colour: string = "default";
	@Input('outline-colour') outlineColour: string;
	@Input('disabled') disabled: boolean = false;
	@Input('as-button') asButton: boolean = true;
	fColour:string = "currentColor";
  constructor() { 
		
	}

  ngOnInit() {
		this.fColour = this.colour === "gradient" ? "url(#grad)" : "currentColor";
	}
}
