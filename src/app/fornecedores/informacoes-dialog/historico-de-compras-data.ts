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
    id: number;
    fornecedor: string;
    dataCompra: string;
    itens: ItemCompra[];
}


export const HistoricoDeComprasData: HistoricoDeCompras[] =
    [
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
        },
        {
            "id": 4,
            "fornecedor": "Distribuidora D",
            "dataCompra": "2023-04-05",
            "itens": [
                {
                    "produto": "Vodka",
                    "quantidade": 3,
                    "precoUnitario": 25.0
                },
                {
                    "produto": "Chá Gelado",
                    "quantidade": 12,
                    "precoUnitario": 2.0
                }
            ]
        },
        {
            "id": 5,
            "fornecedor": "Distribuidora E",
            "dataCompra": "2023-05-12",
            "itens": [
                {
                    "produto": "Rum",
                    "quantidade": 4,
                    "precoUnitario": 18.0
                },
                {
                    "produto": "Limonada",
                    "quantidade": 6,
                    "precoUnitario": 2.5
                }
            ]
        },
        {
            "id": 6,
            "fornecedor": "Distribuidora F",
            "dataCompra": "2023-06-18",
            "itens": [
                {
                    "produto": "Tequila",
                    "quantidade": 2,
                    "precoUnitario": 35.0
                },
                {
                    "produto": "Iced Coffee",
                    "quantidade": 15,
                    "precoUnitario": 3.5
                }
            ]
        },
        {
            "id": 7,
            "fornecedor": "Distribuidora G",
            "dataCompra": "2023-07-25",
            "itens": [
                {
                    "produto": "Gin",
                    "quantidade": 6,
                    "precoUnitario": 22.0
                },
                {
                    "produto": "Soda",
                    "quantidade": 8,
                    "precoUnitario": 1.0
                }
            ]
        },
        {
            "id": 8,
            "fornecedor": "Distribuidora H",
            "dataCompra": "2023-08-30",
            "itens": [
                {
                    "produto": "Rum",
                    "quantidade": 5,
                    "precoUnitario": 20.0
                },
                {
                    "produto": "Chá de Hortelã",
                    "quantidade": 10,
                    "precoUnitario": 2.0
                }
            ]
        }
    ];

