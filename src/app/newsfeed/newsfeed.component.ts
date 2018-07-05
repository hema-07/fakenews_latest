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
status1;
result;
comments;
prevalue="McClatchy Verified ";
img;

  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.http.get("http://mcclatchyapp.cfapps.io/getStatus")
    .subscribe(response =>{
      this.result = response;
      if(response == ""){
        this.status1="";
        this.img = "assets/white.jpg";
      }
      else {
        console.log(response);
      this.status = this.result[this.result.length-1].status;
      this.comments=this.result[this.result.length-1].comments;
      console.log(this.status);
      console.log(this.comments);
      
      if(status == null){
        this.status1="";
        this.img = "assets/white.jpg";
      }
      else{
        this.status1=this.prevalue.concat(this.status);
        this.img = "assets/infoicon.png";
        console.log("console:"+this.status1);
      }
    }
     })
  }
}