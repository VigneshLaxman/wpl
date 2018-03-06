import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

@Injectable()
export class InterceptorService implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // console.log("req", req);
    // const duplicate = req.clone({ headers : req.headers.set("Content-Type", "text/json") });
    // console.log("duplicate", duplicate);
    // return next.handle(duplicate);
    return next.handle(req).do((event) => {
      if (event instanceof HttpResponse) {
        console.log('intercepted event', event);
      }
    });
  }
  constructor() { }

}
