import { CancelSummaryComponent } from './components/cancel-summary/cancel-summary.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { Routes } from '@angular/router';
import { OrderContainerComponent } from './components/order-container/order-container.component';
import { OrderListComponent } from './components/order-list/order-list.component';

export const APP_ROUTES: Routes = [
    { path: '', component: OrderContainerComponent},
    { path: 'cancel', component: CancelSummaryComponent },
    { path: 'orders', component: OrderListComponent},
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];