import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';


import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { EventosPage } from '../pages/eventos/eventos';
import { HermanosPage } from '../pages/hermanos/hermanos';
import { IngresosPage } from '../pages/ingresos/ingresos';
import { MisaPage } from '../pages/misa/misa';
import { MocionesPage } from '../pages/mociones/mociones';
import { NotasPage } from '../pages/notas/notas';
import { ReunionesPage } from '../pages/reuniones/reuniones';
import { TemasPage } from '../pages/temas/temas';
import { VerHermanoPage } from '../pages/ver-hermano/ver-hermano';
import { AddIngresoPage } from '../pages/add-ingreso/add-ingreso';

/*Ventanas Modal*/
import { EventoPage } from '../pages/eventos/eventos';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AppServiceProvider } from '../providers/app-service/app-service';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    VerHermanoPage,
    EventosPage,
    HermanosPage,
    IngresosPage,
    MisaPage,
    MocionesPage,
    NotasPage,
    ReunionesPage,
    TemasPage,
    EventoPage,
    AddIngresoPage
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
    VerHermanoPage,
    EventosPage,
    HermanosPage,
    IngresosPage,
    MisaPage,
    MocionesPage,
    NotasPage,
    ReunionesPage,
    TemasPage,
    EventoPage,
    AddIngresoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AppServiceProvider
  ]
})
export class AppModule {}
