import { CustomersComponent } from "./customers/customers.component";
import { OrdersComponent } from "./orders/orders.component";
import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CustomersRouterModule } from "./customers/customersroutes.module";
import { OrdersRouterModule } from "./orders/ordersroute.module";
import { PageNotFound } from "./pagenotfound.component";

export const routes:Routes = [
    
    {path:'orders', component:OrdersComponent},
    {path: 'customers', loadChildren:'./customers/customers.module#CustomersModule'},
    {path:'',  redirectTo:'customers', pathMatch:'full'},
    {path:'**',  component:PageNotFound},
]

@NgModule({
    declarations: [PageNotFound],
    imports: [RouterModule.forRoot(routes), CustomersRouterModule, OrdersRouterModule],
    exports:[RouterModule]
})
export class RouteModule{

}