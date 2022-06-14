import { Component, OnInit } from "@angular/core";
import { HttpService } from "./http.service";
import { Currency } from "./currency";


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [HttpService]
})
export class AppComponent implements OnInit {
  date: string = "2022-02-28";
  searchCar: string = "";
  current: Currency[] = [];

  call: any = [];


  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService
      .getData(this.date)
      // .subscribe((data: any) => console.log(data[0]["table"]));
      .subscribe((data: any) =>
          (this.current = data[0]["rates"])
          (this.call = data[0]));
  }
}
