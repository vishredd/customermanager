import { Component, OnInit } from "@angular/core";
import { Service } from "../core/service/service";

@Component({
    selector: 'app-customerscomponent',
    templateUrl: 'customers.component.html'
})
export class CustomersComponent implements OnInit{
    datacontent;
    
    displayMode: DisplayModeEnum;
    displayModeEnum = DisplayModeEnum;
    totalRecords = 0;
    pageSize = 10;
    
    constructor(public data:Service){
        // var selfthis = this;
        }

        ngOnInit(){
            let selfthis = this;
            this.data.getInfo().subscribe(function(dataInfo){
                console.log(dataInfo);
                selfthis.datacontent = dataInfo;
                this.displayMode = DisplayModeEnum.Card;
        })
        //    setTimeout(()=>{console.log('setTimeout',this.datacontent)},1000);
        setTimeout(() => {console.log('setTimeout',this.datacontent)},1000)
    }
        onPaginationClick(val){
            console.log('customers component value recieved from pagination event trigger', val);
        }
    
        changeDisplayMode(mode: DisplayModeEnum) {
            this.displayMode = mode;
        }
        
      
 }
 enum DisplayModeEnum {
    Card = 0,
    List = 1,
    Map = 2
  }