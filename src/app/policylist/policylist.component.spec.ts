import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicylistComponent } from './policylist.component';

describe('PolicylistComponent', () => {
  let component: PolicylistComponent;
  let fixture: ComponentFixture<PolicylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolicylistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
