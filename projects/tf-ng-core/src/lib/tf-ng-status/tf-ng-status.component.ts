import { Component, Input } from '@angular/core';

@Component({
  selector: 'tf-ng-status',
  templateUrl: './tf-ng-status.component.html',
  styleUrls: ['./tf-ng-status.component.css']
})
export class TfNgStatusComponent {
	@Input('colour') colour: string = "default";
}
