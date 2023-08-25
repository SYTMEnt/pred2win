import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentListCardComponent } from './tournament-list-card.component';

describe('TournamentListCardComponent', () => {
  let component: TournamentListCardComponent;
  let fixture: ComponentFixture<TournamentListCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TournamentListCardComponent]
    });
    fixture = TestBed.createComponent(TournamentListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
