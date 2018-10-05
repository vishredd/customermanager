import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CustomerComponent } from "./customer.component";
import { CustomerRoutesModule } from "./customerroutemodule";

@NgModule({
    imports: [CommonModule, CustomerRoutesModule],
    declarations: [CustomerComponent],
    exports: [CustomerComponent]
})
export class CustomerModule{

}