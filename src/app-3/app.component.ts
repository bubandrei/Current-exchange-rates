// import { Component } from "@angular/core";
// import { delay, Observable, of } from "rxjs";


// @Component({
//   selector: 'app-root',
//   template: `<div>
//                   <h3>Hi!</h3>
//                   <h2>{{asyncTitle | async}}</h2>
//                   <input type="text" [(ngModel)]="searchCar">
//                   <hr>
//                     <ul>
//                       <li *ngFor="let car of cars | carFilter:searchCar; let i = index">{{i + 1}} - {{car.name}}</li>
//                     </ul>
//               </div>`
// })
// export class AppComponent {
//   searchCar: string = '';
//   cars = [
//     { name: 'Ford' },
//     { name: 'Honda' },
//     { name: 'Mazda' },
//     { name: 'Geely' },
//     { name: 'Audi' }
//   ];

//   asyncTitle = of('Async title 3 seconds')
// }
import { Component } from '@angular/core'
import { Observable, interval } from 'rxjs'
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  template: `
    <p>Модель: {{ phone | async }}</p>
    <button (click)="showPhones()">
      Посмотреть модели
    </button>
  `,
})
export class AppComponent {
  phones = [
    'iPhone 7',
    'LG G 5',
    'Honor 9',
    'Idol S4',
    'Nexus 6P',
  ]

  phone!: Observable<string>
  constructor() {
    this.showPhones()
  }

  showPhones() {
    this.phone = interval(3000).pipe(
      map((i: number) => this.phones[i])
    )
  }
}
