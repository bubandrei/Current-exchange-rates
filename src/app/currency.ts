// export class Currency {
//   constructor(
//     public currency: string,
//     public code: string,
//     public mid: number
//   ) {}
// }
export class Currency {
  constructor(
    public table: string,
    public no: string,
    public effectiveDate: string,
    public rates: [
      {
        currency: string;
        code: string;
        mid: number;
      }
    ]
  ) {}
}
