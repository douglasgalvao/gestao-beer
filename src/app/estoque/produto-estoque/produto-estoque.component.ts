import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProdutoElement } from 'src/app/vendas/vendas.component';
import { AddEstoqueConfirmComponent } from '../add-estoque-confirm/add-estoque-confirm.component';
import { NotificationService } from 'src/app/service/notification.service';
import { DefinirEstoqueDialogComponent } from '../definir-estoque-dialog/definir-estoque-dialog.component';


@Component({
  selector: 'app-produto-estoque',
  templateUrl: './produto-estoque.component.html',
  styleUrls: ['./produto-estoque.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 })),
      ]),
    ]),
  ]
})
export class ProdutoEstoqueComponent implements OnInit {
  @Input() produto!: ProdutoElement;

  constructor(private dialog: MatDialog, private notificationService: NotificationService) { }


  adicionarEstoque(produto: ProdutoElement) {
    this.dialog.open(AddEstoqueConfirmComponent, {
      data: produto,
      width: 'max-content',
      height: 'max-content',
      enterAnimationDuration: '350ms',
      exitAnimationDuration: '350ms'
    })
  }

  definirEstoqueMinimo(produto: ProdutoElement) {
    this.dialog.open(DefinirEstoqueDialogComponent, {
      data: produto,
      width: 'max-content',
      height: 'max-content',
      enterAnimationDuration: '350ms',
      exitAnimationDuration: '350ms'
    }
    );
  }

  ngOnInit(): void {
  }
}