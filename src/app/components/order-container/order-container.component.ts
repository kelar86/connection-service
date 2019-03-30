import { Component, OnInit, ViewChild } from '@angular/core';
import { ClrWizard } from '@clr/angular';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }


  ngOnInit() {
    this.wizardState = true
  }


  doCancel(): void {
    console.log('CANCEL!!');
   
    this.wizard.close();
    this.router.navigateByUrl('/cancel');
  }
 

}
