import { Inject, Injectable } from '@angular/core';
import { Observable, from, lastValueFrom } from 'rxjs';
import { HttpEvent, HttpHandler, HttpRequest, HttpInterceptor } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthService } from '@auth0/auth0-angular';
@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private auth: AuthService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Clone the request to add the new header.
    return from(this.handleAccess(request, next));
  }
  private async handleAccess(request: HttpRequest<any>, next: HttpHandler): Promise<HttpEvent<any>> {
    const theEndpoint = environment.giftshopApiUrl + '/orders';
    const securedEndPoints = [theEndpoint];
    if (securedEndPoints.some((url) => request.urlWithParams.includes(url))) {
      await this.auth.getAccessTokenSilently().forEach((token) => {
        console.log("Access Token: ", token);
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`
          },
        });
      });

    }
    return await lastValueFrom(next.handle(request));
  }



}

