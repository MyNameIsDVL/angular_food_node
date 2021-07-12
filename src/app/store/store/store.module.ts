import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelModule } from 'src/app/model/model.module';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { StoreComponent } from './store.component';
import { CounterDirective } from '../counter.directive';
import { CartsummaryComponent } from '../cartsummary/cartsummary.component';
import { CartDetailComponent } from '../cart-detail/cart-detail.component';
import { CheckoutComponent } from '../checkout/checkout.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SliderComponent } from '../slider/slider.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CartcheckComponent } from '../cartcheck/cartcheck.component';
import { SearchPipePipe } from 'src/app/model/search-pipe.pipe';
import { PaymentComponent } from '../payment/payment.component';

@NgModule({
  declarations: [
    StoreComponent,
    CounterDirective,
    CartsummaryComponent,
    CartDetailComponent,
    CheckoutComponent,
    SliderComponent,
    SidebarComponent,
    CartcheckComponent,
    SearchPipePipe,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    ModelModule,
    FormsModule,
    RouterModule,
    MatIconModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MatSidenavModule
  ],
  exports: [
    StoreComponent,
    CartDetailComponent,
    CheckoutComponent,
    SliderComponent,
    SidebarComponent,
    CartcheckComponent,
    PaymentComponent
  ],
  providers: [SearchPipePipe, CartDetailComponent]
})
export class StoreModule { }
