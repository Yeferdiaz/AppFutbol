import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRonaldoComponent } from './page-ronaldo.component';

describe('PageRonaldoComponent', () => {
  let component: PageRonaldoComponent;
  let fixture: ComponentFixture<PageRonaldoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageRonaldoComponent]
    });
    fixture = TestBed.createComponent(PageRonaldoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
