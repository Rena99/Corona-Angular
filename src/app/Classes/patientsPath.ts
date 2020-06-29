export class PatientsPath {
    public id: number
    public startDate: Date
    public endDate: Date
    public city: string
    public locationC: string
    constructor(s: Date, e:Date, c:string, l:string) {
        this.startDate=s;
        this.endDate=e;
        this.city=c;
        this.locationC=l;
    }
}; 