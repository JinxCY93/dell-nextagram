import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  details = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(5)]),
    description: new FormControl("", [Validators.required, Validators.minLength(5)]),
    blogLink: new FormControl("", [Validators.required, Validators.minLength(5)]),
    facebookLink: new FormControl("", [Validators.required, Validators.minLength(5)]),
    eMail: new FormControl("", [Validators.required, Validators.minLength(5)]),
  })
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.details.invalid) {
      this.userService.addDetails(this.details.value)
      console.log(this.details.value)
    }
  }
}
