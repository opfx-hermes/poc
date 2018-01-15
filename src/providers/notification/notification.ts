import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';

/*
  Generated class for the NotificationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NotificationProvider {

  constructor(public toastCtrl: ToastController) {
    console.log('Hello NotificationProvider Provider');
  }

  public presentToastNotification(message:string, where:string = "top", howLong:number = 3000, showCloseButton:boolean = false):void{
    let toast = this.toastCtrl.create({
      message: message,
      duration: howLong,
      position: where,
      showCloseButton:showCloseButton
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }

}
