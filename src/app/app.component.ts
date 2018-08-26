import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { PdvPage } from '../pages/pdv/pdv';
import { ClientePage } from '../pages/cliente/cliente';
import { LoginPage } from '../pages/login/login';
import { Storage } from '@ionic/storage';

import { LoginProvider } from '../providers/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // rootPage: any = HomePage;
  rootPage: any = LoginPage;

  usuario: string;

  pages: Array<{title: string, component: any, icon: any}>;

  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    public storage: Storage,
    public login: LoginProvider
  ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'HOME', component: HomePage, icon: "home" },
      { title: 'PDV', component: PdvPage, icon: "cart" },
      { title: 'CLIENTE', component: ClientePage, icon: "person" },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.login.emitirUsuario.subscribe(res=>this.usuario=res);
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.usuario = this.login.usuario;
    console.log("Muda pagina");
    this.nav.setRoot(page.component);
  }
  logout(){
    this.nav.setRoot(LoginPage);
    this.storage.clear();
  }
}