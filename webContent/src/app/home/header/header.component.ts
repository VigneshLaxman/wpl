import {
    Component,
    OnInit,
    ChangeDetectionStrategy,
    Input,
    Output,
    HostListener,
    EventEmitter,
    ViewEncapsulation,
    Optional
  } from '@angular/core';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { SimpleChange } from '@angular/core/src/change_detection/change_detection_util';
import { HeaderService } from './header.service';
import { Subscription } from 'rxjs/Subscription';
import { HomeComponent } from '../home.component'


@Component({
  selector: 'wpl-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
  inputs: ['t : title', 'c : color'],
  encapsulation: ViewEncapsulation.Native,
  interpolation : ['#', '#'],
  //providers: [HeaderService]
})
export class HeaderComponent implements OnInit, OnChanges {
  @Input() color: string; // Overrides metadata
  public _title: string;
  public subscription: Subscription;
  //@Input() title: string;
  @Input() id: string;
  @Input()
  set title(titleVal: string) {
    this._title = titleVal == 'green' ? 'orange' : 'black';
  }
  @Output() changeColor: EventEmitter<any> = new EventEmitter();
  public changeFlag: boolean;
  public dummyText: string;
  constructor(public service: HeaderService) {
    console.log("home",);
    this.changeFlag = false;
    this.dummyText = 'testing123';
    this.subscription = this.service.obs1.subscribe(
      (newcolor) => {
        this.color = newcolor;
      }
    );

  }
  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    for ( const propName in changes) {
      const currentProp = changes[propName];
      //console.log("currentProp", currentProp);
      if (!currentProp.firstChange) {
       // console.log('newValue', currentProp.currentValue);
        //console.log('oldValue', currentProp.previousValue);
      } else {
        //console.log('initial current value', currentProp.currentValue, propName);
      }
    }
  }
  ngOnInit() {
  }
  @HostListener('mouseover') onmouseenter() {
    // this.color = "green";
    this.changeColorFn();
  }
  changeColorFn() {
    if (this.changeFlag) {
      this.changeColor.emit(['green', this.id]);
    } else {
      this.changeColor.emit(['blue', this.id]);
    }
    this.changeFlag = !this.changeFlag;
  }



}
