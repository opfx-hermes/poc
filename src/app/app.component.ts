import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { MenuController } from 'ionic-angular/components/app/menu-controller';
import { Nav } from 'ionic-angular/components/nav/nav';
import { LogInPage } from '../pages/log-in/log-in';
import { LogOutPage } from '../pages/log-out/log-out';
import { ViewChild } from '@angular/core';
import { SignInPage } from '../pages/sign-in/sign-in';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav:Nav;
  
  rootPage:any = HomePage;
  pages: Array<{iconLogo:string,title: string, component: any}>;
  

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public menu: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      
    });
    // set our app's pages
    this.pages = [
      {iconLogo:'log-in', title: 'Log In', component: LogInPage },
      {iconLogo:'log-out', title: 'Log Out', component: LogOutPage },
      {iconLogo:'contact', title: 'Sign Up', component: SignInPage }
    ];
  }
  
  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page

    this.nav.setRoot(page.component);
  }
  closeMenu() {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
  }
  
}

