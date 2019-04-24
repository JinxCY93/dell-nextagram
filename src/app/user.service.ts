import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';

const baseUrl = 'https://insta.nextacademy.com/api/v1'

interface SignupResponse {
  auth_token: string
  message: string
  status: string
  user: BackendUser
}

interface BackendUser {
  id: number
  profile_picture: string
  username: string
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  name = new BehaviorSubject<string>('testingname')
  description = new BehaviorSubject<string>('testing description')
  blogLink = new BehaviorSubject<string>('http://testingbloglink.com/')
  facebookLink = new BehaviorSubject<string>('http://facebooklink.com/')
  eMail = new BehaviorSubject<string>('testing@hotmail.com')

  details = new BehaviorSubject<string[]>([])
  comments = new BehaviorSubject<string[]>([])
  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(`${baseUrl}/users`)
  }

  getUserImages(userId: number) {
    return this.http.get(`${baseUrl}/images?userId=${userId}`)
  }

  submitSignUp(data: Object) {
    this.http.post(`${baseUrl}/users`, data).subscribe(response => {
      console.log(response)
    })
  }

  getName() {
    return this.name
  }
  getDescription() {
    return this.description
  }
  getBlogLink() {
    return this.blogLink
  }
  getFacebookLink() {
    return this.facebookLink
  }
  getEmail() {
    return this.eMail
  }

  addDetails(newDetails) {
    let tempDetails = this.details.getValue()
    tempDetails.push(newDetails)
    this.details.next(tempDetails)
  }

  addComment(newComment) {
    let commentTemp = this.comments.getValue()
    commentTemp.push(newComment)
    this.comments.next(commentTemp)
  }

  getComment() {
    return this.comments
  }

}