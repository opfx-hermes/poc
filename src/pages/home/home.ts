import { Component } from '@angular/core';
import { MenuController } from 'ionic-angular/components/app/menu-controller';
import { NotificationProvider } from '../../providers/notification/notification';
import { NEW_CONTESTS, NOW_PLAYING, PAST_CONTESTS } from '../../mock/mock';
import { PopoverController } from 'ionic-angular/components/popover/popover-controller';
import { PopoverPageComponent } from '../../components/popover-page/popover-page';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { LogInPage } from '../log-in/log-in';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private segment:any = "new contests"; 

  private _poolList:any = [];

  constructor(public navCtr:NavController, public popoverCtrl:PopoverController, public menu: MenuController, public notification: NotificationProvider) {
    menu.enable(true);
  }
  ionViewDidLoad() {
    this.updateSchedule();
  }
  doRefresh(ionRefresh){

    setTimeout(() => {
      console.log('pull to refresh');
      this.notification.presentToastNotification("pull to refresh has ended");
      ionRefresh.complete();
    }, 2000);
  }
  updateSchedule(){
    console.log(this.segment)
    switch(this.segment){
      case "new contests":
      this._poolList =  NEW_CONTESTS;
      break;
      case "in play":
      this._poolList = NOW_PLAYING;
      break;
      case "past contests":
      this._poolList = PAST_CONTESTS;
      break;
      default:
      break;
    }
  }
  joinPool(event){
    event.stopPropagation();
    console.log("joinPool clicked" + event.currentTarget.className);
    let demo:string;
    if(event.currentTarget.innerText != undefined){
      demo = event.currentTarget.innerText;
    }else{
      demo = "";
    }
   this.notification.presentToastNotification( " " + demo);

  }
  rowInListClicked($event){
    console.log("rowInListClicked clicked" + $event);
    this.notification.presentToastNotification("card details ", "",0,true)
  }
  //Show popover menu
  presentPopover(event) {
  let popover = this.popoverCtrl.create(PopoverPageComponent)
                                     
     popover.present({
        ev: event
     });
  }
  onLogIn($event) {
    this.navCtr.push(LogInPage);
  }
  doInfinite(infiniteScroll) {
    console.log('infiniteScroll async operation');
    this.notification.presentToastNotification("infiniteScroll async operation")

    setTimeout(() => {
     
      this.notification.presentToastNotification("infiniteScroll end")

      console.log('Async operation has ended');
      infiniteScroll.complete();
    },2000);
  }
}
