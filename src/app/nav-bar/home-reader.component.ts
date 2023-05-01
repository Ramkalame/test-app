import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { NavigationStart, Router } from '@angular/router';
import { filter,pairwise} from 'rxjs/operators'
import { CategoryComponent } from '../category/category.component';



@Injectable({
  providedIn: 'root'
})


@Component({
  selector: 'app-home-reader',
  templateUrl: './home-reader.component.html',
  styleUrls: ['./home-reader.component.css']
})
export class HomeReaderComponent {
  
  navChange:String = 'loggedin';
  categoryList:any;
  categoryComponent!: CategoryComponent;
  
  constructor(private formBuilder:FormBuilder,private http:HttpClient,private route:Router){

    this.categoryList = [];
  }
  ngOnInit(): void{

    // this.categoryList();
  
          this.route.events.pipe(
            filter((val) => val instanceof NavigationStart)).subscribe((val:any)=>{
                if(val.url){
                  if(sessionStorage.getItem('userid') && val.url.includes('home')){
                    console.log(" inside library home page after login")
                    this.navChange = "loggedout"

                  }
                  else{
                    console.log("outside home page")
                    this.navChange = "loggedin"
                  }
                }
            })
          }
  
logOut(){
  sessionStorage.removeItem("userid");
}
  
 

  getCategory(listValue:any){

    const url = 'http://localhost:2001/category/'+listValue;

    this.http.get(url).subscribe(data =>{

       this.categoryList=data;
      // for(var val of this.categoryList)
      // {
      //   console.log(val);
      // }
    })
  }

}
