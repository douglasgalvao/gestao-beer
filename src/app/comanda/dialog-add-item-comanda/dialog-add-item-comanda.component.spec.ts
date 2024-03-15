import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddItemComandaComponent } from './dialog-add-item-comanda.component';

describe('DialogAddItemComandaComponent', () => {
  let component: DialogAddItemComandaComponent;
  let fixture: ComponentFixture<DialogAddItemComandaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogAddItemComandaComponent]
    });
    fixture = TestBed.createComponent(DialogAddItemComandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
