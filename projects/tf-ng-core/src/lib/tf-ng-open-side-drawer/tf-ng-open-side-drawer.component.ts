import { Component, Input } from '@angular/core';
import { TfNgToggleDrawerService } from '../tf-ng-toggle-drawer.service';

@Component({
  selector: 'tf-ng-open-side-drawer',
  templateUrl: './tf-ng-open-side-drawer.component.html',
  styleUrls: ['./tf-ng-open-side-drawer.component.css']
})
export class TfNgOpenSideDrawerComponent {
	@Input('size') size: string = "m";
	@Input('outline-colour') outlineColour: string = "blue";

	constructor(	
		private toggleService: TfNgToggleDrawerService
	) { }



	onProductLogoClicked(event){
		this.toggleService.announceToggle(true);
	}

}
