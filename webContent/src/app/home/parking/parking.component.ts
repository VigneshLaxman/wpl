import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'wpl-parking',
  templateUrl: './parking.component.html',
  styleUrls: ['./parking.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParkingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
