import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
	selector: 'app-edit-user',
	templateUrl: './edit-user.component.html',
	styleUrls: ['./edit-user.component.css']
})

export class EditUserComponent implements OnInit {
	id:number;
	user:object={};
	users:any;
	constructor(
		private router: Router,
		private route: ActivatedRoute,
		public userService: UserService
		) { 
		this.userService.getUsers().subscribe(res => this.users = res);
		this.route.params.subscribe((params:Params) => {
			this.id = params.id;
			// console.log(this.id);
		});
	}

	// 编辑
	onEdit(){
		this.userService.update(this.user).subscribe(user => {
    		this.router.navigate(['/']);
    	})
	}

	ngOnInit() {
		this.userService.getSingleUser(this.id).subscribe(user => {
			this.user = user;
			// console.log(this.user);
		})
	}

}
