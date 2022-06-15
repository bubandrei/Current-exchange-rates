import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { CarFilterPipe } from "./filter.pipe";
import { TableModule } from "primeng/table";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'primeng/calendar';

@NgModule({
  declarations: [AppComponent, CarFilterPipe],
  imports: [BrowserModule,
    FormsModule,
    HttpClientModule,
    TableModule,
    BrowserAnimationsModule,
    CalendarModule
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
