import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import {Product} from "../product/product.component";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
/**
 *
 * Created by Administrator on 2017/12/10/010.
 */
@Injectable()
export class ProductResolve implements Resolve<Product> {

  constructor(private router : Router) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product>|Promise<Product>|Product {
    let productId : number = route.params['id'];
    if (productId == 1) {
      return new Product(1,"iphonx");
    } else {
      this.router.navigate(['/home']);
      return undefined;
    }
  }

}
