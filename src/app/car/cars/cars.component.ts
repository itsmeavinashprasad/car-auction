import { Component, OnInit } from '@angular/core';
import {CarService} from "../car.service";
import {Cars} from "./cars";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars: Cars[];

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.carService.getAllCars().subscribe(
      data => {
        this.cars = data;
      }
    );
  }

}
