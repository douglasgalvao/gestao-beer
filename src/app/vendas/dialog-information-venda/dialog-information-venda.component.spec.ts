import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogInformationVendaComponent } from './DialogInformationVendaComponent';

describe('DialogInformationVendaComponent', () => {
  let component: DialogInformationVendaComponent;
  let fixture: ComponentFixture<DialogInformationVendaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogInformationVendaComponent]
    });
    fixture = TestBed.createComponent(DialogInformationVendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
