import { CustomersComponent } from "./customers/customers.component";
import { OrdersComponent } from "./orders/orders.component";
import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CustomersRouterModule } from "./customers/customersroutes.module";
import { OrdersRouterModule } from "./orders/ordersroute.module";
import { PageNotFound } from "./pagenotfound.component";

export const routes:Routes = [
    
    { path: '', pathMatch: 'full', redirectTo: '/customers' },
    // {path:'',  redirectTo:'customers', pathMatch:'full'},
    {path:'orders', loadChildren:'./orders/orders.module#OrdersModule'},
    {path: 'customers', loadChildren:'./customers/customers.module#CustomersModule'},
    
    {path:'**',  component:PageNotFound},
]

@NgModule({
    declarations: [PageNotFound],
    imports: [RouterModule.forRoot(routes), CustomersRouterModule, OrdersRouterModule],
    exports:[RouterModule]
})
export class RouteModule{

}