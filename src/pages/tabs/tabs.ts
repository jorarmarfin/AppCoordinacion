import { Component } from '@angular/core';

import { ActividadesPage } from '../actividades/actividades';
import { HermanosPage } from '../hermanos/hermanos';
import { ReunionesPage } from '../reuniones/reuniones';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ActividadesPage;
  tab2Root = HermanosPage;
  tab3Root = ReunionesPage;

  constructor() {

  }
}
