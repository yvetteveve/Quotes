import { Component } from '@angular/core';
import {quote} from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quotes';
  quotes = [
    new quote(1,'Watch Finding Nemo',""),
    new quote(2,'Buy Cookies',""),
    new quote(3, 'Get new Phone Case',""),
    new quote(4, 'Get Dog Food',""),
    new quote(5, 'Solve math homework',""),
    new quote(6, 'Plot my world domination plan',""),

]
}

