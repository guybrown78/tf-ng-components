import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-tf-ng-button',
  templateUrl: './tf-ng-button.component.html',
  styleUrls: ['./tf-ng-button.component.css']
})
export class TfNgButtonComponent{
	@Input('size') size: string = "default";
	@Input('colour') colour: string = "default";
}
