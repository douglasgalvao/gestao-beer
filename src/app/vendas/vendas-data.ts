
import { VendaElement } from "./vendas.component";

export const VENDAS_DATA: VendaElement[] = [
    {
        id: 1,
        dataHora: '07-12-2023 05:52',
        produtos: [
            { nome: 'Cerveja IPA', quantidade: 3, precoUnitario: 5.99, subtotal: 17.97, tipoProduto: 'cerveja' },
            { nome: 'Cerveja Lager', quantidade: 2, precoUnitario: 4.99, subtotal: 9.98, tipoProduto: 'cerveja' },
            { nome: 'Cerveja IPA', quantidade: 3, precoUnitario: 5.99, subtotal: 17.97, tipoProduto: 'cerveja' },
            { nome: 'Cerveja Lager', quantidade: 2, precoUnitario: 4.99, subtotal: 9.98, tipoProduto: 'cerveja' },
            { nome: 'Cerveja IPA', quantidade: 3, precoUnitario: 5.99, subtotal: 17.97, tipoProduto: 'cerveja' },
            { nome: 'Cerveja Lager', quantidade: 2, precoUnitario: 4.99, subtotal: 9.98, tipoProduto: 'cerveja' },
            { nome: 'Cerveja IPA', quantidade: 3, precoUnitario: 5.99, subtotal: 17.97, tipoProduto: 'cerveja' },
            { nome: 'Cerveja Lager', quantidade: 2, precoUnitario: 4.99, subtotal: 9.98, tipoProduto: 'cerveja' }
        ],
        totalVenda: 27.95,
        cliente: 'Clebinho',
        metodoPagamento: 'Á vista',
        statusVenda: 'Concluída',
        observacoes: 'Cliente regular, entrega no endereço residencial.'
    },
    {
        id: 2,
        dataHora: '07-12-2023 05:50',
        produtos: [
            { nome: 'Fandangos', quantidade: 1, precoUnitario: 8.99, subtotal: 8.99, tipoProduto: 'chips' },
            { nome: 'Brahma Latão', quantidade: 2, precoUnitario: 4.99, subtotal: 9.98, tipoProduto: 'cerveja' }
        ],
        totalVenda: 19.97,
        cliente: 'Marina Julia',
        metodoPagamento: 'Cartão de Crédito',
        statusVenda: 'Concluída',
        observacoes: 'Cliente regular, entrega no endereço residencial.'
    }
    
];  