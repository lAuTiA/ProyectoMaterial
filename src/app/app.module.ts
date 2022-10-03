import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Componente1Component } from './componentes/componente1/componente1.component';
import { Componente2Component } from './componentes/componente2/componente2.component';
import { Componente3Component } from './componentes/componente3/componente3.component';
import { Componente4Component } from './componentes/componente4/componente4.component';
import { MenuComponent } from './menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule} from '@angular/material/menu';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from'@angular/material/datepicker';
import { MatTabsModule } from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    Componente1Component,
    Componente2Component,
    Componente3Component,
    Componente4Component,
    MenuComponent,
    ContactoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatGridListModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatTabsModule,
    MatTableModule,
    ReactiveFormsModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
