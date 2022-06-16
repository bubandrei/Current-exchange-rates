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
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs";
import { Currency } from "./currency";

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) { }

  getData(date: string): Observable<Currency[]> {
    if (date) {
      return this.http.get("http://api.nbp.pl/api/exchangerates/tables/A/" + date + "/?format=json")
      .pipe(map((data:any)=>{
        let userCurrency = data;
        return userCurrency.map(function(user:any):Currency{
          return new Currency(user.table, user.no, user.effectiveDate, user.rates)
        })
      }))
    }
    else {
      return this.http.get("https://api.nbp.pl/api/exchangerates/tables/A/?format=json")
      .pipe(map((data:any)=>{
        let userCurrency = data;
        return userCurrency.map(function(user:any):Currency{
          return new Currency(user.table, user.no, user.effectiveDate, user.rates)
        })
      }))
    }
  }
  // getData(date: string) {
  //   if (date) {
  //     return this.http.get("http://api.nbp.pl/api/exchangerates/tables/A/" + date + "/?format=json")
  //   } else {
  //     return this.http.get("https://api.nbp.pl/api/exchangerates/tables/A/?format=json");
  //   }
  // }
}
