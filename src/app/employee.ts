export class Employee {
  id: number;
  firstName: string;
  lastName: string;
  position: string;
  copensation: number;
  directReports?: Array<number>;
}
