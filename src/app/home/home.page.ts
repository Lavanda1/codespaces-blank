import { Component } from '@angular/core';


interface Book {
  bookName: string
  authorName: string
  year: number
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
  books: Book[] =[
    {bookName:"Мертвые души", authorName:"Пушкин", year: 1980},
    {bookName:"О моем перораждение", authorName:"Юкин", year: 2020},
  ]
  btnClick(){
    this.myName = this.myName + "!"
  }

}
