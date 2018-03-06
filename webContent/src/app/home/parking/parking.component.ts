import { Component, OnInit, ChangeDetectionStrategy, ComponentFactoryResolver, AfterViewInit, ViewChild } from '@angular/core';
import { DynamicHostDirective } from './dynamic-host.directive';
import { Dynamic1Component } from '../dynamic1/dynamic1.component';
import { Dynamic2Component } from '../dynamic2/dynamic2.component';
@Component({
  selector: 'wpl-parking',
  templateUrl: './parking.component.html',
  styleUrls: ['./parking.component.css'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParkingComponent implements OnInit, AfterViewInit {
  public componentFlag = false;
  public color: string;
  @ViewChild(DynamicHostDirective) host: DynamicHostDirective;
  constructor(public resolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.color = 'red';
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.toggleComponents(Dynamic1Component);
    }, 100);

    this.switchComponents();
  }
  toggleComponents(component) {
    const componentFactory = this.resolver.resolveComponentFactory(component);

     const tempRef = this.host.containerRef;
     console.log(this.host.containerRef);
     tempRef.clear();
     const compRef = tempRef.createComponent(componentFactory);
     (<any>compRef.instance).abc = 'test';
  }
  setColor(params: Array<any>) {
    console.log('param in parent', arguments);
  }
  toggleDirective() {
    if (this.color === 'red') {
      this.color = 'green';
    } else {
      this.color = 'red';
    }
  }
  switchComponents() {
    setInterval(() => {
      if (this.componentFlag) {
        this.toggleComponents(Dynamic1Component);
        this.componentFlag = false;
      } else {
        this.toggleComponents(Dynamic2Component);
        this.componentFlag = true;
      }
    }, 2000);

  }

}
