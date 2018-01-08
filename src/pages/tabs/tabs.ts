import { Component } from '@angular/core';

import { EventosPage } from '../eventos/eventos';
import { HermanosPage } from '../hermanos/hermanos';
import { ReunionesPage } from '../reuniones/reuniones';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = EventosPage;
  tab2Root = HermanosPage;
  tab3Root = ReunionesPage;

  constructor() {

  }
}
