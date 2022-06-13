import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "carFilter"
})
export class CarFilterPipe implements PipeTransform {
  transform(carList: any[], searchStr: string) {
    if (carList.length === 0 || searchStr === "") {
      return carList;
    }
    // return carList.filter((car) => car.name === searchStr);
    return carList.filter(
      (car) =>
        car.currency.toLowerCase().indexOf(searchStr.toLocaleLowerCase()) !== -1
    );
  }
}
