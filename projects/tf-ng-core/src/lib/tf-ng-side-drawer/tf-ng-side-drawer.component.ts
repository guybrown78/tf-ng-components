import { Component, OnDestroy, Input, Output, EventEmitter  } from '@angular/core';
import { TfNgToggleDrawerService } from '../tf-ng-toggle-drawer.service';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'tf-ng-side-drawer',
  templateUrl: './tf-ng-side-drawer.component.html',
	styleUrls: ['./tf-ng-side-drawer.component.css']
})
export class TfNgSideDrawerComponent implements OnDestroy {
	subscription: Subscription;

	@Input('opened')  opened: boolean = false;
	@Output('opened-changed') openedChanged = new EventEmitter<boolean>();
	
	constructor(
		private toggleService: TfNgToggleDrawerService
	) {
		this.subscription = toggleService.toggleAnnounced$.subscribe(
			(toggle) => {
				this.toggleOpened(toggle);
			}
		)
  }

	toggleOpened(flag:boolean){
		this.opened = flag;
		this.openedChanged.emit(flag);
		this.toggleService.confirmToggle(flag)
	}
	onCloseDraw(){
		this.toggleOpened(false);
	}

	ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }
}
