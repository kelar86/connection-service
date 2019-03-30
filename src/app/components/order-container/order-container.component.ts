import { Component, OnInit, ViewChild } from '@angular/core';
import { ClrWizard } from '@clr/angular';

@Component({
  selector: 'app-order-container',
  templateUrl: './order-container.component.html',
  styles: []
})
export class OrderContainerComponent implements OnInit {

  @ViewChild("wizard") wizard: ClrWizard;
  @ViewChild("number") numberFi: any;
  
  wizardState;
 
  model = {
    name: "",
    adress: "",
    number: ""
  };

  constructor() { }


  ngOnInit() {
    this.wizardState = true
  }



 

}
