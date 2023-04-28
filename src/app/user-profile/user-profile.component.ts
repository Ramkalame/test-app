import { AfterViewInit, Component, OnInit, ViewChild, Input} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { LoginComponent } from '../login/login.component';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit{

resData:any
//bookshlef:any
constructor(private http:HttpClient){
 // this.bookshelf = [];
}
  
  ngOnInit(): void {
      this.fetchProfile()
     

  }




   fetchProfile(){
    
    const userid = sessionStorage.getItem('userid')
    const url='http://localhost:2001/getuserprofile/'+userid;
    this.http.get(url)
    .subscribe((res)=>{
      console.log(res)
      this.resData = res;  
    })  
  }

  // bookshelf(){
  //   const url ='http://localhost:2001/bookshelf/ram@gmail.com'
  //   this.http.get(url).subscribe((res)=>{
  //     this.bookshelf = res
  //   })
  // }

  
  

}
