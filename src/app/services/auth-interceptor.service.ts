import { Inject, Injectable } from '@angular/core';
import { Observable ,from, lastValueFrom } from 'rxjs';
import { HttpEvent, HttpHandler, HttpRequest, HttpInterceptor } from '@angular/common/http';
import { OKTA_AUTH } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(@Inject(OKTA_AUTH) private oktaAuth:OktaAuth) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Clone the request to add the new header.
    return from(this.handleAccess(request,next));
  } private async handleAccess(request: HttpRequest<any>, next: HttpHandler): Promise<HttpEvent<any>> {
    const theEndpoint=environment.giftshopApiUrl + '/orders';
    const securedEndPoints= [theEndpoint];
    if(securedEndPoints.some(url => request.urlWithParams.includes(url))) {
      const accessToken = await this.oktaAuth.getAccessToken();
      if (accessToken) {
        request = request.clone({
          setHeaders: {
            Authorization: 'Bearer ' + accessToken
          }
        });
      }
      return await lastValueFrom(next.handle(request));
    }
      return await lastValueFrom(next.handle(request));
  }
 

  
}

