import { DialogElement } from "./dialog-information-venda.component";

export const DIALOG_DATA: DialogElement = {
    cardVenda: {
        backgroundC: "red",
        height: "300px",
        data: {
            cliente: "João Silva",
            dataHora: "2023-12-15 14:30",
            metodoPagamento: "Cartão de Crédito",
            observacoes: "Entregar na portaria",
            produtos: [
                { nome: 'Cerveja Stout', quantidade: 4, precoUnitario: 6.49, subtotal: 25.96 },
                { nome: 'Vinho Tinto', quantidade: 2, precoUnitario: 12.99, subtotal: 25.98 },
            ],
            statusVenda: "Concluída",
            totalVenda: "51.94"
        },
        title: "Detalhes da Venda",
        width: "500px"
    }
};


