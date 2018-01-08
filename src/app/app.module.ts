import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';


import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { ReunionesPage } from '../pages/reuniones/reuniones';
import { HermanosPage } from '../pages/hermanos/hermanos';
import { VerHermanoPage } from '../pages/ver-hermano/ver-hermano';
import { EventosPage } from '../pages/eventos/eventos';
/*Temas*/
import { VerTemasPage } from '../pages/temas/ver-temas/ver-temas';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AppServiceProvider } from '../providers/app-service/app-service';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    ReunionesPage,
    HermanosPage,
    VerHermanoPage,
    EventosPage,
    VerTemasPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    ReunionesPage,
    HermanosPage,
    VerHermanoPage,
    EventosPage,
    VerTemasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AppServiceProvider
  ]
})
export class AppModule {}
