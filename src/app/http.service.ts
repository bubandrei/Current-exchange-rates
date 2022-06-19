import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { delay, Observable } from "rxjs";
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
        }), delay(2000));
    }
    else {
      return this.http.get("https://api.nbp.pl/api/exchangerates/tables/A/?format=json")
        .pipe(map((data: any) => {
          let userCurrency = data;
          return userCurrency.map(function (item: any): Currency {
            return new Currency(item.table, item.no, item.effectiveDate, item.rates)
          })
        }), delay(2000));
    }
  }
}

