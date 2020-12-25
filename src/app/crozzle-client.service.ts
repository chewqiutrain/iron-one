import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


// marks this class as participating in the dependency injection system
@Injectable({
  /* register a "provider", which can create or deliver a service 
    Since it is provided at the root level (default), Angular will create 1 instance that is shared and injected 
    into any class that asks for it. Registering it also allows Angular to remove the service if it is not used.
  */
  providedIn: 'root'  
  
})
export class CrozzleClientService {

  constructor(private httpClient: HttpClient) { }

  private crozzleURI = "http://localhost:8080"

  ping(): Observable<string> {
    const thisUri = this.crozzleURI + "/ping";
    const opts = {
      responseType: 'text' as const
    };

    console.log(`CrozzleClientService | ping() | uri: ${thisUri}`)
    const x = this.httpClient.get(thisUri, opts);
    return x;
  }
}
