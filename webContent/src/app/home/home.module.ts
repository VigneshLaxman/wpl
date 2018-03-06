import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { HealthComponent } from './health/health.component';
import { HotelComponent } from './hotel/hotel.component';
import { ParkingComponent } from './parking/parking.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { HeaderService } from './header/header.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ServiceFilterPipe } from './service-filter.pipe';
import { CustomValidationDirective, forbiddenNameValidator } from './hotel/custom-validation.directive';
import { Dynamic1Component } from './dynamic1/dynamic1.component';
import { Dynamic2Component } from './dynamic2/dynamic2.component';
import { DynamicHostDirective } from './parking/dynamic-host.directive';
import { InterceptorService } from './interceptor.service';
@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [HeaderService, {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}],
  exports: [HomeComponent],
  entryComponents: [ Dynamic1Component, Dynamic2Component],
  declarations: [HomeComponent, HeaderComponent, FooterComponent, MenuComponent, HealthComponent, HotelComponent, ParkingComponent, WorkspaceComponent, ServiceFilterPipe, CustomValidationDirective, Dynamic1Component, Dynamic2Component, DynamicHostDirective]
})
export class HomeModule { }
