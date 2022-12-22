import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningcomponentComponent } from './warningcomponent.component';

describe('WarningcomponentComponent', () => {
  let component: WarningcomponentComponent;
  let fixture: ComponentFixture<WarningcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarningcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarningcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
