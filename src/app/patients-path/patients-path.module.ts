import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewPatientComponent } from './new-patient/new-patient.component';
import { TitleComponent } from './title/title.component';
import { PatientsPathRoutingModule } from './patients-path-routing.module';
import { HttpContextModule } from 'src/app/http-context/http-context.module';
import { NewPathComponent } from './new-path/new-path.component';
import { PatientsPathsComponent } from './patients-paths/patients-paths.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { PathsComponent } from './paths/paths.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { CdkTableModule} from '@angular/cdk/table';
import{MatAutocompleteModule} from '@angular/material/autocomplete';
import{MatButtonToggleModule} from '@angular/material/button-toggle';
import{MatChipsModule} from '@angular/material/chips';
import{MatExpansionModule} from '@angular/material/expansion';
import{MatGridListModule} from '@angular/material/grid-list';
import{MatListModule} from '@angular/material/list';
import{MatPaginatorModule} from '@angular/material/paginator';
import{MatRadioModule} from '@angular/material/radio';
import{MatSelectModule} from '@angular/material/select';
import{MatSliderModule} from '@angular/material/slider';
import{MatSlideToggleModule} from '@angular/material/slide-toggle';
import{MatSnackBarModule} from '@angular/material/snack-bar';
import{MatSortModule} from '@angular/material/sort';
import{MatTabsModule} from '@angular/material/tabs';
import{MatTooltipModule} from '@angular/material/tooltip';
import{MatStepperModule} from '@angular/material/stepper';
import{MatProgressBarModule} from '@angular/material/progress-bar';
import{MatSidenavModule} from '@angular/material/sidenav';


@NgModule({
  declarations: [
    NewPatientComponent,
    TitleComponent,
    NewPathComponent,
    PatientsPathsComponent,
    PathsComponent,
  ],
  imports: [
    CommonModule,
    PatientsPathRoutingModule,
    HttpContextModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatTableModule,
    MatToolbarModule,
    MatMenuModule, 
    MatIconModule, 
    MatProgressSpinnerModule,
    CdkTableModule,
    MatAutocompleteModule,
  MatButtonToggleModule,
  MatChipsModule,
  MatExpansionModule,
  MatGridListModule,
  MatListModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatRadioModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTabsModule,
  MatTooltipModule,
  MatStepperModule,
  ]
})
export class PatientsPathModule { }
