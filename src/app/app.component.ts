import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { EventosPage } from '../pages/eventos/eventos';
import { HermanosPage } from '../pages/hermanos/hermanos';
import { IngresosPage } from '../pages/ingresos/ingresos';
import { MisaPage } from '../pages/misa/misa';
import { MocionesPage } from '../pages/mociones/mociones';
import { NotasPage } from '../pages/notas/notas';
import { ReunionesPage } from '../pages/reuniones/reuniones';
import { TemasPage } from '../pages/temas/temas';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = TabsPage;

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Inicio', component: TabsPage, icon: 'md-home' },
      { title: 'Eventos', component: EventosPage, icon: 'md-calendar' },
      { title: 'Hermanos', component: HermanosPage, icon: "ios-contacts-outline" },
      { title: 'Ingresos', component: IngresosPage, icon: 'logo-usd' },
      { title: 'Misa', component: MisaPage, icon: 'md-home' },
      { title: 'Mociones', component: MocionesPage, icon: 'md-wifi' },
      { title: 'Notas', component: NotasPage, icon: 'md-pricetag' },
      { title: 'Reunion', component: ReunionesPage, icon: 'md-barcode' },
      { title: 'Temas', component: TemasPage, icon: 'md-book' },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
