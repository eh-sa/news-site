import { Component, OnInit , NgZone } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { GoogleApiService, UserInfo } from 'src/app/services/google-api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CredentialResponse, PromptMomentNotification } from 'google-one-tap';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // userInfo?: UserInfo;

  // constructor(private readonly googleApi: GoogleApiService, private router : Router) { 
  //   googleApi.userProfileSubject.subscribe(info => {
  //     this.userInfo = info
  //     console.log("user info",info)
  //   })
  // }
  
  private clientId = environment.clientId

  constructor(
    private router: Router,
    private service: AuthService,
    private _ngZone: NgZone) { }
  // isLoggedIn(): boolean {
  //   return this.googleApi.isLoggedIn()
    

  // }

  // logOut() {
  //   this.googleApi.signOut()
  // }

  ngOnInit(): void {

    // @ts-ignore
    window.onGoogleLibraryLoad = () => {
      // @ts-ignore
      google.accounts.id.initialize({
        client_id: this.clientId,
        callback: this.handleCredentialResponse.bind(this),
        auto_select: false,
        cancel_on_tap_outside: true
      });
      // @ts-ignore
      google.accounts.id.renderButton(
      // @ts-ignore
      document.getElementById("buttonDiv"),
        { theme: "outline", size: "large"} 
      );
      // @ts-ignore
      google.accounts.id.prompt((notification: PromptMomentNotification) => {});
    };
  }

  async handleCredentialResponse(response: CredentialResponse) {
    await this.service.LoginWithGoogle(response.credential).subscribe(
      (x:any) => {
        localStorage.setItem("token", x.token);
        this._ngZone.run(() => {
          this.router.navigate(['/logout']);
        })},
      (error:any) => {
          console.log(error);
        }
      );  
}

}
