import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Cart } from 'src/app/model/cart.model';
import { CartDetailComponent } from '../cart-detail/cart-detail.component';

declare var paypal;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  @ViewChild('paypal', { static: true }) paypalElement: ElementRef;

  paidFor = false;

  constructor(public cart: Cart) {
    
  }

  ngOnInit(): void {
    paypal
    .Buttons({
      createOrder: (data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              description: "Dokonaj płatności za zamówienie!",
              amount: {
                currency_code: 'PLN',
                value: this.cart.cartPrice
              }
            }
          ]
        });
      },
      onApprove: async (data, actions) => {
        const order = await actions.order.capture();
        this.paidFor = true;
        console.log(order);
      },
      onError: err => {
        console.log(err);
      }
    })
    .render(this.paypalElement.nativeElement);
  }

}
