import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
	selector: 'app-user-detail',
	templateUrl: './user-detail.component.html',
	styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
	id:number;
	user:object={};
	constructor(
		private router: Router,
		private route:ActivatedRoute,
		public userService:UserService
		) { 
		this.route.params.subscribe((params:Params) => {
			this.id = params.id;
		});
	}

  	// 删除数据
  	onDelete(this.id){
  		this.userService.deleteUser(id).subscribe(user => {
    		this.router.navigate(['/']);
    	});
  	}

  	ngOnInit() {
  		this.userService.getSingleUser(this.id).subscribe(user => {
  			this.user = user;
      		// console.log(this.user);
  		})
  	}

  }
