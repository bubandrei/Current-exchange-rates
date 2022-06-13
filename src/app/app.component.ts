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
  date: string = "2022-03-02";
  searchCar: string = "";
  cur: Currency[] = [];

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.httpService
      .getData(this.date)
      .subscribe((data: any) => console.log(data));
    //  (this.cur = data[0]["rates"]));
  }
}
