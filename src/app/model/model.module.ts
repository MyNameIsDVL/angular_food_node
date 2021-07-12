import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { Cart } from "./cart.model";
import { Order } from "./order.model";
import { OrderRepository } from "./order.repository";
import { ProductRepository } from "./product.repository";
import { RestDataSource } from "./rest.datasource";
import { StaticDataSource } from "./static.datasource";
import { SearchPipePipe } from './search-pipe.pipe';

@NgModule({
    imports: [
        HttpClientModule
    ],
    providers: [ // które klasy powinny być używane w charakterze usług dla mechanizmu wstrzykiwania zależności
        ProductRepository,
        Cart,
        Order,
        OrderRepository,
        { provide: StaticDataSource, useClass: RestDataSource }
    ],
    declarations: []
})
export class ModelModule {

}