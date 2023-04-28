import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-book-profile',
  templateUrl: './book-profile.component.html',
  styleUrls: ['./book-profile.component.css']
})
export class BookProfileComponent implements OnInit{

  bookdetail:any;
  constructor(private http:HttpClient, private activatedRoute:ActivatedRoute ){
    this.bookdetail=[];
  }

  ngOnInit(): void {
      this.activatedRoute.paramMap.subscribe((response)=>{
        let isbn = response.get('isbn')
        console.log(response)
        this.getbookdetail(isbn)
      })
  }

  getbookdetail(isbn:any){
    const url='http://localhost:2001/getbook/'+isbn;
    this.http.get(url).subscribe((res)=>{
      console.log(res)
      this.bookdetail = res
    })
  }

  

}
