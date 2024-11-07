import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

const apiUrl:string = "https://cataas.com/api/cats"
// const apiUrl:string = "https://cataas.com/cat"

@Injectable({
    providedIn: 'root'
})

export class ApiService {
    constructor(private http: HttpClient) {}
    
    getData():Observable<any> {
        return this.http.get(apiUrl);
    }
}