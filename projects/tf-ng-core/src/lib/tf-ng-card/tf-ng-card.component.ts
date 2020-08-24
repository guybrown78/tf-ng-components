import { Component, Input } from '@angular/core';

@Component({
  selector: 'tf-ng-card',
  templateUrl: './tf-ng-card.component.html',
  styleUrls: ['./tf-ng-card.component.css']
})
export class TfNgCardComponent {
	@Input('padding') padding: string = "default";
	@Input('colour') colour: string = "default";
  constructor() { }

}
