import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PollDialogComponent } from './poll-dialog.component';

describe('PollDialogComponent', () => {
  let component: PollDialogComponent;
  let fixture: ComponentFixture<PollDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PollDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PollDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
