import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable,  } from "rxjs";
import { map, take } from 'rxjs/operators'
import { AuthStoreService } from "src/app/store/auth/auth-store.service";
import  { environment } from '../../../environments/environment'

@Injectable()
export class P2WInterceptor implements HttpInterceptor {

    constructor(private authStoreService: AuthStoreService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        req = req.clone({
            url: `${environment.apiUrl}${req.url}`,
            withCredentials: true
        })

        this.authStoreService.userProfile$.pipe(
            take(1),
            map(user => user?.token)
        ).subscribe(token => {
            req = req.clone({
                setHeaders: {
                    Authorization: token ? `Bearer ${token}` : ''
                },
                withCredentials: true
            })
        })

        return next.handle(req)
    }
}