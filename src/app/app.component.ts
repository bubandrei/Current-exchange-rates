import { Component, OnInit } from "@angular/core";
import { HttpService } from "./http.service";
import { Currency } from "./currency";
import { catchError, of, Subscription, throwError } from "rxjs";
import { MessageService } from "primeng/api";


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [HttpService, MessageService]
})
export class AppComponent implements OnInit {

  searchCar: string = "";
  current: Currency[] = [];
  call: any = [];
  dateSelected: string = '';
  loading: boolean = true;
  error: string = '';

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    try {
      const http$ = this.httpService.getData(this.dateSelected);
      http$.pipe(
        catchError((err) => {
          return throwError(() => new Error(err.message));
        }),
        catchError((err) => {
          return of(this.error = 'Http call failed');
        }),
      )
        .subscribe({
          next: (data: any) => {
            (this.current = data[0]["rates"], this.call = data[0], this.loading = false)
          }
        });
    } catch (err) {
      console.log(err);
    } finally {
      console.log('sync finally block');
    }
  }

  fetchDate() {
    this.loading = true;
    this.error = '';
    try {
      const http$ = this.httpService.getData(this.dateSelected);
      http$.pipe(
        catchError((err) => {
          return throwError(() => new Error(err.message));
        }),
        catchError((err) => {
          return of(this.error = 'Http call failed');
        }),
      )
        .subscribe({
          next: (data: any) => {
            (this.current = data[0]["rates"], this.call = data[0], this.loading = false)
          }
        });
    } catch (err) {
      console.log(err);
    } finally {
      console.log('sync finally block');
    }

  }

}
