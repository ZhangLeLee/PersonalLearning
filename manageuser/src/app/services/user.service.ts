import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

    constructor(
  	    public http:Http
    ) {}

	getUsers(){
	  	return this.http.get("http://localhost:3000/users")
				 .map(res => res.json());
	}

	getSingleUser(id){
		return this.http.get("http://localhost:3000/users/"+id)
					.map(res => res.json());
	}

  	// 添加
  	addUser(user){
		return this.http.post("http://localhost:3000/users",user)
					.map(res => res.json());
	}

	// 删除
	deleteUser(id){
		return this.http.delete("http://localhost:3000/users/"+id)
					.map(res => res.json());
	}

	// 更新数据
	update(user){
	      return this.http.put("http://localhost:3000/users/" + user.id,user)
	       	.map(res => res.json());
	}

}
