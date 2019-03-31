import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { OrderContainerComponent } from './components/order-container/order-container.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderListComponent } from './components/order-list/order-list.component';
import { CancelSummaryComponent } from './components/cancel-summary/cancel-summary.component';
import { TextMaskModule } from 'angular2-text-mask';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    OrderContainerComponent,
    OrderListComponent,
    CancelSummaryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TextMaskModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ClarityModule,
    RouterModule.forRoot(APP_ROUTES, { onSameUrlNavigation: 'reload' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
