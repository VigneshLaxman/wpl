import { Component, OnInit, ChangeDetectionStrategy, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Employee, Address, States, EmpData } from './reactive-form';
import {forbiddenNameValidator, forbiddenNumberValidator } from './custom-validation.directive';

@Component({
  selector: 'wpl-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class HotelComponent implements OnInit, AfterViewInit {
  name: FormControl;
  formGrp: FormGroup;
  states = States;
  address: Address[];
  constructor(private formBldr: FormBuilder) {
    this.buildForm();
    this.address = [new Address('ragav', 27, 'm')];
    this.setAddresses(this.address);
    this.states = States;
    //console.log(EmpData[1]);
    //const addressFGs = Address.map(address => this.fb.group(address));
  }
  setAddresses(addresses: Address[]) {
    const addressFGs = addresses.map(address => this.formBldr.group(address));
    const addressFormArray = this.formBldr.array(addressFGs);
    this.formGrp.setControl('addressArr', addressFormArray);
   // console.log('set addressArr');
  }
  get addressArr(): FormArray {
    return this.formGrp.get('addressArr') as FormArray;
  }
  addAddress() {
    this.addressArr.push(this.formBldr.group(new Address('', '', '')));
  }
  removeAddress() {
    this.addressArr.removeAt(this.addressArr.length - 1);
  }
  ngOnInit() {
    // this.formGrp = new FormGroup({
    //   name : new FormControl()
    // })
  }
  ngAfterViewInit() {
    this.formGrp.valueChanges.subscribe(
      val => {
        console.log('form Changes', val);
      }
    );
    this.formGrp.get('name').valueChanges.subscribe(
      val => {
        console.log('name change only', val);
      }
    );
  }
  buildForm() {
    // Form Group start
    // this.formGrp = this.formBldr.group({
    //   name : ['', Validators.required],
    //   age : '',
    //   address : this.formBldr.group({
    //     area : '',
    //     city : '',
    //     state : ''
    //   }),
    //   gender : ''
    // });
    // this.formGrp = this.formBldr.group({
    //   name : ['', Validators.required],
    //   age : '',
    //   address : this.formBldr.group(new Address()),
    //   gender : ''
    // });
    // Form Group end
    // Form array start
    this.formGrp = this.formBldr.group({
      name : ['', [Validators.required, Validators.minLength(4), forbiddenNameValidator(/bob/i)]],
      age : ['', [Validators.required, forbiddenNumberValidator(1)]],
      addressArr : this.formBldr.array(
        [
          //this.formBldr.group(new Address('Thiruvanmiyur','Chennai','TN')),
         //this.formBldr.group(new Address('Thiruvanmiyur1','Chennai1','TN'))
        ]
      ),
      gender : ''
    });
    //console.log("initialised Addressarr");
  }
  udpateName() {
    this.formGrp.patchValue({
      name : 'Vignesh New'
    });
  }
  updateForm() {
    //reset also same
    //Fo9r additional values need to add and then set value
    this.formGrp.setValue({
      name : 'Vignesh',
      age : 27,
      addressArr : [{
        area : 'Thiru',
         city : 'Chennai',
         state : 'TN'
      }, {
        area : '1Thiru',
         city : '1Chennai',
         state : 'TN'
      }],
      gender : 'm'
    });
    //Doesnt work if there are additional param like id
    //this.formGrp.setValue(EmpData[1]);
  }

}
