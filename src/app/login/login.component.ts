import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit{

  loginForm!: FormGroup;
  signin=false;
  isLoggedIn = false;
  

  constructor(private formBuilder:FormBuilder,private http:HttpClient,private route:Router){}

  ngOnInit(): void {
      this.loginForm = this.formBuilder.group({
        userid:['',Validators.required],
        password:['',Validators.required]
      })
  }

  
  signIn(){
    this.signin =true
    sessionStorage.setItem('userid',this.loginForm.value.userid)
    sessionStorage.setItem('password',this.loginForm.value.password)
    var body:any;
    body={
      
        "userid": this.loginForm.value.userid,
        "password": this.loginForm.value.password,
      
    }
   let useridForm = this.loginForm.value.userid
   let passwordForm = this.loginForm.value.password

    const url ='http://localhost:2001/login/'+useridForm
    this.http.get(url).subscribe((res)=>{

      const myMap = new Map(Object.entries(res))
      let userid = myMap.get('userid')
      
      
      let password = myMap.get('password')

      if(useridForm===userid && passwordForm===password){
        this.route.navigate(['lib-home']);
        this.isLoggedIn = true;
        
       }
       else{
        
        return
      
       }
      
    })
    

  

  }
}
