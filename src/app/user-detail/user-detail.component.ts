import { Component, OnInit } from '@angular/core'
import { UserService } from '../user.service'
import { ActivatedRoute } from '@angular/router'
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  commentSession = new FormGroup({
    comment: new FormControl("", [Validators.minLength(5)])
  })

  comments = []

  images: string[] = []
  username: string
  count: number = 0
  name: string = 'null'
  description: string = 'null'
  blogLink: string = 'null'
  facebookLink: string = 'null'
  eMail: string = 'null'

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.userService.getComment().subscribe(comments => {
      this.comments = comments
    })
    const userId = this.route.snapshot.params.userId
    this.username = this.route.snapshot.params.username
    this.userService.getUserImages(userId).subscribe(response => {
      this.images = response as string[]
    })

    this.userService.getName().subscribe(name => { this.name = name })
    this.userService.getDescription().subscribe(description => { this.description = description })
    this.userService.getBlogLink().subscribe(blogLink => { this.blogLink = blogLink })
    this.userService.getFacebookLink().subscribe(facebookLink => { this.facebookLink = facebookLink })
    this.userService.getEmail().subscribe(eMail => { this.eMail = eMail })

    // this.toDoService.getTasks().subscribe(tasks => {
    //   this.tasks = tasks
    // })

  }

  getLike() {
    this.count = this.count + 1;
  }

  onSubmit() {
    if (this.commentSession.invalid) {
      this.userService.addComment(this.commentSession.value)
    }
  }
}
