import { Component, OnInit } from '@angular/core'
import { UserService } from '../user.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  images: string[] = []
  username: string

  name: string = 'null'
  description: string = null
  blogLink: string = null
  facebookLink: string = null
  eMail: string = null

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
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
  }
}
