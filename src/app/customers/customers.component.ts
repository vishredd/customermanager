import { Component } from "@angular/core";
import { Service } from "../core/service/service";

@Component({
    selector: 'app-customerscomponent',
    templateUrl: 'customers.component.html'
})
export class CustomersComponent{

    constructor(public data:Service){
        this.data.getInfo().subscribe(function(dataInfo){
            console.log(dataInfo);
        }
        
        
        )
    }
    
    obj = {
        name : 'vishnu'
    }
    age = 10;
    changeage(val){
        this.age = val;
    }
 }