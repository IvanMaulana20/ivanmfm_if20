import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.page.html',
  styleUrls: ['./transactions.page.scss'],
})
export class TransactionsPage implements OnInit {

    allTransactions: any[] = [];
    private _transactions: any[] = [];
    public get transactions(): any[] {
      return this._transactions;
    }
    public set transactions(value: any[]) {
      this._transactions = value;
    }
    segmentValue = 'in';

  constructor() { }

  ngOnInit() {
    this.allTransactions = [
      { id: 1, to: 'A dimas.', date: '2023-05-23', amount: 5000 },
      { id: 2, to: 'Hamzah', date: '2023-03-02', amount: 7000 },
      { id: 3, to: 'Ardi', date: '2023-07-28', amount: -3250 },
      { id: 4, to: 'Bao.', date: '2023-01-09', amount: 1000 },
      { id: 5, to: 'Alan.', date: '2023-04-13', amount: -800 },
    ];
    this.filterTransactions();
  }

  filterTransactions() {
    if(this.segmentValue == 'in') {
      this.transactions = this.allTransactions.filter(x => x.amount >= 0);
    } else {
      this.transactions = this.allTransactions.filter(x => x.amount < 0);
    }
  }

  segmentChanged(event : any) {
    console.log(event);
    this.segmentValue = event.detail.value;
    this.filterTransactions();
  }

}


