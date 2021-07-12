import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/model/cart.model';
import { Product } from 'src/app/model/product.model';
import { ProductRepository } from 'src/app/model/product.repository';

import { faCoffee, faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';
import { SearchPipePipe } from 'src/app/model/search-pipe.pipe';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
})
export class StoreComponent implements OnInit {

  query: string = "";

  faShoppingCart = faShoppingCart;
  faSearch = faSearch;

  public selectedCategory = null;
  public productsPerPage = 8;
  public selectedPage = 1;

  constructor(private repository: ProductRepository, private cart: Cart, private router: Router) { }

  get products(): Product[] {
    let pageIndex = (this.selectedPage - 1) * this.productsPerPage;
    // slice() wyodrębnia fragment tablicy i zwraca nową tablicę. [begin, [end]]
    return this.repository.getProducts(this.selectedCategory).slice(pageIndex, pageIndex + this.productsPerPage);
  }

  get categories(): string[] {
    return this.repository.getCategories();
  }

  changeCategory(newCategory?: string) {
    this.selectedCategory = newCategory;
  }

  changePage(newPage: number) {
    this.selectedPage = newPage;
  }

  changePageSize(newSize: number) {
    this.productsPerPage = Number(newSize);
    this.changePage(1);
  }

  get pageCount(): number {
    // Math.ceil - Zwraca najmniejszą liczbę całkowitą większą od lub równą danej.
    return Math.ceil(this.repository.getProducts(this.selectedCategory).length / this.productsPerPage);
  }

  addProductToCart(product: Product) {
    this.cart.addLine(product);
  }

  ngOnInit(): void {
  }

}
