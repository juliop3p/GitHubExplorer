import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRepoComponent } from './card-repo.component';

describe('CardRepoComponent', () => {
  let component: CardRepoComponent;
  let fixture: ComponentFixture<CardRepoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardRepoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardRepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
