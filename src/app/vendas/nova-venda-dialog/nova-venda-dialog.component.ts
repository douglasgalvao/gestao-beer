import { ClienteElementRequest } from './../vendas.component';
import { VendasService } from 'src/app/service/vendas.service';
import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { ClienteElement, ProdutoElement, ProdutoElementVendaResquest, VendaElementRequest } from '../vendas.component';
import { environment } from 'src/environments/environment';
import { ClienteService } from 'src/app/service/cliente.service';
import { ProdutoService } from 'src/app/service/produto.service';
import { MatSelectChange } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationService } from 'src/app/service/notification.service';
import { animate, style, transition, trigger } from '@angular/animations';
import { debounceTime, filter } from 'rxjs/operators';
declare var page: any;

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
export class NovaVendaDialogComponent implements OnInit, AfterViewInit {



  constructor(private dialog: MatDialogRef<NovaVendaDialogComponent>, private clienteService: ClienteService,
    private produtoService: ProdutoService, private _snackBar: MatSnackBar, private _formBuilder: FormBuilder, private vendaService: VendasService,
    private notificationService: NotificationService) {
    page = this;
    this.produtosSelecionados = [];
  }


  apiUrl = environment.apiUrl;
  clientes!: ClienteElement[];
  produtos!: ProdutoElement[];
  produtosAgrupados!: { categoria: string, produtos: ProdutoElement[] }[];
  produtosSelecionados!: ProdutoElement[];
  estoqueInsucifienteEmProdutosSelecionados: boolean = false;
  clienteControl = new FormControl();
  statusPagamentoControl = new FormControl();
  metodoPagamentoControl = new FormControl();
  produtoControl = new FormControl([] as ProdutoElement[]);
  quantidadeProdutoControl = new FormControl();

  form = new FormGroup({
    cliente: this.clienteControl,
    metodoPagamento: this.metodoPagamentoControl,
    statusPagamento: this.statusPagamentoControl,
    produto: this.produtoControl,
    quantidade: this.quantidadeProdutoControl
  });

  @ViewChild('produtoInput') produtoInput!: ElementRef<HTMLInputElement> | undefined;
  @ViewChild('statusPagamento') statusPagamento!: ElementRef<HTMLSelectElement> | undefined;
  @ViewChild('quantidadeInput') quantidadeInput!: ElementRef<HTMLInputElement> | undefined;
  @ViewChild('metodoPagamento') metodoPagamentoInput!: ElementRef<HTMLSelectElement> | undefined;



  agruparProdutosPorCategoria(produtos: ProdutoElement[]): { categoria: string, produtos: ProdutoElement[] }[] {
    return produtos.reduce((agrupamento: { categoria: string, produtos: ProdutoElement[] }[], produto) => {
      const categoriaNome = produto.categoria_Produto.nome;

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


  onProdutoSelectionChange(event: MatSelectChange): void {
    const produtosSelecionados = event.value as ProdutoElement[];

    produtosSelecionados.forEach((produto: ProdutoElement) => {
      produto.quantidade = produto.quantidade || 1;
      produto.subTotal = produto.preco * (produto.quantidade || 1);
    });

    // Atualize o array de produtos no formControl
    this.produtoControl.setValue(produtosSelecionados);
  }

  incrementarQuantidade(produto: ProdutoElement) {
    const index = this.produtosSelecionados.findIndex((p: ProdutoElement) => p.id === produto.id);
    this.produtosSelecionados[index].quantidade = (this.produtosSelecionados[index].quantidade! + 1);
    this.produtosSelecionados[index].subTotal = this.produtosSelecionados[index].subTotal + this.produtosSelecionados[index].preco;
    if (this.produtosSelecionados[index].quantidade! > this.produtosSelecionados[index].quantidadeEstoque) {
      this.estoqueInsucifienteEmProdutosSelecionados = true;
    }
    else {
      this.estoqueInsucifienteEmProdutosSelecionados = false;
    }
  }

  decrementarQuantidade(produto: ProdutoElement) {
    const index = this.produtosSelecionados.findIndex((p: ProdutoElement) => p.id === produto.id);
    if (this.produtosSelecionados[index].quantidade! > 1) {
      this.produtosSelecionados[index].quantidade = this.produtosSelecionados[index].quantidade! - 1;
      this.produtosSelecionados[index].subTotal = this.produtosSelecionados[index].subTotal - this.produtosSelecionados[index].preco;

      if (this.produtosSelecionados[index].quantidade! > this.produtosSelecionados[index].quantidadeEstoque) {
        this.estoqueInsucifienteEmProdutosSelecionados = true;
      }
      else {
        this.estoqueInsucifienteEmProdutosSelecionados = false;
      }
    } else {
      this.produtosSelecionados.splice(index, 1);
    }
  }

  removerProduto(produto: ProdutoElement) {
    const index = this.produtosSelecionados.findIndex((p: ProdutoElement) => p.id === produto.id);
    this.produtosSelecionados.splice(index, 1);
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
    const formValue = this.form.value;
    let produtosRequest = this.produtosSelecionados.map((produto: ProdutoElement) => {
      return { codBarras: produto.codBarras, quantidade: produto.quantidade! } as ProdutoElementVendaResquest;
    });

    let vendaRequest: VendaElementRequest;
    let clienteRequest: ClienteElementRequest;
    this.clienteService.getCliente(formValue.cliente).subscribe((cliente: ClienteElement) => {
      clienteRequest = { id: cliente.id };
      vendaRequest = {
        cliente: clienteRequest,
        statusVenda: formValue.statusPagamento,
        metodoPagamento: formValue.metodoPagamento,
        produtos: produtosRequest
      }

      console.log(vendaRequest);
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
    });




  }

  onKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.produtoInput?.nativeElement.focus();
    }
  }

  onInput(event: any): void {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, ''); // Remove todos os caracteres não numéricos
  }


  ngOnInit(): void {
    this.clienteControl.markAsTouched();

    this.clienteService.getClientes().subscribe((data: ClienteElement[]) => {
      this.clientes = data;
    });

    this.produtoService.getProdutos().subscribe((data: ProdutoElement[]) => {
      this.produtos = data;
      this.produtosAgrupados = this.agruparProdutosPorCategoria(this.produtos);
    });

    this.clienteControl = new FormControl('');
    this.metodoPagamentoControl = new FormControl('', Validators.required);
    this.statusPagamentoControl = new FormControl('PAGO');
    this.produtoControl = new FormControl([] as ProdutoElement[], [Validators.required]);



    this.form = this._formBuilder.group({
      cliente: this.clienteControl,
      metodoPagamento: this.metodoPagamentoControl,
      statusPagamento: this.statusPagamentoControl,
      produto: this.produtoControl,
      quantidade: this.quantidadeProdutoControl
    });

  }


  ngAfterViewInit(): void {


    this.metodoPagamentoControl.valueChanges.subscribe(() => {
      // esse setTimeOut é simplismente para esperar qualquer chamada assincrona do angular acontecer
      setTimeout(() => {
        this.quantidadeInput?.nativeElement.focus();
      }, 0);
    });

    this.statusPagamentoControl.valueChanges.subscribe(() => {
      setTimeout(() => {
        this.produtoInput?.nativeElement.focus();
      }, 0);
    });





    this.produtoControl.valueChanges
      .pipe(
        debounceTime(300), // Aguarde 300ms após cada pressionamento de tecla antes de executar a consulta
        filter(value => value?.length === 8 || value?.length === 13) // Filtra os valores com comprimento igual a 8
      )
      .subscribe((e) => {
        setTimeout(() => {
          this.produtoService.getProdutoByCodBarras(String(this.produtoControl.value || ''))?.subscribe((produto: ProdutoElement) => {
            if (produto && produto.id && !this.produtosSelecionados.find((p: ProdutoElement) => p.id === produto.id)) {
              produto.quantidade = this.quantidadeProdutoControl.value || 1;
              produto.subTotal = produto.preco * (this.quantidadeProdutoControl.value || 1);
              if (produto.quantidade! > produto.quantidadeEstoque) {
                this.estoqueInsucifienteEmProdutosSelecionados = true;
              } else {
                this.estoqueInsucifienteEmProdutosSelecionados = false;
              }
              this.produtosSelecionados.push(produto);
            } else if (produto && produto.id && this.produtosSelecionados.find((p: ProdutoElement) => p.id === produto.id)) {
              const index = this.produtosSelecionados.findIndex((p: ProdutoElement) => p.id === produto.id);
              this.produtosSelecionados[index].quantidade = (this.produtosSelecionados[index].quantidade + this.quantidadeProdutoControl.value || 1);
              this.produtosSelecionados[index].subTotal = this.produtosSelecionados[index].subTotal + (this.produtosSelecionados[index].preco * (this.quantidadeProdutoControl.value || 1));
              if (produto.quantidade! > produto.quantidadeEstoque) {
                this.estoqueInsucifienteEmProdutosSelecionados = true;
              } else {
                this.estoqueInsucifienteEmProdutosSelecionados = false;
              }
            }
            this.produtoInput!.nativeElement!.value = '';
            this.quantidadeInput!.nativeElement!.value = '';
            this.quantidadeInput?.nativeElement.focus();
          });
        }, 0);
      })

  }

}
