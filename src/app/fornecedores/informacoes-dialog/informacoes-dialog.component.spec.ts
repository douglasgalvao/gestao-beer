import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacoesDialogComponent } from './informacoes-dialog.component';

describe('InformacoesDialogComponent', () => {
  let component: InformacoesDialogComponent;
  let fixture: ComponentFixture<InformacoesDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InformacoesDialogComponent]
    });
    fixture = TestBed.createComponent(InformacoesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
