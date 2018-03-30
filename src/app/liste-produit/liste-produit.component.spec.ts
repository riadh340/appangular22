import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeProduitComponent } from './liste-produit.component';

describe('ListeProduitComponent', () => {
  let component: ListeProduitComponent;
  let fixture: ComponentFixture<ListeProduitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeProduitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});