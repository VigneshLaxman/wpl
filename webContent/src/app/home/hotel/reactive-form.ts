import { stagger } from '@angular/core/src/animation/dsl';

export class Employee {
    id: number;
    name: string;
    age: number;
    address: Address[];
    gender: string;
}
export class Address {
    // area: string;
    // city: string;
    // state: string;
    constructor(public area, public city, public state) {
      // this.area = '';
      // this.city = '';
      // this.state = '';
    }
}
export const EmpData: Employee[] = [
    {
      id: 1,
      name: 'Vignesh',
      age : 27,
      gender : 'M',
      address: [
        {area: 'Thiruvanmiyur',  city: 'Chennai', state: 'TN'},
        {area: 'Siruseri', city: 'Chennai', state: 'TN'},
      ]
    },
    {
      id: 2,
      name: 'Vignesh1',
      age : 27,
      gender : 'M',
      address: [
        {area: 'Neeladri',  city: 'BBSR', state: 'OR'},
      ]
    },
    {
      id: 3,
      name: 'Vignesh2',
      age : 27,
      gender : 'M',
      address: [ ]
    },
  ];

  export const States = ['TN', 'OR', 'KA', 'AP'];
