import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../service/apiService';
import { Cat } from '../../../model/cats';

@Component({
  selector: 'app-list-users',
  standalone: true,
  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.css'
})
export class ListUsersComponent implements OnInit {
  constructor(private apiService:ApiService) {}
  private _isError:boolean = false;
  cats!:Cat[];

  ngOnInit() {
    console.log("Execució de ListUsersComponent");
    
    this.apiService.getData().subscribe( {
      next: (data:Cat[]) => {
        this._isError=false;
        this.cats=data;
        console.log(this.cats);
      },
      error: (err) => this._isError=true
    }); 
  }


  set isError(error:boolean) { this._isError=error; }
  get isError() { return  this._isError; } 

  showTags(cat:Cat):string {
    if (cat.tags) return cat.tags.toString();
    return "";
  }
  errorMessage():String {
    return "Error en la connexió amb l'API";
  }
} 
