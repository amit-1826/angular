import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

export class AuthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('header in auth', req.headers);
    const modifiedRequest = req.clone({headers: req.headers.append('auth', 'value')});
    return next.handle(modifiedRequest);
  }
}
