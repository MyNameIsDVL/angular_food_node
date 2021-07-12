import { Injectable } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from "@angular/router";
import { StoreComponent } from "./store/store/store.component";

@Injectable()
export class FirstGuard {
    private firstNavigation = true;

    constructor(private router: Router) {}

    // ActivatedRouteSnapshot - Zawiera informacje o trasie związanej z komponentem załadowanym do gniazda w konkretnym momencie czasu.
    // RouterStateSnapshot- Reprezentuje stan routera
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.firstNavigation) {
            this.firstNavigation = false;
            if (route.component != StoreComponent) {
                this.router.navigateByUrl("/store");
                return false;
            }
        }
        return true;
    }
}