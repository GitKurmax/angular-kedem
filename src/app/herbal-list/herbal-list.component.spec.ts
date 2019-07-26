import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HerbalListComponent } from './herbal-list.component';

describe('HerbalListComponent', () => {
  let component: HerbalListComponent;
  let fixture: ComponentFixture<HerbalListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HerbalListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerbalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
