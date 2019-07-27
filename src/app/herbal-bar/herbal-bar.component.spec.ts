import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HerbalBarComponent } from './herbal-bar.component';

describe('HerbalBarComponent', () => {
  let component: HerbalBarComponent;
  let fixture: ComponentFixture<HerbalBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HerbalBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerbalBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
