import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { HealthComponent } from './health/health.component';
import { HotelComponent } from './hotel/hotel.component';
import { ParkingComponent } from './parking/parking.component';
import { WorkspaceComponent } from './workspace/workspace.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'health', component: HealthComponent },
  { path: 'hotel', component: HotelComponent },
  { path: 'parking', component: ParkingComponent },
  { path: 'workspace', component: WorkspaceComponent }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
