import { Component, OnInit } from '@angular/core';
import {quote} from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class quoteComponent implements OnInit {
  quotes = [
    new quote(1,'Watch Finding Nemo','Find an online version and watch merlin find his son'),
    new quote(2,'Buy Cookies','I have to buy cookies for the parrot'),
    new quote(3, 'Get new Phone Case','Diana has her birthday coming up soon'),
    new quote(4, 'Get Dog Food','Pupper likes expensive sancks'),
    new quote(5, 'Solve math homework','Damn Math'),
    new quote(6, 'Plot my world domination plan','Cause I am an evil overlord'),
]

completeQuote(isComplete,index){
  if (isComplete){
      this.quotes.splice(index,1);
      }
      }

// toogleDetails(index){
//   this.quotes[index].showDescription = !this.quotes[index].showDescription;
// }

//   constructor() { }
//   ngOnInit() {
//   }
// }
