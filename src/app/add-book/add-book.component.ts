import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit{
  addbookForm!: FormGroup;
  res:any;
  
  constructor(private formBuilder: FormBuilder,private http:HttpClient,private route:Router) {}
  ngOnInit(): void {
    this.addbookForm = this.formBuilder.group({
      isbn: ['', Validators.required],
      name: ['', Validators.required],
      author: ['', Validators.required],
      category: ['', Validators.required],
      description: ['', Validators.required],
     
    })
 }
 onSubmit() {
  const url='http://localhost:2001/addbook'
    
    const headers = new HttpHeaders({'myHeader':'header'});

    //headers = headers.set('userid')
    // let option:any={
    //   headers:headers,
    //   responseType:'text',
      
      
    // }

    sessionStorage.setItem('isbn',this.addbookForm.value.isbn)
    var body:any;
    body={
      
        "userid": sessionStorage.getItem('userid'),
        "password": sessionStorage.getItem('password'),
        "isbn": this.addbookForm.value.isbn,
        "name": this.addbookForm.value.name,
        "author": this.addbookForm.value.author,
        "category": this.addbookForm.value.category,
        "description": this.addbookForm.value.description
      
    }

    console.log(this.addbookForm.value.isbn)
    console.log(this.addbookForm.value.name)
    console.log(this.addbookForm.value.author)
    console.log(this.addbookForm.value.category)
    console.log(this.addbookForm.value.description)
    console.log(sessionStorage.getItem('userid'))
    console.log(sessionStorage.getItem('password'))



    this.http.post(url,body,{headers:headers}).subscribe(
      (response)=>{
        console.log('POST request successful', response);
      }
      

    )
  }






}
