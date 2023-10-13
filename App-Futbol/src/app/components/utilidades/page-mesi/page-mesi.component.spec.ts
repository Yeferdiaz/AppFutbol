import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMesiComponent } from './page-mesi.component';

describe('PageMesiComponent', () => {
  let component: PageMesiComponent;
  let fixture: ComponentFixture<PageMesiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageMesiComponent]
    });
    fixture = TestBed.createComponent(PageMesiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
