import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  subscriptions: Array<string> = ['basic', 'advanced', 'pro'];
  defaultSubscription = 'advanced';
  formSubmitted = false;
  signUpForm: any;

  onSubmit(form: FormGroup) {
    this.formSubmitted = true;
    console.log('form: ', form);
    this.signUpForm = form.value;
  }

}
