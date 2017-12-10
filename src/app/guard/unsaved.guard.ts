import {CanDeactivate} from "@angular/router";
import {ProductComponent} from "../product/product.component";
/**
 *
 * Created by Administrator on 2017/12/10/010.
 */

export class UnsavedGuard implements CanDeactivate<ProductComponent> {

  canDeactivate(component: ProductComponent) {
    return window.confirm("你还没有保存，确定要离开吗？");
  }

}
