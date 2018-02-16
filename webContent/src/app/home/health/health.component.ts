import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'wpl-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HealthComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
