import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

  // Import AngularFire2 Module
  import { AngularFireModule } from 'angularfire2';

  // AngularFire2 Settings (from Firebase)
  export const firebaseConfig = {
    apiKey: "AIzaSyARrtV4kViVCBS_tdS7Nk4VsdxNMNQBUb0",
    authDomain: "ionic-firebase-hybrid.firebaseapp.com",
    databaseURL: "https://ionic-firebase-hybrid.firebaseio.com",
    projectId: "ionic-firebase-hybrid",
    storageBucket: "ionic-firebase-hybrid.appspot.com",
    messagingSenderId: "831011830515"
  };

  //Don't forget to Import AngularFire here
  imports: [
      IonicModule.forRoot(MyApp),
      AngularFireModule.initializeApp(firebaseConfig)
  ],

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
