import { Component, OnInit, Input } from '@angular/core';

@Component({
  host: {'class': 'item-host'},
  selector: 'tf-ng-item',
  templateUrl: './tf-ng-item.component.html',
  styleUrls: ['./tf-ng-item.component.css']
})
export class TfNgItemComponent {
  @Input('padding') padding: string = "default";
	@Input('colour') colour: string = "default";
}
