import { Component, Input } from '@angular/core';

@Component({
  selector: 'tf-ng-card-content',
  templateUrl: './tf-ng-card-content.component.html',
  styleUrls: ['./tf-ng-card-content.component.css']
})
export class TfNgCardContentComponent {
	@Input('colour') colour: string = "default";
  constructor() { }

}
