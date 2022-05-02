import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperReportComponent } from './developer-report.component';

describe('DeveloperReportComponent', () => {
  let component: DeveloperReportComponent;
  let fixture: ComponentFixture<DeveloperReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeveloperReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeveloperReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
