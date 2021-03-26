import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'tf-ng-hexagon',
  templateUrl: './tf-ng-hexagon.component.html',
	styleUrls: ['./tf-ng-hexagon.component.css'],
  host: {
    '[class]' : 'hostClassNames' ,
  }
})
export class TfNgHexagonComponent implements OnInit {
  private _size:string = "default";
	@Input('size') set size(value:string){
    this.hostClassNames = `tf-host-block tf-block-size-${value}`;
    this._size = value;
  }
  get size(): string {
    return this._size;
  }

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
  hostClassNames:string;
  constructor() {
    this.hostClassNames = `tf-host-block tf-block-size-${this.size}`;
	}

  ngOnInit() {
		this.setFColour();
	}

	setFColour(){
		this.fColour = this._colour === "gradient" ? "url(#grad)" : "currentColor";
	}
}
