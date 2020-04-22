import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {interval, Subscription} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit, OnDestroy {

  @ViewChild('carImage', {static: true, read: ViewContainerRef}) image: ViewContainerRef;
  srcUrls = [
    'https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_low/v1/editorial/A-Class-index-my19-%281%29.png',
    'https://meloriellc.com/wp-content/uploads/2016/05/car.jpg',
    'https://lh3.googleusercontent.com/proxy/3XowY6E7hYg4oh-vYueBLoeo3FpjaX3RaMSsl59jY2LurQ0YFDExD99MuAg1EhzhPdtDMJ4lptIjb6XATEzwB57T5d85',
    'https://cdn.autoportal.com/img/new-cars-gallery/mercedesbenz/a-class-sedan/photo34/mercedesbenz-a-class-sedan-b6883594.jpg',
    'https://auto.ndtvimg.com/car-images/large/mercedes-benz/a-class/mercedes-benz-a-class.jpg?v=6'
  ];
  sub: Subscription;

  constructor() {
  }

  ngAfterViewInit(): void {
    let index = 0;
    this.sub = interval(2000).subscribe(
      () => {
        index = (index + 1 ) % this.srcUrls.length;
        this.image.element.nativeElement.src = this.srcUrls[index];
      });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }


}
