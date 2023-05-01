import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeReaderComponent } from '../nav-bar/home-reader.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  booklist: any;
  category:any;
  constructor(private http: HttpClient, private homeReaderComponent: HomeReaderComponent) {
    this.booklist = [];

  }

  ngOnInit(): void {
    this.getBookList();

  }
 

  getBookList() {
    const url = 'http://localhost:2001/getbooklist'
    this.http.get(url).subscribe((response) => {
      console.log(response)
      this.booklist = response;
    })
  }


  


  

  
  
}




