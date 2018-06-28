import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css']
})
export class NewsfeedComponent implements OnInit {
status;
result;tag="McClatchy Verified";
  constructor(private http: HttpClient) { }
 
  ngOnInit() {
    this.http.get("http://localhost:3000/getStatus")
    .subscribe(response =>{
      console.log(response);
      this.result = response;
      console.log(this.result);
      this.status = this.result[this.result.length-1].status;
      // this.status = this.tag.concat(" "+this.status);
      console.log(this.status);
      //this.status = response[response.length-1].status;
    })
  }
}
