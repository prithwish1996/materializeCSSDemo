import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner'; 
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {AppComponent} from '../app.component';
import * as $ from 'jquery';

const httpOptions = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin':'*'
  })
};

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

	email = "";
	password = "";
	name = "";
	falseCredentials = false;
	loginCredentials: any = {};

   constructor(private httpClient:HttpClient, private spinner: NgxSpinnerService,private router: Router, private app: AppComponent){ }

  ngOnInit() {
  }

  

  logIn(){
  	
  	this.spinner.show();
  	console.log("get");

  	this.loginCredentials = {
  		"email" : this.email,
  		"password" : this.password
  	}
  	this.httpClient.post('http://localhost:8080/DemoMVC/login',this.loginCredentials, httpOptions).subscribe(

  		(data:any[])=>{
  			
  			// localStorage.setItem('currentUser', JSON.stringify({ token: token, name: name }));
  			console.log(data);		
  			
  			 this.spinner.hide();
  			if(data==null){
  				this.falseCredentials = true;
  				console.log("Usrname or Password is Incorrect");
  			}
  			else{

  				
  				this.falseCredentials = false;
  				this.app.loginStatus = true;
  				for (let key in data) {
  			 	if(key=="name"){
        			this.name = data[key];
    		}
    }			

  				localStorage.setItem("email",this.email);
  				localStorage.setItem("name",this.name);
  				this.router.navigateByUrl('/home');

  				console.log(data);
  			}
  		}

  	)

  	// document.location.href = 'https://accounts.google.com/o/oauth2/auth?redirect_uri=http://www.192.168.43.86.xip.io:8080/login&response_type=code&client_id=248273901415-jqd03s19l8s0ldtr40ui9qv48u8euul3.apps.googleusercontent.com&scope=https://www.googleapis.com/auth/analytics.readonly+https://www.googleapis.com/auth/userinfo.email&approval_prompt=force&access_type=offline';
  }

  // $('#loginBtn').addClass('animated bounceOutLeft');

}
