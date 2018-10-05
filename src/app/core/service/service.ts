import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class Service{   
    constructor(public http: HttpClient){

    }
    getInfo(){
        return this.http.get('./assets/data.json');
    }

}