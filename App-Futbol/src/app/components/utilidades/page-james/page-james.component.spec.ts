import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageJamesComponent } from './page-james.component';

describe('PageJamesComponent', () => {
  let component: PageJamesComponent;
  let fixture: ComponentFixture<PageJamesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageJamesComponent]
    });
    fixture = TestBed.createComponent(PageJamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
