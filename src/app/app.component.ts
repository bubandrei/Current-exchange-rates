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
  data: any;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    try {
      const http$ = this.httpService.getData(this.dateSelected);
      // .subscribe((data: any) => console.log(data[0]["table"]));
      // http$.subscribe((data: any) => {
      //   (this.current = data[0]["rates"], this.call = data[0], this.loading = false);
      // }, (error) => {
      //   console.log(error, 'Not works');
      // }
      // );
      http$.pipe(
        catchError((err) => {
          // console.log('rethrowing error', err);
          return throwError(() => new Error(err.message));
        }),
        catchError((err) => {
          // console.log('caught rethrown error', err);
          return of('Http call failed');
        }),
      )
        .subscribe({
          next: (data: any) => {
            (this.data = data, this.current = data[0]["rates"], this.call = data[0], this.loading = false)
          }
        });
    } catch (err) {
      console.log(err, 'second');
    } finally {
      console.log('sync finally block');
    }
  }

  fetchDate() {
    this.loading = true;
    const http$ = this.httpService.getData(this.dateSelected);
    // .subscribe((data: any) => console.log(data[0]["table"]));
    http$.subscribe((data: any) => (this.current = data[0]["rates"], this.call = data[0], this.loading = false));
  }

}

