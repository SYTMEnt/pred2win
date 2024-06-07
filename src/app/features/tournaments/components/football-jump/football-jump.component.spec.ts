import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballJumpComponent } from './football-jump.component';

describe('FootballJumpComponent', () => {
  let component: FootballJumpComponent;
  let fixture: ComponentFixture<FootballJumpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FootballJumpComponent]
    });
    fixture = TestBed.createComponent(FootballJumpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
