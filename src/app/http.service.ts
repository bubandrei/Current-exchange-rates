// import { Injectable } from "@angular/core";
// import { HttpClient } from "@angular/common/http";

// @Injectable()
// export class HttpService {
//   constructor(private http: HttpClient) {}

//   getData() {
//     return this.http.get("assets/users.json");
//   }
// }
import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, delay, Observable, throwError } from "rxjs";
import { map } from "rxjs";
import { Currency } from "./currency";

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) { }

  getData(date: string): Observable<Currency[]> {
    if (date) {
      return this.http.get("http://api.nbp.pl/api/exchangerates/tables/A/" + date + "/?format=json")
        .pipe(map((data: any) => {
          let userCurrency = data;
          return userCurrency.map(function (item: any): Currency {
            return new Currency(item.table, item.no, item.effectiveDate, item.rates)
          })
        }),delay(2000));
    }
    else {
      return this.http.get("https://api.nbp.pl/api/exchangerates/tables/A/?format=json")
        .pipe(map((data: any) => {
          let userCurrency = data;
          return userCurrency.map(function (item: any): Currency {
            return new Currency(item.table, item.no, item.effectiveDate, item.rates)
          })
        }),delay(2000));
    }
  }
}
//   private handleError(error: HttpErrorResponse) {
//     if (error.status === 0) {
//       // A client-side or network error occurred. Handle it accordingly.
//       console.error('An error occurred:', error.error);
//     } else {
//       // The backend returned an unsuccessful response code.
//       // The response body may contain clues as to what went wrong.
//       console.error(
//         `Backend returned code ${error.status}, body was: `, error.error);
//     }
//     // Return an observable with a user-facing error message.
//     return throwError(() => new Error('Something bad happened; please try again later.'));
//   }
// };

  // getData(date: string) {
  //   if (date) {
  //     return this.http.get("http://api.nbp.pl/api/exchangerates/tables/A/" + date + "/?format=json")
  //   } else {
  //     return this.http.get("https://api.nbp.pl/api/exchangerates/tables/A/?format=json");
  //   }
  // }

