import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/model/cart.model';
import { faTrashAlt, faBarcode, faShoppingCart, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cartcheck',
  templateUrl: './cartcheck.component.html',
  styleUrls: ['./cartcheck.component.css']
})
export class CartcheckComponent implements OnInit {

  faTrashAlt = faTrashAlt;
  faShoppingCart = faShoppingCart;
  faShoppingBasket = faShoppingBasket;

  constructor(public cart: Cart) { }

  ngOnInit(): void {
  }

}
