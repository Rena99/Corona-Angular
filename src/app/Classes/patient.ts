import { PatientsPath } from "./patientsPath"

export class Patient {
    public id: number
    public pName: string
    public password: number
    public paths: PatientsPath[]
    public cookie: string
  static password: number
  static id: number
  static age: number
    constructor(i:number, n:string, p:number, ps:PatientsPath[]) {
        this.id=i;
        this.pName=n;
        this.password=p;
        this.paths=ps;
    }
}