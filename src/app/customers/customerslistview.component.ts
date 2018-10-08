import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-customerslistview',
    templateUrl: 'customerslistview.component.html'
})
export class CustomersListViewComponent{
@Input() datainfo;
}