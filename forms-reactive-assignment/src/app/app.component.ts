import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  projectForm: FormGroup;

  ngOnInit() {
    // for project name any one of two validators for project name can be used, So need to remove one.
    this.projectForm = new FormGroup({
      projectName: new FormControl(null, [Validators.required, this.handleInvalidProjectName], this.handleInvalidProjectNameAsync),
      mail: new FormControl(null, [Validators.required, Validators.email]),
      status: new FormControl('critical')
    })
  }

  handleInvalidProjectName(control: FormControl): {[s: string]: boolean} {
    if (control.value === 'Test') {
      return {'invalidProjectName': true}
    }
    return null;
  }

  handleInvalidProjectNameAsync(control: FormControl): Promise<any> | Observable<any> {
    return new Promise((resolve, reject) => {
      setInterval(() => {
        if (control.value === 'Test') {
          resolve({'invalidProjectName': true})
        } else {
          resolve(null);
        }
      },1500)
    })
  }

  onSubmit() {
    console.log(this.projectForm);
  }
}
