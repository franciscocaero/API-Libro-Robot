import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiviewPage } from './apiview.page';

describe('ApiviewPage', () => {
  let component: ApiviewPage;
  let fixture: ComponentFixture<ApiviewPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
