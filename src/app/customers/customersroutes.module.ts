import { NgModule } from "@angular/core";
import { CustomersComponent } from "./customers.component";
import { CustomersCardViewComponent } from "./customerscardview.component";
import { CustomersListViewComponent } from "./customerslistview.component";
import { RouterModule, Routes } from "@angular/router";

const custroutes:Routes = [
    {
        path: '', component: CustomersComponent,
        children:[
            {path: 'cardview', component: CustomersCardViewComponent },
            {path:'listview', component: CustomersListViewComponent},
                ]
    }
]
@NgModule({
    declarations: [CustomersComponent, CustomersCardViewComponent, CustomersListViewComponent],
    imports: [RouterModule.forChild(custroutes)],
    exports: [RouterModule]
})
export class CustomersRouterModule{

}