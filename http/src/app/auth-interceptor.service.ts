import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export class AuthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const modifiedRequest = req.clone({headers: req.headers.append('auth', 'value')});
    console.log('request is on its way: ', req);
    return next.handle(modifiedRequest);
  }
}
