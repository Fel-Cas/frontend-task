import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user={
    user:'',
    names:'',
    lastnames:'',
    email:'',
    password:''

  }
  constructor(private authService:AuthService,
    private router:Router) { }

  ngOnInit(): void {
  }
  signUp(){
    this.authService.signUp(this.user).subscribe(
      res=>{
        this.router.navigate(['/signin'])
      },
      err=>{
        console.log(err);
      }
    )
  }
}
