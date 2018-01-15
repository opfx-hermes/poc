import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { HomePage } from '../home/home';

/**
 * Generated class for the SignInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public viewCtrl: ViewController ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignInPage');
    this.presentPrompt();
  }

  presentPrompt() {
    this.loadHome();
    let alert = this.alertCtrl.create({
      title: 'Sign up',
      inputs: [
        {
          name: 'name',
          placeholder: 'Name',
          type: 'name'
        },
        {
          name: 'email',
          placeholder: 'Email',
          type: 'email'
        },
        {
          name: 'password',
          placeholder: 'Password',
          type: 'password'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
            
          }
        },
        {
          text: 'sign in',
          handler: data => {
            //if (User.isValid(data.username, data.password)) {
              if(data.username && data.password){
              
               
              
              //register
            } else {
              // invalid 
             
              return false;
            }
          }
        }
      ]
    });
    
    alert.present();
  }
  loadHome(){
    this.navCtrl.push(HomePage);
  }
}
