import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Cart } from 'src/app/model/cart.model';
import { faTrashAlt, faBarcode, faShoppingCart, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.css']
})
export class CartDetailComponent implements OnInit {

  faTrashAlt = faTrashAlt;
  faBarcode = faBarcode;
  faShoppingCart = faShoppingCart;
  faShoppingBasket = faShoppingBasket;

  lastPriceTotal: number = 0;
  badCoupon: string = "Dodaj kupon...";

  @ViewChild("coupInput") coupInput: ElementRef;

  constructor(public cart: Cart) {
  }

  ngOnInit(): void {
  }

  couponChecker(coupon: string) {
    const couponCorrect = "smacznego";
    let perOfPrice = (30 / 100) * this.cart.cartPrice;
    if (coupon === couponCorrect) {
      this.lastPriceTotal = this.cart.cartPrice - perOfPrice; 
      this.coupInput.nativeElement.value = "";
      this.badCoupon = "Kupon użyty!";
      console.log("udało się");
    } else {
      this.coupInput.nativeElement.value = "";
      this.badCoupon = "Wprowadzono zły kupon!";
    }
  }

}
