import { Component, OnInit } from "@angular/core";
import { HttpService } from "./http.service";
import { Currency } from "./currency";
import { catchError, of, throwError } from "rxjs";
import { MessageService } from "primeng/api";
import { MatDatepicker } from "@angular/material/datepicker";
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [HttpService]
})
export class AppComponent implements OnInit {
  title = 'table';
  current: Currency[] = [];
  dateSelected: any = '';
  loading: boolean = true;
  error: string = '';
  isDarkTheme = false;

  changeTheme(theme: string) {
    this.isDarkTheme = !this.isDarkTheme;
    this.themeService.switchTheme(theme);
}
  constructor(private httpService: HttpService, private themeService: ThemeService) {}

  ngOnInit() {
    try {
      const http$ = this.httpService.getData(this.dateSelected);
      http$.pipe(
        catchError((err) => {
          return throwError(() => new Error(err.message));
        }),
        catchError((err) => {
          return of(this.error = 'Page not found');
        }),
      )
        .subscribe({
          next: (data: any) => {
            (this.current = data[0]["rates"], this.loading = false);
          }
        });
    } catch (err) {
      console.log(err);
    } finally {
      console.log('sync finally block');
    }

  }

  fetchDate() {
    function addZero(num: string | number) {
      if (num >= 0 && num <= 9) {
        return '0' + num;
      } else {
        return num;
      }
    }
    this.loading = true;
    this.error = '';
    try {
      const http$ = this.httpService.getData(this.dateSelected.getFullYear() + '-' + addZero(this.dateSelected.getMonth()+1) + '-' + addZero(this.dateSelected.getDate()));
      http$.pipe(
        catchError((err) => {
          return throwError(() => new Error(err.message));
        }),
        catchError((err) => {
          return of(this.error = 'Page not found');
        }),
      )
        .subscribe({
          next: (data: any) => {
            (this.current = data[0]["rates"], this.loading = false);
          }
        });
    } catch (err) {
      console.log(err);
    } finally {
      console.log('sync finally block');
    }

  }
}



