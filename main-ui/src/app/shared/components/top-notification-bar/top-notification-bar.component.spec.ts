import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNotificationBarComponent } from './top-notification-bar.component';

describe('TopNotificationBarComponent', () => {
  let component: TopNotificationBarComponent;
  let fixture: ComponentFixture<TopNotificationBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopNotificationBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopNotificationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
