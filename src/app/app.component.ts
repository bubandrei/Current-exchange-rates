import { Component, OnInit } from "@angular/core";
import { HttpService } from "./http.service";
import { Currency } from "./currency";
import { catchError, of } from "rxjs";
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

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    try {
      this.httpService
        .getData(this.dateSelected)
        // .subscribe((data: any) => console.log(data[0]["table"]));
        .subscribe((data: any) =>
          (this.current = data[0]["rates"], this.call = data[0], this.loading = false));
    } catch (error) {
      console.log('tttt')
    }



  }
  fetchDate() {
    this.loading =true;
    this.httpService
      .getData(this.dateSelected)
      // .subscribe((data: any) => console.log(data[0]["table"]));
      .subscribe((data: any) => (this.current = data[0]["rates"], this.call = data[0], this.loading = false));
  }
}
function data(data: any) {
  throw new Error("Function not implemented.");
}

