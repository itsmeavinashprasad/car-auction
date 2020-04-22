import {AfterContentInit, Component, DoCheck, Input, OnInit} from '@angular/core';
import {CarService} from '../car.service';

@Component({
  selector: 'app-highest-bidder',
  templateUrl: './highest-bidder.component.html',
  styleUrls: ['./highest-bidder.component.css']
})
export class HighestBidderComponent implements OnInit, DoCheck {

  @Input() maxBidAmount: string;
  amount: string;
  currentAmount: string;

  constructor(private carService: CarService) {
  }

  ngOnInit() {
    console.log('ngAfterContentInit');
    this.carService.getMessageFromSibling().subscribe(
      (value) => {
        this.currentAmount = value;
      }
    );
  }

  ngDoCheck(): void {
    console.log('ngDoCheck', this.currentAmount);
    if (this.maxBidAmount === '') {
      this.amount = 'No Bidding Done';
    } else {
      if (this.currentAmount) {
        if (Number(this.currentAmount) > Number(this.maxBidAmount)) {
          console.log('greater cur');
          this.amount = '$' + this.currentAmount;
        } else {
          this.amount = '$' + this.maxBidAmount;
        }
      } else {
        console.log('no cur');
        this.amount = '$' + this.maxBidAmount;
      }
    }
  }
}
