import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TemplateForm } from './template-form';
@Component({
  selector: 'wpl-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css'],
 // changeDetection: ChangeDetectionStrategy.OnPush
})
export class HealthComponent implements OnInit {
  public templateData: TemplateForm;
  public gender: Array<string>;
  constructor() { }

  ngOnInit() {
    this.templateData = new TemplateForm('', 'B', 'C', 25, 'Female');
    this.gender = ['--Select--', 'Male', 'Female'];
    console.log(this.templateData);
  }
  resetForm() {
    this.templateData = new TemplateForm('', '', '', 0, '');
  }
}
