import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlickItemComponent } from './flick-item.component';

describe('FlickItemComponent', () => {
  let component: FlickItemComponent;
  let fixture: ComponentFixture<FlickItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlickItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlickItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
