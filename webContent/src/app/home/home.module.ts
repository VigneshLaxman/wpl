import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { HealthComponent } from './health/health.component';
import { HotelComponent } from './hotel/hotel.component';
import { ParkingComponent } from './parking/parking.component';
import { WorkspaceComponent } from './workspace/workspace.component';


@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
 exports: [HomeComponent],
  declarations: [HomeComponent, HeaderComponent, FooterComponent, MenuComponent, HealthComponent, HotelComponent, ParkingComponent, WorkspaceComponent]
})
export class HomeModule { }
