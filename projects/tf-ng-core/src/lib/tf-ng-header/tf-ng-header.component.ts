import { Component, OnInit, Input } from '@angular/core';
import { TfNgToggleDrawerService } from '../tf-ng-toggle-drawer.service';

@Component({
  selector: 'tf-ng-header',
  templateUrl: './tf-ng-header.component.html',
	styleUrls: ['./tf-ng-header.component.css'],
})
export class TfNgHeaderComponent implements OnInit {
	@Input("is-logo-clickable") isLogoClickable:boolean = true;
	@Input("app-title") appTitle:string = "";
  constructor(	
		private toggleService: TfNgToggleDrawerService
	) { }

  ngOnInit() {
  }

	onProductLogoClicked(event){
		this.toggleService.announceToggle(true);
	}
}
