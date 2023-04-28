import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit{
resData:any

constructor(private http:HttpClient){
  this.resData =[]
}
  ngOnInit(): void {
    this.booklist();
  }

booklist(){
  const url = 'http://localhost:2001/libbookshelf/1abc2'
  this.http.get(url).subscribe((res)=>{
    this.resData =res
    console.log(res)
  })
}

deletebook(isbn:any){
  const url = 'http://localhost:2001/deletebook'
  this.http.delete(`${url}/${isbn}`).subscribe((res)=>{
  
    
  })
}
}
