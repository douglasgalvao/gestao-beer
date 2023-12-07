import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaVendaDialogComponent } from './nova-venda-dialog.component';

describe('NovaVendaDialogComponent', () => {
  let component: NovaVendaDialogComponent;
  let fixture: ComponentFixture<NovaVendaDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NovaVendaDialogComponent]
    });
    fixture = TestBed.createComponent(NovaVendaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
