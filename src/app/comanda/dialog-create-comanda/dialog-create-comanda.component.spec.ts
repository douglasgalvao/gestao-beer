import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCreateComandaComponent } from './dialog-create-comanda.component';

describe('DialogCreateComandaComponent', () => {
  let component: DialogCreateComandaComponent;
  let fixture: ComponentFixture<DialogCreateComandaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogCreateComandaComponent]
    });
    fixture = TestBed.createComponent(DialogCreateComandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
