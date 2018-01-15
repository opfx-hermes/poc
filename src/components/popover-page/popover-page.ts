import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

/**
 * Generated class for the PopoverPageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'popover-page',
  templateUrl: 'popover-page.html'
})
export class PopoverPageComponent implements OnInit{

  text: string;

  constructor(public viewCtrl: ViewController) {
    
  }
  ngOnInit() {
    
  }


  close() {
    this.viewCtrl.dismiss();
  }
}
