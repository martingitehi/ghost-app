import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { GhostDiary } from './app.component';

import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { AddDream } from '../pages/dream-add/dream-add';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { FIREBASE_CONFIG } from '../config/FIREBASE_CONFIG';
import { LocalServices } from '../services/local.services';
import { NativeStorage } from '@ionic-native/native-storage';
import { ProfilePage } from '../pages/profile/profile';
import { PopoverOptionsPageModule } from '../pages/popover-options/popover-options.module';

@NgModule({
  declarations: [
    GhostDiary,
    AboutPage,
    AddDream,
    HomePage,
    ProfilePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    PopoverOptionsPageModule,
    IonicModule.forRoot(GhostDiary)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    GhostDiary,
    AboutPage,
    AddDream,
    ProfilePage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativeStorage,
    LocalServices,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
