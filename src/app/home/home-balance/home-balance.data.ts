export interface HomeBalance {
    toolbarTitle: string,
    toolbarIcon: string,
    value: number,
    currency: string,
    arrowType: string
}

export const HomeBalance: HomeBalance[] = [
    {
        toolbarTitle: 'Faturamento Diário',
        toolbarIcon: 'wallet',
        value: 872.50,
        currency: 'BRL',
        arrowType: 'up'
    },
    {
        toolbarTitle: 'Faturamento Mensal',
        toolbarIcon: 'wallet',
        value: 14320.00,
        currency: 'BRL',
        arrowType: 'up'
    }
];