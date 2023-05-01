import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit{

  ngOnInit(): void {
    this.getRequestList()
  }

  requestlist:any
   
  constructor(private http:HttpClient){
    this.requestlist = [];
  }

  getRequestList(){
    const url = 'http://localhost:2001/requestlist/'+sessionStorage.getItem('userid')
    this.http.get(url).subscribe((result)=>{
      this.requestlist = result
      console.log(result)
    })
  }


}
