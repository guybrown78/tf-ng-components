import { Component, OnDestroy  } from '@angular/core';
import { TfNgToggleDrawerService } from '../tf-ng-toggle-drawer.service';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'tf-ng-side-drawer',
  templateUrl: './tf-ng-side-drawer.component.html',
	styleUrls: ['./tf-ng-side-drawer.component.css']
})
export class TfNgSideDrawerComponent implements OnDestroy {
	opened:boolean = false;
	// @Input() toggle: boolean;
	subscription: Subscription;
	constructor(
		private toggleService: TfNgToggleDrawerService
	) {
		this.subscription = toggleService.toggleAnnounced$.subscribe(
			(toggle) => {
				this.opened = toggle;
			}
		)
  }

	onCloseDraw(){
		this.opened = false;
		this.toggleService.confirmToggle(false);
	}

	ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }
}
