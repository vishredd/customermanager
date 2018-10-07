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
            let selfthis = this;
            this.data.getInfo().subscribe(function(dataInfo){
                console.log(dataInfo);
                selfthis.datacontent = this.dataInfo;
                console.log('inside subscribe method', this.datacontent);
        })
        //    setTimeout(()=>{console.log('setTimeout',this.datacontent)},1000);
        setTimeout(() => {console.log('setTimeout',this.datacontent)},1000)
    }
    
    obj = {
        name : 'vishnu'
    }
    age = 10;
    changeage(val){
        this.age = val;
    }
 }