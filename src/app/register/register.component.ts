import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {HttpClient} from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner'; 
import { of } from 'rxjs/observable/of';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public loading = false;
	first_name = "";
	last_name  = "";
	password   = "";
	cnfmpassword = "";
	username  = "";
	salary = "";
	dept = "";
	email = "";
	output: any = {};
	
  title = 'materializeCSSDemo';

  constructor(private httpClient:HttpClient, private spinner: NgxSpinnerService, private _flashMessagesService: FlashMessagesService, private router: Router){ }
    public ngOnInit()
  {
  	// this._flashMessagesService.show('Success!', { cssClass: 'alert-success' } );
  	// this._flashMessagesService.grayOut(true);
  	// this._flashMessagesService.show('We are in about component!', { cssClass: 'alert-success', timeout: 1000 });
    $("#cnfmpassword").on("keyup", function (e) {
    if ($("#password").val() != $("#cnfmpassword").val()) {
        $("#cnfmpassword").removeClass("valid").addClass("invalid");
    } else {
        $("#cnfmpassword").removeClass("invalid").addClass("valid");
    }
});


  }

  // onShowSuccess() {
  //           this.flashMessage.success('Success message');
  //       }



  passData(){
  	// this.flashMessage.success('Message');
  	this.spinner.show();
  	console.log(this.first_name);
  	console.log(this.last_name);
  	console.log(this.password);
  	console.log(this.cnfmpassword);
  	console.log(this.username);
  	console.log(this.salary);
  	console.log(this.dept);
  	console.log(this.email);
  	this.output = {

  			"name" : this.first_name,
  			"username" : this.username,
  			"password" : this.password,
  			"salary" : this.salary,
  			"dept" : this.dept,
  			"email" : this.email


  		}

  	this.httpClient.post('http://localhost:8080/DemoMVC/addData',this.output).subscribe(

  		(data:any[])=>{
  				

  			if(data==null){
  				this.spinner.show();
  			}
  			else{
  				this.spinner.hide();
  			console.log(data);
  		}
  		}

  	)


  }

  

}
