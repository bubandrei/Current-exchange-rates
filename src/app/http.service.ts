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

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) {}

  // getData() {
  //   return this.http.get(
  //     "https://api.nbp.pl/api/exchangerates/tables/A/?format=json"
  //   );
  // }
  getData(date: string) {
    return this.http.get(
      " http://api.nbp.pl/api/exchangerates/tables/A/" + date + "/?format=json"
    );
  }
}