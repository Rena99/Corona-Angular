import { PatientsPath } from '../Classes/patientsPath';
import { HttpContextService } from '../http-context/http-context.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  displayedColumns: string[] = ['startDate', 'endDate', 'city', 'location'];
  ELEMENT_DATA: PatientsPath[] = [];
  temp:PatientsPath[];
  sortBy: string;
  test:any;
  dataSource = new MatTableDataSource<PatientsPath>(this.ELEMENT_DATA);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  urlPath = "http://localhost:52459/api/location/getalllist";
  constructor(private httpContext: HttpContextService) { }
  ngOnChanges(str:string) {
    if (str === 'city') {
        this.ELEMENT_DATA.sort(sortByCity);
    }
    if (str === 'location') {
      this.ELEMENT_DATA.sort(sortByLocation);
    }
    if (str === 'startDate') {
      this.ELEMENT_DATA.sort(sortBySDate);
    }
    if (str === 'endDate') {
      this.ELEMENT_DATA.sort(sortByEDate);
    }
    this.dataSource = new MatTableDataSource<PatientsPath>(this.ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;
  }
  filter(test:string){
    this.temp=this.transform(this.ELEMENT_DATA, test);
    this.dataSource = new MatTableDataSource<PatientsPath>(this.temp);
    this.dataSource.paginator = this.paginator;
  }
  transform(itemList: any, searchKeyword: string) {
    if (!itemList)
      return [];
    if (!searchKeyword)
      return itemList;
    let filteredList = [];
    if (itemList.length > 0) {
      searchKeyword = searchKeyword.toLowerCase();
      itemList.forEach(item => {
        //Object.values(item) => gives the list of all the property values of the 'item' object
        let propValueList = Object.values(item);
        for(let i=0;i<propValueList.length;i++)
        {
          if (propValueList[i]) {
            if (propValueList[i].toString().toLowerCase().indexOf(searchKeyword) > -1)
            {
              filteredList.push(item);
              break;
            }
          }
        }
      });
    }
    return filteredList;
  }
  ngOnInit(): void {
    this.httpContext.getLocations(this.urlPath).subscribe({
      next: path => {
        this.ELEMENT_DATA = path;
        this.temp=this.ELEMENT_DATA;
        this.dataSource = new MatTableDataSource<PatientsPath>(this.ELEMENT_DATA);
        this.dataSource.paginator = this.paginator;
      },
      error: err => {
        console.log(err);
      }
    })
  }

}
function sortByCity(p1:PatientsPath, p2:PatientsPath){
  if(p1.city>p2.city) return 1;
  if(p1.city===p2.city) return 0;
  if(p1.city<p2.city) return -1;
}
function sortByLocation(p1:PatientsPath, p2:PatientsPath){
  if(p1.locationC>p2.locationC) return 1;
  if(p1.locationC===p2.locationC) return 0;
  if(p1.locationC<p2.locationC) return -1;
}
function sortBySDate(p1:PatientsPath, p2:PatientsPath){
  if(p1.startDate>p2.startDate) return 1;
  if(p1.startDate===p2.startDate) return 0;
  if(p1.startDate<p2.startDate) return -1;
}
function sortByEDate(p1:PatientsPath, p2:PatientsPath){
  if(p1.endDate>p2.endDate) return 1;
  if(p1.endDate===p2.endDate) return 0;
  if(p1.endDate<p2.endDate) return -1;
}