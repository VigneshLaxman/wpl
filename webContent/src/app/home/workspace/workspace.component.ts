import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'wpl-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkspaceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
