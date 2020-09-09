import { Component, Input } from '@angular/core';

@Component({
  selector: 'tf-ng-info-panel',
  templateUrl: './tf-ng-info-panel.component.html',
  styleUrls: ['./tf-ng-info-panel.component.css']
})
export class TfNgInfoPanelComponent {
	@Input('padding') padding: string = "none";
	@Input('colour') colour: string = "transparent";
}
