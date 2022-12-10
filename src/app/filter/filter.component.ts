import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {



 
 

    enteredSerchValue:any=''
    constructor(){
    
    }
    @Input() dataSource = new MatTableDataSource();
    ngOnInit():void{
    
    }
    @Output() 
    searchtextChanged:EventEmitter<any>=new EventEmitter<any>();
    onSearchtextChanged(){
      this.searchtextChanged.emit(this.enteredSerchValue)  
    }
}
