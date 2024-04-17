import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmComponent } from './cm.component';

describe('CmComponent', () => {
  let component: CmComponent;
  let fixture: ComponentFixture<CmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CmComponent]
    });
    fixture = TestBed.createComponent(CmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
