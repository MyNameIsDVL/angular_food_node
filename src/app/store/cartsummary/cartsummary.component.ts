import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/model/cart.model';
import { faTrashAlt, faBarcode, faShoppingCart, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cartsummary',
  templateUrl: './cartsummary.component.html',
  styleUrls: ['./cartsummary.component.css']
})
export class CartsummaryComponent implements OnInit {

  faShoppingBasket = faShoppingBasket;

  constructor(public cart: Cart) { }

  ngOnInit(): void {
  }

}
