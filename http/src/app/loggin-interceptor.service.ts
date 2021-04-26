import { HttpHandler, HttpEventType, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { tap } from "rxjs/operators";

export class LogginInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log('headers in log: ', req.headers);
    return next.handle(req).pipe(tap(event => {
      console.log('event: ', event);
      if (event.type == HttpEventType.Response) {
        console.log('response arrived: ', event.body);
      }
    }));
  }
}
