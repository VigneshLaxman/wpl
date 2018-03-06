import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, ValidatorFn, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[wplCustomValidation]',
  providers: [{provide: NG_VALIDATORS, useExisting: CustomValidationDirective, multi: true}]
})
export class CustomValidationDirective {
  // @Input() restrictCondition : string;
  // constructor() { }
  // forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  //   return (control: AbstractControl): {[key: string]: any} => {
  //     const forbidden = nameRe.test(control.value);
  //     return forbidden ? {'forbiddenName': {value: control.value}} : null;
  //   };
  // }
  // validate(control: AbstractControl): {[key: string]: any} {
  //   return this.restrictCondition ? this.forbiddenNameValidator(new RegExp(this.restrictCondition, 'i'))(control)
  //                             : null;
  // }
  //   return
  }

export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? {'forbiddenName': {value: control.value}} : null;
  };
}
export function forbiddenNumberValidator(num: number): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const forbidden = num == control.value;
    return forbidden ? {'forbiddenNumber': {value: control.value}} : null;
  };
}
