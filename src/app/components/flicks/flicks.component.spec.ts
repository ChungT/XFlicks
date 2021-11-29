import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlicksComponent } from './flicks.component';

describe('FlicksComponent', () => {
  let component: FlicksComponent;
  let fixture: ComponentFixture<FlicksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlicksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlicksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
