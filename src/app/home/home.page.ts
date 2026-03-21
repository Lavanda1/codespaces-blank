import { Component } from '@angular/core';
import {v4} from 'uuid';

interface Book {
  uid: string
  bookName: string
  authorName: string
  year: number|null
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})

export class HomePage {

  constructor() {}
  myName: string = "София"
  todo: string[] = [ "Помытся", "Убраться", "Вынести мусор"]

  newBook: Book= {
    uid: v4(),
    bookName:"",
    authorName:"",
    year:null
  }

  books: Book[] =[
    {uid: v4(),bookName:"Мертвые души", authorName:"Пушкин", year: 1980},
    {uid: v4(),bookName:"О моем перораждение", authorName:"Юкин", year: 2020}
  ]
  btnClick(){this.books.push({...this.newBook, uid: v4()})}
  delClick(el:string){
    this.myName = el 
    this.books = this.books.filter((record)=>record.uid != el)
  }


}
