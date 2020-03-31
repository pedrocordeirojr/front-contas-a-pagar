import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Conta } from 'src/model/conta';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' ,              'Access-Control-Allow-Credentials': 'true',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'})
};
const apiUrl = 'http://localhost:8080/v1/contas-a-pagar';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  listarContas (): Observable<Conta[]> {
    return this.http.get<Conta[]>(apiUrl)
      .pipe(
        catchError(this.handleError('listarContas', []))
      );
  }
 

  incluirConta (conta): Observable<Conta> {
    return this.http.post<Conta>(apiUrl, conta, httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((conta: Conta) => console.log(`adicionou uma a conta w/ id=${conta.nome}`)),
      catchError(this.handleError<Conta>('incluirConta'))
    );
  }

  
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }
}
