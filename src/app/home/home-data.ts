import { ProdutoElement, VendaElement } from "../vendas/vendas.component";

const produto1: ProdutoElement = {
    nome: 'Produto A',
    quantidade: 1,
    precoUnitario: 30,
    subtotal: 30,
    tipoProduto: 'Roupas'
};

const produto2: ProdutoElement = {
    nome: 'Produto B',
    quantidade: 1,
    precoUnitario: 30,
    subtotal: 30,
    tipoProduto: 'Roupas'
};

const produto3: ProdutoElement = {
    nome: 'Produto C',
    quantidade: 3,
    precoUnitario: 15,
    subtotal: 45,
    tipoProduto: 'Livros'
};

export const HistoricoVendasHome: VendaElement[] = [
    {
        id: 1,
        dataHora: '2023-01-01 10:00',
        produtos: [produto1, produto2],
        totalVenda: 80,
        cliente: 'Cliente A',
        metodoPagamento: 'Cartão de Crédito',
        statusVenda: 'Concluída',
        observacoes: 'Entrega rápida'
    },
    {
        id: 2,
        dataHora: '2023-02-15 14:30',
        produtos: [produto1],
        totalVenda: 45,
        cliente: 'Cliente B',
        metodoPagamento: 'Boleto Bancário',
        statusVenda: 'Pendente',
        observacoes: 'Aguardando pagamento'
    },
    {
        id: 3,
        dataHora: '2023-03-20 09:45',
        produtos: [produto1, produto2, produto3],
        totalVenda: 125,
        cliente: 'Cliente C',
        metodoPagamento: 'Transferência Bancária',
        statusVenda: 'Concluída',
        observacoes: 'Cliente fiel'
    },
    {
        id: 4,
        dataHora: '2023-04-05 17:20',
        produtos: [produto2],
        totalVenda: 30,
        cliente: 'Cliente D',
        metodoPagamento: 'Cartão de Débito',
        statusVenda: 'Concluída',
        observacoes: ''
    },
    {
        id: 5,
        dataHora: '2023-05-12 11:10',
        produtos: [produto3],
        totalVenda: 45,
        cliente: 'Cliente E',
        metodoPagamento: 'Pix',
        statusVenda: 'Pendente',
        observacoes: 'Verificar estoque antes de confirmar'
    }
];