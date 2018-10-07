import { Component, OnInit } from "@angular/core";
import { Service } from "../core/service/service";

@Component({
    selector: 'app-customerscomponent',
    templateUrl: 'customers.component.html'
})
export class CustomersComponent implements OnInit{
    datacontent;
    
    constructor(public data:Service){
        // var selfthis = this;
        }

        ngOnInit(){

            this.data.getInfo().subscribe(function(dataInfo){
                console.log(dataInfo);
                this.datacontent = this.dataInfo;
        }

        // setTimeout =>(console.log('set time out',this.datacontent),1000)
        
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