import { Component, OnInit } from '@angular/core';
import { HomeBalance } from './home-balance.data';

@Component({
  selector: 'app-home-balance',
  templateUrl: './home-balance.component.html',
  styleUrls: ['./home-balance.component.scss']
})
export class HomeBalanceComponent implements OnInit {
  homeBalances: HomeBalance[] = HomeBalance;

  constructor() { }

  ngOnInit(): void {
  }

}
