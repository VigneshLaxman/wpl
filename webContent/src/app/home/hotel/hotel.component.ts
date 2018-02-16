import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'wpl-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HotelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
