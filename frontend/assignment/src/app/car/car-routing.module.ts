import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CarsComponent} from "./cars/cars.component";
import {DetailsComponent} from "./details/details.component";


const routes: Routes = [
  {path: '', component: CarsComponent},
  {path: ':id', component: DetailsComponent}
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CarRoutingModule {
}
