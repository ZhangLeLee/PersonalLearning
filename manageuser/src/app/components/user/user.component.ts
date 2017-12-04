import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users:any;
  user:any={
  	name:'',
  	email:'',
  	phone:'',
  	balance:''
  };
  sum:number;
  constructor(
  	public userService:UserService
    ) {
  	this.userService.getUsers().subscribe(res => {
  		this.users = res;
  		this.sum = 0;
  		for(let i = 0; i < this.users.length; i++ ){
  			this.sum += parseInt(this.users[i].balance);
  		}
  	});
  }

  ngOnInit() {
  }

}
