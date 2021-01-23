import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name:string;
  surname:string;
  password:string;
  email:string;
  passwordCheck:string;

  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
  }

  register():void{

    if(this.password == this.passwordCheck){
      let user = new User(this.name,this.surname,this.email,this.password);    
      this.userService.registerUser(user);
      this.router.navigateByUrl('/');
    }
  }

}
