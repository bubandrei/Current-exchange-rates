import { Component, OnInit, OnChanges, DoCheck } from "@angular/core";
import { HttpService } from "./http.service";
import { Currency } from "./currency";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [HttpService]
})
export class AppComponent implements OnInit {
  [x: string]: any;
  searchCar: string = "";
  current: Currency[] = [];
  call: any = [];
  dateSelected: string = '';

  constructor(private httpService: HttpService) { }


  ngOnInit() {
    this.httpService
      .getData(this.dateSelected)
      // .subscribe((data: any) => console.log(data[0]["table"]));
      .subscribe((data: any) =>
        (this.current = data[0]["rates"])
          (this.call = data[0]));
  }
  fetchDate() {
    this.httpService
      .getData(this.dateSelected)
      // .subscribe((data: any) => console.log(data[0]["table"]));
      .subscribe((data: any) =>
        (this.current = data[0]["rates"])
          (this.call = data[0]));
  }
}
