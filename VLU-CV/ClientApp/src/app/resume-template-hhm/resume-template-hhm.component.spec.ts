import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeTemplateHHMComponent } from './resume-template-hhm.component';

describe('ResumeTemplateHHMComponent', () => {
  let component: ResumeTemplateHHMComponent;
  let fixture: ComponentFixture<ResumeTemplateHHMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeTemplateHHMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeTemplateHHMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
