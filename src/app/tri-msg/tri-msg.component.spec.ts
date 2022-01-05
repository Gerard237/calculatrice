import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriMsgComponent } from './tri-msg.component';

describe('TriMsgComponent', () => {
  let component: TriMsgComponent;
  let fixture: ComponentFixture<TriMsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TriMsgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TriMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
