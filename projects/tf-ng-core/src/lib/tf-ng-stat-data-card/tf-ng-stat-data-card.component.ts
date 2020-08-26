import { Component, Input } from '@angular/core';

@Component({
  selector: 'tf-ng-stat-data-card',
  templateUrl: './tf-ng-stat-data-card.component.html',
  styleUrls: ['./tf-ng-stat-data-card.component.css']
})
export class TfNgStatDataCardComponent {
	@Input('colour') colour: string = "default";
}
