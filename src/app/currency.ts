// export class Currency {
//   constructor(
//     public currency: string,
//     public code: string,
//     public mid: number
//   ) {}
// }
export class Currency {
  constructor(
    public table: any,
    public no: any,
    public effectiveDate: any,
    public rates: [
      {
        currency: any;
        code: any;
        mid: any;
      }
    ]
  ) {}
}
