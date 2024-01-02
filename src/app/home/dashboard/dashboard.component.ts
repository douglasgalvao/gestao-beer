import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  // colorScheme = {
  //   domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  // };

  showXAxis = true;
  showYAxis = true;

  // Exemplo de dados, substitua com suas próprias métricas
  dailySalesData = [
    {
      name: 'Dia 1',
      value: 100,
    },
    {
      name: 'Dia 2',
      value: 150,
    },
    // Adicione mais dados conforme necessário
  ];

  topProductsData = [
    {
      name: 'Produto A',
      value: 50,
    },
    {
      name: 'Produto B',
      value: 40,
    },
  ];
}
