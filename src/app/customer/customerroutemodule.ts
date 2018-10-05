import { CustomerComponent } from "./customer.component";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

export const customerRoutes =[
    {
        path:'',
        component:CustomerComponent
    }
]
@NgModule({
    imports:[RouterModule.forChild(customerRoutes)],
    exports:[RouterModule]
})
export class CustomerRoutesModule{

}