import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
        selector: 'app-customercomponent',
        templateUrl: 'customer.component.html'
})

export class CustomerComponent{
    @Input() user;
    @Input() userage;
    @Output()  data = new EventEmitter();
      
    changeName(){
        console.log('change name')
        this.user = this.user === 'ravi' ? 'pavan' : 'ravi';
        this.userage = 25;
        this.data.emit(this.userage);
    
}


}