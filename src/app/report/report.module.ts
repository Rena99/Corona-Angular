import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportComponent } from './report.component';
import { RouterModule } from '@angular/router';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table'  
import { CdkTableModule} from '@angular/cdk/table';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ReportComponent],
  imports: [
    RouterModule.forChild([
      {path:'allpaths', component: ReportComponent},
    ]),
    CommonModule,
    MatPaginatorModule,
    MatTableModule,
    CdkTableModule,
    FormsModule
    ]
})
export class ReportModule { }
