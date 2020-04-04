import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { stringify } from "querystring";
import { CompileTemplateMetadata } from '@angular/compiler';

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
})
export class HomePage implements OnInit{
  title: string = "Home";
  news: object;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.postRequest().subscribe((news: any) => {
      console.log(news);
      this.news= news.data;
    })
  }

  fire(event) {
      this.postRequest().subscribe((news: any) => {
        console.log(news);
        this.title = news.data[0].title;
        this.news= news.data;
        event.target.complete()
      })
      
  }
  postRequest() {
    let url: string = "https://schranz.io/api/list?entity=news";
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set(
        "APPCMS-TOKEN",
        ""
      );
    return this.http.post(url, {}, {headers, responseType: 'json'});
  }
}
