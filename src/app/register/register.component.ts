import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule ,HttpHeaders} from '@angular/common/http';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  submitted = false;
  res:any;
  
  constructor(private formBuilder: FormBuilder,private http:HttpClient,private route:Router) {}
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      userid: ['', Validators.required],
      name: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      contact: ['', Validators.required],
      address: ['', Validators.required]
  })
 }
 onSubmit() {

  this.submitted = true;

  // stop here if form is invalid
  if (this.registerForm.invalid) {
      return;
  }
  console.log(this.registerForm.value.name)
  const url='http://localhost:2001/register'
    let headers= new HttpHeaders();
    // headers = headers.set('userid')
    let option:any={
      headers:headers,
      responseType:'text',
    }
    var body:any;
    body={
      
        "userid": this.registerForm.value.userid,
        "name": this.registerForm.value.name,
        "password": this.registerForm.value.password,
        "contact": this.registerForm.value.contact,
        "address": this.registerForm.value.address,
      
    }
console.log(body)
    this.http.post(url,body,option).subscribe(
      (response)=>{
      
        this.res = (response)
        console.log(this.res)
        this.route.navigate(['home']);

      }

    )
  }

onReset() {
  this.submitted = false;
  this.registerForm.reset();
}


 }
