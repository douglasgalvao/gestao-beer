// historico-de-compras.interface.ts

interface ItemCompra {
    produto: string;
    quantidade: number;
    precoUnitario: number;
}

interface Compra {
    id: number;
    fornecedor: string;
    dataCompra: string;
    itens: ItemCompra[];
}

interface HistoricoDeCompras {
    historicoDeCompras: Compra[];
}


export const HistoricoDeComprasData: HistoricoDeCompras = {
    "historicoDeCompras": [
        {
            "id": 1,
            "fornecedor": "Distribuidora A",
            "dataCompra": "2023-01-10",
            "itens": [
                {
                    "produto": "Cerveja",
                    "quantidade": 20,
                    "precoUnitario": 2.5
                },
                {
                    "produto": "Refrigerante",
                    "quantidade": 10,
                    "precoUnitario": 1.5
                }
            ]
        },
        {
            "id": 2,
            "fornecedor": "Distribuidora B",
            "dataCompra": "2023-02-15",
            "itens": [
                {
                    "produto": "Vinho",
                    "quantidade": 5,
                    "precoUnitario": 10.0
                },
                {
                    "produto": "Água Mineral",
                    "quantidade": 15,
                    "precoUnitario": 1.0
                }
            ]
        },
        {
            "id": 3,
            "fornecedor": "Distribuidora C",
            "dataCompra": "2023-03-20",
            "itens": [
                {
                    "produto": "Whisky",
                    "quantidade": 2,
                    "precoUnitario": 30.0
                },
                {
                    "produto": "Suco de Frutas",
                    "quantidade": 8,
                    "precoUnitario": 3.0
                }
            ]
        }
    ]
}

