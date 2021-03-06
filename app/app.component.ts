import { Component } from '@angular/core';

export class Doctor {
  id: number;
  name: string;
}

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <div>
      <label>name: </label>
      <input [(ngModel)]="doctor.name" placeholder="name">
    </div>
    `
})
export class AppComponent {
  title = 'Doctor details';
  doctor: Doctor = {
    id: 1,
    name: 'Bianchi'
  };
}



/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
