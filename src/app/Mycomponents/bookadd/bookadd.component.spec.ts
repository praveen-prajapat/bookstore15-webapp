import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookaddComponent } from './bookadd.component';

describe('BookaddComponent', () => {
  let component: BookaddComponent;
  let fixture: ComponentFixture<BookaddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookaddComponent]
    });
    fixture = TestBed.createComponent(BookaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
