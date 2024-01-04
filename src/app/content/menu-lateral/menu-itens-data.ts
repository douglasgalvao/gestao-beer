import { MenuLateralItens } from "./menu-lateral.component";
export const Menu: MenuLateralItens[] = [
    { nome: "Home", linkRouter: "/content/home/home", iconName: "home" },
    { nome: "Clientes", linkRouter: "/content/clientes", iconName: "person" },
    { nome: "Vendas", linkRouter: "/content/vendas/vendas", iconName: "sell" },
    { nome: "Produtos", linkRouter: "/content/produtos/produtos", iconName: "fastfood" },
    { nome: "Despesas", linkRouter: "/content/despesas/despesas", iconName: "attach_money" },
    { nome: "Estoque", linkRouter: "/content/estoque/estoque", iconName: "credit_card" },
    { nome: "Fornecedores", linkRouter: "/content/fornecedores/fornecedores", iconName: "shopping_cart" },
    { nome: "Configurações", linkRouter: "config", iconName: "settings" },
]