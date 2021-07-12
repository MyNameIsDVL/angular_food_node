import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstGuard } from './first.guard';
import { RouterModule } from '@angular/router';
import { StoreComponent } from './store/store/store.component';
import { CounterDirective } from './store/counter.directive';
import { CheckoutComponent } from './store/checkout/checkout.component';
import { CartsummaryComponent } from './store/cartsummary/cartsummary.component';
import { CartDetailComponent } from './store/cart-detail/cart-detail.component';
import { StoreModule } from './store/store/store.module';
import { SliderComponent } from './store/slider/slider.component';
import { SidebarComponent } from './store/sidebar/sidebar.component';
import { CartcheckComponent } from './store/cartcheck/cartcheck.component';
import { PaymentComponent } from './store/payment/payment.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: "store", component: StoreComponent, canActivate: [FirstGuard] },
      { path: "cart", component: CartDetailComponent, canActivate: [FirstGuard] },
      { path: "checkout", component: CheckoutComponent, canActivate: [FirstGuard] },
      { path: "cartCheck", component: CartcheckComponent, canActivate: [FirstGuard] },
      { path: "payment", component: PaymentComponent, canActivate: [FirstGuard] },
      { path: "**", redirectTo: "/store" }
    ])
  ],
  providers: [FirstGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
