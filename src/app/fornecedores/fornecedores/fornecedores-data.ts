interface FornecedoresElement {
    email: string,
    telefone: string,
    endereco: string
}


interface CardElement {
    title: string,
    subtitle: string,
    imgSrc: string,
    fornecedor: FornecedoresElement
}

export const CardFornecedoresElements: CardElement[] = [
    {
        fornecedor: {
            email: "contato@cervejariax.com",
            endereco: "Av. das Cervejas, 123",
            telefone: "31 9876-5432"
        },
        imgSrc: "",
        subtitle: "Contato vendedor: João Silva",
        title: "Cervejaria X"
    },
    {
        fornecedor: {
            email: "contato@destiladospremium.com",
            endereco: "Rua dos Destilados, 456",
            telefone: "31 8765-4321"
        },
        imgSrc: "",
        subtitle: "Contato vendedor: Maria Oliveira",
        title: "Destilados Premium"
    },
    {
        fornecedor: {
            email: "contato@refrigerantesdelicia.com",
            endereco: "Travessa dos Refrigerantes, 789",
            telefone: "31 7654-3210"
        },
        imgSrc: "",
        subtitle: "Contato vendedor: Pedro Santos",
        title: "Refrigerantes Delícia"
    },
    {
        fornecedor: {
            email: "contato@vinhosfinos.com",
            endereco: "R. dos Vinhos Finos, 101",
            telefone: "31 6543-2109"
        },
        imgSrc: "",
        subtitle: "Contato vendedor: Ana Pereira",
        title: "Vinhos Finos Ltda"
    },
    {
        fornecedor: {
            email: "contato@bebidasenergeticasupreme.com",
            endereco: "Alameda das Energéticas, 202",
            telefone: "31 5432-1098"
        },
        imgSrc: "",
        subtitle: "Contato vendedor: Carlos Rodrigues",
        title: "Energéticos Supreme"
    },
    {
        fornecedor: {
            email: "contato@coquetelariapremium.com",
            endereco: "Praça da Coquetelaria, 303",
            telefone: "31 4321-0987"
        },
        imgSrc: "",
        subtitle: "Contato vendedor: Luana Oliveira",
        title: "Coquetelaria Premium"
    }
];