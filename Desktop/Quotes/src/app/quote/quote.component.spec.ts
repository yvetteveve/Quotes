import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { quoteComponent } from './quote.component';

describe('quoteComponent', () => {
  let component: quoteComponent;
  let fixture: ComponentFixture<quoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ quoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(quoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
