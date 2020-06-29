import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPathComponent } from './new-path.component';

describe('NewPathComponent', () => {
  let component: NewPathComponent;
  let fixture: ComponentFixture<NewPathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
