import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f', {static: false}) signUPForm: NgForm;
  defaultSecretQuestion = 'teacher';
  answer = '';
  genders: Array<string> = ['male', 'female'];
  isFormSubmitted = false;
  userFormValues: any = {};

  suggestUserName() {
    const suggestedName = 'Superuser';
    this.signUPForm.form.patchValue({
      userData : {
        username: suggestedName
      }
    })
  }

  onSubmit() {
    this.isFormSubmitted = true;
    this.userFormValues = this.signUPForm.value;
    console.log(this.signUPForm);
    this.signUPForm.reset();
  }
}
