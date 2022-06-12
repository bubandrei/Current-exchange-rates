// import { Component } from "@angular/core";

// @Component({
//   selector: 'app-root',
//   template: `<div>
//                   <h3>Hi!</h3>x
//                   <div>{{name}}</div>
//                   <div>{{name | lowercase}}</div>
//                   <div>{{name | uppercase}}</div>
//                   <div>{{name | slice:0:3}}</div>
//                   <div>{{name | slice:3:6 | uppercase}}</div>
//                   <hr>
//                   <h2>{{pi}}</h2>
//                   <div>{{pi | number}}</div>
//                   <div>{{pi | number:'1.3-4'}}</div>
//                   <div>{{pi | number:'2.2-2'}}</div>
//                   <hr>
//                   <h2>{{money | currency:'EUR'}}</h2>
//                   <hr>
//                   <h2>{{date}}</h2>
//                   <div>{{date | date}}</div>
//                   <div>{{date | date: 'fullDate'}}</div>
//                   <div>{{date | date: 'shortTime'}}</div>
//                   <h2>{{amount}}</h2>
//                   <div>{{amount | percent}}</div>
//                   <hr>
//                   <div>{{object}}</div>
//                   <div>{{object | json}}</div>

//               </div>`
// })
// export class AppComponent {
//   name = 'WebForMyself';
//   pi = Math.PI;
//   money = 350;
//   date = new Date();
//   amount = 0.45;
//   object = {
//     foo: 'bar',
//     baz: 'qux',
//     nested: {
//       xyz: 3,
//       numbers: [1, 2, 3]
//     }
//   };
// }
