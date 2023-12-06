
import { VendaElement } from "./vendas.component";

export const VENDAS_DATA: VendaElement[] = [
    {
        id: 1,
        dataHora: '2023-12-04T10:30:00',
        produtos: [
            { nome: 'Cerveja IPA', quantidade: 3, precoUnitario: 5.99, subtotal: 17.97 },
            { nome: 'Cerveja Lager', quantidade: 2, precoUnitario: 4.99, subtotal: 9.98 }
        ],
        totalVenda: 27.95,
        cliente: 'João da Silva',
        metodoPagamento: 'Cartão de Crédito',
        statusVenda: 'Concluída',
        observacoes: 'Cliente regular, entrega no endereço residencial.'
    },
    {
        id: 2,
        dataHora: '2023-12-04T15:45:00',
        produtos: [
            { nome: 'Cerveja Stout', quantidade: 4, precoUnitario: 6.49, subtotal: 25.96 },
            { nome: 'Cerveja Pilsner', quantidade: 1, precoUnitario: 5.99, subtotal: 5.99 }
        ],
        totalVenda: 29.95,
        cliente: 'Ana Oliveira',
        metodoPagamento: 'Dinheiro',
        statusVenda: 'Concluída',
        observacoes: 'Desconto de 10% aplicado para clientes frequentes.'
    },
    {
        id: 3,
        dataHora: '2023-12-05T09:15:00',
        produtos: [
            { nome: 'Cerveja Pale Ale', quantidade: 2, precoUnitario: 7.99, subtotal: 15.98 },
            { nome: 'Cerveja Wheat', quantidade: 3, precoUnitario: 6.29, subtotal: 18.87 }
        ],
        totalVenda: 34.85,
        cliente: 'Fernando Lima',
        metodoPagamento: 'Cartão de Débito',
        statusVenda: 'Pendente',
        observacoes: 'Aguardando confirmação de pagamento.'
    },
    {
        id: 4,
        dataHora: '2023-12-06T14:20:00',
        produtos: [
            { nome: 'Cerveja Amber Ale', quantidade: 2, precoUnitario: 8.49, subtotal: 16.98 },
            { nome: 'Cerveja Red Ale', quantidade: 1, precoUnitario: 7.99, subtotal: 7.99 }
        ],
        totalVenda: 24.97,
        cliente: 'Mariana Oliveira',
        metodoPagamento: 'Cartão de Crédito',
        statusVenda: 'Concluída',
        observacoes: 'Entrega expressa, pedido especial.'
    },
    {
        id: 5,
        dataHora: '2023-12-07T18:45:00',
        produtos: [
            { nome: 'Cerveja Porter', quantidade: 3, precoUnitario: 9.99, subtotal: 29.97 },
            { nome: 'Cerveja Golden Ale', quantidade: 2, precoUnitario: 7.49, subtotal: 14.98 }
        ],
        totalVenda: 44.95,
        cliente: 'Pedro Santos',
        metodoPagamento: 'Cartão de Débito',
        statusVenda: 'Concluída',
        observacoes: 'Cliente VIP, entrega programada.'
    },
    {
        id: 6,
        dataHora: '2023-12-08T11:10:00',
        produtos: [
            { nome: 'Cerveja Belgian Dubbel', quantidade: 2, precoUnitario: 11.99, subtotal: 23.98 },
            { nome: 'Cerveja Tripel', quantidade: 1, precoUnitario: 10.49, subtotal: 10.49 }
        ],
        totalVenda: 34.47,
        cliente: 'Julia Lima',
        metodoPagamento: 'Dinheiro',
        statusVenda: 'Concluída',
        observacoes: 'Pedido para presente, embalagem especial.'
    },
    {
        id: 7,
        dataHora: '2023-12-09T16:30:00',
        produtos: [
            { nome: 'Cerveja Hefeweizen', quantidade: 4, precoUnitario: 8.99, subtotal: 35.96 },
            { nome: 'Cerveja Weizenbock', quantidade: 2, precoUnitario: 9.49, subtotal: 18.98 }
        ],
        totalVenda: 54.94,
        cliente: 'Ricardo Oliveira',
        metodoPagamento: 'Cartão de Crédito',
        statusVenda: 'Pendente',
        observacoes: 'Cliente frequente, aguardando confirmação.'
    },
    {
        id: 8,
        dataHora: '2023-12-10T13:05:00',
        produtos: [
            { nome: 'Cerveja Rauchbier', quantidade: 3, precoUnitario: 12.99, subtotal: 38.97 },
            { nome: 'Cerveja Doppelbock', quantidade: 1, precoUnitario: 11.79, subtotal: 11.79 }
        ],
        totalVenda: 50.76,
        cliente: 'Camila Lima',
        metodoPagamento: 'Cartão de Débito',
        statusVenda: 'Concluída',
        observacoes: 'Pedido grande, entrega expressa.'
    },
    {
        id: 9,
        dataHora: '2023-12-11T19:20:00',
        produtos: [
            { nome: 'Cerveja Quadrupel', quantidade: 2, precoUnitario: 14.99, subtotal: 29.98 },
            { nome: 'Cerveja Barleywine', quantidade: 3, precoUnitario: 13.49, subtotal: 40.47 }
        ],
        totalVenda: 70.45,
        cliente: 'Diego Oliveira',
        metodoPagamento: 'Dinheiro',
        statusVenda: 'Concluída',
        observacoes: 'Cliente fiel, brinde incluído.'
    },
    {
        id: 10,
        dataHora: '2023-12-12T09:45:00',
        produtos: [
            { nome: 'Cerveja Gose', quantidade: 4, precoUnitario: 10.99, subtotal: 43.96 },
            { nome: 'Cerveja Berliner Weisse', quantidade: 1, precoUnitario: 9.79, subtotal: 9.79 }
        ],
        totalVenda: 53.75,
        cliente: 'Isabel Silva',
        metodoPagamento: 'Cartão de Crédito',
        statusVenda: 'Concluída',
        observacoes: 'Entrega urgente, cliente VIP.'
    },
    {
        id: 11,
        dataHora: '2023-12-13T14:50:00',
        produtos: [
            { nome: 'Cerveja Witbier', quantidade: 2, precoUnitario: 8.79, subtotal: 17.58 },
            { nome: 'Cerveja Saison', quantidade: 3, precoUnitario: 9.29, subtotal: 27.87 }
        ],
        totalVenda: 45.45,
        cliente: 'Pedro Oliveira',
        metodoPagamento: 'Cartão de Débito',
        statusVenda: 'Pendente',
        observacoes: 'Aguardando confirmação de estoque.'
    },
    {
        id: 12,
        dataHora: '2023-12-14T11:15:00',
        produtos: [
            { nome: 'Cerveja Scotch Ale', quantidade: 2, precoUnitario: 11.49, subtotal: 22.98 },
            { nome: 'Cerveja English Barleywine', quantidade: 1, precoUnitario: 10.79, subtotal: 10.79 }
        ],
        totalVenda: 33.77,
        cliente: 'Lucas Oliveira',
        metodoPagamento: 'Dinheiro',
        statusVenda: 'Concluída',
        observacoes: 'Cliente antigo, desconto aplicado.'
    },
    {
        id: 13,
        dataHora: '2023-12-15T16:40:00',
        produtos: [
            { nome: 'Cerveja American Amber Ale', quantidade: 3, precoUnitario: 9.99, subtotal: 29.97 },
            { nome: 'Cerveja American Brown Ale', quantidade: 2, precoUnitario: 8.79, subtotal: 17.58 }
        ],
        totalVenda: 47.55,
        cliente: 'Laura Oliveira',
        metodoPagamento: 'Cartão de Crédito',
        statusVenda: 'Concluída',
        observacoes: 'Cliente corporativo, entrega no escritório.'
    }];  