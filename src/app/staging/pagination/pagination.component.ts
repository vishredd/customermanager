import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'app-pagination',
    templateUrl: 'pagination.component.html'
})
export class PaginationComponent{

    private PagerTotalItems: number;
    private pagerPageSize: number;

    totalPages: number;
    pages: number[] = [];
    currentPage = 1;
    isVisible = false;
    previousEnabled = false;
    nextEnabled = true;


@Input() pageInfo;
@Output() sendInfo = new EventEmitter();
arr = [1, 2, 3, 4 ];
constructor(){
    console.log(this.pageInfo);
}
onClick(val){
    console.log(val);
    this.sendInfo.emit(val);
}

}