import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({	
  providedIn: 'root'
})
export class TfNgToggleDrawerService {

	// Observable string sources
	private toggleAnnouncedSource = new Subject<boolean>();
	private toggleConfirmedSource = new Subject<boolean>();

	// Observable string streams
	toggleAnnounced$ = this.toggleAnnouncedSource.asObservable();
	toggleConfirmed$ = this.toggleConfirmedSource.asObservable();

	
	// Service message commands
	announceToggle(toggle: boolean) {
		this.toggleAnnouncedSource.next(toggle);
	}

	confirmToggle(toggleState: boolean) {
		this.toggleConfirmedSource.next(toggleState);
	}
}
