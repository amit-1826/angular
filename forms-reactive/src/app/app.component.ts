import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  forbiddenUsernames: Array<string> = ['Admin', 'Amit'];
  forbiddenEmailDomains: Array<string> = ['yopmail.com', 'test.com'];

  signUpForm: FormGroup;

  ngOnInit() {
    this.signUpForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.handleForbiddenUsernames.bind(this)]),
          email: new FormControl(null, [Validators.required, Validators.email], this.handleForbiddenEmails.bind(this))
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });
  }

  onSubmit() {
    console.log(this.signUpForm);
  }

  onAddHobby() {
    let control = new FormControl(null, Validators.required);
    (<FormArray>this.signUpForm.get('hobbies')).push(control);
  }

  handleForbiddenUsernames(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return {'isForbidden': true}
    }
    // custom validator must always return null if its valid
    return null;
  }

  handleForbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const email = control.value.toString();
        const emailDomain = email.substring(email.indexOf('@') + 1);
        if (this.forbiddenEmailDomains.findIndex((domain) => domain.toLowerCase() == emailDomain.toLowerCase()) !== -1) {
          resolve({'isEmailForbidden': true});
        } else {
          resolve(null);
        }
      },1500)
    })
  }

  // used to set and patch values into the form
  onLoadDefault() {
    this.signUpForm.patchValue({
      userData: {
        username: 'Amit',
        email: 'amit@test.com'
      },
      gender: 'male'
    })
  }

  onReset() {
    this.signUpForm.reset();
  }
}
