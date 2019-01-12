import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {AppComponent} from '../app.component';

// import {LoginComponent} from '../login/login.component'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	email = "";
	name = "";


  constructor(private router:Router,private httpClient:HttpClient, private app: AppComponent) { }

  ngOnInit() {
  	
  	this.email = localStorage.getItem("email");
  	this.name = localStorage.getItem("name");

  }

  logOut(){

  	this.httpClient.get('http://localhost:8080/DemoMVC/logout',{responseType: 'text'}).subscribe(

  		(data:String)=>{
  			
  			// localStorage.setItem('currentUser', JSON.stringify({ token: token, name: name }));
  			console.log(data);		


  			if(data==null){
  				console.log("OOPS!! Error Ocurred");
  			}
  			else{
  				// this.spinner.hide();
  				this.app.loginStatus = false;
  					localStorage.clear();
  					this.router.navigateByUrl('/login');
  				

  				console.log(data);
  			}
  		}

  	)

  	
  	

  }

}
