import {Component, OnInit} from '@angular/core';
import {CarService} from '../car.service';
import {Cars} from '../cars/cars';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id: number;
  carDetails: Cars;
  showForm: boolean;
  maxBid: string;

  constructor(private carService: CarService,
              private route: ActivatedRoute) {
    this.showForm = false;
  }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        this.id = Number(params.get('id'));
        this.carService.getCarDetails(this.id).subscribe(
          data => {
            this.carDetails = data;
            if (localStorage.getItem(String(this.id))) {
              this.maxBid = localStorage.getItem(String(this.id));
            } else {
              this.maxBid = '';
            }
          }
        );
      }
    );
  }

  placeBidding() {
    this.showForm = true;
  }

  registerBidding(event: any) {
    this.showForm = false;
    const bidInformation = {
      id: this.id,
      username: event.username,
      amount: event.amount
    };
    const bidId = Math.floor(Math.random() * (999999 - 100000)) + 100000;
    localStorage.setItem(String(bidId), JSON.stringify(bidInformation));

    if (localStorage.getItem(String(this.id))) {
      if (Number(localStorage.getItem(String(this.id))) < Number(event.amount)) {
        localStorage.setItem(String(this.id), event.amount);
        this.maxBid = event.amount;
      }
    } else {
      localStorage.setItem(String(this.id), event.amount);
      this.maxBid = event.amount;
    }
  }

  cancel() {
    this.showForm = false;
  }
}
