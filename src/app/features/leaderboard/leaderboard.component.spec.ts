import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderboardComponent } from './../leaderboard/leaderboard.component';

describe('MatchesComponent', () => {
  let component: LeaderboardComponent;
  let fixture: ComponentFixture<LeaderboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeaderboardComponent]
    });
    fixture = TestBed.createComponent(LeaderboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
