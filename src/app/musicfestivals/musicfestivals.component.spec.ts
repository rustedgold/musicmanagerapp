import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicfestivalsComponent } from './musicfestivals.component';

describe('MusicfestivalsComponent', () => {
  let component: MusicfestivalsComponent;
  let fixture: ComponentFixture<MusicfestivalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicfestivalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicfestivalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
