import {CanActivate} from "@angular/router";
/**
 * Created by Administrator on 2017/12/10/010.
 */
export class LoginGuard implements CanActivate {

  canActivate(){
    let loggedIn : boolean = Math.random() < 0.5;
    if (!loggedIn) {
      alert("登录不成功")
    }
    return loggedIn;
  }

}
