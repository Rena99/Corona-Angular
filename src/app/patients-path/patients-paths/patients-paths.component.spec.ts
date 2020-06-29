import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsPathsComponent } from './patients-paths.component';

describe('PatientsPathsComponent', () => {
  let component: PatientsPathsComponent;
  let fixture: ComponentFixture<PatientsPathsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientsPathsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientsPathsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
