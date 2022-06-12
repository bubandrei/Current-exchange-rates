import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  template: `<div>
                  <h3>Hi!</h3>
                  <h2>{{num}}</h2>
                  <!-- <h2>{{num | appPow:3}}</h2>
                  <h2>{{num | appPow:5}}</h2> -->
                  <h2>{{15 | appPow:3:'='}}</h2>

              </div>`
})
export class AppComponent {
  num = 2;
}
