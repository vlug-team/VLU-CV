import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeTemplateTNNComponent } from './resume-template-tnn.component';

describe('ResumeTemplateTNNComponent', () => {
  let component: ResumeTemplateTNNComponent;
  let fixture: ComponentFixture<ResumeTemplateTNNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeTemplateTNNComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeTemplateTNNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
