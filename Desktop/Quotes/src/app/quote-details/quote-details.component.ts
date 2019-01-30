import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Quotes} from '../quote'
import {Quote} from '@angular/compiler';
@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() quote:Quotes;
  @Output() isComplete= new EventEmitter<boolean>();

  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  public upvote: number = 0;
  isLiked(upvote) {
    this.upvote += 1;
  }
  public downvote: number = 0;
  isDisLiked(upvote) {
    this.upvote -= 1;
  }

  constructor() { }

  ngOnInit() {
  }

}
