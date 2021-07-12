import { Injectable } from "@angular/core";
import { Observable, from } from "rxjs";
import { Order } from "./order.model";
import { Product } from "./product.model";

@Injectable()
export class StaticDataSource {
    private products: Product[] = [
        new Product(1, "Produkt 1", "Kategoria 1", "Produkt 1 (Kategoria 1)", "../../../assets/images/duck-2957809_960_720.webp", 100),
        new Product(2, "Produkt 2", "Kategoria 2", "Produkt 2 (Kategoria 2)", "../../../assets/images/duck-2957809_960_720.webp", 100),
        new Product(3, "Produkt 3", "Kategoria 1", "Produkt 3 (Kategoria 3)", "../../../assets/images/duck-2957809_960_720.webp", 100),
        new Product(4, "Produkt 4", "Kategoria 2", "Produkt 4 (Kategoria 4)", "../../../assets/images/duck-2957809_960_720.webp", 100),
        new Product(5, "Produkt 5", "Kategoria 2", "Produkt 5 (Kategoria 5)", "../../../assets/images/duck-2957809_960_720.webp", 100),
        new Product(6, "Produkt 6", "Kategoria 3", "Produkt 6 (Kategoria 6)", "../../../assets/images/duck-2957809_960_720.webp", 100),
        new Product(7, "Produkt 7", "Kategoria 3", "Produkt 7 (Kategoria 7)", "../../../assets/images/duck-2957809_960_720.webp", 100),
        new Product(8, "Produkt 8", "Kategoria 1", "Produkt 8 (Kategoria 8)", "../../../assets/images/duck-2957809_960_720.webp", 100),
        new Product(9, "Produkt 9", "Kategoria 1", "Produkt 9 (Kategoria 9)", "../../../assets/images/duck-2957809_960_720.webp", 100),
        new Product(10, "Produkt 10", "Kategoria 2", "Produkt 10 (Kategoria 10)", "../../../assets/images/duck-2957809_960_720.webp", 100),
        new Product(11, "Produkt 11", "Kategoria 2", "Produkt 11 (Kategoria 11)", "../../../assets/images/duck-2957809_960_720.webp", 100),
        new Product(12, "Produkt 12", "Kategoria 3", "Produkt 12 (Kategoria 12)", "../../../assets/images/duck-2957809_960_720.webp", 100),
        new Product(13, "Produkt 13", "Kategoria 3", "Produkt 13 (Kategoria 13)", "../../../assets/images/duck-2957809_960_720.webp", 100),
        new Product(14, "Produkt 14", "Kategoria 1", "Produkt 14 (Kategoria 14)", "../../../assets/images/duck-2957809_960_720.webp", 100),
        new Product(15, "Produkt 15", "Kategoria 2", "Produkt 15 (Kategoria 15)", "../../../assets/images/duck-2957809_960_720.webp", 100),
    ];

    getProducts(): Observable<Product[]> {
        return from([this.products]);
    }

    saveOrder(order: Order): Observable<Order> {
        console.log(JSON.stringify(order));
        return from([order]);
    }
}