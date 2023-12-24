import { VendasService } from 'src/app/service/vendas.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { ClienteElement, ProdutoElement, VendaElementRequest } from '../vendas.component';
import { environment } from 'src/environments/environment';
import { ClienteService } from 'src/app/service/cliente.service';
import { ProdutoService } from 'src/app/service/produto.service';
import { MatSelectChange } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationService } from 'src/app/service/notification.service';
import { animate, style, transition, trigger } from '@angular/animations';
@Component({
  selector: 'app-nova-venda-dialog',
  templateUrl: './nova-venda-dialog.component.html',
  styleUrls: ['./nova-venda-dialog.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 })),
      ]),
    ]),
  ]
})
export class NovaVendaDialogComponent implements OnInit {

  constructor(private dialog: MatDialogRef<NovaVendaDialogComponent>, private clienteService: ClienteService,
    private produtoService: ProdutoService, private _snackBar: MatSnackBar, private _formBuilder: FormBuilder, private vendaService: VendasService,
    private notificationService: NotificationService) { }

  apiUrl = environment.apiUrl;
  clientes!: ClienteElement[];
  produtos!: ProdutoElement[];
  produtosAgrupados!: { categoria: string, produtos: ProdutoElement[] }[];
  clienteControl = new FormControl();
  statusPagamentoControl = new FormControl();
  formaPagamentoControl = new FormControl();
  produtoControl = new FormControl([] as ProdutoElement[]);
  form = new FormGroup({
    cliente: this.clienteControl,
    formaPagamento: this.formaPagamentoControl,
    statusPagamento: this.statusPagamentoControl,
    produto: this.produtoControl
  });


  agruparProdutosPorCategoria(produtos: ProdutoElement[]): { categoria: string, produtos: ProdutoElement[] }[] {
    return produtos.reduce((agrupamento: { categoria: string, produtos: ProdutoElement[] }[], produto) => {
      const categoriaNome = produto.categoriaProduto.nome;

      // Verifica se a categoria já existe no objeto de agrupamento
      const categoriaExistente = agrupamento.find(cat => cat.categoria === categoriaNome);

      if (categoriaExistente) {
        categoriaExistente.produtos.push(produto);
      } else {
        // Se a categoria não existe, cria um novo objeto com a categoria e o array de produtos
        agrupamento.push({ categoria: categoriaNome, produtos: [produto] });
      }
      return agrupamento;
    }, []);
  }


  incrementQuantity(produto: ProdutoElement | null) {
    if (produto) {
      const index = this.produtoControl.value!.findIndex((p: ProdutoElement) => p.id === produto.id);
      if (index !== -1) {
        const produtos: ProdutoElement[] = [...this.produtoControl.value!];
        produtos[index].quantidade = (produtos[index].quantidade || 1) + 1;
        produto.subtotal = produto.preco * (produto.quantidade || 1);
        this.produtoControl.setValue(produtos);
      } else {
        produto.quantidade = 1;
        this.produtoControl.setValue([...this.produtoControl.value!, produto]);
      }
    }
  }

  decrementQuantity(produto: ProdutoElement | null) {
    if (produto) {
      produto.quantidade = (produto.quantidade || 1) - 1;

      if (produto.quantidade <= 0) {
        const produtos: ProdutoElement[] = this.produtoControl.value!.filter((p: ProdutoElement) => p.id !== produto.id);
        this.produtoControl.setValue(produtos);
      } else {
        const index = this.produtoControl.value!.findIndex((p: ProdutoElement) => p.id === produto.id);
        const produtos: ProdutoElement[] = [...this.produtoControl.value!];
        produtos[index] = produto;
        produto.subtotal = produto.preco * (produto.quantidade || 1);
        this.produtoControl.setValue(produtos);
      }
    }
  }


  onProdutoSelectionChange(event: MatSelectChange): void {
    const produtosSelecionados = event.value as ProdutoElement[];

    produtosSelecionados.forEach((produto: ProdutoElement) => {
      produto.quantidade = produto.quantidade || 1;
      produto.subtotal = produto.preco * (produto.quantidade || 1);
    });

    // Atualize o array de produtos no formControl
    this.produtoControl.setValue(produtosSelecionados);
  }

  getAllProdutosSelected() {
    const produtosSelecionados = this.produtoControl.value;
    console.log('Produtos selecionados:', produtosSelecionados);
  }

  closeDialogNovaVenda() {
    this.dialog.close();
  }

  trackByClienteFn(index: number, cliente: any): any {
    return cliente.id;
  }


  cadastrarVenda() {
    const vendaRequest: VendaElementRequest = {
      statusVenda: this.form.value.statusPagamento,
      metodoPagamento: this.form.value.formaPagamento,
      produtos: this.form.value.produto!,
      cliente: this.form.value.cliente
    }

    this.vendaService.createVenda(vendaRequest).subscribe(
      data => {
        this._snackBar.open('Venda cadastrada com sucesso!', 'Fechar', {
          duration: 2000,
          verticalPosition: 'top',
          horizontalPosition: 'center',
        });
        this.notificationService.notificarVendaCriada(data);
        this.dialog.close();
      },
      error => console.error('Erro ao cadastrar venda:', error)
    );

  }

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe((data: ClienteElement[]) => {
      this.clientes = data;
    });

    this.produtoService.getProdutos().subscribe((data: ProdutoElement[]) => {
      this.produtos = data;
      this.produtosAgrupados = this.agruparProdutosPorCategoria(this.produtos);
    });

    this.clienteControl = new FormControl('');
    this.formaPagamentoControl = new FormControl('', Validators.required);
    this.statusPagamentoControl = new FormControl('', Validators.required);
    this.produtoControl = new FormControl([] as ProdutoElement[], Validators.required);

    this.form = this._formBuilder.group({
      cliente: this.clienteControl,
      formaPagamento: this.formaPagamentoControl,
      statusPagamento: this.statusPagamentoControl,
      produto: this.produtoControl,
    });

  }

}
