import { Component, Input } from '@angular/core';

@Component({
  selector: 'tf-ng-status-beacon',
  templateUrl: './tf-ng-status-beacon.component.html',
  styleUrls: ['./tf-ng-status-beacon.component.css']
})
export class TfNgStatusBeaconComponent  {
	@Input('colour') colour: string = "default";
}
