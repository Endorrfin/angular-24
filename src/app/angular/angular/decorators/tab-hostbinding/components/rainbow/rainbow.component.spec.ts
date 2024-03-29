import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RainbowComponent } from './rainbow.component';

describe('ReinbowComponent', () => {
  let component: RainbowComponent;
  let fixture: ComponentFixture<RainbowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RainbowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RainbowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
