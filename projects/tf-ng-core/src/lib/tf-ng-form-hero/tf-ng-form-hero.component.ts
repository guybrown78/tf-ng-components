import { Component, Input } from '@angular/core';

@Component({
  selector: 'tf-ng-form-hero',
  templateUrl: './tf-ng-form-hero.component.html',
  styleUrls: ['./tf-ng-form-hero.component.css']
})
export class TfNgFormHeroComponent {
  @Input('showError') showError: boolean = false;
}
