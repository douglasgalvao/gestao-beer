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


export const CardFornecedoresElements: CardElement[] = [{
    fornecedor: {
        email: "fornecedor_exemplo@gmail.com",
        endereco: "Rua cinco do Clebinho",
        telefone: "31 9925-3487"
    },
    imgSrc: "../../../assets/beerPNG.png",
    subtitle: "Contato vendedor: Thiago Alvares",
    title: "Fornecedor AMBEV"
}];