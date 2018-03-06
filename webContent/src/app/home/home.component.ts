import { Component, OnInit, ChangeDetectionStrategy, ViewChildren, QueryList, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HeaderService } from './header/header.service';
import { ServiceFilterPipe } from './service-filter.pipe';
import 'rxjs/add/operator/publishReplay';
@Component({
  selector: 'wpl-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ServiceFilterPipe]
 // changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, AfterViewInit {
  public title: string;
  public color: string;
  public loopCount: any;
  public response: any;
  public returnVal: any;
  @ViewChildren(HeaderComponent) header: QueryList<HeaderComponent>;
  public childComponents: Array<HeaderComponent>;
  constructor(public service: HeaderService, public filterPipe: ServiceFilterPipe) {
    this.title = 'WPL Header';
    this.color = 'red';
    this.loopCount = [];
  }

  ngOnInit() {
    // this.returnVal = this.service.getCount().subscribe(
    //   data => {
    //     this.loopCount = this.filterPipe.transform(data);
    //   }
    // );
    this.returnVal = this.service.getCount().publishReplay().refCount();
  }
  ngAfterViewInit() {
    //this.service.makeCall();
  }
  changeInput(param: Array<any>) {
    this.childComponents = this.header.toArray();
    this.childComponents[param[1]].color = param[0];
    this.color = param[0];
  }

  changeServiceColorFn() {
    this.service.msgFn('yellow');
  }
}
