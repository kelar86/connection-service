import { Client } from './../../models/client.model';
import { ClientCall } from './../../models/client-call.model';
import { StorageService } from './../../storage.service';
import { REASONS } from './../../constants/call-reason';
import { CITIES } from './../../constants/cities';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ClrWizard } from '@clr/angular';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-order-container',
  templateUrl: './order-container.component.html',
  styles: []
})
export class OrderContainerComponent implements OnInit {

  @ViewChild("wizard") wizard: ClrWizard;
  
  CITIES;
  REASONS
  wizardState;
  offers;
  selectedOffer;
  selectedCardIndex = '';

  public telMask = ['(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];
 

  clientInfoForm = new FormGroup({
    city: new FormControl('Красноярск', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    adress: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required] ),
    extraPhoneNumber: new FormControl(''),
    callReason: new FormControl('', [Validators.required]),
    callReasonComment: new FormControl('') 
  });



  constructor(private router: Router, private storage: StorageService) {
    this.CITIES = CITIES;
    this.REASONS = REASONS;
   }


  ngOnInit() {
    this.offers = this.storage.getOffers();
    this.wizardState = true
  }

  selectOffer($event, offer, index) {    
    this.selectedOffer = offer;
    this.selectedCardIndex = index;

  }

  selectedStyle(index){
    if (index === this.selectedCardIndex) {
      return { 'box-shadow': '0 0.125rem #0094d2', 'border': '1px solid #0094d2', 'transform': 'translateY(-2px)' };
    }
    return;
  }

  doCancel() {

    this.wizard.close();  
    // this.router.navigateByUrl('/cancel');
    const call = this.createCall();
    this.router.navigate(['cancel', { data: JSON.stringify(call) }]);
    
  }

  doFinish() {

    const call = this.createCall();
    
    this.storage.saveCall(call);
    this.wizard.close();
  
  }

  createCall() {
    return new ClientCall().deserialize({
      client: {
        city: this.clientInfoForm.get('city').value,
        name: this.clientInfoForm.get('name').value,
        adress: this.clientInfoForm.get('adress').value,
        phoneNumber: this.clientInfoForm.get('phoneNumber').value,
        extraPhoneNumber: this.clientInfoForm.get('extraPhoneNumber').value
      },
      callReason: this.clientInfoForm.get('callReason').value,
      callReasonComment: this.clientInfoForm.get('callReasonComment').value,
      offer: this.selectOffer
    }
    );
  }
 

}
