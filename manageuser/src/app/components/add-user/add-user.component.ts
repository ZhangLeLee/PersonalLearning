import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  users:any;
  user:any = {
  	name:'',
  	email:'',
  	phone:'',
  	balance:''
  }
  constructor(
  	public userService:UserService,
  	private router:Router
  ) {
  	this.userService.getUsers().subscribe(res => this.users = res); 
  }

  onSubmit(){  //subscribe订阅者模式拿到服务端数据
    // 添加
    this.userService.addUser(this.user).subscribe(res => {
      this.router.navigate(['/']);
    });
  }

  ngOnInit() {
  }

}
