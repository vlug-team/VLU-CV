import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeTemplateHTMComponent } from './resume-template-htm.component';

describe('ResumeTemplateHTMComponent', () => {
  let component: ResumeTemplateHTMComponent;
  let fixture: ComponentFixture<ResumeTemplateHTMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeTemplateHTMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeTemplateHTMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
