import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CarService} from '../car.service';

@Component({
  selector: 'app-bidding-form',
  templateUrl: './bidding-form.component.html',
  styleUrls: ['./bidding-form.component.css']
})
export class BiddingFormComponent implements OnInit {

  formData: FormGroup;
  @Output() bidPlaced: EventEmitter<any>;
  @Output() bidCancelled: EventEmitter<any>;

  constructor(private carService: CarService) {
    this.formData = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.maxLength(35), Validators.minLength(6)]),
      amount: new FormControl('', [Validators.required, Validators.pattern('[0-9]+')])
    });
    this.bidPlaced = new EventEmitter<any>();
    this.bidCancelled = new EventEmitter<any>();
  }

  ngOnInit() {
    this.formData.get('amount').valueChanges.subscribe(
      (value) => {
        this.carService.sendMessageToSibling(value);
      }
    );
  }

  onSubmit() {
    if (this.formData.valid) {
      this.bidPlaced.emit(this.formData.value);
    }
  }

  cancelSubmission() {
    this.bidCancelled.emit();
  }
}
