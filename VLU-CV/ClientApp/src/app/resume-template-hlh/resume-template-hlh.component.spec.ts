import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeTemplateHLHComponent } from './resume-template-hlh.component';

describe('ResumeTemplateLCPComponent', () => {
  let component: ResumeTemplateHLHComponent;
  let fixture: ComponentFixture<ResumeTemplateHLHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeTemplateHLHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeTemplateHLHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
