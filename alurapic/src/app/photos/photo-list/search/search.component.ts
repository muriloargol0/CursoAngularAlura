import { debounceTime, filter } from 'rxjs/operators';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'ap-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {

  @Output() onTyping: EventEmitter<string> = new EventEmitter<string>();

  @Input() value: string = '';

  debounce: Subject<string> = new Subject<string>();
    

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }
 
  ngOnInit(): void {
    this.debounce.pipe(debounceTime(300))
      .subscribe(filter => this.onTyping.emit(filter));
  }
}
