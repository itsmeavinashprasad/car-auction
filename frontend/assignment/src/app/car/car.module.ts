import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CarRoutingModule} from './car-routing.module';
import {CarsComponent} from './cars/cars.component';
import {CarService} from "./car.service";
import {HttpClientModule} from "@angular/common/http";
import { DetailsComponent } from './details/details.component';
import { BiddingFormComponent } from './bidding-form/bidding-form.component';
import { HighestBidderComponent } from './highest-bidder/highest-bidder.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    CarRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  declarations: [
    CarsComponent,
    DetailsComponent,
    BiddingFormComponent,
    HighestBidderComponent
  ],
  providers: [
    CarService
  ]
})
export class CarModule {
}
