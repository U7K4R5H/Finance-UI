import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Card } from '../card';
import { CardService } from '../card.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  mycard: Card = new Card();

  constructor(
    private cardservice: CardService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getCardDetail();
  }
  private getCardDetail() {
    let crd: any;

    crd = sessionStorage.getItem('myuser');

    this.cardservice.getCardByUser(JSON.parse(crd).cardNo).subscribe((data) => {
      this.mycard = data;
    });
  }
}
