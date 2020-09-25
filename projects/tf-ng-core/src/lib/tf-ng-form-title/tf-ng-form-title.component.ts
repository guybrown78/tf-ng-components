import { Component, Input } from '@angular/core';

@Component({
  selector: 'tf-ng-form-title',
  templateUrl: './tf-ng-form-title.component.html',
  styleUrls: ['./tf-ng-form-title.component.css']
})
export class TfNgFormTitleComponent {
	@Input('type') type: string = "default";

}
