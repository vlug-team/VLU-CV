import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeTemplateLCPComponent } from './resume-template-lcp.component';

describe('ResumeTemplateLCPComponent', () => {
  let component: ResumeTemplateLCPComponent;
  let fixture: ComponentFixture<ResumeTemplateLCPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeTemplateLCPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeTemplateLCPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
