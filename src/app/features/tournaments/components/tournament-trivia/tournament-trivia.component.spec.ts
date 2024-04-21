import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentTriviaComponent } from './tournament-trivia.component';

describe('TournamentTriviaComponent', () => {
  let component: TournamentTriviaComponent;
  let fixture: ComponentFixture<TournamentTriviaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TournamentTriviaComponent]
    });
    fixture = TestBed.createComponent(TournamentTriviaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
