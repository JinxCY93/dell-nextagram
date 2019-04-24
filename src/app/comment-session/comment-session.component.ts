import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-comment-session',
  templateUrl: './comment-session.component.html',
  styleUrls: ['./comment-session.component.sass']
})
export class CommentSessionComponent implements OnInit {
  comments = []
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getComment().subscribe(comments => {
      this.comments = comments
    })
  }
}
