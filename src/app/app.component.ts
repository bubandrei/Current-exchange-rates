import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  template: `<div>
                  <h3>Hi!</h3>
                  <input type="text" [(ngModel)]="searchCar">
                  <hr>
                    <ul>
                      <li *ngFor="let car of cars | carFilter:searchCar; let i = index">{{i + 1}} - {{car.name}}</li>
                    </ul>
              </div>`
})
export class AppComponent {
  searchCar: string = '';
  cars = [
    { name: 'Ford' },
    { name: 'Honda' },
    { name: 'Mazda' },
    { name: 'Geely' },
    { name: 'Audi' }
  ];
}
